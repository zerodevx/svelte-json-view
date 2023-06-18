#!/usr/bin/env zx

await $`npm run lint && npx svelte-package -o package && npx vite build -c vite.dist.config.js`
const pkg = await fs.readJson('package.json')
pkg.scripts = undefined
await fs.writeJson('package/package.json', pkg, { spaces: 2 })
await fs.copy('README.md', 'package/README.md')
await fs.copy('LICENSE', 'package/LICENSE')
await fs.copy('package/dist/index.umd.js', 'package/dist/index.umd.cjs')
await $`cd package && npx publint`

echo`
To publish to npm, run:
$ cd package && npm publish --access public
`
