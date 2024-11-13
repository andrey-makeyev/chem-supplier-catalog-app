# Chem Supplier Catalog App For MolPort

This is a feature-based React web application for registering new chemical suppliers and managing their associated chemical compound catalogs.

## Prerequisites

- Node.js (latest stable version recommended)

## Getting Started

To set up and run the project locally:

1. **Clone the repository** (if necessary).

2. **Install dependencies**:

   ```bash
   npm install
   ```
   This command will install all the required dependencies as listed in package.json, including React, Redux, Material UI, and other necessary packages.

3. **Run the app in development mode**:

   ```bash
   npm start
   ```
   This will start the application. Open http://localhost:3000 to view it in the browser. The app will automatically reload if you make changes to the source files.

## Available Scripts
In addition to the commands above, here are some other useful scripts:

**Run tests**:

   ```bash
   npm test
   ```
   Launches the test runner in interactive watch mode. Jest and React Testing Library are used for unit testing.

**Check test coverage**:

   ```bash
   npm test --coverage
   ```
   This command generates a coverage report showing the percentage of code covered by tests. Aim for at least 80% coverage on critical components.

**Build for production**:

   ```bash
   npm run build
   ```
   Builds the app for production to the build folder.

**Eject configuration**:

   ```bash
   npm run eject
   ```
   Note: This is a one-way operation. Use it only if you need full control over the build configuration.

## Project Structure

###### src/: Main source code for the app
###### components/: Reusable UI components
###### features/: Modular feature folders for catalog and supplier with Redux slices and related components
###### hooks/: Custom hooks, such as useExcelParser for Excel file processing
###### theme.js: Material UI theme configuration
###### assets/: Static files such as images or styles
###### public/: Static files that are served by the server, including index.html and the data folder with example catalogs

## Technologies Used
### React and React Hooks
### Redux with Redux Toolkit for state management
### Material UI for styling and responsive design
### XLSX for parsing Excel files
### handleScroll function for infinite scrolling
### Jest and React Testing Library for unit testing

## Notes

The app includes responsive design for mobile and desktop views.
To add new suppliers or upload catalogs, follow the interface prompts in the application.
All data is stored temporarily in Redux; no backend is used in this version.
