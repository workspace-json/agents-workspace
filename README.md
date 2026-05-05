# workspace.json - Specification Site

Documentation site for the [workspace.json](https://workspacejson.dev) open convention.

Built with [Astro Starlight](https://starlight.astro.build).

## What this repo is

This is the source for the workspace.json specification documentation at [workspacejson.dev](https://workspacejson.dev). It contains the v0.1 spec, examples, governance docs, and reference for the agents-audit CLI.

The spec source lives in [`src/content/docs/spec.mdx`](src/content/docs/spec.mdx). The JSON Schema and TypeScript types are published separately as [`@workspacejson/spec`](https://www.npmjs.com/package/@workspacejson/spec) on npm.

## Local development

```bash
npm install
npm run dev
```

Site runs at `localhost:4321`.

## Contributing

Corrections and improvements to the documentation are welcome via pull request.

Substantive changes to the specification itself should go through the RFC process at [github.com/workspace-json/agents-workspace](https://github.com/workspace-json/agents-workspace), not here.

**Adding your tool to the implementations list:** If your tool reads or writes workspace.json, open a PR editing [`src/content/docs/implementations.mdx`](src/content/docs/implementations.mdx). Add one line with your tool name, a link, and one sentence on what it does. We list any tool that documents workspace.json support in its public docs.

See [governance](https://workspacejson.dev/governance) for how the spec is maintained.

## Issues and discussion

[Open an issue](https://github.com/workspace-json/agents-workspace/issues) for documentation bugs, broken links, or spec clarification questions.

## License

Apache 2.0. See LICENSE.
