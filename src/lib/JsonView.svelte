<script>
import JsonView from './JsonView.svelte'

/** @type {{ json: *, depth?: number, _cur?: number, _last?: boolean }} */
let { json, depth = Infinity, _cur = 0, _last = true } = $props()

let collapsed = $derived(depth < _cur)

let items = $derived(getType(json) === 'object' ? Object.keys(json) : [])
let isArray = $derived(Array.isArray(json))
let brackets = $derived(isArray ? ['[', ']'] : ['{', '}'])

/** @param {*} i @returns {string} */
function getType(i) {
  if (i === null) return 'null'
  return typeof i
}

/** @param {*} i @returns {string} */
function stringify(i) {
  return JSON.stringify(i)
}

/** @param {*} i @returns {string} */
function format(i) {
  switch (getType(i)) {
    case 'function':
      return 'f () {...}'
    case 'symbol':
      return i.toString()
    default:
      return stringify(i)
  }
}

function clicked() {
  collapsed = !collapsed
}

/** @param {Event} e */
function pressed(e) {
  if (e instanceof KeyboardEvent && ['Enter', ' '].includes(e.key)) clicked()
}
</script>

{#if !items.length}
  <span class="_jsonBkt empty" class:isArray>{brackets[0]}{brackets[1]}</span>{#if !_last}<span
      class="_jsonSep">,</span
    >{/if}
{:else if collapsed}
  <span
    class="_jsonBkt"
    class:isArray
    role="button"
    tabindex="0"
    onclick={clicked}
    onkeydown={pressed}>{brackets[0]}...{brackets[1]}</span
  >{#if !_last && collapsed}<span class="_jsonSep">,</span>{/if}
{:else}
  <span
    class="_jsonBkt"
    class:isArray
    role="button"
    tabindex="0"
    onclick={clicked}
    onkeydown={pressed}>{brackets[0]}</span
  >
  <ul class="_jsonList">
    {#each items as i, idx (i)}
      <li>
        {#if !isArray}
          <span class="_jsonKey">{stringify(i)}</span><span class="_jsonSep">:</span>
        {/if}
        {#if getType(json[i]) === 'object'}
          <JsonView json={json[i]} {depth} _cur={_cur + 1} _last={idx === items.length - 1} />
        {:else}
          <span class="_jsonVal {getType(json[i])}">{format(json[i])}</span
          >{#if idx < items.length - 1}<span class="_jsonSep">,</span>{/if}
        {/if}
      </li>
    {/each}
  </ul>
  <span
    class="_jsonBkt"
    class:isArray
    role="button"
    tabindex="0"
    onclick={clicked}
    onkeydown={pressed}>{brackets[1]}</span
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
