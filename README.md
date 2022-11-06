# Bordtennis scoreboard

## Motivation

The new table tennis table arrived. We needed a scoreboard.

## Printscreen

![image](https://user-images.githubusercontent.com/1145370/200128995-ec1b2f9c-b5f7-4050-8d01-f436db6f62d2.png)

## Stack

- [Vite](https://vitejs.dev/)
- [Vue](https://vuejs.org/)
- [Github Pages](https://pages.github.com/)

## Contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## Production pipeline

```mermaid
flowchart LR
    A[Push to main] ==> B[Github Actions]
		B ==> C[Github Pages]
		click C href "https://oslokommune.github.io/bordtennis" "Open scoreboard"
```
