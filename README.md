# Doctor Appointment System (Full-Stack MERN)

This is a full-stack application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a platform for managing doctor appointments. The project consists of three main modules: `frontend`, `admin`, and `backend`.

## Features

### User Features
- User registration and login.
- Book and cancel appointments.
- Manage user profile.

### Doctor Features
- View and manage appointments.
- Update availability and profile.
- Dashboard with earnings and patient statistics.

### Admin Features
- Add and manage doctors.
- View and manage all appointments.
- Admin dashboard with key metrics.

## Prerequisites

- Node.js and npm/yarn.
- MongoDB instance (local or cloud).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itsrohit2904/doctor-fullstack.git
   cd doctor-appointment-system
   ```

2. Install dependencies for each module:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install

   # Admin
   cd ../admin
   npm install
   ```

3. Create `.env` files for each module:

### Backend `.env`:
```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret>
```


```

4. Start the development servers:

   - **Backend**:
     ```bash
     cd backend
     npm start
     ```
   - **Frontend**:
     ```bash
     cd frontend
     npm start
     ```
   - **Admin**:
     ```bash
     cd admin
     npm start
     ```


## Key Technologies

- **Frontend**: React.js, Tailwind CSS, Context API.
- **Admin**: React.js, Tailwind CSS, Context API.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Cloudinary.

## Additional Notes

- This structure can be expanded or modified based on project needs.
- Use a reverse proxy (e.g., Nginx) or a deployment platform to manage multiple servers in production.
- Add error handling and logging for better debugging.
- Consider implementing CI/CD for automated deployments.

---

This project provides a scalable solution for managing doctor appointments with separate modules for users, doctors, and admins. Feel free to contribute or raise issues for any enhancements.

