<script>
import { JsonView } from '$lib'

/* eslint-disable */
const fixture = [
  {
    desc: 'Test basic',
    _id: '60702426463e99454c8b9ce4',
    index: 0,
    guid: 'c47f144e-9390-4e96-8b9f-7f3d0fb4250a',
    isActive: false,
    balance: '$3,660.45',
    picture: 'http://placehold.it/32x32',
    age: 21,
    eyeColor: 'blue',
    name: 'Hampton Hardin',
    gender: 'male',
    company: 'XYQAG',
    email: 'hamptonhardin@xyqag.com',
    phone: '+1 (898) 498-2503',
    address: '263 Beverly Road, Cowiche, South Carolina, 2512',
    about:
      'Sint quis cillum excepteur Lorem ad non non occaecat labore minim ullamco ad. Reprehenderit elit consequat esse duis id dolore adipisicing consequat excepteur ullamco nostrud sit ut. Proident cupidatat id reprehenderit ea commodo ad. Minim aute sunt enim sunt quis magna Lorem ut. Elit et irure consectetur incididunt do sit excepteur ad id. Reprehenderit aute culpa exercitation nostrud qui et cillum minim incididunt Lorem occaecat est. Excepteur ipsum tempor aliquip labore reprehenderit culpa deserunt sint occaecat quis cillum.\r\n',
    registered: '2018-11-21T11:22:34 -08:00',
    latitude: -55.189445,
    longitude: -0.093647,
    tags: ['quis', 'officia', 'ullamco', 'occaecat', 'sint', 'pariatur', 'fugiat'],
    friends: [
      { id: 0, name: 'Thelma Robles', address: [] },
      { id: 1, name: 'Genevieve Russo', address: {} },
      { id: 2, name: 'Mcclure Tate', address: null }
    ],
    greeting: 'Hello, Hampton Hardin! You have 2 unread messages.',
    favoriteFruit: 'banana'
  },
  {
    desc: 'Test nested',
    nest0: {
      nest1: {
        nest2: {
          nest3: {
            nest4: {
              nest5: {
                nest6: {
                  nest7: {
                    foo: 'bar'
                  }
                }
              }
            }
          }
        }
      }
    },
    arr: [[[[[[['baz']]]]]]]
  },
  {
    desc: 'Test special types',
    fn: function () {},
    sym: Symbol('bar'),
    null: null,
    undefined: undefined,
    empty_string: '',
    empty_obj: {},
    empty_arr: [],
    escaped: `"`
  }
]
const fixture2 = 'test invalid object'
/* eslint-enable */

let depth = 0
</script>

<svelte:head>
  <title>svelte-json-view</title>
</svelte:head>

<section>
  <h1>Basic</h1>
  <button on:click={() => (depth = 0)} id="btn_0">DEPTH 0</button>
  <button on:click={() => (depth = 1)} id="btn_1">DEPTH 1</button>
  <button on:click={() => (depth = Infinity)} id="btn_i">DEPTH INFINITY</button>
  <br /><br />
  <div class="wrap" id="basic">
    <JsonView json={fixture} {depth} />
  </div>
</section>

<section>
  <h1>Test default depth=1</h1>
  <div class="wrap" id="depth_1">
    <JsonView json={fixture[0]} depth={1} />
  </div>
</section>

<section>
  <h1>Test special types</h1>
  <div class="wrap" id="special_types">
    <JsonView json={fixture[2]} />
  </div>
</section>

<section>
  <h1>Test invalid object</h1>
  <div class="wrap" id="invalid_obj">
    <JsonView json={fixture2} />
  </div>
</section>

<section>
  <h1>Test red square brackets</h1>
  <div class="wrap" id="red_square">
    <JsonView json={fixture[0]} --jsonBracketColor="blue" />
  </div>
</section>

<style>
section {
  margin: 0 0 4rem 0;
  border-bottom: 1px solid black;
}
.wrap {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 0.875rem;
  color: #374151;
}
#red_square :global(.isArray) {
  color: red;
}
</style>
