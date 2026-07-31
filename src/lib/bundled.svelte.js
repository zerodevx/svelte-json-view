import JsonView from './JsonView.svelte'
import { mount, unmount } from 'svelte'

/**
 * @param {object} o
 * @param {HTMLElement} o.target - Target element to render JsonView into.
 * @param {any} o.json - JSON object to display.
 * @param {number} [o.depth=Infinity] - Maximum depth to display.
 * @returns {{update: (json: any) => void, destroy: () => void}}
 */
export function createJsonView({ target, json: _json, depth = Infinity }) {
  const props = $state({ json: _json, depth })
  const app = mount(JsonView, { target, props })
  return {
    update: (json) => Object.assign(props, { json, depth }),
    destroy: () => unmount(app)
  }
}
