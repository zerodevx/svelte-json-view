![NPM Version](https://img.shields.io/npm/v/%40zerodevx%2Fsvelte-json-view)
![GitHub License](https://img.shields.io/github/license/zerodevx/svelte-json-view)
![NPM Downloads](https://img.shields.io/npm/dw/%40zerodevx%2Fsvelte-json-view)

# svelte-json-view

> View JSON data prettily.

A lightweight, expandable, tree-like JSON viewer. Use it as a Svelte component or drop it into any
Vanilla JS app.

Here's a
[demo](https://zerodevx.github.io/json-pretty-print/H4sIAAAAAAAAA-3RO2_bMBAA4L8icBYsyW97atGtKNDBo-GBlk7SIXyBPDlNA__3Hp2gCVoNWgVwk-7Fw33nV4GNOFa5GAJ4IzWI4-OzLCuRi_fAd9ub7KSReo6Blqg-qr7AL6mdgkVtNWdlTXjjHvID5MJbFfs16Ct4zjpvW4yhVyFvkqTnZE_kwrEoPs0p3pJFA60cFC2c6bj5ipbLf1gPOkMXBp01VlmfBaSM96Q8q60JUBPQ4DPZoMNQo-kyUEgLHlDbwZB_4SEnDkvHkzhKqOG3NXHPrwFl8TnnPLTgwdQQ4s7Uw-MeCrueOK2k6QbZxRCYeC5L2GItCXmRtxvc7_yC7Pjv_HGGG3iugya2wHNQQMTxSy4auOHjrTM_9uLi4AbCE1nHpTbEU8r65ykew9tnBuDIt95b3uqe_23R9hqP_N6B_9SfZCs9ivsldkT85Qj-chL-MuHPHX81gr-ahL9K-HPHX4_gryfhrxP-3PE3I_ibSfibhD93_O0I_nYS_jbhzx1_N4K_m4S_S_hzx9-P4O8n4e8T_tzxDyP4h0n4h4Q_d_yq_F-_KqfoV2XSn63-5Q9ETMAG5BMAAA/).

## Install

```bash
npm i @zerodevx/svelte-json-view
```

## Usage

### Svelte

If you're using this in a Svelte app:

```html
<!-- Component.svelte -->
<script>
  import { JsonView } from '@zerodevx/svelte-json-view'

  let json = $state({ foo: 'bar' })
</script>

<JsonView {json} />
```

> [!WARNING]  
> **Requires Svelte v5+ (runes mode).** For compatibility with Svelte v4 or earlier, please use
> `v1.x`.

### Vanilla JS

For other projects with a bundler:

```js
// Import the bundled code
import { createJsonView } from '@zerodevx/svelte-json-view/bundled.js'

const app = createJsonView({
  target: document.querySelector('#target'), // node to render into
  json: { foo: 'bar' } // json data to view
})

app.update({ foo: 'baz' }) // update the data

app.destroy() // remove from DOM
```

Or load via CDN:

```html
<head>
  <script type="module">
    import { createJsonView } from 'https://cdn.jsdelivr.net/npm/@zerodevx/svelte-json-view@2'
    const app = createJsonView({ target: document.querySelector('#target'), json: { foo: 'bar' } })
  </script>
</head>
<body>
  <div id="target"></div>
</body>
```

## Theming

In general, use CSS variables.

| Name                           | Default        | Description                               |
| ------------------------------ | -------------- | ----------------------------------------- |
| `--jsonPaddingLeft`            | `1rem`         | Left padding applied at each depth        |
| `--jsonBorderLeft`             | `1px dotted`   | Left border style applied at each depth   |
| `--jsonBracketColor`           | `currentcolor` | Colour for brackets `[`, `{`, `}` and `]` |
| `--jsonBracketHoverBackground` | `#e5e7eb`      | Bracket hover background                  |
| `--jsonSeparatorColor`         | `currentcolor` | Colour for separators `:` and `,`         |
| `--jsonKeyColor`               | `currentcolor` | Colour for keys                           |
| `--jsonValColor`               | `#9ca3af`      | Default colour for values                 |
| `--jsonValStringColor`         | `#059669`      | Colour for `string` values                |
| `--jsonValNumberColor`         | `#d97706`      | Colour for `number` values                |
| `--jsonValBooleanColor`        | `#2563eb`      | Colour for `boolean` values               |

For a custom font (monospace recommended) or CSS var overrides, try wrapping the component and scope
the styles to the wrapper:

<!-- prettier-ignore -->
```html
<div class="wrap">
  <JsonView {json} />
</div>

<style>
  .wrap {
    font-family: monospace;
    font-size: 14px;
    --jsonBorderLeft: 2px dashed red;
    --jsonValColor: blue;
    ...
  }
</style>
```

## Props

| Name    | Type     | Default     | Description                      |
| ------- | -------- | ----------- | -------------------------------- |
| `json`  | `object` | `undefined` | Un-stringified object to display |
| `depth` | `number` | `Infinity`  | Initial expansion depth          |

## Development

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/zerodevx/svelte-json-view.git
cd svelte-json-view
npm i
```

### Run the Dev Server

Start the [Vite](https://github.com/vitejs/vite) development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the test page. The library source files are
located in `src/lib/`.

### Run Tests

End-to-end tests run on [Playwright](https://github.com/microsoft/playwright):

```bash
npm test
```

Test specifications in `src/routes/`.

### Build the Package

Packaging via [SvelteKit](https://kit.svelte.dev/docs/packaging):

```bash
npm run build
```

## Contributing

### Bugs and Feature Requests

Please open a new issue or discussion on GitHub to request features or report bugs.

### Pull Requests

Standard
[GitHub contribution workflow](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
applies. Please ensure all tests pass before submitting a pull request.

## Changelog

See the [releases](https://github.com/zerodevx/svelte-json-view/releases) page.

## License

ISC
