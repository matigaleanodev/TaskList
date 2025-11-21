# TaskList

[Español](README.es.md)

Angular practice project created for Argentina Programa. It explores components and task state persisted in the browser with localStorage.

## Stack

Angular · TypeScript · JSON Server.

## Scope and configuration

The current TaskService reads and writes the `tasks` key in localStorage, seeded from Tasklist when the key is absent. Data belongs to the current browser origin; there is no server synchronization. The optional `npm run server` script exposes db.json on port 5001, but the current TaskService does not consume it. This is a learning exercise, not a production task service.

## Local development

Use a Node.js toolchain compatible with package.json and the dependency lockfile, when present.

```sh
npm install
npm start
npm run build
npm test
```
