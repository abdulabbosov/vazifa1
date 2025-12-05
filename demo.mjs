import { getAcronym, extractNumbers, getUniqueColors, getTotalAmount,
     cleanMessage, getElectronicsProducts, formatUserProfiles, filterAndSum, addTenToOddNumbers, getTeamRoster, toCamelCase,
    getAverageHighScores, formatWords, adjustInventory, getWordsWithLength, getDiscountedPrices, formatAddresses, calculateDividedSum,
    getActiveIds, getUsernames
    } from "./demo1.mjs";



const sentence34 = "The quick brown fox jumps over the lazy dog";

const result = getAcronym(sentence34)

console.log(result);

const data35 = [
  { name: "Ali", value: "123abc456" },
  { name: "Gulsara", value: "789xyz012" },
];

const result1 = extractNumbers(data35)

console.log(result1);

const colors36 = ["red", "blue", "green", "red", "blue", "red"];

const result2 = getUniqueColors(colors36)

console.log(result2);


const transactions37 = [
  { amount: "50.99$", date: "2024-11-15" },
  { amount: "100.50$", date: "2024-11-16" },
  { amount: "75.25$", date: "2024-11-17" },
];
const result3 = getTotalAmount(transactions37)

console.log(result3);

const message38 = "   hello   world   javascript   ";

const result4 = cleanMessage(message38)

console.log(result4);

const products39 = [
  { name: "Laptop", tags: "electronics,computers" },
  { name: "Desk", tags: "furniture,office" },
  { name: "Monitor", tags: "electronics,displays" },
];

const result5 = getElectronicsProducts(products39)

console.log(result5);

const usernames40 = ["Ali1991", "Gulsara2000", "Mirjon1985"];

const result6 = formatUserProfiles(usernames40)

console.log(result6)

const items41 = [{ value: 10 }, { value: 20 }, { value: 30 }];

const result7 = filterAndSum(items41)

console.log(result7);

const data42 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result8 = addTenToOddNumbers(data42)

console.log(result8);

const teams43 = [
  { name: "TeamA", members: ["Ali", "Gulsara"] },
  { name: "TeamB", members: ["Mirjon", "Oksana", "Rustam"] },
];

const result9 = getTeamRoster(teams43)

console.log(result9);

const text44 = "hello-world-javascript";

const result10 = toCamelCase(text44)

console.log(result10);

const scores45 = [85, 92, 78, 95, 88, 76, 90, 87];

const result11 = getAverageHighScores(scores45)

console.log(result11);

const data46 = ["apple", "BANANA", "ChErRy", "date"];

const result12 = formatWords(data46)

console.log(result12);

const inventory47 = [
  { sku: "ITEM-001", qty: 50 },
  { sku: "ITEM-005", qty: 30 },
  { sku: "ITEM-010", qty: 20 },
];

const result13 = adjustInventory(inventory47)

console.log(result13);

const text49 = "The quick brown fox, jumps over. the lazy dog!";

const result14 = getWordsWithLength(text49)

console.log(result14);

const products50 = [
  { name: "Laptop", price: 999, discount: 10 },
  { name: "Mouse", price: 25, discount: 20 },
  { name: "Monitor", price: 400, discount: 5 },
  { name: "Keyboard", price: 150, discount: 30 },
];

const result15 = getDiscountedPrices(products50)

console.log(result15);

const addresses51 = [
  { country: "Uzbekistan", city: "Tashkent", street: "Lenin St." },
  { country: "Kazakhstan", city: "Almaty", street: "Abaya Ave." },
];

const result16 =  formatAddresses(addresses51)

console.log(result16);

const numbers52 = [5, 12, 8, 3, 9, 15, 6, 2];

const result17 = calculateDividedSum(numbers52)

console.log(result17);

const data53 = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];

const result18 = getActiveIds(data53)

console.log(result18);

const emails54 = ["Ali@EXAMPLE.COM", "Gulsara@TEST.ORG", "Mirjon@DEMO.NET"];

const result19 = getUsernames(emails54)

console.log(result19);









