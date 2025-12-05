const {  getAcronym,extractNumbers,getUniqueColors,getTotalAmount, filterAndSum,cleanMessage,
    getElectronicsProducts,formatUserProfiles,addTenToOddNumbers,getTeamRoster,toCamelCase,
    getAverageHighScores,formatWords,adjustInventory,getLongNames,getWordsWithLength,getDiscountedPrices
    ,formatAddresses,calculateDividedSum,getActiveIds,getUsernames } = require("./demo2.cjs");


const result = getAcronym("Assalom alekum ");
console.log(result);    

const result1 = extractNumbers("12");
console.log(result1);

const result2 = getUniqueColors("red");
console.log(result2);

const result3 = getTotalAmount([{amount:10},{date:"2025-11-13"}]);
console.log(result3);

const result4 = cleanMessage ("   hello   world   javascript   ")
console.log(result4);

const result5 = getElectronicsProducts ( {name: "Laptop", tags: "electronics,computers"} )
console.log(result5);

const result6 = formatUserProfiles ( ["Ali1991", "Gulsara2000", "Mirjon1985"] )
console.log(result6);

const result7 = addTenToOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(result7);

const result8 = getTeamRoster ( { name: "TeamA", members: ["Ali", "Gulsara"] } ) 
console.log(result8);

const result9 = toCamelCase ( "hello world javascript" )
console.log(result9);

const result10 = getAverageHighScores ( [85, 92, 78, 95, 88, 76, 90, 87])
console.log(result10);

const result11 = formatWords ( ["apple", "BANANA", "ChErRy"] )
console.log(result11);

const result12 = adjustInventory ( { sku: "ITEM-001", qty: 50 })
console.log(result12);

const result13 = getLongNames ( ["Alice", "Bob", "Charlie", "David", "Eve"] )
console.log(result13);

const result14 = getWordsWithLength (  "The quick brown fox, jumps over. the lazy dog!" )
console.log(result14);

const result15 = getDiscountedPrices ( { name: "Mouse", price: 25, discount: 20 } )
console.log(result15);

const result16 = formatAddresses ( { country: "Uzbekistan", city: "Tashkent", street: "Lenin St." })
console.log(result16);

const result17 = calculateDividedSum ( [10, 20, 30, 40, 50], 5 )
console.log(result17);

const result18 = getActiveIds ( {id: 1, active: true}, {id: 2, active: false}, {id: 3, active: true}  )
console.log(result18);

const result19 = getUsernames (  ["Ali@EXAMPLE.COM", "Gulsara@TEST.ORG", "Mirjon@DEMO.NET"])   
console.log(result19);

const result20=filterAndSum ([{ value: 10 }, { value: 20 }, { value: 30 }])
console.log(result20);