const {  getAcronym,extractNumbers,getUniqueColors,getTotalAmount, filterAndSum,cleanMessage,
    getElectronicsProducts,formatUserProfiles,addTenToOddNumbers,getTeamRoster,toCamelCase,
    getAverageHighScores,formatWords,adjustInventory,getLongNames,getWordsWithLength,getDiscountedPrices
    ,formatAddresses,calculateDividedSum,getActiveIds,getUsernames } = require("./demo2.cjs");


const reult = getAcronym("Assalom alekum ");
console.log(reult);    

const reult1 = extractNumbers("12");
console.log(reult1);

const reult2 = getUniqueColors("red");
console.log(reult2);

const reult3 = getTotalAmount([{amount:10},{date:"2025-11-13"}]);
console.log(reult3);

const reult4 = cleanMessage ("   hello   world   javascript   ")
console.log(reult4);

const reult5 = getElectronicsProducts ( {name: "Laptop", tags: "electronics,computers"} )
console.log(reult5);

const reult6 = formatUserProfiles ( ["Ali1991", "Gulsara2000", "Mirjon1985"] )
console.log(reult6);

const reult7 = addTenToOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(reult7);

const reult8 = getTeamRoster ( { name: "TeamA", members: ["Ali", "Gulsara"] } ) 
console.log(reult8);

const reult9 = toCamelCase ( "hello world javascript" )
console.log(reult9);

const reult10 = getAverageHighScores ( [85, 92, 78, 95, 88, 76, 90, 87])
console.log(reult10);

const reult11 = formatWords ( ["apple", "BANANA", "ChErRy"] )
console.log(reult11);

const reult12 = adjustInventory ( { sku: "ITEM-001", qty: 50 })
console.log(reult12);

const reult13 = getLongNames ( ["Alice", "Bob", "Charlie", "David", "Eve"] )
console.log(reult13);

const reult14 = getWordsWithLength (  "The quick brown fox, jumps over. the lazy dog!" )
console.log(reult14);

const reult15 = getDiscountedPrices ( { name: "Mouse", price: 25, discount: 20 } )
console.log(reult15);

const reult16 = formatAddresses ( { country: "Uzbekistan", city: "Tashkent", street: "Lenin St." })
console.log(reult16);

const reult17 = calculateDividedSum ( [10, 20, 30, 40, 50], 5 )
console.log(reult17);

const reult18 = getActiveIds ( {id: 1, active: true}, {id: 2, active: false}, {id: 3, active: true}  )
console.log(reult18);

const reult19 = getUsernames (  ["Ali@EXAMPLE.COM", "Gulsara@TEST.ORG", "Mirjon@DEMO.NET"])   
console.log(reult19);

const reult20=filterAndSum ([{ value: 10 }, { value: 20 }, { value: 30 }])
console.log(reult20);