# Employee Management System

A modern, production-ready full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Manage your employees with an intuitive dashboard featuring full CRUD operations, search, filtering, and responsive design.

## Features

- **Full CRUD Operations**: Create, read, update, and delete employee records
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Search & Filter**: Quickly find employees by name, email, role, or department
- **Statistics Dashboard**: Visual overview of your workforce
- **Form Validation**: Client-side and server-side validation
- **Smooth Animations**: Modern UI with transitions and micro-interactions
- **REST API**: Clean, scalable backend with MVC pattern

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library

## Project Structure

```
employee-management/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── employeeController.js  # Business logic
│   ├── middleware/
│   │   └── errorMiddleware.js     # Error handling
│   ├── models/
│   │   └── Employee.js        # Mongoose schema
│   ├── routes/
│   │   └── employeeRoutes.js  # API routes
│   ├── .env                   # Environment variables
│   └── server.js              # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── EmployeeCard.jsx
│   │   │   ├── EmployeeForm.jsx
│   │   │   ├── EmployeeList.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Navbar.jsx
│   │   ├── hooks/
│   │   │   └── useEmployees.js    # Custom hook for CRUD
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx      # Management interface
│   │   │   └── Home.jsx           # Landing page
│   │   ├── services/
│   │   │   └── api.js             # API layer
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── package.json               # Root package with scripts
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

## Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_super_secret_jwt_key_change_in_production
CLIENT_URL=http://localhost:3000
```

| Variable | Description |
|----------|-------------|
| `PORT` | Port for the backend server |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT (for future auth expansion) |
| `CLIENT_URL` | Frontend URL for CORS |

## Installation

### Option 1: Install All at Once

```bash
npm run install-all
```

### Option 2: Manual Installation

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Running the Application

### Development Mode (Both Frontend + Backend)

```bash
npm run dev
```

This starts both servers concurrently:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### Run Backend Only

```bash
npm run server
```

### Run Frontend Only

```bash
npm run client
```

### Production Build

```bash
npm run build
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get single employee |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |
| GET | `/api/health` | Health check |

## Employee Schema

| Field | Type | Required |
|-------|------|----------|
| firstName | String | Yes |
| lastName | String | Yes |
| email | String | Yes (unique) |
| role | String | Yes |
| department | String | Yes |
| salary | Number | Yes |
| joinDate | Date | Yes |
| status | String | No (default: active) |
| phone | String | No |

## Screenshots

- **Home Page**: Landing page with hero section, features, and CTA
- **Dashboard**: Full employee management with stats, search, filter, and CRUD

## Future Enhancements

- [ ] User authentication & authorization (JWT)
- [ ] Role-based access control
- [ ] Employee profile images
- [ ] Data export (CSV, PDF)
- [ ] Advanced analytics & charts
- [ ] Email notifications

## License

MIT
