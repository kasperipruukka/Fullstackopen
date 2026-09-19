# Full Stack Open Workspace Guidelines

## Project Structure

- Each Full Stack Open exercise is an independent Vite + React project under `osa1/` or `osa2/`.
- Keep a completed exercise unchanged when creating the next exercise. The next exercise starts as a copy of the previous relevant exercise.
- Do not copy generated `node_modules/` or `dist/` directories.
- Keep exercise data such as `db.json` in version control.

## New Exercise Workflow

When creating a new exercise folder:

1. Inspect the previous exercise and confirm the destination folder does not already exist.
2. Copy the previous exercise to the requested numbered folder, excluding `node_modules/` and `dist/`.
3. Update the `<title>` in the new project's `index.html` to match the new exercise number, for example `2-12-kurssitiedot`.
4. Preserve existing source code, `db.json`, and npm scripts unless the new exercise explicitly requires a change.
5. If the project has `db.json`, ensure `json-server` is in `devDependencies` and the server script is `"server": "json-server --port 3001 db.json"`. Do not rely on `npx` to download it at runtime.
6. Run `npm install`, `npm run lint`, and `npm run build` in the new project. Report any findings.

## Development Commands

Run commands from the individual exercise directory:

```powershell
npm run dev
npm run server
npm run lint
npm run build
```

- `npm run server` runs the project-local `json-server` for exercises that include it. Install it with `npm install --save-dev json-server` when adding a JSON server to a project.
- React code should use Axios and `useEffect` for the initial server-data fetch when the exercise calls for it.

## Editing Principles

- Make focused changes only in the exercise currently being worked on.
- Preserve the existing JavaScript, React, and formatting style of that exercise.
- Do not alter earlier completed exercises when preparing the next one.
