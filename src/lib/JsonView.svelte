<script>
/** @type {*} - object or array to display */
export let json
/** @type {number} - initial expansion depth */
export let depth = Infinity
export let _cur = 0
export let _last = true

/** @type {*[]} */
let items
let isArray = false
let brackets = ['', '']
let collapsed = false

/**
 * @param {*} i
 * @returns {string}
 */
function getType(i) {
  if (i === null) return 'null'
  return typeof i
}

/**
 * @param {*} i
 * @returns {string}
 */
function format(i) {
  const t = getType(i)
  if (t === 'string') return `"${i}"`
  if (t === 'function') return 'f () {...}'
  if (t === 'symbol') return i.toString()
  return i
}

function clicked() {
  collapsed = !collapsed
}

/**
 * @param {Event} e
 */
function pressed(e) {
  if (e instanceof KeyboardEvent && ['Enter', ' '].includes(e.key)) clicked()
}

$: {
  items = getType(json) === 'object' ? Object.keys(json) : []
  isArray = Array.isArray(json)
  brackets = isArray ? ['[', ']'] : ['{', '}']
}

$: collapsed = depth < _cur
</script>

{#if !items.length}
  <span class="_jsonBkt empty">{brackets[0]}{brackets[1]}</span>{#if !_last}<span class="_jsonSep"
      >,</span
    >{/if}
{:else if collapsed}
  <span class="_jsonBkt" role="button" tabindex="0" on:click={clicked} on:keydown={pressed}
    >{brackets[0]}...{brackets[1]}</span
  >{#if !_last && collapsed}<span class="_jsonSep">,</span>{/if}
{:else}
  <span class="_jsonBkt" role="button" tabindex="0" on:click={clicked} on:keydown={pressed}
    >{brackets[0]}</span
  >
  <ul class="_jsonList">
    {#each items as i, idx}
      <li>
        {#if !isArray}
          <span class="_jsonKey">"{i}"</span><span class="_jsonSep">:</span>
        {/if}
        {#if getType(json[i]) === 'object'}
          <svelte:self json={json[i]} {depth} _cur={_cur + 1} _last={idx === items.length - 1} />
        {:else}
          <span class="_jsonVal {getType(json[i])}">{format(json[i])}</span
          >{#if idx < items.length - 1}<span class="_jsonSep">,</span>{/if}
        {/if}
      </li>
    {/each}
  </ul>
  <span class="_jsonBkt" role="button" tabindex="0" on:click={clicked} on:keydown={pressed}
    >{brackets[1]}</span
  >{#if !_last}<span class="_jsonSep">,</span>{/if}
{/if}

<style>
._jsonList {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: var(--jsonPaddingLeft, 1rem);
  border-left: var(--jsonBorderLeft, 1px dotted);
}
._jsonBkt {
  color: var(--jsonBracketColor, currentcolor);
}
._jsonBkt:not(.empty):hover {
  cursor: pointer;
  background: var(--jsonBracketHoverBackground, #e5e7eb);
}
._jsonSep {
  color: var(--jsonSeparatorColor, currentcolor);
}
._jsonKey {
  color: var(--jsonKeyColor, currentcolor);
}
._jsonVal {
  color: var(--jsonValColor, #9ca3af);
}
._jsonVal.string {
  color: var(--jsonValStringColor, #059669);
}
._jsonVal.number {
  color: var(--jsonValNumberColor, #d97706);
}
._jsonVal.boolean {
  color: var(--jsonValBooleanColor, #2563eb);
}
</style>
