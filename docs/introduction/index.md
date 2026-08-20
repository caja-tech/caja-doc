# Introduction to Cajá

Welcome to the Cajá programming language documentation. 

Cajá is a modern programming language designed for writing fast, reliable, and expressive code. It embraces a **declarative model**, meaning it focuses on expressing *what* to do rather than *how* to do it, heavily leveraging immutability, data transformations, and pure functions.

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

### 1. Run a Script
Parse and evaluate a `.caja` script file to execute it:
```bash
caja run -f <file.caja>
```

### 2. Encode a Script
Encode a `.caja` script file and its dependencies into a single base64-like token string:
```bash
caja -f <file.caja>
```

### 3. Decode a Token
Decode a token string back into its original `.caja` script modules and save them to a directory:
```bash
caja <token> -o <output_dir>
```
