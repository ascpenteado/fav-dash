# @fav-dash

## Main Technologies Used

- **Nx**: A set of extensible dev tools for monorepos, used for efficient development workflows.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript providing static typing capabilities.
- **Storybook**: Tool for developing UI components in isolation for React, Vue, and Angular.

## Running the Project

### Prerequisites

Make sure you have Node.js v18 or above and Yarn installed.

### Steps to Run the Project (Order Matters)

Follow these steps in order to successfully run the application:

1. **Install Dependencies:**
    ```bash
    yarn install
    ```

2. **Build Components:**
    ```bash
    yarn components:build
    ```
   Build the components for the application.

3. **Build the Application:**
    ```bash
    yarn app:build
    ```
   Build the application for production.

4. **Start Backend API (JSON Server):**
    ```bash
    yarn api:dev
    ```
   Start the backend API.

5. **Run the Application in Production Mode:**
    ```bash
    yarn app:start
    ```
   
   Run the application in production mode. Access it at [http://localhost:4200](http://localhost:4200).

### Additional Commands

These commands can be used separately or as needed:

- **Run Application in Development Mode:**
    ```bash
    yarn app:dev
    ```
    Start the application in development mode using Nx. Access it at [http://localhost:4200](http://localhost:4200).

- **Run Tests:**
    ```bash
    yarn app:test
    ```
   Run tests for the application.

- **Linting:**
    ```bash
    yarn app:lint
    ```
   Lint the application code.

- **Start Storybook:**
    ```bash
    yarn storybook:start
    ```
   Start Storybook to develop UI components in isolation. Access it at [http://localhost:4400](http://localhost:4400).

- **Test Storybook:**
    ```bash
    yarn storybook:test
    ```
   Test Storybook components. Attention: must start Storybook first with the command above.

- **Build Storybook:**
    ```bash
    yarn storybook:build
    ```
   Build the Storybook for production.


