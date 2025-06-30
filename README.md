# Student-Portfolio-Platform-

## **Overview**

Welcome to the Student Portfolio Platform!

This platform serves as a central hub for students to showcase their academic and professional profiles, including their experience, skills, and projects. It also aims to foster peer connections by allowing users to explore and discover other students' portfolios.

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Current Progress](#current-progress)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Future Enhancement](#future-enhancement)

## Features

✅ User Profile Management: Students can showcase their academic and professional profiles, including experience, skills, and projects.

✅ Profile Creation & Editing: Users can create new profiles and comprehensively update existing ones.

✅ Dynamic Forms: Frontend forms allow dynamic addition of multiple entries for experience, skills, and projects.

✅ Profile Viewing: Users can view their own profiles and, in the future, explore other students' portfolios.

## Tech Stack

*Frontend*: Next.js (React), Tailwind CSS

*Backend*: Next.js API Routes

*Database*: MongoDB (with Mongoose ODM)

*API Client*: Axios

## Current Progress

**Frontend Profile Management:**

* Enhanced Profile Form: A client-side React component featuring a dynamic form. It allows users to input basic profile details, dynamically add multiple entries for experience, skills, and projects, pre-populate fields by fetching existing data (currently the first user found in DB), and submits data as POST (for new profiles) or PUT (for updates).

+ View My Profile Page: A read-only page that displays the details of a single user's profile (currently displays the first user fetched from the database).

**Basic Page Structure & Navigation:**

* Homepage : Serves as the project's "Welcome Mat," providing a clear introduction and calls to action ("Create/Edit Your Profile", "Explore Portfolios").

+ Placeholder Pages: Initial page components for home, explore, ranking, and projecttracker within the src/app directory have been created, establishing basic routes.

- Internal Navigation: Uses Next.js Link component for client-side routing between these pages

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v12.x or higher)

+ npm (v6.x or higher)

- MongoDB (local or hosted like MongoDB Atlas)

### Installation

Clone the Repository:
```
git clone <https://github.com/ACM-JUIT/Team-9-Student-Portfolio-Platform-.git>

cd student-portfolio-platform`
```

### Install Dependencies:
```
npm install
```
### Set Up Environment Variables

Create a .env file with:
```
MongoURL=mongodb://localhost:27017/your_database_name_here
```
### Run the Application:
```
npm run dev
```
## Usage

1) Create/Edit Profile: Navigate to the "My Profile" section to create or update your academic and professional details.

2) Explore Portfolios: (Future) Discover other students' profiles.

## Future Enhancement

- Skill Endorsements: A system for users to endorse skills, enhancing profile credibility.

- Ranking System: Implementation of leaderboards based on criteria like projects or skill endorsements.

- Project Tracker Module: A dedicated section for users to manage projects with progress tracking, tasks, and deadlines.
