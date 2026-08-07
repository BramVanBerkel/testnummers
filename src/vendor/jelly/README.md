# Vendored Jelly UI

Upstream: <https://github.com/jelly-org/ui> (MIT) — <https://jelly-ui.com/>

`jelly.js` here is **not** upstream's published bundle. Jelly UI is not on npm (the `jelly-ui`
name belongs to an unrelated package) and upstream does not commit its `dist/`, so we build it
ourselves and check the result in.

It is also a **scoped** build. Upstream's entry point registers all 40 custom elements as top-level
side effects, which no bundler can tree-shake — 318 kB. The entry we build lists only the elements
this app uses, which costs 137 kB (37 kB gzipped).

`jelly.d.ts` is upstream's full declaration bundle, so it describes elements this bundle does not
register. If a template references a `jelly-*` tag that was never added to the entry, TypeScript
will not catch it — the element simply renders as an unstyled inert box.

## Updating

```sh
scripts/update-jelly.sh              # latest main
scripts/update-jelly.sh <git-ref>    # a specific commit or branch
```

The script writes the entry file (see `ENTRY` inside it — that is the list of registered elements),
builds, and refreshes the three files here. `VERSION` records the upstream commit that was built.

Do not edit `jelly.js` or `jelly.d.ts` by hand; they are regenerated. Both are excluded from
`npm run eslint`.
