# svelte-json-view

> View JSON data prettily.

Display JSON data in a tree-like expandable view. Use as a Svelte component or in Vanilla JS.

## Usage

Install the package:

`$ npm i -D @zerodevx/svelte-json-view`

### Svelte

If you're this in a Svelte app:

```html
<script>
import { JsonView } from '@zerodevx/svelte-json-view'

const json = { foo: 'bar' }
</script>

<JsonView {json} />
```

### Vanilla JS

For other applications with a bundler:

```js
import { JsonView } from '@zerodevx/svelte-json-view'

const app = new JsonView({
  target: document.body, // node to render into
  props: {
    json: { foo: 'bar' } // data to prettify
  }
})
```

## Props

`json`: Un-stringified object to pass in

`depth`: Initial expansion depth (defaults to `Infinity`)

## CSS vars

```css
ul {
  padding-left: var(--nodePaddingLeft,1rem);
  border-left: var(--nodeBorderLeft,1px dotted #9CA3AF);
  color: var(--nodeColor,#374151)
}
.bracket:hover { background: var(--bracketHoverBackground,#D1D5DB); }
.val { color: var(--leafDefaultColor,#9CA3AF) }
.val.string { color: var(--leafStringColor, #059669); }
.val.number { color: var(--leafNumberColor, #D97706); }
.val.boolean { color: var(--leafBooleanColor, #2563EB); }
```

## License

ISC
