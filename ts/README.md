# Advance Web Development - Assignment #2
**Submitted by:** Alishba Syed (22011519-108)  
**Submitted to:** Prof. Rizwan Hameed  
**Campus:** University of Gujrat (Mandi Bahauddin Campus)

## Objective
The goal of this assignment is to create a utility toolkit using Modern JavaScript and then convert it into TypeScript to ensure type safety, better code structure, and understanding of Generics/Interfaces.

## Project Structure
- `js/`: Contains the JavaScript implementation (`toolkit.js`).
- `ts/`: Contains the TypeScript implementation (`toolkit.ts`).
- `package.json`: Manages scripts for running and building the project.
- `tsconfig.json`: TypeScript configuration settings.

## Utilities Included
1. **Deep Clone:** Creates a complete copy of an object using JSON methods.
2. **Debounce:** Optimizes performance by delaying function execution.
3. **Fetch Wrapper:** A clean way to handle API calls with built-in error handling.
4. **Group By:** Categorizes array elements based on a specific property.

## How to Run
```bash
npm install
npm run run-js   # Runs JavaScript version
npm run build-ts # Compiles TS to JS
npm run run-ts   # Runs compiled TypeScript version