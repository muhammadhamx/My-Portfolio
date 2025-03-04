# Muhammad Hamza Sajid - Portfolio

Welcome to the portfolio website of **Muhammad Hamza Sajid**, a versatile **Full-Stack Web Developer**. This Angular 19 project showcases his skills, experience, and projects with a modern, engaging design featuring animations and a responsive layout.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Structure](#structure)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview
This portfolio is designed to highlight **Muhammad Hamza Sajid’s** expertise in creating cross-platform applications using technologies like **Angular, Node.js, MongoDB, NestJS, PostgreSQL, Ionic, and Electron**. It features a sleek **black-and-red theme**, dynamic animations, and a **responsive layout** for both desktop and mobile users.

## Features
- **Dynamic Content**: All content (name, titles, summary, skills, experience, projects, contact) is managed dynamically in TypeScript, making it easy to update.
- **Animated Background**:
  - A morphing hexagon shape that animates continuously using **Anime.js**.
  - A line drawing at the bottom of the screen with animated text (**"Innovative Web Solutions"**) using Anime.js.
- **Typing Effect**: Rotating titles (e.g., "Full-Stack Web Developer", "Cross-Platform Specialist", "Scalable Solutions Architect") with a blinking cursor in the Home section.
- **Sliding Content**: Sections slide in from the left or right when visible on scroll, enhancing user engagement.
- **Responsive Design**: Fully responsive layout for mobile devices (below 768px), with adjusted padding, font sizes, and button layouts.
- **Project Buttons**: Each project includes **"Live Preview"** and **"GitHub Folder"** buttons linking to live demos and repositories.
- **Profile Picture**: Displays a circular profile picture in the Home section, styled with a **red border** and animated slide-in.
- **Smooth Navigation**: Scroll-based navigation with buttons to jump between sections (**Home, Skills, Experience, Projects, Contact**), using **smooth scrolling**.

## Technologies Used
- **Framework**: Angular 19 (standalone components)
- **Animation Library**: Anime.js for morphing shapes, line drawings, typing effects, and sliding animations
- **Transition Library**: Barba.js for page-level transitions (though used minimally in this single-page layout)
- **Styling**: SCSS for responsive, theme-based styling (**black background, red accents**)
- **Dependencies**:
  - `@angular/core`, `@angular/common`, etc. (Angular 19 packages)
  - `animejs` for animations
  - `barba/core` for transitions

## Installation
To run this portfolio locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/muhammadhamx/portfolio.git
cd portfolio
```

### 2. Install Dependencies
Ensure you have **Node.js** and **npm** installed, then run:
```bash
npm install
```

### 3. Add Your Profile Picture
Place your profile picture (e.g., `profile-picture.jpg`) in the `src/assets/` folder.
Update the `profilePicture` path in `src/app/app.component.ts` if the filename or location differs:
```typescript
profilePicture = 'assets/your-image.jpg';
```

### 4. Update Project URLs
In `src/app/app.component.ts`, update the `liveUrl` and `githubUrl` properties in the `projects` array with your actual **live demo** and **GitHub repository URLs**.

### 5. Run the Application
```bash
ng serve
```
Open your browser to **[http://localhost:4200](http://localhost:4200)**.

## Usage
- Navigate the portfolio by **scrolling** or clicking the **red buttons** at the bottom of each section to jump to **Home, Skills, Experience, Projects, or Contact**.
- Explore **Muhammad Hamza Sajid’s** skills, work experience, and projects, with links to **live previews and GitHub repositories**.
- The **animated background** (morphing hexagon and line drawing) and **typing titles** enhance the visual experience, while the **responsive design** adapts to **mobile and desktop screens**.

## Structure
The project follows a standard Angular structure with a **single standalone component (AppComponent)**:
```
portfolio/
│── src/app/app.component.ts       # Contains all dynamic content, animations, and logic
│── src/app/app.component.html     # Defines the HTML template with dynamic bindings
│── src/app/app.component.scss     # Handles styling, including the black-and-red theme and responsive design
│── src/assets/                    # Stores static assets like the profile picture
│── node_modules/                  # Manages dependencies (Angular, Anime.js, Barba.js)
```

## Contributing
This portfolio is a **personal project**, but contributions are welcome if you’d like to enhance it further.

To contribute:
1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix.
3. **Submit a pull request** with a description of your changes.

## Contact
📧 **Email**: muhammadhamzasajid6@gmail.com  
📞 **Phone**: +92 347 8866012  
🐙 **GitHub**: [github.com/muhammadhamx](https://github.com/muhammadhamx)  
