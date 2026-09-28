<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project implementation guidelines

### Design and responsive UI

- Build every page and component mobile-first, and make layouts work across mobile, tablet, and desktop.
- Follow the Tapsi design system for UI, typography, spacing, colors, and other design tokens. Reuse the project's defined values; avoid arbitrary sizes, spacing, or colors.
- Use the design system's font sizes and weights consistently.
- Use Solar Icons for UI icons.
- Prefer semantic HTML elements over generic containers. Use the appropriate elements for navigation, actions, and form controls.
- Build reusable components when patterns repeat, and keep each component focused. Avoid unnecessary abstractions and over-engineering.

### Accessibility and behavior

- Follow accessibility best practices throughout the codebase.
- Make every interactive element keyboard accessible and provide a clear, visible focus state.
- Give form controls accessible labels, and provide meaningful alternative text for informative images.
- Do not use color as the only way to communicate meaning or state.
- Implement the requested interactions fully. Keep state changes predictable and reflect them promptly in the UI.

### Code quality and delivery

- Do not add comments to application code. Keep code free of unused imports, dead code, and debug statements.
- Prefer native React, browser, and CSS features for simple tasks; do not add heavy dependencies without a clear need.
- Use clear, consistent names for files, components, variables, and functions. Avoid duplication when a straightforward reusable solution fits.
- Keep changes scoped to the requested work; do not modify unrelated parts of the project.
- Before considering a UI feature complete, verify its responsive behavior, accessibility, and consistency with the Tapsi design system.
- When commits are requested, make them atomic and focused, with concise descriptive messages.
