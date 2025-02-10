!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire7bbe,t=n.register;t("fEaOX",function(t,o){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",function(){return I});var i=n("a9eYm"),a=n("dTCkE"),r=n("kqTTL"),l=n("cUbQm"),s=n("2eeTP"),g=n("dhkx0"),u=n("7vTlr");let d=(0,a.lazy)(()=>n("aXEfc")),m=(0,a.lazy)(()=>n("flrI3")),c=(0,a.lazy)(()=>n("7dmbH")),f=(0,a.lazy)(()=>n("7LrKv")),p=(0,a.lazy)(()=>n("aPtVP")),b=(0,a.lazy)(()=>n("atjVx"));function I(){let{estate:e}=(0,a.useContext)(r.ObjectPageContext),[n,t]=(0,a.useState)(!1),[o,I]=(0,a.useState)(!1),[v,x]=(0,a.useState)(!1),[y,h]=(0,a.useState)(!1),[k,T]=(0,a.useState)(!1),[j,A]=(0,a.useState)(!1),[S,B]=(0,a.useState)(!1),[P,F]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(e)switch(e.estateTypeAsString===l.EstateType.House?x(!0):e.estateTypeAsString===l.EstateType.Cooperative?t(!0):e.estateTypeAsString===l.EstateType.Plot?A(!0):e.estateTypeAsString===l.EstateType.Project?h(!0):e.estateTypeAsString===l.EstateType.Commercial?T(!0):e.estateTypeAsString===l.EstateType.Agriculture?B(!0):e.estateTypeAsString===l.EstateType.Cottage?F(!0):x(!0),e.propertyType){case"Bostadsrättsparhus":case"Bostadsrättradhus":case"Bostadsrättsvilla":case"Bostadsrättsfritidshus":case"Bostadsrättslägenhet":case"Bostadsrättsradhus":case"Andel i Bostadsförening":t(!0);break;case"Ägarlägenhet":I(!0)}},[e]);let O=[n&&(0,i.jsx)(g.default,{},"cooperative"),v&&(0,i.jsx)(u.default,{},"house"),P&&(0,i.jsx)(d,{},"cottage"),o&&(0,i.jsx)(b,{},"ownedApartment"),y&&(0,i.jsx)(p,{},"project"),k&&(0,i.jsx)(f,{},"commercial"),j&&(0,i.jsx)(c,{},"plot"),S&&(0,i.jsx)(m,{},"farm")];return n||v||o||y||k||j||S||P?(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(s.default,{}),children:O}):(0,i.jsx)(s.default,{})}}),t("2eeTP",function(t,o){e(t.exports,"default",function(){return s});var i=n("a9eYm"),a=n("dTCkE"),r=n("elOuk"),l=n("kqTTL");function s(){let{isBigScreen:e}=(0,a.useContext)(l.ObjectPageContext);return!1===e?(0,i.jsx)("div",{className:"bg-white z-[99] absolute top-0 left-0 w-full h-[80vh]"}):(0,i.jsx)("div",{className:"grid grid-cols-2 gap-4 px-3 mb-4 lg:grid-cols-7 mt-4 lg:mt-6",children:Array.from({length:6}).map((e,n)=>(0,i.jsx)(r.default,{},n))})}}),t("elOuk",function(t,o){e(t.exports,"default",function(){return a});var i=n("a9eYm");function a(){return(0,i.jsx)("div",{className:"bg-grey50 rounded-md h-[60px] w-full lg:mb-4"})}}),t("dhkx0",function(t,o){e(t.exports,"default",function(){return d});var i=n("a9eYm"),a=n("dTCkE"),r=n("dfLVZ"),l=n("kqTTL"),s=n("cUbQm"),g=n("2eeTP"),u=n("hPa9t"),d=()=>{let{estate:e}=(0,a.useContext)(l.ObjectPageContext),[n,t]=(0,a.useState)(""),[o,d]=(0,a.useState)(""),[m,c]=(0,a.useState)(""),[f,p]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{p(!1),e?.buildingInfo?.livingSpace&&e?.buildingInfo?.otherSpace?(t(u.Building.LivingAndOtherArea),d(e?.buildingInfo?.livingSpace.toString().replace(".",",")+" + "+e?.buildingInfo?.otherSpace.toString().replace(".",","))):e?.buildingInfo?.livingSpace?(t(u.Building.LivingSpace),d(e?.buildingInfo?.livingSpace.toString().replace(".",","))):e?.buildingInfo?.otherSpace&&(t(u.Building.OtherArea),d(e?.buildingInfo?.otherSpace.toString().replace(".",","))),e?.buildingInfo?.floor&&e?.buildingInfo?.totalNumberOfFloors&&e?.buildingInfo?.totalNumberOfFloors!=0?c(e?.buildingInfo?.floor+" av "+e?.buildingInfo?.totalNumberOfFloors):e?.buildingInfo?.floor&&c(e?.buildingInfo?.floor.toString()),p(!0)},[e?.buildingInfo]),f)?(0,i.jsxs)("div",{className:"flex flex-wrap lg:flex-row lg:flex-auto mt-4 lg:mt-6 px-3 lg:px-7 xxl:px-4 quickInfo font-ic max-w-7xl mx-auto",children:[(e?.buildingInfo?.livingSpace||e?.buildingInfo?.otherSpace)&&(0,i.jsx)(r.QuickInfoItem,{comment:e?.buildingInfo?.areaSourceComment?e?.buildingInfo?.areaSourceComment:"",headline:n,value:o+" m²",iconUrl:"/Images/Icons/objectPage/livingArea.svg"}),e?.operation?.monthlyFee&&(0,i.jsx)(r.QuickInfoItem,{comment:e?.operation?.commentaryToMonthlyFee?e?.operation?.commentaryToMonthlyFee:"",headline:u.General.Fee,value:e?.operation?.monthlyFee.toLocaleString("sv-SE")+" kr",iconUrl:"/Images/Icons/objectPage/wallet.svg"}),e?.buildingInfo?.floor?(0,i.jsx)(r.QuickInfoItem,{headline:u.Building.Floor,value:m,comment:e?.buildingInfo?.floorCommentary,iconUrl:"/Images/Icons/objectPage/floor.svg"}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)(r.QuickInfoItem,{headline:u.Building.Elevator,value:e?.buildingInfo?.elevator?u.General.Yes:u.General.No,iconUrl:"/Images/Icons/objectPage/elevator.svg"}),e?.buildingInfo?.buildingYear&&(0,i.jsx)(r.QuickInfoItem,{headline:u.QuickInfo.BuildingYear,comment:e?.buildingInfo?.commentaryForBuildingYear,value:e?.buildingInfo?.buildingYear,iconUrl:"/Images/Icons/objectPage/buildingYear.svg"}),!e?.buildingInfo?.buildingYear&&e?.associationInfo?.buildingYear&&(0,i.jsx)(r.QuickInfoItem,{headline:u.QuickInfo.BuildingYear,comment:e?.associationInfo?.commentaryForBuildingYear,value:e?.associationInfo?.buildingYear,iconUrl:"/Images/Icons/objectPage/buildingYear.svg"}),(0,i.jsx)(r.QuickInfoItem,{headline:u.QuickInfo.Type,value:s.EstateType.Cooperative,iconUrl:"/Images/Icons/objectPage/type.svg"}),e?.dates?.possibleAccessDate&&(0,i.jsx)(r.QuickInfoItem,{headline:u.General.AccessDate,value:e?.dates?.possibleAccessDate,iconUrl:"/Images/Icons/objectPage/access.svg"})]}):(0,i.jsx)(g.default,{})}}),t("dfLVZ",function(t,o){e(t.exports,"QuickInfoItem",function(){return r});var i=n("a9eYm"),a=n("dTCkE");let r=({value:e,headline:n,iconUrl:t,comment:o})=>{let[r,l]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"object-info relative inline-block w-1/2 mb-4 min-h-[60px] lg:h-[75px]",children:[(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("h5",{className:"info-heading mb-2",children:n}),o&&(0,i.jsx)("button",{"aria-label":`Se kommentar f\xf6r ${n}`,className:"p-1 pb-0 transform translate-y-3-",onClick:()=>{l(!r)},children:(0,i.jsx)("img",{width:"20",height:"20",className:"w-5 top-0 right-0 cursor-pointer",src:"/Images/Icons/objectPage/information.svg",alt:"Info snabbfakta ikon"})})]}),(0,i.jsxs)("span",{className:"info-item items-start mt-[2px] leading-[120%]",children:[(0,i.jsx)("img",{width:"24",height:"24",src:t,alt:`Ikon ${n}`}),e]}),r&&(0,i.jsx)("div",{className:"max-w-[48vw] leading-[140%] z-10 rounded-md bg-blue300 p-2 absolute w-56 bottom-0 text-white transform left-0 xxl:left-1/2 xxl:translate-x-1/2- translate-y-1/1",children:(0,i.jsx)("span",{children:o})})]})}}),t("hPa9t",function(n,t){var o,i,a,r,l,s,g,u,d,m,c,f,p,b,I,v,x,y,h,k;e(n.exports,"Association",function(){return o}),e(n.exports,"General",function(){return i}),e(n.exports,"Building",function(){return a}),e(n.exports,"QuickInfo",function(){return r}),e(n.exports,"EnergyDeclaration",function(){return l}),e(n.exports,"Location",function(){return s}),e(n.exports,"Economy",function(){return g}),e(n.exports,"Area",function(){return u}),e(n.exports,"ObjectTable",function(){return d}),e(n.exports,"ObjectTableParams",function(){return m}),(c=o||(o={})).AboutAssociation="Om föreningen",c.NumberOfApartments="Antal lägenheter",c.NumberOfPremises="Antal lokaler",c.PlotOwner="Äger föreningen marken",c.EconomyAssociation="Föreningens ekonomi",c.RenovationsAssociation="Föreningens planerade och utförda renoveringar",c.GeneralAreas="Gemensamma utrymmen",c.Yard="Gårdsplats",c.Website="Föreningens hemsida",c.LegalPerson="Tillåter föreningen juridisk person som köpare",c.SharedOwnership="Tillåter föreningen delat ägande",c.AssociationType="Äkta/Oäkta förening",c.Real="Äkta förening",c.NotReal="Oäkta förening",c.Type="Föreningsform",c.OrganisationNumber="Föreningens organisationsnummer",c.Name="Föreningens namn",c.Association="Föreningen",(f=i||(i={})).Parking="Parkering",f.GeneralInfo="Allmän information",f.WayDescription="Vägbeskrivning",f.Other="Övrigt",f.Fee="Avgift",f.Yes="Ja",f.No="Nej",f.DontKnow="Vet ej",f.Information="Information",f.ObjectDescription="Objektsbeskrivning",f.TypeCode="Typkod",f.BuildingType="Byggnadstyp",f.NumberOfRooms="Antal rum",f.AccessDate="Tillträde",f.RoomDescription="Rumsbeskrivning",f.EconomyBuildings="Ekonomibyggnader",f.AboutTheEstate="Allmänt om fastigheten",f.CommunityFacities="Servitut och andra rättigheter",f.CompilationAreas="Summa yta",f.AreaSource="Areakälla",f.AreaSourceComment="Kommentar till areakälla",f.Description="Beskrivning",f.AboutThePlot="Om tomten",f.AboutTheProperty="Om fastigheten",f.AboutTheHome="Om bostaden",f.DocumentAndLinks="Dokument & Länkar",f.Land="Mark",(p=a||(a={})).BuildingWay="Byggnadssätt",p.Heating="Uppvärmning",p.Ventilation="Ventilation",p.Room="Rum",p.Insurance="Försäkring",p.BuildingYear="Byggår",p.BuildingYearComment="Kommentar byggår",p.Windows="Fönster",p.Broadband="Bredband",p.TV="TV",p.TvAndBroadband="TV & Internet",p.Building="Byggnad",p.OtherAboutBuilding="Övrigt om byggnad",p.OtherAboutPlot="Övrigt om tomt",p.PlanRegulations="Planbestämmelser",p.BalconyPatio="Uteplats/balkong",p.WaterAndDrain="Vatten & avlopp",p.Plot="Tomt",p.Patio="Uteplats",p.Roof="Tak",p.Facade="Fasad",p.Beam="Bjälklag",p.Foundation="Grundläggning",p.LivingSpace="Boarea",p.WarehouseArea="Area",p.OtherArea="Biarea",p.LivingAndOtherArea="Bo-/biarea",p.PlotArea="Tomtarea",p.LandArea="Markareal",p.Renovations="Renoveringar",p.Frame="Stomme",p.AllYear="Vinterbonat",p.Elevator="Hiss",p.Floor="Våning",p.PropertyUnitDesignation="Fastighetsbeteckning",p.PropertyType="Boendeform",p.ApartmentNo="Lägenhetsnummer (Skatteverket)",p.ApartmentNoAssociation="Lägenhetsnummer (Föreningen)",p.ParticipationInAssociation="Andel i föreningen",p.ParticipationOffAnnualFee="Andel av årsavgift",p.ShareComment="Kommentar till andelstal",p.OtherBuildings="Övriga byggnader/utrymmen",p.Alignment="Inriktning",p.DisposalForm="Upplåtelseform",p.SquereMeterype="Mark & utrymmen",(b=r||(r={})).Room="Rum",b.BuildingYear="Byggår",b.AllYear="Vinterbonat",b.Type="Typ",b.PlotArea="Tomtarea",b.LivingSpace="Boarea",b.OtherArea="Biarea",b.LivingAndOtherArea="Bo-/biarea",b.Alignment="Inriktning",b.PropertyUnitDesignation="Fastighetsbet.",b.TotalArea="Totalareal",b.BuildingNo="Bostadsbyggnad",b.Tenure="Upplåtelseform",b.NumberOfEstates="Antal bostäder",b.ObjectType="Objekttyp",b.LandArea="Markareal",b.LocalArea="Lokalarea",b.RentArea="Uthyrbar area",b.NumberOfPremises="Antal lokaler",(I=l||(l={})).NotMade="Ej utförd",I.Ordered="Beställd",I.Done="Utförd",I.EnergyDeclaration="Energideklaration",I.EnergyDeclarationNotMade="Energideklaration är inte utförd.",I.EnergyDeclarationNotNeeded="Energideklaration behövs ej.",I.EnergyDeclarationOrdered="Energideklaration är beställd.",I.EnergyDeclarationDone="Energideklaration är utförd",I.NotNeeded="Behövs ej",I.EnergyClass="Energiklass",I.EnergyConsumption="Energiprestanda, specifik energianvändning",I.PrimaryEnergyNumber="Energiprestanda primärenergital",(v=s||(s={})).Address="Adress",v.Municipality="Kommun",v.Area="Område",(x=g||(g={})).Economy="Ekonomi",x.LegelPersonAllowed="Juridisk person kan godkännas",x.Price="Pris",x.MonthlyFee="Månadsavgift",x.MonthlyFeeComment="Kommentar till månadsavgift",x.NoPrice="Pris ej angivet",x.CommunityFee="Årsavgift till samfällighet",x.CommunityFeeExplanation="Vad som ingår i årsavgiften",x.CommentAnnualFee="Kommentar till årsavgiften",x.TransferFee="Överlåtelseavgift",x.TransferFeePaidBy="Överlåtelseavgift betalas av",x.PropertyTax="Fastighetsskatt",x.BuildingValue="Taxeringsvärde för byggnad",x.LandValue="Taxeringsvärde för mark",x.TaxYear="Taxeringsår",x.TaxValue="Taxeringsvärde",x.Mortage="Pantsättning",x.NoMortage="Fastigheten är inte intecknad.",x.MortageCooperative="Bostadsrätten är pantsatt.",x.NoMortageCooperative="Bostadsrätten är inte pantsatt.",x.MortageFee="Pantsättningsavgift",x.LeaseFee="Arrende",x.LeaseUntil="Arrende gäller t.o.m",x.LeaseHoldFee="Tomträttsavgäld",x.LeaseHoldUntil="Tomträttsavgäld gäller t.o.m",x.LeasePeriod="Avgäldsperiod",x.RepairFund="Reparationsfond",x.RentIncomes="Summa hyresintäkter",x.IndirectDebt="Bostadens indirekta nettoskuldsättning",x.IndirectDebtComment="Kommentar till nettoskuldsättning",x.OperationComment="Kommentar driftkostnad",x.PersonsInHouseHold="Personer i hushållet",x.ElectricityCompany="Nätbolag",x.ElectricityDistributor="Elleverantör",x.PowerConsumption="Elförbrukning",(y=u||(u={})).GeneralAbout="Allmänt om",y.Communication="Kommunikation",y.Services="Tjänster i området",y.OtherAboutArea="Övrigt om området",(h=d||(d={})).Cooperatives="Bostadsrätter",h.House="Friliggande villa",h.Houses="Friliggande villor",h.Cottage="Fritidshus",h.Plots="Tomter",h.Status="Status",h.Number="Nummer",h.PlotSize="Tomtarea",h.Type="Typ av bostad",h.PairHouse="Parhus",h.ObjectPicker="Bostadsväljare",(k=m||(m={})).Cooperatives="housingCooperatives",k.CoopApartment="Bostadsrättslägenhet",k.Houses="houses",k.Address="address",k.PlotSize="plotSize",k.Url="url",k.TotalNumberFloors="totalNumberFloors",k.Type="type",k.ApartmentNumber="apartmentNumber",k.Floor="floor",k.MonthlyFee="monthlyFee",k.LivingSpace="livingSpace",k.NumberOfRooms="numberOfRooms",k.Price="price",k.Status="status",k.ForSale="Till salu",k.Booked="Bokad/Reserverad",k.Sold="Såld"}),t("7vTlr",function(t,o){e(t.exports,"default",function(){return u});var i=n("a9eYm"),a=n("dTCkE"),r=n("dfLVZ"),l=n("kqTTL"),s=n("2eeTP"),g=n("hPa9t"),u=()=>{let{estate:e}=(0,a.useContext)(l.ObjectPageContext),[n,t]=(0,a.useState)(""),[o,u]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[c,f]=(0,a.useState)(""),[p,b]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{b(!1),e?.buildingInfo?.numberOfRooms&&e?.buildingInfo?.numberOfBedroom&&e?.buildingInfo?.maxNumberOfBedroom&&e?.buildingInfo?.numberOfBedroom!=e?.buildingInfo?.maxNumberOfBedroom?t(e?.buildingInfo?.numberOfRooms+" rum, varav "+e?.buildingInfo?.numberOfBedroom+"-"+e?.buildingInfo?.maxNumberOfBedroom+" sovrum"):e?.buildingInfo?.numberOfRooms&&e?.buildingInfo?.numberOfBedroom?t(e?.buildingInfo?.numberOfRooms+" rum, varav "+e?.buildingInfo?.numberOfBedroom+" sovrum"):e?.buildingInfo?.numberOfRooms&&t(e?.buildingInfo?.numberOfRooms.toString()+" rum"),e?.buildingInfo?.livingSpace&&e?.buildingInfo?.otherSpace?(u(g.QuickInfo.LivingAndOtherArea),m(e?.buildingInfo?.livingSpace.toString().replace(".",",")+" + "+e?.buildingInfo?.otherSpace.toString().replace(".",","))):e?.buildingInfo?.livingSpace?(u(g.QuickInfo.LivingSpace),m(e?.buildingInfo?.livingSpace.toString().replace(".",","))):e?.buildingInfo?.otherSpace&&(u(g.QuickInfo.OtherArea),m(e?.buildingInfo?.otherSpace.toString().replace(".",","))),(e?.propertyType||e?.buildingInfo?.buildingType)&&(e?.buildingInfo?.buildingType&&e?.propertyType?f(e?.propertyType+", "+e?.buildingInfo?.buildingType):e?.propertyType?f(e?.propertyType):e?.buildingInfo?.buildingType&&f(e?.buildingInfo?.buildingType)),b(!0)},[e?.buildingInfo,e?.propertyType]),p)?(0,i.jsxs)("div",{className:"flex flex-wrap lg:flex-row lg:flex-auto mt-4 lg:mt-6 px-3 lg:px-7 xxl:px-4 quickInfo font-ic max-w-7xl mx-auto min-h-[80px] pb-2",children:[e?.buildingInfo?.livingSpace||e?.buildingInfo?.otherSpace?(0,i.jsx)(r.QuickInfoItem,{headline:o,comment:e?.buildingInfo?.areaSourceComment,value:d+" m²",iconUrl:"/Images/Icons/objectPage/livingArea.svg"}):(0,i.jsx)(i.Fragment,{}),e?.buildingInfo?.numberOfRooms?(0,i.jsx)(r.QuickInfoItem,{headline:g.Building.Room,value:n,iconUrl:"/Images/Icons/objectPage/room.svg"}):(0,i.jsx)(i.Fragment,{}),e?.buildingInfo?.plotSize?(0,i.jsx)(r.QuickInfoItem,{headline:g.QuickInfo.PlotArea,value:e?.buildingInfo?.plotSize.toLocaleString("SV-se")+" m²",iconUrl:"/Images/Icons/objectPage/plotArea.svg"}):(0,i.jsx)(i.Fragment,{}),e?.buildingInfo?.buildingYear?(0,i.jsx)(r.QuickInfoItem,{headline:g.QuickInfo.BuildingYear,value:e?.buildingInfo?.buildingYear,comment:e?.buildingInfo?.commentaryForBuildingYear,iconUrl:"/Images/Icons/objectPage/buildingYear.svg"}):(0,i.jsx)(i.Fragment,{}),e?.buildingInfo?.buildingType||e?.propertyType?(0,i.jsx)(r.QuickInfoItem,{headline:g.QuickInfo.Type,value:c,iconUrl:"/Images/Icons/objectPage/type.svg"}):(0,i.jsx)(i.Fragment,{}),e?.dates?.possibleAccessDate?(0,i.jsx)(r.QuickInfoItem,{headline:g.General.AccessDate,value:e?.dates?.possibleAccessDate,iconUrl:"/Images/Icons/objectPage/access.svg"}):(0,i.jsx)(i.Fragment,{})]}):(0,i.jsx)(s.default,{})}}),t("aXEfc",function(e,t){e.exports=n("fj9RB")(n("i55FY").resolve("eS21r")).then(()=>n("6lji1"))}),t("flrI3",function(e,t){e.exports=n("fj9RB")(n("i55FY").resolve("7vxCE")).then(()=>n("47Iat"))}),t("7dmbH",function(e,t){e.exports=n("fj9RB")(n("i55FY").resolve("47sFu")).then(()=>n("lsMtb"))}),t("7LrKv",function(e,t){e.exports=n("fj9RB")(n("i55FY").resolve("igqwz")).then(()=>n("9aoKj"))}),t("aPtVP",function(e,t){e.exports=n("fj9RB")(n("i55FY").resolve("4DhB5")).then(()=>n("dwFw2"))}),t("atjVx",function(e,t){e.exports=n("fj9RB")(n("i55FY").resolve("jEIuI")).then(()=>n("4kaeV"))})}();
//# sourceMappingURL=QuickInfo.4a1e9122.js.map
