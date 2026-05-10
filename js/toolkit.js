// 1. Deep clone an object
// Ye function kisi bhi object ki mukammal copy banata hai
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 2. Debounce function
// Ye function execution ko tab tak rokta hai jab tak user type karna band na karde
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 3. Fetch wrapper with error handling
// Is se hum kisi bhi API se data mangwa sakte hain safety ke sath
async function fetchWrapper(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}

// 4. Array groupBy function
// Ye array ke items ko kisi ek category (key) ke mutabiq group kar deta hai
function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

// Example usage: Check karne ke liye ke code sahi chal raha hai
const students = [
  { name: "Alishba", department: "CS" },
  { name: "Eman", department: "IT" },
  { name: "Alishba Imtiaz", department: "CS" },
];
const grouped = groupBy(students, "department");
console.log("Grouped Students:", grouped);