// 1. Deep clone using generics
// <T> ka matlab hai ke ye kisi bhi type ke data ke sath kaam karega
function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// 2. Debounce function with proper types
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// 3. Fetch wrapper with return type
// Promise<T | null> ka matlab hai ke ye ya toh data dega ya null
async function fetchWrapper<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    }
    return null;
  }
}

// 4. Array groupBy function with generics
function groupBy<T, K extends keyof T>(
  array: T[],
  key: K,
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// Example usage with Interface
interface Student {
  name: string;
  department: string;
}

const students: Student[] = [
  { name: "Alishba", department: "CS" },
  { name: "Eman", department: "IT" },
  { name: "Alishba Imtiaz", department: "CS" },
];

const groupedStudents = groupBy(students, "department");
console.log("Grouped Students (TS):", groupedStudents);