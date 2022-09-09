<script>
import JsonView from '../src/JsonView.svelte'

/* eslint-disable */
const test1 = [
  {
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
    favoriteFruit: 'banana',
    contacts: [],
    report: {},
    email2: null,
    email3: '',
    email4: undefined
  },
  {
    _id: '60702426f2aec6774924fd63',
    index: 1,
    guid: '027c7f09-4161-47b2-91c5-01f675094e40',
    isActive: true,
    balance: '$2,875.12',
    picture: 'http://placehold.it/32x32',
    age: 28,
    eyeColor: 'brown',
    name: 'Atkinson Giles',
    gender: 'male',
    company: 'BESTO',
    email: 'atkinsongiles@besto.com',
    phone: '+1 (986) 474-3672',
    address: '906 Classon Avenue, Riverton, Guam, 4080',
    about:
      'Consectetur esse et exercitation irure qui adipisicing magna laboris cupidatat incididunt fugiat est. Occaecat irure magna do non cillum magna veniam occaecat. Ullamco officia irure id voluptate consequat amet aliquip in eiusmod deserunt aliquip exercitation culpa excepteur. Enim occaecat consectetur ex non ipsum fugiat amet et proident esse. Commodo cillum ad eiusmod enim sunt sint officia commodo et laborum.\r\n',
    registered: '2019-05-23T01:23:32 -08:00',
    latitude: -37.633187,
    longitude: -126.992778,
    tags: ['esse', 'nostrud', 'et', 'ex', 'deserunt', 'veniam', 'veniam'],
    friends: [
      { id: 0, name: 'Millicent Mcconnell' },
      { id: 1, name: 'Jeanne Wise' },
      { id: 2, name: 'Nichols Roberts' }
    ],
    greeting: 'Hello, Atkinson Giles! You have 1 unread messages.',
    favoriteFruit: 'apple'
  },
  {
    _id: '607024260a4713fae5019419',
    index: 2,
    guid: 'b32f9f9b-0def-46a1-a286-a8196ec4638c',
    isActive: false,
    balance: '$3,489.63',
    picture: 'http://placehold.it/32x32',
    age: 36,
    eyeColor: 'blue',
    name: 'Desiree William',
    gender: 'female',
    company: 'LYRICHORD',
    email: 'desireewilliam@lyrichord.com',
    phone: '+1 (975) 485-3348',
    address: '993 Thatford Avenue, Wells, Missouri, 2351',
    about:
      'Eu nostrud sunt occaecat adipisicing consectetur ipsum aute non voluptate pariatur aliquip excepteur. Minim ea aliqua do dolore tempor aliquip irure. Amet amet quis incididunt irure aute. Lorem amet reprehenderit adipisicing do laborum incididunt labore incididunt laboris velit consequat ut aute. Ea exercitation ut non dolore culpa dolore officia et elit do. Ullamco deserunt cillum aliqua tempor ipsum officia. Lorem cupidatat cillum velit est minim aliquip qui ipsum.\r\n',
    registered: '2015-08-04T04:33:40 -08:00',
    latitude: -15.687988,
    longitude: -144.842709,
    tags: ['do', 'laborum', 'fugiat', 'qui', 'duis', 'eu', 'eiusmod'],
    friends: [
      { id: 0, name: 'Baxter Fulton' },
      { id: 1, name: 'Buckley Dean' },
      { id: 2, name: 'Carmen Fitzpatrick' }
    ],
    greeting: 'Hello, Desiree William! You have 8 unread messages.',
    favoriteFruit: 'apple'
  },
  {
    _id: '60702426dce125ecccee577f',
    index: 3,
    guid: '0e1d5f0d-84cd-49fe-9b69-1540ab57d509',
    isActive: true,
    balance: '$3,254.06',
    picture: 'http://placehold.it/32x32',
    age: 20,
    eyeColor: 'blue',
    name: 'John Aguirre',
    gender: 'female',
    company: 'GINK',
    email: 'johnaguirre@gink.com',
    phone: '+1 (828) 407-2949',
    address: '958 Caton Avenue, Waterford, Puerto Rico, 6386',
    about:
      'Consequat labore minim excepteur ullamco ex consequat. Occaecat dolore magna enim eiusmod qui dolore sint qui officia. Laborum consectetur fugiat officia et sit incididunt veniam dolor culpa. Sunt anim non id sit ut ipsum laborum est sint commodo nulla incididunt incididunt. Adipisicing eiusmod voluptate deserunt minim esse reprehenderit. Irure elit culpa quis non fugiat aute proident dolore elit consectetur nostrud eu consequat nisi. Ex adipisicing in nisi proident officia.\r\n',
    registered: '2014-09-06T10:10:11 -08:00',
    latitude: 41.628236,
    longitude: 161.223523,
    tags: ['laboris', 'exercitation', 'eiusmod', 'quis', 'ad', 'amet', 'adipisicing'],
    friends: [
      { id: 0, name: 'Madden Ballard' },
      { id: 1, name: 'Ferguson Gibbs' },
      { id: 2, name: 'Allyson Pickett' }
    ],
    greeting: 'Hello, John Aguirre! You have 7 unread messages.',
    favoriteFruit: 'apple'
  },
  {
    _id: '6070242649fb4bc3dfca54c2',
    index: 4,
    guid: '0f4b2fef-f38f-4c93-925c-01f4d015a04a',
    isActive: false,
    balance: '$2,684.08',
    picture: 'http://placehold.it/32x32',
    age: 25,
    eyeColor: 'brown',
    name: 'Clark Rollins',
    gender: 'male',
    company: 'KIDGREASE',
    email: 'clarkrollins@kidgrease.com',
    phone: '+1 (945) 464-2097',
    address: '515 Hancock Street, Columbus, Florida, 6747',
    about:
      'Lorem nostrud quis amet qui. Nisi cupidatat ullamco cillum enim culpa labore fugiat ea laboris in ipsum. Proident enim dolore duis ut deserunt eiusmod consectetur minim ipsum aliquip est commodo.\r\n',
    registered: '2017-09-05T12:57:25 -08:00',
    latitude: -4.239975,
    longitude: 179.856364,
    tags: ['mollit', 'fugiat', 'dolor', 'occaecat', 'dolor', 'aliquip', 'ullamco'],
    friends: [
      { id: 0, name: 'Humphrey Simmons' },
      { id: 1, name: 'Lela Berg' },
      { id: 2, name: 'Branch Holder' }
    ],
    greeting: 'Hello, Clark Rollins! You have 3 unread messages.',
    favoriteFruit: 'apple'
  }
]
const test2 = {
  random: 85,
  'random float': 75.744,
  bool: true,
  date: '1996-12-26',
  regEx: 'helloooooooooooooooo to you',
  enum: 'generator',
  firstname: 'Evaleen',
  lastname: 'Dorothy',
  city: 'Labasa',
  country: 'Virgin Islands, U.S.',
  countryCode: 'TL',
  'email uses current data': 'Evaleen.Dorothy@gmail.com',
  'email from expression': 'Evaleen.Dorothy@yopmail.com',
  array: ['Glynnis', 'Antonietta', 'Penelopa', 'Briney', 'Viki'],
  'array of objects': [
    { index: 0, 'index start at 5': 5 },
    { index: 1, 'index start at 5': 6 },
    { index: 2, 'index start at 5': 7 }
  ],
  Bobbi: { age: 31 }
}
const test3 = 'test invalid json'
const test4 = { desc: 'Test special types', foo: function () {}, bar: Symbol('bar'), null: null }
/* eslint-enable */

let depth = 0
</script>

<button
  on:click={() => {
    depth = Infinity
  }}>EXPAND ALL</button
>
<button
  on:click={() => {
    depth = 0
  }}>COLLAPSE ALL</button
>
<br /><br />
<div class="wrap">
  <JsonView json={test1} {depth} />
</div>
<hr />
<div class="wrap">
  <JsonView json={test2} depth="0" />
</div>
<hr />
<div class="wrap">
  <JsonView json={test3} />
</div>
<hr />
<div class="wrap">
  <JsonView json={test4} />
</div>

<style>
.wrap {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 0.875rem;
}
</style>
