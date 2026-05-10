"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Deep clone using generics
// <T> ka matlab hai ke ye kisi bhi type ke data ke sath kaam karega
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// 2. Debounce function with proper types
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
// 3. Fetch wrapper with return type
// Promise<T | null> ka matlab hai ke ye ya toh data dega ya null
async function fetchWrapper(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Fetch error:", error.message);
        }
        return null;
    }
}
// 4. Array groupBy function with generics
function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = String(item[key]);
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}
const students = [
    { name: "Alishba", department: "CS" },
    { name: "Eman", department: "IT" },
    { name: "Alishba Imtiaz", department: "CS" },
];
const groupedStudents = groupBy(students, "department");
console.log("Grouped Students (TS):", groupedStudents);
//# sourceMappingURL=toolkit.js.map