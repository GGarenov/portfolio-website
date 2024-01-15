# Personal Portfolio Website

This is my personal portfolio website showcasing my skills and some of my projects.

## Features

- A banner section introducing myself
- A skills section where I list my technical skills
- A projects section where I showcase some of my projects
- A contact form powered by EmailJS for anyone interested in reaching out
- A footer section with additional information

## Tech Stack

- React.js
- React Router for routing
- EmailJS for the contact form
- Bootstrap for styling

## Project Structure

The project's main entry point is `src/index.js`, which renders the `App` component inside a `Router`.

The `App` component (defined in `src/App.js`) is the main component of the application. It renders the `NavBar`, `Banner`, `Skills`, `Projects`, `Contact`, and `Footer` components.

The components are defined in the `src/components` directory:

- `Banner.js`: The banner section
- `Contact.js`: The contact form
- `Footer.js`: The footer section
- `NavBar.js`: The navigation bar
- `Projects.js`: The projects section
- `ProjectCard.js`: Individual project cards in the projects section
- `Skills.js`: The skills section

## Running the Project

To run the project locally, use the following commands:

```bash
npm install
npm start
```
To deploy the project to GitHub Pages, use the following command:

npm run deploy
