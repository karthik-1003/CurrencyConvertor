# Currency Converter

A simple currency converter application built with React and Vite. This app allows users to convert amounts between different currencies using real-time exchange rates.

## Features

- Convert amounts between different currencies.
- Swap between "From" and "To" currencies.
- Real-time exchange rates fetched from an API.
- Responsive and user-friendly interface.

## Project Structure
```
CurrencyConvertor/ 
├── public/ # Static assets 
├── src/ # Source code 
│ ├── assets/ # Images and icons 
│ ├── components/ # Reusable React components 
│ ├── hooks/ # Custom React hooks 
│ ├── App.jsx # Main application component 
│ ├── main.jsx # Entry point 
│ └── index.css # Global styles 
├── .gitignore # Git ignore rules 
├── eslint.config.js # ESLint configuration 
├── index.html # HTML template 
├── package.json # Project metadata and dependencies 
├── README.md # Project documentation 
└── vite.config.js # Vite configuration
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-convertor.git
   cd currency-convertor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```
4. Open the app in your browser at http://localhost:5173

# Currency Converter

A simple currency converter application built with React and Vite. This app allows users to convert amounts between different currencies using real-time exchange rates.

## Features

- Convert amounts between different currencies.
- Swap between "From" and "To" currencies.
- Real-time exchange rates fetched from an API.
- Responsive and user-friendly interface.

## Project Structure

```
CurrencyConvertor/
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-convertor.git
   cd currency-convertor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ESLint**: Linter for maintaining code quality.

## API

This app uses the [Currency API](https://latest.currency-api.pages.dev/) to fetch real-time exchange rates.

## How to Use

1. Select the "From" currency and enter the amount.
2. Select the "To" currency.
3. Press `Enter` or click the "Convert" button to see the converted amount.
4. Use the swap button to switch between "From" and "To" currencies.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Currency API](https://latest.currency-api.pages.dev/)
