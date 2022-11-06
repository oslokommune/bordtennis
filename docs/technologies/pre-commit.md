# Pre-commit

[Pre-commit](https://pre-commit.com/)

## Motivation

Pre-commit ensures each commit follows the project standards.

## Usage

### Install hooks

```shell
npx pre-commit install
```

### Run hooks

Pre-commit will automatically run when you commit.

```shell
# To run hooks on all staged files
npx pre-commit run

# To run hooks on all files
npx pre-commit run --all-files
```

## Notes

`pre-commit run` is included in `npm run check`
