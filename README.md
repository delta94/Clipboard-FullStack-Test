# fullstack-candidate-testing

## Public URL

https://clipboard-full-stack-test.vercel.app/

## Installation Instructions

1. clone the repo
2. npm install
3. npm run dev

## Stack used in test project

1. Next.js (Functional Component Only)
2. useContext + useReducer hooks for global state management.
3. React Query for fetching remote data. It helps unstable connection.
4. Tailwind CSS for styling
5. Jest for Api test

## Notes

1. Filter works
   - '**Or**' between options in each filter type
   - '**And**' between filer types.
   - Filter Modal works
2. Search works
3. Sort works
   - simutaneously with other sort by options and search, filter.
     How to sort and display jobs by hospital
   - Sort jobs in each hospital by multiple sort options.
   - Sort hospitals with the first item of jobs in each hospital by multiple sort options.
   - Sort works in 3 states per each filter: ascending, descending or default
4. Unit test for API
   - npm run test
5. Deployed to Vercel
