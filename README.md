🔐 Basic Authentication Portal (MERN Stack)

A simple authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project demonstrates user signup, login, authentication, and protected routes using JWT (JSON Web Tokens).

🚀 Features

🔑 User Registration (Signup)

🔓 User Login (JWT Authentication)

🔒 Protected Routes (accessible only with valid token)

📄 JSON Web Tokens (JWT) for authentication

📦 Secure password hashing using bcrypt

🌐 Frontend with React + Axios for API communication

🗄️ Backend with Express + MongoDB

🛠️ Tech Stack

Frontend: React, React Router, Axios, Tailwind/Bootstrap (optional)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT, bcrypt

📂 Project Structure
basic-auth-portal/
│── client/            # React frontend
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Login, Signup, Dashboard
│   │   └── App.js
│   └── package.json
│
│── server/            # Express backend
│   ├── models/        # Mongoose models (User)
│   ├── routes/        # Auth routes (login, register, protected)
│   ├── middleware/    # JWT middleware
│   ├── server.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/basic-auth-portal.git
cd basic-auth-portal

2. Setup Backend
cd server
npm install


Create a .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend:

npm start

3. Setup Frontend
cd ../client
npm install
npm start

🔑 API Endpoints
Auth Routes

POST /api/auth/register → Register a new user

POST /api/auth/login → Login & get JWT token

GET /api/auth/protected → Example of a protected route (requires token in headers)

🖥️ Usage

Open the app in browser at http://localhost:3000

Register a new account

Login using the registered credentials

Access the dashboard (protected route)

🛡️ Security Features

Passwords are hashed using bcrypt

JWT stored in HTTP headers for requests

Protected routes verified using middleware

📌 Future Improvements

✅ Remember Me / Refresh Tokens

✅ Role-based authentication (Admin, User

You said:
without jwt
ChatGPT said:

Got it 👍 You want a README for a MERN Authentication Portal without JWT (probably using sessions & cookies instead of token-based auth).
Here’s a clean README.md you can use:

🔐 Basic Authentication Portal (MERN Stack - Session Based)

A simple authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project demonstrates user signup, login, session-based authentication, and protected routes using express-session and cookies (instead of JWT).

🚀 Features

📝 User Registration (Signup)

🔓 User Login (with session)

🍪 Session & Cookie-based authentication

🔒 Protected routes (only accessible when logged in)

📦 Secure password hashing using bcrypt

🌐 Frontend with React + Axios for API communication

🗄️ Backend with Express + MongoDB

🛠️ Tech Stack

Frontend: React, React Router, Axios

Backend: Node.js, Express.js, express-session, cookie-parser

Database: MongoDB (Mongoose ODM)

Authentication: Session + Cookies, bcrypt

📂 Project Structure
basic-auth-portal/
│── client/            # React frontend
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Login, Signup, Dashboard
│   │   └── App.js
│   └── package.json
│
│── server/            # Express backend
│   ├── models/        # Mongoose models (User)
│   ├── routes/        # Auth routes (login, register, logout)
│   ├── middleware/    # Auth middleware (check session)
│   ├── server.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/basic-auth-portal.git
cd basic-auth-portal

2. Setup Backend
cd server
npm install


Create a .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key


Run the backend:

npm start

3. Setup Frontend
cd ../client
npm install
npm start

🔑 API Endpoints
Auth Routes

POST /api/auth/register → Register a new user

POST /api/auth/login → Login user (creates session + cookie)

GET /api/auth/logout → Logout user (destroys session)

GET /api/auth/check → Check if user is logged in

🖥️ Usage

Open the app in browser at http://localhost:3000

Register a new account

Login with your credentials → session cookie will be set

Access the dashboard (protected route)

Logout to clear session

🛡️ Security Features

Passwords hashed with bcrypt

Session stored securely in MongoDB / MemoryStore

Cookies set as httpOnly to prevent XSS attacks

📌 Future Improvements

✅ CSRF Protection

✅ Role-based access (Admin/User)

✅ Session store in Redis for scalability

📜 License

This project is licensed under the MIT License.
