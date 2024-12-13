
# Dynamic Event Calendar

A simple and interactive event calendar built with React. This application allows users to view, manage, and organize their events for any given month. Features include drag-and-drop rescheduling, event color coding, and the ability to export events in JSON or CSV formats.

## Features

- **Calendar Grid**: Displays the calendar for the current month, showing days of the week and the corresponding dates.
- **Event Management**:
  - Add, edit, and delete events.
  - Each event can have a name, start time, end time, and description.
  - Events are color-coded based on categories like **Work**, **Personal**, etc.
- **Drag-and-Drop Rescheduling**: Events can be dragged and dropped to different days.
- **Export Events**: Export your events for a specific month in either **JSON** or **CSV** format.
- **Responsive UI**: A clean and user-friendly interface with a minimalist design, optimized for both mobile and desktop views.
- **Persistent Data**: Events are saved in the browser’s localStorage, so your events persist even after refreshing the page.

## Live Demo

You can view the live demo of the application at [Dynamic Event Calendar](https://dhiman-dynamic-event-calendar.netlify.app/).

## Prerequisites

Before running the application locally, make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## Running the App Locally

To run this project locally on your machine, follow these steps:

1. **Clone the repository**:
   - If you haven’t already, clone the repository using the following command:
   ```bash
   git clone https://github.com/DhimanMajumdar/dynamic-event-calendar.git
   ```
   
2. **Install dependencies**:
   - Navigate to the project directory:
   ```bash
   cd dynamic-event-calendar
   ```
   - Install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the application**:
   - Start the development server:
   ```bash
   npm start
   ```
   - Open your browser and go to `http://localhost:3000`. You should see the app running locally.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **date-fns**: Library for date manipulation (formatting, parsing, etc.).
- **react-beautiful-dnd**: For drag-and-drop functionality.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Folder Structure

The project is structured as follows:

```
/src
  /components        # React components for different sections (Calendar, Events, etc.)
  /hooks             # Custom React hooks (e.g., useCalendar)
  App.js             # Main application component
  index.js           # Entry point for React app
  /assets            # Any static assets (images, etc.)
  /styles            # Tailwind CSS custom styles (if any)
```
## How to Contribute

If you'd like to contribute to this project, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add your feature'`).
5. Push your changes (`git push origin feature/your-feature`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
