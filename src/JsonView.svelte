<script>
export let json
export let depth = Infinity
export let _lvl = 0

const collapsedSymbol = '...'
const getType = i => {
  if (i === null) return 'null'
  return typeof i
}

let items
let isArray
let openBracket
let closeBracket
$: {
  items = getType(json) === 'object' ? Object.keys(json) : []
  isArray = Array.isArray(json)
  openBracket = isArray ? '[' : '{'
  closeBracket = isArray ? ']' : '}'
}

let collapsed
$: collapsed = depth < _lvl

const format = i => {
  switch (getType(i)) {
    case 'string':
      return `"${i}"`
    case 'function':
      return 'f () {...}'
    case 'symbol':
      return i.toString()
    default:
      return i
  }
}
const clicked = () => {
  collapsed = !collapsed
}
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: var(--nodePaddingLeft,1rem);
  border-left: var(--nodeBorderLeft,1px dotted #9CA3AF);
  color: var(--nodeColor,#374151)
}
.hidden { display: none; }
.bracket { cursor: pointer; }
.bracket:hover { background: var(--bracketHoverBackground,#D1D5DB); }
.val { color: var(--leafDefaultColor,#9CA3AF) }
.val.string { color: var(--leafStringColor, #059669); }
.val.number { color: var(--leafNumberColor, #D97706); }
.val.boolean { color: var(--leafBooleanColor, #2563EB); }
</style>

{#if items.length}
<span class:hidden={collapsed}>
  <span class="bracket" on:click={clicked} tabindex="0">{openBracket}</span>
  <ul>
    {#each items as i, idx}
    <li>
      {#if !isArray}
      <span class="key">"{i}":</span>
      {/if}
      {#if getType(json[i]) === 'object'}
      <svelte:self json={json[i]} {depth} _lvl={_lvl + 1} />
      {:else}
      <span class="val {getType(json[i])}">{format(json[i])}</span>
      {/if}
      <span>{idx < items.length - 1 ? ',' : ''}</span>
    </li>
    {/each}
  </ul>
  <span class="bracket" on:click={clicked} tabindex="0">{closeBracket}</span>
</span>
<span class="bracket" class:hidden={!collapsed} on:click={clicked} tabindex="0">{openBracket}{collapsedSymbol}{closeBracket}</span>
{/if}
