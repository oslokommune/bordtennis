# Bordtennis scoreboard

## Motivation

The new table tennis table arrived. We needed a scoreboard.

## Printscreen

![image](https://user-images.githubusercontent.com/1145370/200128995-ec1b2f9c-b5f7-4050-8d01-f436db6f62d2.png)

## Prerequisites

- Node 16.x

## Start development server

1. `npm install`
2. `npm run dev`
3. Open link presented in terminal

## Stack

```mermaid
flowchart LR
    A[Push to main] ==> B[Github Actions]
		B ==> C[Github Pages]
		click C href "https://oslokommune.github.io/bordtennis" "Open scoreboard"
```
