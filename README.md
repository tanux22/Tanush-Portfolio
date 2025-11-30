# ⚡ Portfolio Website

> **System Status: ONLINE**

A high-performance, cyberpunk-themed developer portfolio built for the modern web. Designed with a focus on immersive UI, 3D interactions, and a "gamified" user experience.

![Project Banner](https://placehold.co/1200x400/030305/00f3ff?text=ELITE+DEV+PORTFOLIO&font=orbitron)

## 🎮 Features

*   **Immersive Cyberpunk Aesthetic**: Neon glows, glitch effects, and a void-black color palette.
*   **High-Performance Animations**: 60FPS particle backgrounds, smooth scroll reveals, and hardware-accelerated CSS transforms.
*   **3D Interactivity**:
    *   Interactive Profile Holo-Frame.
    *   3D Tilt Cards for projects.
    *   Perspective grid floors and floating geometry.
*   **Custom Cursor System**: Lag-free magnetic cursor with dynamic hover states.
*   **Responsive Design**: Fully optimized for mobile, tablet, and ultra-wide desktop displays.
*   **Type-Safe**: Built with TypeScript for robustness and maintainability.

## 🛠️ Tech Stack

*   **Core**: [React 18+](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Icons**: [FontAwesome 6](https://fontawesome.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/) (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/tanux22/Tanush-Portfolio.git
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` to view the application.

## ⚙️ Customization

This portfolio is data-driven. You can update the content without touching the complex UI logic.

### 1. Update Content (`src/constants.ts`)
Navigate to `src/constants.ts`. Here you can modify:
*   **Navigation Links**: `NAV_ITEMS`
*   **Skills**: `SKILL_GROUPS` (Grouped by category)
*   **Education**: `EDUCATION_DATA`
*   **Projects**: `PROJECTS` (Add your title, description, tech stack, and images)
*   **Experience**: `EXPERIENCES`

### 2. Add Your Profile Picture
1.  Rename your photo to `profile.jpg`.
2.  Place it inside the `public/` folder.
3.  *Note: If the image is missing, the site will display a futuristic placeholder.*

### 3. Add Your Resume
1.  Rename your resume PDF to `resume.pdf`.
2.  Place it inside the `public/` folder.
3.  The "RESUME" button in the navbar will automatically link to this file.

### 4. Update Metadata
Open `index.html` to change the `<title>` tag and `metadata.json` to update the site description for SEO.
