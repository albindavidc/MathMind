# 🔢 MathMind – Modern Standard Calculator

![MathMind UI](https://img.shields.io/badge/UI-Glassmorphism-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

MathMind is a beautifully designed, high-performance standard calculator built with **React**, **TypeScript**, and **Vite**. It features a modern dark-mode aesthetic with neon accents, glassmorphism UI elements, and fluid animations. Designed for both desktop and mobile, it provides a seamless and satisfying user experience for everyday mathematical calculations.

---

## 🚀 Live Demo

**GitHub Pages Deployment:**
[https://albindavidc.github.io/MathMind/](https://albindavidc.github.io/MathMind/)

---

## ✨ Features

### 🧮 Core Calculator Functions
* **Fast & Responsive Keypad:** Tactile feedback on button presses with active scaling animations.
* **Real-time Arithmetic:** Supports operator chaining and basic scientific inputs (parentheses).
* **Safe Evaluation:** Built-in error handling and input sanitization to prevent invalid mathematical operations.
* **Precision:** Handles floating-point numbers accurately and formats results cleanly.

### 📜 History Tracking
* **Sliding Sidebar:** Convenient off-canvas sidebar to view past calculations.
* **Timestamped Logs:** Every calculation is saved with the exact time it was performed.
* **Clearable Memory:** One-click functionality to clear your calculation history.

### 🎨 Premium Aesthetic
* **Neon Dark Theme:** Deep background colors `#0d1117` paired with vibrant cyan and purple neon ambient glows.
* **Glassmorphism Elements:** Translucent backgrounds with backdrop-blurs for depth and hierarchy.
* **Animated Splash Screen:** Engaging startup animation for a premium feel.
* **Fully Responsive:** Adapts perfectly to mobile devices and wide desktop screens alike.
* **PWA Ready:** Configured with a web manifest and service worker for installability.

---

## 📁 Project Structure

```text
MathMind/
├── index.html              # Main HTML entry point (PWA config & Tailwind CDN)
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration for strict type checking
├── vite.config.ts          # Vite bundler configuration
│
├── public/
│   ├── icon.svg            # App icon
│   ├── manifest.json       # PWA manifest
│   └── sw.js               # Service Worker for offline capabilities
│
└── src/ (Root level files in this context)
    ├── App.tsx             # Main application layout, state, and calculation logic
    ├── index.tsx           # React DOM rendering entry point
    ├── constants.ts        # Configuration for calculator keypad layout
    ├── types.ts            # Global TypeScript interfaces and enums
    │
    └── components/
        ├── Calculator.tsx      # The main numerical keypad grid component
        ├── HistorySidebar.tsx  # The sliding drawer containing past calculations
        └── SplashScreen.tsx    # The animated initial loading screen
```

---

## ⚙️ Tech Stack & Dependencies

### Core Technologies
* **React (v19.2.0):** UI library for building component-driven interfaces.
* **TypeScript (v5.9):** Strongly typed JavaScript for safer and more robust code.
* **Vite (v5.0.0):** Next-generation frontend tooling for blazing-fast development.
* **Tailwind CSS:** Utility-first CSS framework (loaded via CDN) for rapid UI styling.

### Developer Dependencies
* `@types/react` & `@types/react-dom` (v19.0.0)
* `@vitejs/plugin-react` (v4.2.0)
* `typescript` (v5.9)

---

## 🧩 Setup & Installation Instructions

Follow these steps to get a local development environment up and running.

### 1️⃣ Prerequisites
Ensure you have Node.js and npm installed on your machine.
* [Download Node.js](https://nodejs.org/)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/albindavidc/MathMind.git
cd MathMind
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Start Development Server
Run the local Vite development server.
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### 5️⃣ Build for Production
To create an optimized production build:
```bash
npm run build
```
The compiled files will be generated in the `dist` directory.

### 6️⃣ Preview Production Build
To preview the compiled production build locally:
```bash
npm run preview
```

---

## 📖 Usage Guidelines

1. **Basic Calculations:** Use the on-screen keypad to enter numbers and operators (e.g., `5 + 5 =`). 
2. **Parentheses:** Use `(` and `)` for complex grouping.
3. **Backspace/Clear:** 
   * Use `⌫` to delete the last entered character.
   * Use `C` to completely clear the current input and result display.
4. **Viewing History:** Click the history icon (list symbol) in the top-right corner of the calculator header to slide open the history sidebar. 
5. **Clearing History:** While the history sidebar is open, scroll to the bottom and click the red "Clear History" button.

---

## 🧼 Code Quality & Standards

* **Strict TypeScript:** Compiled with `"strict": true` ensuring no implicit any types or unchecked nulls.
* **No Unused Code:** Enforced via `"noUnusedLocals"` and `"noUnusedParameters"`.
* **Component Modularity:** UI is strictly separated into focused, reusable components.
* **State Management:** Uses React Hooks (`useState`, `useRef`) cleanly within `App.tsx` for predictable top-down data flow.

---

## 🤝 Contributing

Contributions are always welcome! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. Free to use, modify, and improve.

---

## 👨‍💻 Author

**Albin David C**  
*Building modern, intelligent, beautifully-designed web applications.*  
📧 Contact: albindavidc007@gmail.com
