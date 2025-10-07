# react-concept-jsx-essentials

A focused demo that explains JSX from the ground up-definitions, syntax, and working examples (beginner → advanced).

> Live: https://a2rp.github.io/react-concept-jsx-essentials/  
> Repo: https://github.com/a2rp/react-concept-jsx-essentials

---

## Why this exists

-   Keep JSX fundamentals in one place with short theory + live, editable UI.
-   Show clean, repeatable patterns that scale across apps.
-   Reuse the same design tokens and layout shell for consistency across all concept repos.

---

## What this covers

-   **What is JSX** — how it compiles; JSX as an expression.
-   **Expressions inside `{}`** — values, function calls, template literals.
-   **Attributes & props** — `className`, `htmlFor`, `tabIndex`, strings/booleans/numbers, spreads.
-   **Events** — camelCase handlers; passing functions vs calling.
-   **Inline `style`** — object syntax with camelCased properties.
-   **Conditional rendering** — ternary, `&&`, `null`, common truthy/falsey edges (`0` renders).
-   **Fragments** — short and long syntax, keys on `React.Fragment`.
-   **Lists & keys** — stable identity vs index keys (live inputs to expose the difference).
-   **Children & composition** — `props.children`, function-as-children (render prop).
-   **Raw HTML** — `dangerouslySetInnerHTML` with a clear safety warning.
-   **Special props** — `key` and `ref` don’t appear in `props`.
-   **Comments in JSX** — block comments in braces.

Each topic includes a small explanation, a working UI, and a matching code snippet.

---

## Features

-   React 18 + Vite
-   Tokenized dark/light theme (CSS variables) + styled-components
-   Fixed translucent header (from base shell), responsive grid cards
-   Accessible defaults: focus-visible rings, reduced-motion respect
-   Print-friendly styles, tuned scrollbars, consistent spacing scale

---

## Getting Started

```bash
git clone https://github.com/a2rp/react-concept-jsx-essentials.git
cd react-concept-jsx-essentials
npm install
npm run dev
```
