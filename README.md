


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