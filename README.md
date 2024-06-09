# GameLog Tracker
## Overview
<b>GameLog Tracker</b> is a web application designed to help users track their gaming sessions and maintain a log of their gameplay history. The primary objective of this project is to enhance full stack web development skills, covering both frontend and backend aspects. The application supports full CRUD (Create, Read, Update, Delete) operations for managing game logs, ensuring users can efficiently handle their data. Additionally, it features a day-night mode toggle, providing a customizable user interface that enhances user experience according to different lighting conditions.


<img src="/public/game-tracker.png" />

## Features
- <b>Dashboard:</b> View a summary of all logged game sessions. <br/>
- <b>CRUD Operations:</b> Create, read, update, and delete game logs to manage your gaming history effectively.
- <b>Search Functionality:</b> Easily search through game logs to quickly find specific entries.
- <b>Day-Night Mode:</b> Toggle between day and night modes for a better user experience.
- <b>Responsive Design:</b> Optimized for both desktop and mobile views.<br/>
## Technologies Used<br/>
- <b>Frontend:</b> Next.js, Tailwind CSS<br/>
- <b>Backend:</b> Node.js, Prisma ORM<br/>
- <b>Database:</b> PostgreSQL<br/>
- <b>Others:</b> TypeScript, ESLint<br/>
## Getting Started
Clone the repository:

```bash
git clone https://github.com/buraxta/gamelog-tracker.git
cd gamelog-tracker
```
Install dependencies:
```bash
npm install
```

Set up the database:
```bash
npx prisma migrate dev
```

Run the development server:
```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Contribution
Feel free to fork the repository, create a new branch, and submit a pull request with your enhancements or bug fixes.
