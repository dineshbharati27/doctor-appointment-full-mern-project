# Doctor Appointment App - Frontend

This React application provides a frontend for managing doctor appointments, including admin, doctor, and user panels.

## Features

### User Authentication
- Secure login for admins and doctors.
- User registration and login.

### Admin Panel
- Dashboard with key metrics (doctors, appointments, patients).
- View and manage all appointments.
- Add new doctors.
- View and manage doctor profiles.

### Doctor Panel
- Dashboard with earnings, appointments, and patient counts.
- View and manage appointments (cancel, complete).
- View and update doctor profile.

### User Panel
- User registration and login.
- View and book appointments.
- Cancel appointments.
- View and manage user profile.

## Prerequisites

- Node.js and npm (or yarn).
- A compatible backend API (e.g., the Doctor Appointment Backend).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itsrohit2904/doctor_admin_frontend.git
   cd doctor-appointment-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   Create a `.env` file at the root of the project and add the following environment variables:
   ```
   VITE_BACKEND_URL=http://localhost:5000
   ```
   Replace `http://localhost:5000` with the actual URL of your backend API.

4. Start the development server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Folder Structure

```
doctor-appointment-frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   │   ├── AdminContext.jsx
│   │   ├── AppContext.jsx
│   │   └── DoctorContext.jsx
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── AddDoctor.jsx
│   │   │   ├── AllAppointments.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── DoctorsList.jsx
│   │   ├── Doctor/
│   │   │   ├── DoctorAppointments.jsx
│   │   │   ├── DoctorDashboard.jsx
│   │   │   └── DoctorProfile.jsx
│   │   └── Login.jsx
│   ├── assets/
│   │   └── assets.js
│   ├── index.css
│   ├── index.jsx
│   └── .env
```

## Key Components

- **components/**: Contains reusable UI components like `Navbar`, `Sidebar`.
- **context/**: Provides state management for different parts of the application (e.g., `AdminContext`, `DoctorContext`, `AppContext`).
- **pages/**: Contains components for individual pages within the application (e.g., `Dashboard`, `Appointments`, `Profile`).
- **assets/**: Stores images and other static assets.
- **index.css**: Global CSS styles for the application.
- **index.jsx**: The main entry point of the application.
- **.env**: Stores environment variables.

## Additional Notes

- This structure is a basic example and can be further customized based on your specific needs.
- Consider using a state management library like Redux or Zustand for more complex state management.
- Implement proper error handling and user feedback mechanisms.
- Add unit and integration tests to ensure the application's quality.

---
This frontend provides an intuitive interface for managing doctor appointments efficiently. Feel free to contribute or raise issues for any improvements.

