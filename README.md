# LightGNN-Peptide Frontend

This repository contains the frontend for the LightGNN-Peptide application, a system for generating and evaluating stable short peptides using lightweight graph transformers. The frontend is built with React, Vite, and Tailwind CSS.

## Running the Project Locally

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Deployment to GitHub Pages

You can deploy this application to GitHub Pages to create a live demo.

### 1. Prerequisites

*   You have a GitHub account.
*   You have created a new repository on GitHub and pushed the code to it.

### 2. Configuration

Before deploying, you need to configure the project to work with your specific GitHub repository.

**A. Update `package.json`:**

Open the `frontend/package.json` file and find the `homepage` property. You must update this URL to match your GitHub username and repository name.

Replace `user` with your GitHub username and `LightGNN-Peptide` with your repository name.

```json
"homepage": "https://user.github.io/LightGNN-Peptide",
```

**B. Update `vite.config.js`:**

Open the `frontend/vite.config.js` file and ensure the `base` property matches your repository name. It should be `/<repository-name>/`.

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/LightGNN-Peptide/', // Make sure this matches your repository name
})
```

### 3. Deploy the Application

Once the configuration is correct, you can deploy the application with a single command.

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    This command will first build the application and then push the contents of the `dist` folder to a new branch named `gh-pages` in your repository.

### 4. Configure GitHub Pages

1.  On GitHub, navigate to your repository's **Settings** tab.
2.  In the left sidebar, click on **Pages**.
3.  Under the "Build and deployment" section, select **`gh-pages`** as the branch to deploy from.
4.  Ensure the folder is set to **`/(root)`**.
5.  Click **Save**.

### 5. Access Your Live Demo

After saving, GitHub will start deploying your site. It may take a few minutes for the changes to go live.

The URL for your live demo will be displayed at the top of the "Pages" settings. It should be the same URL you configured in the `homepage` property of your `package.json` file.
