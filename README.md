<<<<<<< HEAD
# Meal Finder

## Description
Meal Finder is a web application developed with **React + TypeScript**, allowing users to search for meal recipes through different APIs. It utilizes **Chakra UI** for UI design and is styled with **CSS and HTML**.

## Technologies Used
- **React** + **TypeScript**
- **Chakra UI**
- **CSS / HTML**
- **Fetch API** for data consumption

## Features
- Search for recipes by ingredients or dish name
- View detailed information about each recipe
- Responsive interface with Chakra UI
- Integration with multiple recipe APIs

## Installation and Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/meal-finder.git
   cd meal-finder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit: `http://localhost:5173/` (or the port indicated in the terminal).

## Contribution
If you want to contribute to this project:
1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature-new`)
3. Make your changes and push your branch (`git push origin feature-new`)
4. Open a Pull Request

=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 6a86318 (proyect done)
