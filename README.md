# Gul & Cocoa

**Live Demo:** [https://gulandcocoa-v1.vercel.app/](https://gulandcocoa-v1.vercel.app/)

Welcome to the **Gul & Cocoa** repository! This project is the front-end web experience for a boutique dessert café that beautifully blends traditional South Asian mithai with modern patisserie aesthetics.

## 🌸 Brand Concept & Personality

**"Where tradition meets tenderness, and every bite feels like home."**

Gul & Cocoa is not your average sweet shop. It represents a warm, sunlit, premium boutique space where the scent of saffron, vanilla, and rose fills the air. The brand personality is:

*   **Elegant & Premium:** A refined bakery/café catering to those with a taste for luxury, shared moments, and quality ingredients.
*   **Nostalgic yet Modern:** Grounded in South Asian heritage (Laddoos, Rasmalai, Phirni) but presented alongside western classics (Cheesecake, Truffle Cake, Croissants).
*   **Warm & Inviting:** Everything from the imagery to the color palette is designed to evoke a soft, comfortable, "slow afternoon" feeling. It is unpretentious but undeniably special.

## 💻 Tech Stack

This project is built using modern front-end technologies with a focus on ease of development, routing, and smooth animations.

*   **Core Framework:** [React 19](https://react.dev/) (via [Vite](https://vitejs.dev/))
*   **Routing:** [React Router v7](https://reactrouter.com/) for single-page application (SPA) navigation.
*   **Styling:** Vanilla CSS (`.css`) with CSS variables and responsive media queries.
*   **Animations:** [GSAP (GreenSock Animation Platform)](https://gsap.com/) for complex, timeline-based hero animations.
*   **Linting:** ESLint

## 🛠 Setup Instructions

To get the project up and running on your local machine, run the following exact commands in your terminal.

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd "Gul & Cocoa"
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` (or the port Vite provides in the terminal output).

**Available Scripts:**
*   `npm run build` - Builds the app for production to the `dist` folder.
*   `npm run preview` - Locally preview the production build.
*   `npm run lint` - Runs ESLint to check for code quality issues.

*(Note: Ensure you are using Node.js v18 or higher.)*

## 🎨 Design Decisions

The aesthetic of Gul & Cocoa relies heavily on its typography and color palette to convey its boutique identity.

### Typography
We deliberately moved away from generic sans-serif default behavior to establish a highly curated print-magazine feel:

1.  **Cormorant Garamond (Serif):** Used primarily for large, impactful headings (e.g., "H O M E" on the hero, main page titles). It has high contrast and elegant curves that scream "premium."
2.  **Playfair Display (Serif):** Used for subheadings, italicized accents, and introductory paragraphs. It provides a softer, very traditional editorial feel.
3.  **Poppins (Sans-Serif):** Used for all functional text, buttons, tags, and small descriptions. It ensures readability at small sizes while maintaining a geometric, modern balance against the heavy serifs.

### Color Palette
The colors are warm, appetizing, and distinctly "dessert-like" without relying on harsh primary colors:

*   **Base Backgrounds:** 
    *   `#FFF4EC` (Warm Cream/Beige) - The primary canvas.
    *   `#FFF0F3` & `#ffdde6` (Soft Rose Pinks) - Used for alternating sections and backgrounds to evoke the feeling of strawberry, rose, and mithai.
*   **Primary Text:** `#4A2E2A` (Deep Cocoa Brown) - Used instead of pure black (`#000`) to reduce eye strain and maintain the warm, chocolatey feel of the brand.
*   **Accents & Borders:** `#C8A95A` (Signature Gold) and `#7a6530` (Darkened Gold) - Used for borders, icons, subtle underlines, hover states, and premium text accents. 
*   **Shadows:** We strictly use *very* low opacity, color-tinted shadows (e.g., `rgba(74, 46, 42, 0.05)`) instead of harsh black dropshadows to keep the UI feeling light, airy, and "floating".

### Layout & Spacing
*   **Breathing Room:** We intentionally use generous padding (e.g., `8rem` and `9rem` top padding below navbars) to give the content room to breathe.
*   **Boutique Framing:** Images often utilize custom styling like golden `outline-offset` borders or arched `border-radius: 50% 50% 0 0` to mimic physical boutique window displays or premium packaging.

## 🤔 Assumptions

*   **Static Data Integration:** The current menu data and store hours are hardcoded directly within the React components (e.g., `Menu.jsx`) assuming an MVP/brochureware phase. A future CMS integration (like Contentful or Sanity) or custom backend would be required to make these editable by the client.
*   **Contact Form:** The contact form UI is built and fully responsive, but it currently has no backend handling (`e.preventDefault()` is used). It assumes integration with a service like Formspree, EmailJS, or a custom API endpoint in the future.
*   **Map Data:** The Google Maps iframe is currently hardcoded to a placeholder location (Connaught Place, New Delhi) assuming the client will provide their final physical location coordinates for launch.

## ⚠️ Known Limitations

1.  **GSAP Dependency Size:** We are relying on GSAP for the initial hero animations. While powerful, this adds to the main bundle size. For future optimization, we may want to lazy-load the home page animations or transition to CSS-only animations if bandwidth becomes a strict concern.
2.  **Search Functionality:** The menu search currently only filters the exact loaded array on the client side. It does not account for complex typos, fuzzy searching, or synonyms (e.g., searching "cheese" vs "cheesecake").
3.  **Build Issues (Vite CLI):** There is currently a known localized environmental issue where `npm run build` fails on some Windows setups due to a `MODULE_NOT_FOUND` error regarding the local `node_modules` path resolution for Vite. (Running `npm run dev` works perfectly).
4.  **No Server-Side Rendering (SSR):** As a standard Vite SPA React app, the initial HTML payload is almost empty. SEO optimization requires dynamic meta tags (via React Helmet) or a migration to a framework like Next.js or Remix if organic search ranking becomes the primary marketing vertical.
