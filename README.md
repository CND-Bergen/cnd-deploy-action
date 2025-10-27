# cnd-deploy-action

A basic JavaScript-based GitHub action that prints "Hello World".

## Usage

To use this action in your workflow, add the following step:

```yaml
name: Test Hello World Action
on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Run Hello World Action
        uses: CND-Bergen/cnd-deploy-action@main
```

## Development

This action is built with Node.js and uses the `@actions/core` library.

### Building the action

Before committing changes, you need to build the action to bundle it with its dependencies:

```bash
npm install
npm run build
```

This will create a `dist/index.js` file that contains the bundled code.

### Running locally

```bash
npm install
node index.js
```

## License

See [LICENSE](LICENSE) for details.