---
title: Introduction
---
# Introduction to Cajá

Welcome to the Cajá programming language documentation. 

Cajá is a modern programming language designed for writing fast, reliable, and expressive code. It embraces a **declarative model**, meaning it focuses on expressing *what* to do rather than *how* to do it, heavily leveraging immutability, data transformations, and pure functions.

The Cajá language is designed to promote functional programming and was built to quickly create simple scripts that can be used as a prototype to validate a proof of concept.

### Declarative Business Rules
By using Cajá, teams are encouraged to describe business rules using a declarative model. This approach allows development and product teams to achieve a faster build -> test -> validate cycle. Instead of getting bogged down in implementation details and imperative control flows, developers can focus on what needs to be achieved, enabling rapid iteration and clearer communication of business requirements.

### Why Cajá?
- **Functional by Design:** Embraces functional programming principles to ensure predictable, side-effect-free, and testable code.
- **Rapid Prototyping:** Streamlines the process of turning ideas into functional scripts, making it the perfect tool for validating proofs of concept.
- **Faster Validation Cycles:** The declarative nature reduces overall complexity, ensuring that testing and validation take a fraction of the usual time.

## Installation

You can install the Caja CLI globally using your preferred package manager:

::: code-group
```bash [npm]
npm install -g @caja/cli
```
```bash [yarn]
yarn global add @caja/cli
```
```bash [bun]
bun add -g @caja/cli
```
:::

## CLI Usage

The `caja` command-line interface allows you to execute `.caja` scripts, as well as encode and decode them into transportable token strings.

### 1. Check Version
To verify that Cajá was installed successfully and check the current version, run:
```bash
caja --version
```

### 2. Run a Script
Parse and evaluate a `.caja` script file to execute it:
```bash
caja run -f <file.caja>
```

### 3. Encode a Script
Encode a `.caja` script file and its dependencies into a single base64-like token string:
```bash
caja encode -f <file.caja>
```

### 4. Decode a Token
Decode a token string back into its original `.caja` script modules and save them to a directory:
```bash
caja decode <token> -o <output_dir>
```

::: tip
You can type `-o .` to extract and decode the script directly into your current directory.
:::
