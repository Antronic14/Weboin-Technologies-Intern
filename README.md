# Digital Marketing Agency Website

## Design Choices
This project follows a modern digital marketing agency aesthetic inspired by professional agency sites. The design emphasizes conversion-focused layouts, clean and professional credibility.

### Core Design Elements
- **Color Palette:**  
  - Primary Blue: #3B82F6 with a gradient accent from blue to purple.  
  - Light Mode: White and light gray backgrounds with dark gray/black text for readability.  
  - Dark Mode: Dark slate/gray backgrounds with white/light gray text ensuring contrast and visibility.

- **Typography:**  
  - Headings use the **Inter** font (Google Fonts) for a modern, professional look.  
  - Body text uses **Open Sans** (Google Fonts) for readability and friendliness.  
  - Font usage follows a clear hierarchy with bold large headlines and regular body text.

- **Layout & Components:**  
  - Responsive grid layouts adapting from single column on mobile to multi-column on desktop.  
  - Consistent spacing using Tailwind CSS units for rhythm and balance.  
  - Interactive elements include hover effects, smooth transitions, and dark mode toggle.

## Fonts and Colors
- Fonts are loaded via CSS variables and Tailwind configuration:  
  - `--font-heading`: Inter  
  - `--font-sans`: Open Sans  
- Colors are defined using CSS variables for light and dark modes, integrated with Tailwind CSS for utility-first styling.

## Running Locally

### Prerequisites
- Node.js installed

### Commands
- Install dependencies:  
  ```bash
  npm install
  ```
- Start development server:  
  ```bash
  npm run dev
  ```
  This runs the server in development mode with hot reloading.

- Build for production:  
  ```bash
  npm run build
  ```
- Start production server:  
  ```bash
  npm start
  ```

The development server runs the backend server (`server/index.ts`) and serves the frontend via Vite.

---

This README provides a brief overview of the design philosophy, styling choices, and local development setup for the project.
