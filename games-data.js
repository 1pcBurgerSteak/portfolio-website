/* ════════════════════════════════════════════════════════════════
   GAMES DATA
   ────────────────────────────────────────────────────────────────
   One object per game. game.html reads the `slug` from the URL
   (game.html?slug=bolz) and renders whichever entry matches.

   TO ADD YOUR OWN DETAIL/CASE-STUDY CONTENT:
   Scroll to a game below and fill in the fields under
   "── extra case-study content ──". Everything else is already
   pulled from your existing index.html, so you don't need to
   touch it. Leave a field empty ('' or []) and its section is
   simply skipped on the page — nothing breaks.

   TO ADD A BRAND NEW GAME:
   Copy one whole object (from the opening { to the closing },),
   paste it at the end of the GAMES array, then edit every field.
   Also remember to add the matching card + data-slug in index.html
   if you want it to show up on the homepage too.
   ════════════════════════════════════════════════════════════════ */

const GAMES = [

  {
    slug: 'rakazon-convergence',
    name: 'Rakazon Convergence',
    genre: 'Gacha Game · Mobile · 2026',
    year: '2026',
    desc: "A turn-based Gacha Game where you fight enemies from different dimensions.",
    media: [
      { type: 'image', src: 'images/rakazon_1.png', alt: 'Rakazon Convergence gameplay 1' },
      { type: 'video', embed: 'https://www.youtube.com/embed/7ykCHCoRacE' },
    ],
    contributions: [
      "Designed and maintained the game's PlayFab Title Data — Heroes, Resources, Areas/Stages, Missions, Gacha banners, Gear templates, and Hero upgrade configs — structured to stay easy to edit and extend.",
      "Wrote the game's server-authoritative logic as CloudScript microservices, covering heroes, gear, stages, gacha, missions, events, idle rewards, and authentication.",
      "Built the Unity-side data layer: save/load for heroes, teams, resources, and progress, plus Addressables-driven loading for models, splash art, and battle effects.",
      "Implemented the core gameplay loop — hero progression, gear, teams, stage progression, and a strategy-driven turn-based combat system.",
      "Built the live-ops layer: refreshable Gacha spotlight, Daily/Weekly missions, Daily Sign-In, and time-limited Events with their own resource economies.",
    ],
    download: 'downloads/rakazon-convergence.zip',
    source: '',
    tags: ['Unity', 'Team'],

    // ── extra case-study content ──
    role: 'Backend Programmer',
    team: 'Team',
    engine: 'Unity',
    platform: 'Mobile',
    timeframe: '',
    deepDive: [
       { heading: 'Internship Project', body: 'This is my first time using a third party service like PlayFab. I learned a lot about backend development, cloud services and strucutres of how games with online services are structured.' },
    ],
    gallery: [
      // { src: 'images/rakazon_2.png', alt: 'Extra shot' },
    ],
    learnings: '',
  },

  {
    slug: 'bolz',
    name: 'Bolz',
    genre: 'Arcade · Mobile · 2025',
    year: '2025',
    desc: "A brick breaker game that increases chaos the longer you play.",
    media: [
      { type: 'image', src: 'Poster/bolz_poster.jpg', alt: 'Bolz poster' },
      { type: 'image', src: 'images/bolz_1.png', alt: 'Bolz gameplay 1' },
      { type: 'image', src: 'images/bolz_2.png', alt: 'Bolz gameplay 2' },
      { type: 'image', src: 'images/bolz_3.png', alt: 'Bolz gameplay 3' },
      { type: 'image', src: 'images/bolz_4.png', alt: 'Bolz gameplay 4' },
      { type: 'video', embed: 'https://www.youtube.com/embed/6K0Koix9sTg' },
    ],
    contributions: [
      "I created and designed all of the game's art assets and theme.",
      "Built a level-up system with power-ups and a scoring system.",
      "Designed the main unique mechanic of the game. Double tap makes the ball go back to the paddle.",
      "Added difficulty that scales with how well the player is doing.",
    ],
    download: 'Game/Bolz.zip',
    source: '',
    tags: ['Unity', 'Solo'],

    role: 'Solo Developer',
    team: 'Solo',
    engine: 'Unity',
    platform: 'Mobile',
    timeframe: '',
    deepDive: [
       { heading: 'Solo Mobile Porject', body: 'This is a one day project I made back then. The unique mechanics feels really good when you get to know it after a few tries. It lacks polish but the concept is really solid' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'box-race',
    name: 'Box Race',
    genre: 'Arcade · Multiplayer · PC · 2024',
    year: '2024',
    desc: "A 2 player runner game where you collect points and compete against each other by collecting more points or destroying them.",
    media: [
      { type: 'image', src: 'Poster/box_race_poster.png', alt: 'Box Race poster' },
      { type: 'image', src: 'images/box_race_1.png', alt: 'Box Race gameplay 1' },
      { type: 'image', src: 'images/box_race_2.png', alt: 'Box Race gameplay 2' },
      { type: 'video', embed: 'https://www.youtube.com/embed/ERv5_XVbqLk' },
    ],
    contributions: [
      "Created all of the game's art assets.",
      "Programmed the local multiplayer and scoring system.",
      "Added a simple random obstacle placment system to make the game more dynamic.",
    ],
    download: 'Game/Box Race.zip',
    source: '',
    tags: ['Unity', 'Team'],

    role: 'Programmer & Artist',
    team: 'Team',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'School Game Porject', body: 'A simple activity of making a local multiplayer then adding my own mechanics to it' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'bullet-storm',
    name: 'Bullet Storm',
    genre: 'Shooter · Multiplayer · PC · 2023',
    year: '2023',
    desc: "A one button shooter game with fast-paced action, challenging maps and fun gameplay.",
    media: [
      { type: 'image', src: 'images/bullet_storm_1.png', alt: 'Bullet Storm gameplay 1' },
      { type: 'image', src: 'images/bullet_storm_2.png', alt: 'Bullet Storm gameplay 2' },
      { type: 'image', src: 'images/bullet_storm_3.png', alt: 'Bullet Storm gameplay 3' },
      { type: 'image', src: 'images/bullet_storm_4.png', alt: 'Bullet Storm gameplay 4' },
      { type: 'video', embed: 'https://www.youtube.com/embed/Df6li96cyfM' },
    ],
    contributions: [
      "Programmed and Designed on how will the one-button shooting and movement.",
      "Built the character select screen.",
      "Added a simple environtment events or obstacles to make the game more dynamic.",
    ],
    download: 'Game/Bullet Storm.zip',
    source: 'https://github.com/1pcBurgerSteak/BulletStorm',
    tags: ['Unity', 'Team'],

    role: 'Gameplay Programmer',
    team: 'Team',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'School Team Game Porject', body: 'One of the earlier team projects I worked on. Its an acn challenge from our instructor to make a one-button game and we come up with this concept of like chicken gangsters and I think the main standout point is the environment traps like the lava rising up or the laser gun circling on the map.' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'dragon-gears',
    name: 'Dragon Gears',
    genre: 'Platformer · Single-player · PC · 2024',
    year: '2024',
    desc: "A solo project inspired by Megaman X — challenging levels, tight platforming and fun bosses.",
    media: [
      { type: 'image', src: 'Poster/dragon_gears_poster.png', alt: 'Dragon Gears poster' },
      { type: 'image', src: 'images/dragon_gears_1.png', alt: 'Dragon Gears gameplay 1' },
      { type: 'image', src: 'images/dragon_gears_2.png', alt: 'Dragon Gears gameplay 2' },
      { type: 'image', src: 'images/dragon_gears_3.png', alt: 'Dragon Gears gameplay 3' },
      { type: 'image', src: 'images/dragon_gears_4.png', alt: 'Dragon Gears gameplay 4' },
      { type: 'image', src: 'images/dragon_gears_5.png', alt: 'Dragon Gears gameplay 5' },
      { type: 'video', embed: 'https://www.youtube.com/embed/cx-qYU2yIzY' },
    ],
    contributions: [
      "Created and Deisgned all of the game's art assets ad theme.",
      "Programmed the platforming and movement.",
      "Built a boss fight with simple AI using state machine.",
    ],
    download: 'Game/Dragon Gears.zip',
    source: '',
    tags: ['Unity', 'Solo'],

    role: 'Solo Developer',
    team: 'Solo',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'Solo Game Porject', body: 'The game inspired by this is Megaman X. So I did tried to make it a megaman x like at first but the character doesnt fit to be like a megaman x like so I changed it to a mouse aim but also has sme features like the charging attack and tigh platforming. Especially the one I love aobut the megaman x series is the bosses. I did make a lot of time creating the boss and Its my first time using a state machine to lessen randomization of attacks and adding the second phase of the boss.' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'kupido',
    name: 'Kupido',
    genre: 'Arcade · 2025',
    year: '2025',
    desc: 'A first person puzzle shooter game where you try to match the "Couple of the day" in a crowd of people.',
    media: [
      { type: 'image', src: 'Poster/kupido_poster.jpeg', alt: 'Kupido poster' },
      { type: 'image', src: 'images/kupido_1.png', alt: 'Kupido gameplay 1' },
      { type: 'image', src: 'images/kupido_2.png', alt: 'Kupido gameplay 2' },
      { type: 'image', src: 'images/kupido_3.png', alt: 'Kupido gameplay 3' },
      { type: 'image', src: 'images/kupido_4.png', alt: 'Kupido gameplay 4' },
      { type: 'video', embed: 'https://www.youtube.com/embed/Fqi7UZ_x1D4' },
    ],
    contributions: [
      "Programmed the matching and shooting gameplay.",
      "Built a system that generates random NPC variants.",
    ],
    download: 'Game/Kupido.zip',
    source: 'https://github.com/1pcBurgerSteak/Kupido',
    tags: ['Unity', 'Team'],

    role: 'Gameplay Programmer',
    team: 'Team',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'YCC Season 2 Project', body: 'This project was developed as part of the YCC Season 2 challenge back in 2024. The first concept about this is very far from the updated version. At first its like a simple puzzle game like angry birds but you shoot arrows but after palytesing I didnt like it so we concept again and did fall on to the Couple of the Day mechanics and now I programedd the simple kinda npc variant generation on the game.' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'parkkeeper',
    name: 'ParkKeeper',
    genre: 'Simulation · 2025',
    year: '2025',
    desc: "Your job is to keep the park clean and safe for the visitors with increasing difficulty with each day.",
    media: [
      { type: 'image', src: 'Poster/park_keeper_poster.jpg', alt: 'ParkKeeper poster' },
      { type: 'image', src: 'images/park_keeper_1.png', alt: 'ParkKeeper gameplay 1' },
      { type: 'image', src: 'images/park_keeper_2.png', alt: 'ParkKeeper gameplay 2' },
      { type: 'image', src: 'images/park_keeper_3.png', alt: 'ParkKeeper gameplay 3' },
      { type: 'image', src: 'images/park_keeper_4.png', alt: 'ParkKeeper gameplay 4' },
      { type: 'video', embed: 'https://www.youtube.com/embed/sICdOBREv_E' },
    ],
    contributions: [
      "Created and designed all of the game's art assets.",
      "Programmed the cleaning loop and daily tasks.",
    ],
    download: 'Game/Park Keeper.zip',
    source: '',
    tags: ['Unity', 'Solo'],

    role: 'Solo Developer',
    team: 'Solo',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'School Game Project', body: 'One of my early complete 3D prototypes. Its inspired by Regular show theres a lot of unused feature ideas that never made it into the prototype like its sohuld make the game more chaotic.' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'saldang',
    name: 'Saldang',
    genre: 'Bullet Hell · 2025',
    year: '2025',
    desc: "A unique take on the Vampire Survivor-like genre with a light mechanism to increase and decrease difficulty.",
    media: [
      { type: 'image', src: 'Poster/saldang_poster.png', alt: 'Saldang poster' },
      { type: 'image', src: 'images/saldang_1.jpg', alt: 'Saldang gameplay 1' },
      { type: 'image', src: 'images/saldang_2.jpg', alt: 'Saldang gameplay 2' },
      { type: 'image', src: 'images/saldang_3.jpg', alt: 'Saldang gameplay 3' },
      { type: 'image', src: 'images/saldang_4.jpg', alt: 'Saldang gameplay 4' },
      { type: 'video', embed: 'https://www.youtube.com/embed/EnDyvX0bAXQ' },
    ],
    contributions: [
      "Programmed the combat and survival loop.",
      "Built a randomized reward system.",
    ],
    download: 'Game/Saldang.zip',
    source: 'https://github.com/1pcBurgerSteak/BicolSurvivor',
    tags: ['Unity', 'Team'],

    role: 'Gameplay Programmer',
    team: 'Team',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'Bicol University Game Jam Project', body: 'This game was developed as part of the Bicol University Game Jam in 2025. I did changed it up a little bit of instead of leveling up we get coins and coins are used on chest aroudn the map to differentiate to Vampire Survivor.' }
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'sort-it-out',
    name: 'Sort It Out',
    genre: 'Adventure · 2025',
    year: '2025',
    desc: "Our Capstone project about the consequences of improper waste disposal. You follow Nylo to prevent flooding in the sewers.",
    media: [
      { type: 'image', src: 'Poster/sort_it_out_poster.png', alt: 'Sort It Out poster' },
      { type: 'image', src: 'images/sort_it_out_1.jpg', alt: 'Sort It Out gameplay 1' },
      { type: 'image', src: 'images/sort_it_out_2.jpg', alt: 'Sort It Out gameplay 2' },
      { type: 'image', src: 'images/sort_it_out_3.jpg', alt: 'Sort It Out gameplay 3' },
      { type: 'image', src: 'images/sort_it_out_4.jpg', alt: 'Sort It Out gameplay 4' },
      { type: 'image', src: 'images/sort_it_out_5.jpg', alt: 'Sort It Out gameplay 5' },
      { type: 'video', embed: 'https://www.youtube.com/embed/RjmF7LPa5Uo' },
    ],
    contributions: [
      "Programmed the movement and waste-sorting mechanics.",
      "Built a roguelike save mechanic.",
      "Created a system that generates rooms at random.",
    ],
    download: 'Game/Sort It Out.zip',
    source: '',
    tags: ['Unity', 'Team'],

    role: 'Gameplay Programmer',
    team: 'Team · Capstone Project',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [
      { heading: 'Capstone Project', body: 'My 2nd Bigges game after Rakazon. The ame design part is very hard here thats becuase our instructor wanted the game to have like a use on other poeple and we came up with the flooding of sewers becuase of trash. Its inspired by the games I played like Zelda and Soul Knight. It has many features so I did remake the arhcitecture of the program a lot of times. This is also my first time doing a simple random room generation like Soul knight and a Quest System that has very different types of quest.' },
    ],
    gallery: [
    ],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'space-defense',
    name: 'Space Defense',
    genre: 'Arcade · 2023',
    year: '2023',
    desc: "A casual game where you prevent falling asteroids from destroying the planet.",
    media: [
      { type: 'image', src: 'images/space_defense_1.png', alt: 'Space Defense gameplay 1' },
      { type: 'image', src: 'images/space_defense_2.png', alt: 'Space Defense gameplay 2' },
      { type: 'image', src: 'images/space_defense_3.png', alt: 'Space Defense gameplay 3' },
      { type: 'video', embed: 'https://www.youtube.com/embed/0z27CtsHjbw' },
    ],
    contributions: [
      "Programmed the asteroid shooting and scoring.",
    ],
    download: 'Game/Space Defense.zip',
    source: '',
    tags: ['Unity', 'Solo'],

    role: 'Solo Developer',
    team: 'Solo',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [],
    gallery: [],
    learnings: '',
  },

  {
    slug: 'tank-survivor',
    name: 'Tank Survivor',
    genre: 'Action · Shooter · 2024',
    year: '2024',
    desc: "A survival game where you fight off waves of enemies and bosses to get the highest score.",
    media: [
      { type: 'image', src: 'images/tank_survivor_1.png', alt: 'Tank Survivor gameplay 1' },
      { type: 'image', src: 'images/tank_survivor_2.png', alt: 'Tank Survivor gameplay 2' },
      { type: 'image', src: 'images/tank_survivor_3.png', alt: 'Tank Survivor gameplay 3' },
      { type: 'video', embed: 'https://www.youtube.com/embed/lyvgj4UZAa8' },
    ],
    contributions: [
      "Programmed the wave combat and scoring.",
      "Built simple AI targeting for the enemies.",
    ],
    download: 'Game/Tank Survivor.zip',
    source: '',
    tags: ['Unity', 'Solo'],

    role: 'Solo Developer',
    team: 'Solo',
    engine: 'Unity',
    platform: 'PC',
    timeframe: '',
    deepDive: [],
    gallery: [],
    learnings: '',
  },

];

// Quick lookup by slug, used by game.html
function getGameBySlug(slug) {
  return GAMES.find(g => g.slug === slug) || null;
}
