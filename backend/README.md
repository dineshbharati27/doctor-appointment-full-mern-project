# Doctor Appointment Backend - File Structure

This README provides an overview of the file structure and key components of the backend for a doctor appointment booking system.

## File Structure

```
doctor-appointment-backend/
├── controllers/
│   ├── adminController.js
│   ├── doctorController.js
│   └── userController.js
├── middleware/
│   ├── authAdmin.js
│   ├── authDoctor.js
│   ├── authUser.js
│   └── multer.js
├── models/
│   ├── appointmentModel.js
│   ├── doctorModel.js
│   └── userModel.js
├── routes/
│   ├── adminRoute.js
│   ├── doctorRoute.js
│   └── userRoute.js
├── cloudinary.js
├── connection.js
├── index.js
└── .env
```

## Key Files and Their Functions

### controllers/

- **adminController.js**: Handles admin-related API endpoints, such as admin login, adding doctors, managing appointments, and viewing dashboard data.
- **doctorController.js**: Handles doctor-related API endpoints, such as doctor login, viewing appointments, managing availability, and updating profiles.
- **userController.js**: Handles user-related API endpoints, such as user registration, login, profile management, booking appointments, and canceling appointments.

### middleware/

- **authAdmin.js**: Middleware for authenticating admin requests.
- **authDoctor.js**: Middleware for authenticating doctor requests.
- **authUser.js**: Middleware for authenticating user requests.
- **multer.js**: Middleware for handling file uploads (used for doctor images).

### models/

- **appointmentModel.js**: Defines the Mongoose schema for appointments.
- **doctorModel.js**: Defines the Mongoose schema for doctors.
- **userModel.js**: Defines the Mongoose schema for users.

### routes/

- **adminRoute.js**: Defines routes for admin-specific endpoints.
- **doctorRoute.js**: Defines routes for doctor-specific endpoints.
- **userRoute.js**: Defines routes for user-specific endpoints.

### Additional Files

- **cloudinary.js**: Configures and initializes the Cloudinary library for image uploads.
- **connection.js**: Establishes the connection to the MongoDB database.
- **index.js**: The main entry point of the application, where routes are mounted and the server is started.
- **.env**: Stores environment variables such as database connection strings, API keys, and other sensitive information.

## Key Features

- **User Authentication**: Secure user authentication and authorization using JWT.
- **Role-Based Access Control**: Separate authentication and authorization middleware for admins, doctors, and users.
- **Data Modeling**: Mongoose models for users, doctors, and appointments.
- **Cloudinary Integration**: Image uploads using the Cloudinary service.
- **Admin Panel**: Features for admins to manage doctors, appointments, and view dashboard statistics.
- **Doctor Panel**: Features for doctors to view appointments, manage availability, and update profiles.
- **User Panel**: Features for users to register, login, book appointments, view appointments, and manage their profiles.
- **Appointment Management**: Includes features for booking, canceling, and completing appointments.
- **Data Validation**: Implements input validation to ensure data integrity.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file with your environment variables:
   ```
   DB_URI=<your-mongodb-uri>
   CLOUDINARY_URL=<your-cloudinary-url>
   JWT_SECRET=<your-jwt-secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. The server will run on `http://localhost:5000` by default.

---
This backend provides a robust structure for managing doctor appointment booking systems efficiently. For any issues, feel free to raise an issue or contribute to the project.

