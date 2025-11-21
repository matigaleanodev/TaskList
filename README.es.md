# TaskList

[English](README.md)

Proyecto de práctica Angular creado para Argentina Programa. Explora componentes y estado de tareas persistido en el navegador mediante localStorage.

## Stack

Angular · TypeScript · JSON Server.

## Alcance y configuración

El TaskService actual lee y escribe la clave `tasks` de localStorage, inicializada desde Tasklist cuando la clave no existe. Los datos pertenecen al origen del navegador; no hay sincronización con un servidor. El script opcional `npm run server` expone db.json en el puerto 5001, pero el TaskService actual no lo consume. Es un ejercicio de aprendizaje, no un servicio de tareas para producción.

## Desarrollo local

Usar un entorno Node.js compatible con package.json y el lockfile de dependencias, cuando exista.

```sh
npm install
npm start
npm run build
npm test
```
