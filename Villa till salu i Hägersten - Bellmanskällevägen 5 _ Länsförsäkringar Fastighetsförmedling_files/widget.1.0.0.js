/* eslint-disable no-underscore-dangle */
(function () {
  // Initialize global variables
  window.lifeInsideOrgIds = window.lifeInsideOrgIds || [];
  window.widgetInitialized = window.widgetInitialized || false;
  window.WidgetWrapper = window.WidgetWrapper || {};

  const lifeInsideFrontend = 'https://app.lifeinside.io';
  const lifeInsideBackend = 'https://backend.lifeinside.io';

  // Check if we're in dev mode
  function isDevMode() {
    return (
      window.location.search.includes('lifeinsidedev=true') ||
      localStorage.getItem('lifeInsideDevMode') === 'true' ||
      localStorage.getItem('lifeInsideWidgetLoaderDevMode') === 'true'
    );
  }

  // Log in dev mode
  function devLog(message, ...optionalParams) {
    if (isDevMode()) {
      console.log(`[DEV MODE] ${message}`, ...optionalParams);
    }
  }

  devLog('Widget loader script loaded');
  devLog('This is loaded from CloudFront');

  // Check if the widget script is already loaded
  function isMyScriptLoaded(url) {
    const scripts = document.getElementsByTagName('script');
    return Array.from(scripts).some((s) => s?.src?.includes(url));
  }

  // Check if the widget is already mounted
  function isWidgetMounted() {
    return window.widgetInitialized;
  }

  // Lock mechanism to prevent race conditions
  class Lock {
    constructor() {
      this._locked = false;
      this._waiting = [];
    }

    acquire() {
      const unlock = () => {
        let nextResolve;
        if (this._waiting.length > 0) {
          nextResolve = this._waiting.shift();
          nextResolve(unlock);
        } else {
          this._locked = false;
        }
      };

      if (this._locked) {
        return new Promise((resolve) => {
          this._waiting.push(resolve);
        });
      }
      this._locked = true;
      return Promise.resolve(unlock);
    }
  }

  const widgetLock = new Lock();

  // Flags to control script loading and mounting
  let widgetScriptLoaded = false;
  let widgetMountPromise = null;

  // Helper delay function to avoid returning directly from the Promise executor
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // Unmount the widget if it's mounted
  async function unmountWidget() {
    devLog('Starting widget unmount process...');
    const release = await widgetLock.acquire();
    devLog('Acquired lock for unmounting widget');

    try {
      if (isWidgetMounted()) {
        if (window.LIWidgetWrapper && typeof window.LIWidgetWrapper.unmount === 'function') {
          devLog('Unmounting widget...');
          const unmountResult = window.LIWidgetWrapper.unmount();

          // Await if unmount returns a Promise
          if (unmountResult instanceof Promise) {
            await unmountResult;
          } else {
            await delay(100); // Wait for 100ms
          }

          await delay(100); // Wait for 100ms

          devLog('Widget unmounted successfully');
        } else {
          devLog('LIWidgetWrapper or unmount function not available, proceeding to reset state.');
        }
        window.widgetInitialized = false;
        widgetMountPromise = null;

        // Dispose of Video.js player instances if any
        if (window.videojs && window.videojs.players) {
          devLog('Disposing of Video.js players');
          Object.entries(window.videojs.players).forEach(([playerId, player]) => {
            if (player && typeof player.dispose === 'function') {
              player.dispose();
              devLog(`Disposed Video.js player: ${playerId}`);
            }
          });
          window.videojs.players = {}; // Reset players object
        }
      } else {
        devLog('Widget is not mounted, skipping unmount.');
        window.widgetInitialized = false;
        widgetMountPromise = null;
      }
    } catch (e) {
      devLog('Failed to unmount widget', e);
      window.widgetInitialized = false;
      widgetMountPromise = null;
    } finally {
      devLog('Releasing lock after unmounting widget');
      release();
    }
  }

  // Function to mount the widget
  async function mountWidget(settings) {
    if (!widgetMountPromise) {
      widgetMountPromise = new Promise((resolve, reject) => {
        try {
          if (window.LIWidgetWrapper && typeof window.LIWidgetWrapper.mount === 'function') {
            if (isWidgetMounted()) {
              devLog('Widget already initialized after script load, skipping mount.');
              resolve();
            } else {
              devLog('Mounting widget after script load...');
              if (window.lifeInsideOrgIds.length > 1) {
                devLog('Mounting widget with multiple org IDs:', window.lifeInsideOrgIds);
                window.LIWidgetWrapper.mount({
                  ...settings,
                  id: null,
                  ids: window.lifeInsideOrgIds,
                });
              } else {
                devLog('Mounting widget with a single org ID:', settings.id);
                window.LIWidgetWrapper.mount(settings);
              }
              window.widgetInitialized = true;
              devLog('Widget mounted successfully');
              resolve();
            }
          } else {
            devLog('Waiting for LIWidgetWrapper to be available...');
            const interval = setInterval(() => {
              if (window.LIWidgetWrapper && typeof window.LIWidgetWrapper.mount === 'function') {
                clearInterval(interval);
                if (!isWidgetMounted()) {
                  devLog('Mounting widget after LIWidgetWrapper is available...');
                  if (window.lifeInsideOrgIds.length > 1) {
                    devLog('Mounting widget with multiple org IDs:', window.lifeInsideOrgIds);
                    window.LIWidgetWrapper.mount({
                      ...settings,
                      id: null,
                      ids: window.lifeInsideOrgIds,
                    });
                  } else {
                    devLog('Mounting widget with a single org ID:', settings.id);
                    window.LIWidgetWrapper.mount(settings);
                  }
                  window.widgetInitialized = true;
                  devLog('Widget mounted successfully');
                } else {
                  devLog('Widget already initialized, skipping mount.');
                }
                resolve();
              }
            }, 50);
          }
        } catch (e) {
          devLog('Failed to mount widget', e);
          reject(e);
        }
      });
    } else {
      devLog('Widget mount already in progress or completed, awaiting promise.');
    }
    return widgetMountPromise;
  }

  // Load and mount the widget
  async function loadAndMountWidget(settings) {
    devLog('Starting widget load and mount process with settings');
    const release = await widgetLock.acquire();
    devLog('Acquired lock for loading and mounting widget');

    try {
      if (isWidgetMounted()) {
        devLog('Widget already initialized, skipping mount.');
        release(); // Release the lock early
        return;
      }

      if (!widgetScriptLoaded) {
        widgetScriptLoaded = true; // Set to true immediately to prevent duplicate loads

        const { body } = document;
        const { head } = document;

        devLog('Fetching widget version for settings:', settings);

        const response = await fetch(`${lifeInsideBackend}/get-widget-version/${settings.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('Content-Type');
        devLog('Widget version fetch response content type:', contentType);

        let fileBlob;
        if (contentType && contentType.includes('application/json')) {
          fileBlob = await response.json();
        } else {
          fileBlob = await response.blob();
        }

        const widgetScript = document.createElement('script');
        widgetScript.type = 'text/javascript';

        widgetScript.onload = async function () {
          devLog('Widget script loaded');
          await mountWidget(settings);
          release(); // Release the lock after mounting
        };

        widgetScript.onerror = function (e) {
          devLog('Failed to load widget script', e);
          widgetScriptLoaded = false; // Reset the flag on error
          release(); // Release the lock even on error
        };

        if (fileBlob?.url) {
          widgetScript.src = fileBlob.url;
          devLog('Using widget script URL:', fileBlob.url);
        } else if (fileBlob?.version) {
          widgetScript.src = `${lifeInsideFrontend}/widget.${fileBlob.version}.js`;
          devLog('Using widget script version:', fileBlob.version);
        } else {
          const blobURL = URL.createObjectURL(fileBlob);
          widgetScript.src = blobURL;
          devLog('Using widget script Blob URL');
        }

        if (!isMyScriptLoaded(widgetScript.src)) {
          (body || head).appendChild(widgetScript);
          devLog('Appended widget script to document');
        } else {
          devLog(`Widget script already loaded  : ${widgetScript.src}`);
          widgetScriptLoaded = true;
          await mountWidget(settings);
          release(); // Release the lock after mounting
        }
      } else {
        devLog('Widget script already loaded, proceeding to mount');
        await mountWidget(settings);
        release(); // Release the lock after mounting
      }
    } catch (error) {
      devLog('Failed to load and mount widget', error);
      widgetScriptLoaded = false; // Reset the flag on error
      release(); // Release the lock in case of error
    }
  }

  // Update the mount function to call loadAndMountWidget directly
  window.WidgetWrapper.mount = async function (settings) {
    devLog('Starting widget mount process with settings:', settings);

    if (settings.id && !window.lifeInsideOrgIds.includes(settings.id)) {
      window.lifeInsideOrgIds.push(settings.id);
      devLog('Added new org ID to lifeInsideOrgIds:', window.lifeInsideOrgIds);
    }

    await loadAndMountWidget(settings);
  };

  // Functions to detect URL changes
  function getSearchParams() {
    return window.location.search;
  }

  function detectUrlChange(callback) {
    let currentUrl = window.location.href;

    setInterval(() => {
      const newUrl = window.location.href;
      if (currentUrl !== newUrl) {
        currentUrl = newUrl;
        devLog('URL changed to:', newUrl);
        callback();
      }
    }, 500);
  }

  function detectHashChange(callback) {
    window.addEventListener('hashchange', () => {
      devLog('Hash URL changed to:', window.location.href);
      callback();
    });
  }

  function detectSearchParamChange(callback) {
    let currentSearchParams = getSearchParams();

    setInterval(() => {
      const newSearchParams = getSearchParams();
      if (currentSearchParams !== newSearchParams) {
        currentSearchParams = newSearchParams;
        devLog('Search parameters changed to:', newSearchParams);
        callback();
      }
    }, 500);
  }

  // Debounce function to prevent rapid firing
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Event handlers that re-initialize the widget on URL changes
  const reinitializeWidget = debounce(async () => {
    devLog('Re-initializing widget due to URL change');
    await unmountWidget();
    await delay(100); // Wait for 100ms
    await loadAndMountWidget({
      id: window.lifeInsideOrgIds.length > 1 ? null : window.lifeInsideOrgIds[0],
      ids: window.lifeInsideOrgIds.length > 1 ? window.lifeInsideOrgIds : undefined,
    });
  }, 100);

  detectUrlChange(reinitializeWidget);
  detectHashChange(reinitializeWidget);
  detectSearchParamChange(reinitializeWidget);

  window.addEventListener('popstate', reinitializeWidget);
})();
