# Card Listing React App

This is a simple React application that displays a list of cards with various details such as card name, budget name, card type, expiry, limit, and status. The application provides features like tab navigation, search by card name, and filtering by card type.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage

1. Run `npm start` to start the development server.
2. Open your browser and visit `http://localhost:3000` to view the application.

## Features

- Three tabs: "Your Cards", "All Cards", and "Blocked".
- Clicking on a tab displays the corresponding cards.
- Search functionality to filter cards by name.
- Filter dropdown to filter cards by type.
- Card types are displayed as icons in the top right corner of each card.
- Card details include card name, budget name, expiry (for burner cards), limit (for subscription cards), and status.

## Dependencies

The following dependencies are used in this project:

- React
- Bootstrap (for styling)
- Font Awesome (for icons)

## Folder Structure

- `src`: Contains the source code files.
  - `components`: Contains the React components used in the application.
  - `App.js`: The main component that renders the application.
  - `index.js`: Entry point of the application.
