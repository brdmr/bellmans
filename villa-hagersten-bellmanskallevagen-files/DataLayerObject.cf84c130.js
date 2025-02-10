var e;(0,(e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire7bbe).register)("iPpEJ",function(n,i){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(n.exports,"default",{get:function(){return s},set:void 0,enumerable:!0,configurable:!0});var o=e("a9eYm"),a=e("dTCkE"),r=e("kqTTL"),t=e("5jxwZ"),d=e("cUbQm"),s=()=>{let{estate:e,showErrorObjectPage:n}=(0,a.useContext)(r.ObjectPageContext),[i,s]=(0,a.useState)();return(0,a.useEffect)(()=>{e?.estateTypeAsString==d.EstateType.Project?s(!0):e?.estateTypeAsString!=void 0&&s(!1)},[e?.estateTypeAsString]),(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)(a.Suspense,{}),!1===i&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.HelmetProvider,{children:(0,o.jsx)(t.Helmet,{children:(0,o.jsx)("script",{children:`
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'l\xe4n': '${e?.addressInfo?.county?e?.addressInfo?.county:""}',
                    'bobutik': '${e?.officeInfo?.name?e?.officeInfo?.name:""}',
                    'omfattning': 'Objekt',
                    'nyproduktion': '${e?.projectId?"1":"0"}',
                    'projektnamn': '${e?.projectName?e?.projectName:"n/a"}',
                    'kommun': '${e?.addressInfo?.municipality?e.addressInfo.municipality:""}',
                    'f\xf6rspr\xe5ng': '${e.isHeadStart?"1":"0"}',
                    'omr\xe5de': '${e?.addressInfo?.area?e.addressInfo.area:"n/a"}',
                    'boendeform':'${e?.propertyType?e.propertyType:""}',
                    'bostadstyp': '${e?.buildingInfo?.buildingType?e?.buildingInfo?.buildingType:""}',
                    'bygg\xe5r': '${e?.buildingInfo?.buildingYear?e?.buildingInfo?.buildingYear:""}',
                    'boarea':'${e?.buildingInfo?.livingSpace?e?.buildingInfo?.livingSpace:""}',
                    'v\xe5ning': '${e?.buildingInfo?.floor?e?.buildingInfo?.floor:"n/a"}',
                    'rum': '${e?.buildingInfo?.numberOfRooms?e?.buildingInfo?.numberOfRooms:""}',
                    'avgift': '${e?.operation?.monthlyFee?e?.operation?.monthlyFee:"n/a"}',
                    'utg\xe5ngspris': '${e?.priceInfo?.startPrice?e?.priceInfo?.startPrice:""}'
                  })`})})})}),!0===i&&(0,o.jsx)(t.HelmetProvider,{children:(0,o.jsx)(t.Helmet,{children:(0,o.jsx)("script",{children:`
                   window.dataLayer = window.dataLayer || [];
                   window.dataLayer.push({
                    'l\xe4n': '${e?.addressInfo?.county?e?.addressInfo?.county:""}',
                    'bobutik': '${e?.officeInfo?.name?e?.officeInfo?.name:""}',
                       'omfattning': 'Projekt',
                       'nyproduktion': '1',
                       'projektnamn': '${e?.projectName?e?.projectName:"n/a"}',
                       'kommun': '${e?.addressInfo?.municipality?e.addressInfo.municipality:""}',
                       'f\xf6rspr\xe5ng': '${e?.isHeadStart?"1":"0"}',
                       'omr\xe5de': '${e?.addressInfo?.area?e.addressInfo.area:"n/a"}',
                       'boendeform':'${e?.propertyType?e.propertyType:""}',
                       'bostadstyp': '${e?.buildingInfo?.buildingType?e?.buildingInfo?.buildingType:""}',
                       'boarea':'${e?.livingSpaceRange?.minValue+" - "+e?.livingSpaceRange?.maxValue}',
                       'status': '${e?.status?.name?e?.status?.name:""}',
                       'tilltr\xe4de':'${e?.dates?.possibleAccessDate?e?.dates?.possibleAccessDate:""}',
                       'bost\xe4der':'${e?.numberOfObjects?e?.numberOfObjects:""}',
                       'prisintervall':'${e?.priceInfo?.priceMin+" - "+e?.priceInfo?.priceMax}',
                       'rum': '${e?.roomRange?.minValue+" - "+e?.roomRange?.maxValue}'
                      })`})})})]})}});
//# sourceMappingURL=DataLayerObject.cf84c130.js.map
