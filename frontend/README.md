# Doctors Appointment User Panel

This project is a front-end user panel for booking doctor appointments. It is built using modern front-end technologies to provide a responsive and user-friendly interface.

## Features

- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Custom Fonts**: Uses the `Outfit` font for a clean and professional look.
- **Smooth Scrolling**: Scrollbar hidden for a sleek interface.
- **TailwindCSS Integration**: Simplified and utility-based styling.

## Technologies Used

- **React**: For building dynamic user interfaces.
- **TailwindCSS**: For styling and responsive design.
- **JavaScript (ES6)**: For logic and interactivity.

## File Structure

```
.
├── public/               # Public assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   ├── styles/           # CSS and Tailwind configurations
│   │   └── index.css     # Main styling file
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point for React rendering
│   └── index.html        # HTML template
└── package.json          # Project dependencies and scripts
```

## Installation and Setup

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/itsrohit2904/doctor_user_panel.git
   ```

2. Navigate to the project directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Customization

- **Fonts**: The project uses the `Outfit` font from Google Fonts. You can change it in the `index.css` file.
- **Responsive Breakpoints**: Modify media queries in the CSS file to adjust responsiveness.

## Deployment

To build the project for production, run:
```bash
npm run build
```

The optimized files will be available in the `dist` folder. Deploy these files to your preferred hosting platform.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
