


<br>

## 🔧 012. Lesson 012 — *Javascript files*

### 📑 Table of Contents:
- [012. Lesson 012 — Javascript files](#-012-lesson-012--javascript-files)
- [012.1 Context](#-0121-context)
- [012.2 Updating code/theory according the context](#️-0122-updating-codetheory-according-the-context)
  - [012.2.1 Create app.js file](#01221-create-appjs-file)
  - [012.2.2 Write basic JavaScript code](#01222-write-basic-javascript-code)
  - [012.2.3 Run the script with Node.js](#01223-run-the-script-with-nodejs)
- [012.3 Issues](#-0123-issues)
- [012.4 Pending Fixes (TODO)](#-0124-pending-fixes-todo)

### 🧠 012.1 Context:

This lesson covers how to create, write, and execute JavaScript files in Node.js. Unlike browser-based JavaScript, Node.js runs `.js` files directly on the server or command line, allowing you to build backend applications, scripts, and tools.

**Key Concepts:**
1. **JavaScript files (`.js`)**: Plain text files containing JavaScript code, executed by the Node.js runtime.
2. **Node.js runtime**: Uses the V8 engine to interpret and run JavaScript outside the browser.
3. **Entry point**: The script you pass to `node` (e.g., `node app`) is the entry point; Node resolves it to `app.js` if the extension is omitted.
4. **`console.log()`**: Standard output method available in both browser and Node.js for printing to stdout.

**Advantages:**
- Quick setup: no build step or compilation for simple scripts.
- Reusable: the same JavaScript syntax across frontend and backend.
- Immediate execution: run scripts from the terminal for automation or quick tests.

**Disadvantages / Gotchas:**
- No automatic module bundling: larger projects typically need a module system (CommonJS or ESM).
- File path resolution: `node app` looks for `app.js` in the current directory; other paths require explicit file extensions or full paths.
- Global scope: top-level variables in a script are module-scoped in Node.js (not truly global), but it's easy to pollute shared state without proper structure.

**When to Consider Alternatives:**
- Use TypeScript (`.ts`) when type safety and tooling are needed.
- Use a framework (Express, Fastify) when building web servers instead of raw scripts.

---

### ⚙️ 012.2 Updating code/theory according the context:

#### **Summary**
- This section walks through creating a minimal Node.js JavaScript file, writing a simple script, and running it from the command line.
- It solves the basic workflow: file creation → code writing → execution.
- The subsections connect in sequence: create the file (012.2.1), add code (012.2.2), then run it (012.2.3).

---

#### 012.2.1 Create `app.js` file

**Subsection Summary:**
- Creates an empty `app.js` file in the project directory using the `touch` command.
- Ensures the file exists before adding code.
- Introduces the standard Unix/touch workflow for file creation.

```bash
touch app.js
```

---

#### 012.2.2 Write basic JavaScript code

**Subsection Summary:**
- Defines a constant `message` with the string `"hello World"` and logs it to the console.
- Demonstrates basic variable declaration (`const`) and `console.log()` usage in Node.js.
- Shows the minimal structure needed for a valid Node.js script.

```js
/* app.js */
const message = "hello World";
console.log(message);
```

---

#### 012.2.3 Run the script with Node.js

**Subsection Summary:**
- Executes the script using the `node` command without the `.js` extension.
- Node.js resolves `app` to `app.js` when the extension is omitted.
- Verifies the script runs correctly and produces the expected output.

```bash
node app
```

Outcome:
```
hello World
```

---

### 🐞 012.3 Issues:

No critical issues identified for this lesson. The example is minimal and follows standard Node.js practices.

| Issue | Status | Log/Error |
|---|---|---|
| _(None)_ | — | — |

---

### 🧱 012.4 Pending Fixes (TODO)

- [ ] _(No pending fixes for this lesson)_

[↑ top — 012. Lesson 012 — Javascript files](#-012-lesson-012--javascript-files)


<br>

## 🔧 013. Lesson 013 — *Reading File - FileSystem*

### 📑 Table of Contents:
- [013. Lesson 013 — Reading File - FileSystem](#-013-lesson-013--reading-file---filesystem)
- [013.1 Context](#-0131-context)
- [013.2 Updating code/theory according the context](#️-0132-updating-codetheory-according-the-context)
  - [013.2.1 Create app2.js file](#01321-create-app2js-file)
  - [013.2.2 Create README.md file](#01322-create-readmemd-file)
  - [013.2.3 Add React README content to README.md](#01323-add-react-readme-content-to-readmemd)
  - [013.2.4 Run the script (initial test)](#01324-run-the-script-initial-test)
  - [013.2.5 Implement FileSystem read, replace, and write logic](#01325-implement-filesystem-read-replace-and-write-logic)
  - [013.2.6 Execute the FileSystem script](#01326-execute-the-filesystem-script)
- [013.3 Issues](#-0133-issues)
- [013.4 Pending Fixes (TODO)](#-0134-pending-fixes-todo)

### 🧠 013.1 Context:

This lesson covers how to read, manipulate, and write files in Node.js using the built-in **`fs`** (FileSystem) module. FileSystem operations are synchronous in this example—`readFileSync` and `writeFileSync` block the event loop until they complete—which is suitable for small files and simple scripts.

**Key Concepts:**
1. **`fs` module**: Node.js core module for file system operations. Loaded via `require('fs')`.
2. **`fs.readFileSync(path, encoding)`**: Reads a file synchronously. With `'utf-8'`, returns a string; without it, returns a `Buffer`.
3. **`fs.writeFileSync(path, data)`**: Writes data to a file synchronously. Overwrites the file if it exists.
4. **String replacement with regex**: `String.prototype.replace()` with a global regex (e.g. `/React/ig`) replaces all matches case-insensitively.
5. **Blocking I/O**: Synchronous methods block the event loop; for large files or concurrent workloads, use `fs.promises` or callbacks.

**Advantages:**
- Simple and linear: no callbacks or promises for basic flows.
- Predictable: execution order is straightforward to follow.
- Ideal for CLI scripts, config processing, or one-off file transforms.
- No external dependencies: `fs` is built into Node.js.

**Disadvantages / Gotchas:**
- Blocking: sync operations freeze the process; avoid them in web servers or long-running apps.
- No encoding handling: if the file is not UTF-8, you may get mojibake or incorrect replacements.
- Path resolution: relative paths (e.g. `README.md`) are resolved from the current working directory (`process.cwd()`), not the script location.
- Overwriting: `writeFileSync` replaces the target file; ensure the output path is intended.

**When to Consider Alternatives:**
- Use `fs.promises.readFile` / `fs.promises.writeFile` or `fs.readFile` / `fs.writeFile` for non-blocking I/O.
- Use streams (`createReadStream`, `createWriteStream`) for large files to reduce memory usage.
- Use a dedicated templating or text-processing library if transformations become complex.

---

### ⚙️ 013.2 Updating code/theory according the context:

#### **Summary**
- This section walks through setting up files, content, and a script that reads `README.md`, replaces every occurrence of "React" with "Luiggie", and writes the result to `README-luiggie.md`.
- It illustrates a typical file-processing pipeline: create files (013.2.1, 013.2.2), populate input (013.2.3), implement logic (013.2.5), and run the script (013.2.4, 013.2.6).
- The subsections progress from file creation through implementation and execution.

---

#### 013.2.1 Create `app2.js` file

**Subsection Summary:**
- Creates an empty `app2.js` file in the project root using the `touch` command.
- Prepares the script file that will contain the FileSystem logic.
- Follows the same workflow as Lesson 012 for creating JavaScript entry points.

```bash
touch app2.js
```

---

#### 013.2.2 Create README.md file

**Subsection Summary:**
- Creates an empty `README.md` file in the project root.
- Serves as the input file that `app2.js` will read and process.
- Ensures the file exists before adding content from an external source.

```bash
touch README.md
```

---

#### 013.2.3 Add React README content to README.md

**Subsection Summary:**
- Populates `README.md` with the official React README content from GitHub.
- Provides realistic text for the replace exercise (multiple occurrences of "React").
- Uses the raw URL for direct content retrieval; the file can be downloaded or pasted manually.

[Add this content in README.md file](https://raw.githubusercontent.com/facebook/react/refs/heads/main/README.md)

---

#### 013.2.4 Run the script (initial test)

**Subsection Summary:**
- Executes `app2.js` before or after adding the full logic to verify the script runs.
- Uses `node app2` (extension optional); Node resolves to `app2.js`.
- Ensures `README.md` exists and is readable before proceeding.

```bash
node app2
```

---

#### 013.2.5 Implement FileSystem read, replace, and write logic

**Subsection Summary:**
- Reads `README.md` synchronously with `fs.readFileSync` and UTF-8 encoding.
- Replaces every "React" (case-insensitive) with "Luiggie" using a regex.
- Writes the modified content to `README-luiggie.md` with `fs.writeFileSync`.
- Logs both the original and transformed data for verification.

```js
/* app2.js */
const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const newData = data.replace(/React/ig, 'Luiggie');           // 👈🏽 ✅ (1)

fs.writeFileSync('README-luiggie.md', newData);               // 👈🏽 ✅ (2)

console.log("1️⃣ Data: ", data);
console.log("2️⃣ New Data: ", newData);                        //👈🏽 ✅ (3)
```

---

#### 013.2.6 Execute the FileSystem script

**Subsection Summary:**
- Runs the completed `app2.js` script after implementing the FileSystem logic.
- Produces `README-luiggie.md` and logs the original and new data to the console.
- Validates the end-to-end flow: read → replace → write → log.

```bash
node app2
```

---

### 🐞 013.3 Issues:

- `console.log` with large strings (e.g. full README) can clutter the terminal output.
- Relative path `README.md` assumes execution from the project root; running from another directory can cause "ENOENT" errors.
- Synchronous I/O blocks the event loop; acceptable for scripts but not recommended for servers.
- No explicit error handling; missing or unreadable files will throw and crash the script.

| Issue | Status | Log/Error |
|---|---|---|
| Large `console.log` output may be unreadable | ℹ️ Informational | `app2.js:9-10` |
| Relative paths depend on `process.cwd()` | ⚠️ Identified | `app2.js:3,5` |
| No try/catch for file operations | ⚠️ Identified | `app2.js:3-7` |
| Blocking sync API usage | ℹ️ Low Priority | `app2.js` |

---

### 🧱 013.4 Pending Fixes (TODO)

- [ ] Add `try/catch` around `fs.readFileSync` and `fs.writeFileSync` in `app2.js` to handle missing files or permission errors gracefully.
- [ ] Consider using `path.join(__dirname, 'README.md')` in `app2.js` to resolve paths relative to the script location for reliable execution from any directory.
- [ ] Optionally truncate or limit `console.log` output (e.g. first 200 chars) in `app2.js:9-10` when logging large strings.
- [ ] For production or reusable scripts, consider migrating to `fs.promises` (async/await) to avoid blocking the event loop.

[↑ top — 013. Lesson 013 — Reading File - FileSystem](#-013-lesson-013--reading-file---filesystem)






---

<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XXX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XXX.1 Context:

### ⚙️ XXX.2 Updating code/theory according the context:

#### XXX.2.1
```jsx
/*  */

```

#### XXX.2.2
```jsx
/*  */

```

#### XXX.2.3
```jsx
/*  */

```

#### XXX.2.4
```jsx
/*  */

```

### 🐞 XXX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]