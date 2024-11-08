# Mega Blog App

Welcome to the Mega Blog App GitHub repository! This platform is designed for creating, managing, and sharing blog posts, complete with user authentication and content handling using Appwrite.


## Introduction

Mega Blog is a feature-rich blog application built with React.js, offering the following:
## Key Features

###  User Management

- User registration with form validation (using React Hook Form).
- Secure login via Appwrite.
- Seamless logout, clearing authentication tokens.

### Post Creation

- Authenticated users can create posts with a rich text editor (TinyMCE).
- Secure storage of post data in Appwrite's database.

### Post Listing

- Organized display of all published posts, including title, author, and content snippet.

### Post Update & Deletion

- Users can update or delete their posts if they are logged in as the author.

### Route Management

- Efficient routing for different sections (authentication, post creation, post listing) using react-router-dom.

## Tech Stack

**Client:** React,  react-redux, React Hook Form, TinyMCE, react-router-dom

**Server:** Appwrite


## Installation

**Clone the Repository:**

```bash
  git clone https://github.com/ansariwajid9999/BlogHaven.git
```
**Navigate to the Project Directory:**

```bash
    cd BlogHaven
```

**Install Dependencies::**

```bash
    npm install
```

**Start the Development Server:**

```bash
   npm run dev
```

**Access the application in your browser:**

```bash
    http://localhost:5173
```

**Build for Production:**

```bash
   npm run build
```
## Contributing

Contributions are welcome! For `issues or suggestions`, please open an issue or submit a `pull request`.


## Disclaimer

This README offers a high-level overview of the Mega Blog app. For more detailed understanding, refer to the source code.