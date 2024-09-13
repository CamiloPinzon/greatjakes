```markdown
# Cards Layout Exercise

This project is a simple card layout component developed using **Vite**, **React**, **TypeScript**, and **SCSS**. The application demonstrates how to implement a responsive card container with customizable card components, along with buttons having different variants and styles.

## Technologies Used

- **Vite**: A fast build tool and development server.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **SCSS**: A preprocessor scripting language that is interpreted or compiled into CSS.

## Project Structure

The project is structured as follows:

```bash
.
├── src
|   ├── assets
|   |   ├── close.svg
|   |   ├── searchIcon.svg
│   ├── components
|   |   ├── button
|   |   |   ├── button.tsx
|   |   |   ├── button.scss
|   |   ├── card
|   |   |   ├── card.tsx
|   |   |   ├── card.scss
|   |   ├── cardsContainer
|   |   |   ├── cardsContainer.tsx
|   |   |   ├── cardsContainer.scss
|   |   ├── separator
|   |   |   ├── separator.tsx
|   |   |   ├── separator.scss
│   ├── styles
│   │   └── _variables.scss
│   ├── App.tsx     
|   ├── App.scss
|   ├── index.scss
|   ├── interfaces.ts
│   └── main.tsx           
├── public                 
├── package.json           
└── tsconfig.json          
```

## Features

### Card Component
- **Variants**: 
  - `default`: On hover, the entire background color changes to green.
  - `border`: On hover, only the border color changes to green.
  
### Button Component
- **Variants**:
  - `default`: Maintains padding, does not wrap text, and truncates without ellipsis.
  - `icon`: Supports one or two lines of text with an icon, truncates text with ellipsis.
- **Disabled state**: Properly styled with hover state adjustments.

### CardsContainer Component
- Implements a responsive grid layout using **CSS Grid**.
- Centered horizontally and positioned 100px from the top of the page.
- Ensures correct placement of buttons in both top and bottom rows.

## Responsive Design

The layout is fully responsive and scales proportionally between 768px and 1680px screen widths:
- Minimum width: 768px
- Maximum width: 1680px
- Font size scales dynamically between 13px and 16px using the `clamp()` function in CSS.

## Setup and Installation

### Prerequisites

Make sure you have **Node.js** installed on your machine.

1. Clone this repository:
   ```bash
   git clone https://github.com/CamiloPinzon/greatjakes.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd greatjakes
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

This will launch the app in development mode at `http://localhost:5173/` (default Vite port).

### Building the Project

To build the project for production, run:

```bash
npm run build
```

The optimized build will be generated in the `dist/` folder.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```

This version is updated to use **npm** instead of **yarn** and includes your GitHub repository URL. Let me know if you need any further adjustments!