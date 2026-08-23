# Cajá Documentation

This repository contains the source code for the official documentation website of the **[Cajá Programming Language](https://github.com/caja-tech/caja-cli)**.

The site is built using **[VitePress](https://vitepress.dev/)**, a Vue-powered Static Site Generator (SSG) that provides a fast, markdown-centric authoring experience.

## Repository Structure

- **`docs/`**: The root directory for the VitePress site.
  - **`docs/.vitepress/`**: Contains the VitePress configuration (`config.mjs`), custom CSS styling (`theme/custom.css`), and the custom Cajá syntax highlighting grammar (`caja.tmLanguage.json`).
  - **`docs/use-cases/`**: Contains markdown files detailing real-world Cajá scripts (e.g., E-Commerce, Financial Calculus).
  - **`docs/releases/`**: Contains dynamic build-time routing scripts (`[version].paths.js`) that automatically fetch and generate pages for official GitHub releases.
- **`scripts/`**: Contains functional `.caja` scripts used as examples throughout the documentation, as well as `.tape` files used by VHS to generate terminal GIFs.

## Key Technical Features

1. **Custom Syntax Highlighting**: The site includes a custom TextMate grammar (`caja.tmLanguage.json`) to provide native syntax highlighting for ````caja` code blocks.
2. **Dynamic GitHub Releases**: Instead of manually writing release notes, the `docs/releases/` section uses VitePress **Dynamic Routes**. During the build process (`npm run docs:build`), VitePress hits the GitHub API, fetches the pre-parsed HTML of every Cajá release, and generates a dedicated, physical HTML page for each one. 
3. **Advanced Theming**: The VitePress theme has been heavily customized with CSS to match Cajá's branding, including responsive hero sections, marquee animations, and custom action buttons.

## Local Development

To run the documentation site locally, you need [Node.js](https://nodejs.org/) installed.

1. **Install Dependencies**
   ```bash
   bun install
   ```

2. **Start the Development Server**
   ```bash
   bun run docs:dev
   ```
   The site will be available at `http://localhost:5173`. Hot-Module Replacement (HMR) is enabled, so changes to markdown or CSS files will reflect instantly.
   
   *Note: When you start the dev server, the config file will automatically fetch the latest releases from GitHub to populate the sidebar and dynamic routes.*

3. **Build for Production**
   ```bash
   bun run docs:build
   ```
   This will generate the static HTML files into `docs/.vitepress/dist`. You can preview the production build locally by running:
   ```bash
   bun run docs:preview
   ```

## Contributing

When adding new documentation:
- Create or modify standard Markdown (`.md`) files inside the `docs/` directory.
- Use standard VitePress syntax for frontmatter and Vue components.
- If you add a new page, remember to update the sidebar mapping in `docs/.vitepress/config.mjs`.