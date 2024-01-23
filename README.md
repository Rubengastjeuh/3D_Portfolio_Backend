# 3D Portfolio Deno Backend

Welcome to the 3D Portfolio Deno Backend! This backend is built with Deno and designed to complement the [3D Portfolio Frontend](https://github.com/Rubengastjeuh/3D_Portfolio_Frontend).

## Getting Started

Follow these steps to set up and run the Deno backend:

1. **Install Deno:**
   Make sure you have Deno installed by following the instructions in the [Deno Manual](https://docs.deno.com/runtime/manual).

2. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/Rubengastjeuh/3D_Portfolio_Backend.git
   ```

3. **Navigate to the Backend Directory:**
   ```bash
   cd 3D_Portfolio_Backend
   ```

4. **Install Dependencies:**
   ```bash
   deno cache --unstable deps.ts
   ```

5. **Run the Backend Locally:**
   ```bash
   deno run --unstable --allow-net --allow-write --allow-read --allow-plugin --allow-env --unstable server.ts
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser to verify that the backend is running.

6. **Deploy on Deno Deploy:**
   - Visit [Deno Deploy](https://dash.deno.com).
   - In the dashboard, go to Projects and add a new project.
   - Select your repository and edit the data according to your preferences.

## Database Operations

The backend provides templates for POST, UPDATE, and DELETE operations along with validators. Customize and expand the project to suit your needs.

Feel free to explore, experiment, and showcase your 3D Portfolio! If you encounter any issues or have questions, refer to the README file or the Deno documentation. Happy coding!