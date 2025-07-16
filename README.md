# 🧠 PLP Task Manager – Week 3 React Assignment

This is a responsive task manager app built with **React**, **Vite**, **Tailwind CSS**, and **React Router**. It includes:

- ✅ Dark mode support with toggle
- ✅ Responsive layout
- ✅ Clean modern UI with Tailwind
- ✅ Modular components (Navbar, TaskManager, Layout)
- ✅ Routing using `react-router-dom`

---

## 📁 Project Structure

```
week-3-react-js-assignment-MosesMolepo001/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskManager.jsx
│   │   └── Layout.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

---

## 🛠️ Installation

Make sure you're using **Node.js 22.12.0 or higher**. Then:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: (https://effulgent-klepon-fea5b9.netlify.app/)

---

## 🌙 Dark Mode Toggle

The dark mode is toggled using a button in the Navbar. It:

- Stores theme preference in `localStorage`
- Applies the `dark` class to `<html>` using Tailwind’s dark mode feature

---

## 💅 Tailwind CSS Setup

Tailwind is configured in:

### `tailwind.config.js`
```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `postcss.config.js`
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  transition: background-color 0.3s ease;
}

body {
  background-color: #e7e122;

  color: #1a202c;
}

.dark body {
  background-color: #1a202c;
  color: #f7fafc;
}
```

---

## 🔗 Useful Scripts

```bash
npm run dev        # Start Vite development server
npm run build      # Build production files
npm run preview    # Preview production build locally
```

---

## 🙌 Author

**Moses Molepo**  
Submitted for the **PLP Week 3 React Assignment**

---

## 📸 Screenshot

located in the `pages` folder.
