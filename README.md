# User Management Dashboard

A modern and responsive React.js application that allows users to browse, search, sort, and explore user information fetched from a public API. The project demonstrates the use of React Hooks, Context API, React Router, and responsive UI design while maintaining clean and reusable code.

---

## Project Overview

This application fetches user data from the JSONPlaceholder API and displays it in an intuitive dashboard. Users can search by name, sort alphabetically, navigate to individual user profiles, switch between light and dark themes, and browse users using pagination.

The project was developed using modern React practices with a focus on maintainability, responsiveness, and user experience.

---

## Features

### Core Features

- Fetch user data from a public REST API
- Display user cards with:
  - Name
  - Email
  - City
- Search users by name
- Case-insensitive search
- Sort users:
  - A to Z
  - Z to A
- View detailed user information
- Go Back navigation
- Loading state
- Error handling
- Responsive design

### Bonus Features

- Dark / Light Theme Toggle
- Pagination
- Persistent theme using Local Storage

---

## Technologies Used

- React.js
- React Router DOM
- React Context API
- React Hooks
- React Icons
- CSS3
- Vite
- JSONPlaceholder REST API

---

## Folder Structure

```text
src/
│
├── components/
│   ├── ErrorMessage.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   ├── SearchBar.jsx
│   ├── SortDropdown.jsx
│   ├── ThemeToggle.jsx
│   └── UserCard.jsx
│
├── context/
│   ├── ThemeContext.jsx
│   └── UserContext.jsx
│
├── pages/
│   ├── Home.jsx
│   └── UserDetail.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   ├── App.css
│   └── Home.css
│
├── App.jsx
└── main.jsx
```

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/kamaltejakatru-hub/user-management-dashboard
```

### Navigate to the Project Folder

```bash
cd user-management-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

## Available Scripts

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## API Used

JSONPlaceholder Users API

https://jsonplaceholder.typicode.com/users

---

## Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile Devices

---

## Future Improvements

Possible enhancements include:

- User avatar support
- Advanced filtering
- User editing functionality
- Infinite scrolling
- Unit testing with React Testing Library

---

## Live Demo

Deployment Link:

```text
https://user-management-dashboard-lake-tau.vercel.app
```

---

## GitHub Repository

Repository Link:

```text
https://github.com/kamaltejakatru-hub/user-management-dashboard
```

---

## Author

Developed by **Kamal Teja**