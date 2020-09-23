const mongoose = require('mongoose');
const Game = require('../models/game.model');
const ObjectId = mongoose.Types.ObjectId

const dbName = 'akar';
mongoose.connect(`mongodb+srv://Popinator:1234@cluster0.7ya48.mongodb.net/test`)

const games = [
    {
        title: "Dark Souls Remastered",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/kvr6upeqbsvt7nunhlf4.jpg",
        trailer: "https://www.youtube.com/embed/Woe0PYZPxRw",
        description: "An action RPG and spiritual sequel to Demon's Souls (2009) in which the player embodies the Chosen Undead, who is tasked with fulfilling an ancient prophecy by ringing the Bells of Awakening in the dark fantasy setting of Lordran, an open world with intricate areas full of beasts, former humans gone hollow, and magical abominations whom the player must overcome in challenging and unforgiving combat.",
        directors: ["Hidetaka Miyazaki"],
        company: ObjectId("5f664d176b10122f8dff192a"),
        release: Date.parse("May 25, 2018"),
        platforms: ["PS4", "XBOX ONE", "NINTENDO SWITCH", "PC"],
        price: 39.95,
    },
    {
        title: "Dark Souls II: Scholar of the First Sin",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co20um.jpg",
        trailer: "https://www.youtube.com/embed/U6uyuIQYlfY",
        description: "Dark Souls II: Scholar of the First Sin' is an upgrade and bundle of Dark Souls II that brings the game to Playstation 4 and Xbox One, as well as DX11 features on PC. It also bundles all previous DLCs and provides additional features and content.",
        directors: ["Hidetaka Miyazaki"],
        company: ObjectId("5f664d176b10122f8dff192a"),
        release: Date.parse("May 25, 2018"),
        platforms: ["PS4", "XBOX ONE", "PC"],
        price: 29.95,
    },
    {
        title: "Dark Souls III: The Fire Fades Edition",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co22hq.jpg",
        trailer: "https://www.youtube.com/embed/cWBwFhUv1-8",
        description: "The Dark Souls III: The Fire Fades Edition delivers the complete Dark Souls III experience and includes the full game & all Season Pass content - Ashes of Ariandel and The Ringed City DLC expansions. Winner of 2017 DICE Awards for RPG/Massively Multiplayer Game of the Year and the 2016 Golden Joystick Award's Ultimate Game of the Year, Dark Souls III continues to push the boundaries with the latest chapter in the critically-acclaimed and genre-defining series from director Hidetaka Miyazaki. Players will be immersed into a world of epic atmosphere and darkness with colossal enemies, expansive environments, and challenging and intense gameplay combat. As fires fade and the world falls into ruin, prepare yourself once more to Embrace The Darkness!",
        directors: ["Hidetaka Miyazaki"],
        company: ObjectId("5f664d176b10122f8dff192a"),
        release: Date.parse("Apr 21, 2017"),
        platforms: ["PS4", "XBOX ONE", "PC"],
        price: 49.95,
    },
    {
        title: "Bloodborne: Game Of The Year Edition",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1uki.jpg",
        trailer: "https://www.youtube.com/embed/vbGdIdHOO3I",
        description: "With new story details, learn the tale of hunters who once made Yharnam their hunting grounds, meet new NPCs, and discover another side of the history and world of Bloodborne. Includes: The Original Bloodborne Experience / Bloodborne: The Old Hunters Expansion / Bloodborne: The Old Hunters",
        directors: ["Hidetaka Miyazaki"],
        company: ObjectId("5f664d176b10122f8dff192a"),
        release: Date.parse("Nov 27, 2015"),
        platforms: ["PS4"],
        price: 29.95,
    },
    {
        title: "Sekiro: Shadows Die Twice",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2a23.jpg",
        trailer: "https://www.youtube.com/embed/C6RlgBw5KCs",
        description: "Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation. Take Revenge. Restore your honor. Kill Ingeniously.",
        directors: ["Hidetaka Miyazaki"],
        company: ObjectId("5f664d176b10122f8dff192a"),
        release: Date.parse("Mar 22, 2019"),
        platforms: ["PS4", "XBOX ONE", "PC"],
        price: 59.95,
    },
    {
        title: "The Surge",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1odu.jpg",
        trailer: "https://www.youtube.com/embed/uBBB-m9peMQ",
        description: "The Surge is a sci-fi spin on Dark Souls, from the Lords of the Fallen team. Set in a heavily dystopian future as Earth nears the end of its life, those who remain in the overpopulated cities must work to survive as social programs have become saturated by an aging population and increasing environmental diseases. The world of The Surge offers a very grim vision of the future, where the evolution of our technology, our society and our relation with the environment led to a decadent state of the Human civilization. Fitted with an advanced CREO exo-suit, balancing your core power against your implants and exo-suit upgrades will allow you to specialize in a huge variety of combat styles, thanks to the almost limitless combinations of addons and dozens of make-shift weapons salvaged from the industrial complex. Finely tune your gear to match your playstyle, and to best suit the challenge ahead. The Metroidvanian levels open up as your core power increases, allowing you to over-charge doors previously too strong for your suit to damage and opening new pathways for you to explore. The CREO facility is vast, and if you want to find and craft the best equipment and weapons, you will need to search every area for secrets and hidden items. The Surge features innovative combat mechanics, allowing you to target individual limbs and dismember the exo-suit add-on or weapon you want to acquire. Collecting tech-scrap and blueprints, you will be able to return to the Operation Center to level up and craft new exo-suit addons and weapons salvaged throughout the level. The most powerful of these can be acquired from the world’s gigantic, industrial bosses. Most of what you encounter in The Surge was never originally designed to kill you, and most of the items you loot and craft were never meant for combat. However, the combined strength of the exo-suit and near-future technology of CREO mean that anything from fork-lifting addons to laser cutters can be used as lethal weapons for diving deeper into the facility.",
        directors: ["Jan Klose"],
        company: ObjectId("5f664d176b10122f8dff192c"),
        release: Date.parse("May 16, 2017"),
        platforms: ["PS4", "XBOX ONE", "PC"],
        price: 19.95,
    },
    {
        title: "The Surge 2",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1y0k.jpg",
        trailer: "https://www.youtube.com/embed/7QtiyEw-V4M",
        description: "The Surge 2 keeps what fans and critics loved about the original – hardcore combat utilizing a unique, dynamic limb targeting system and deep character progression – while also expanding greatly upon the formula. The Surge 2 takes place in a brand new environment: a sprawling, devastated city with larger, more ambitious level design and improved engine. Combat is more brutal and tactical than ever, with even more options thanks to an expanded limb targeting system. In addition, more abilities, weapons, implants, and drones give players a vast arsenal to build their character with, in their fight against the array of diverse new enemies and bosses.",
        directors: ["James Lowe"],
        company: ObjectId("5f664d176b10122f8dff192c"),
        release: Date.parse("May 25, 2018"),
        platforms: ["PS4", "XBOX ONE", "PC"],
        price: 39.95,
    },
    {
        title: "Lords of the Fallen",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1nzt.jpg",
        trailer: "https://www.youtube.com/embed/GXqaRhJNEAk",
        description: "Lords of the Fallen is a challenging fantasy action RPG set in a harsh world where humanity has defeated its God. When his army starts to re-emerge from its demonic realm, led by the formidable Lords, humanity turns to an unlikely defender for help. Lords of the Fallen offers a deep and satisfying melee combat system with weapons, armour and skills influencing speed, power and agility. Every fight is both a challenge and a meaningful victory. Powerful and spectacular magic complete the arsenal. Embark on an epic journey of combat, exploration and discovery to become the world’s salvation… or doom. Developed by CI Games of Warsaw, in collaboration with Deck 13, a developer based in Germany.",
        directors: ["Jan Klose"],
        company: ObjectId("5f664d176b10122f8dff192c"),
        release: Date.parse("May 25, 2018"),
        platforms: ["PS4", "XBOX ONE", "NINTENDO SWITCH", "PC"],
        price: 39.95,
    },
    {
        title: "Nioh",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co20xg.jpg",
        trailer: "https://www.youtube.com/embed/z59Bn-745vM",
        description: "In Nioh, players will traverse war-torn Japan as William, a blonde-haired swordsman whose background as a fierce warrior and seasoned knowledge of the blade allows him to survive in the demon-plagued land of the samurai. Known as Yokai, these demons inhabit a number of dangerous locations and lie in wait in the shadows to ambush unsuspecting victims. Players will also face off with other samurai in supernatural sword battles and intense, multi-target engagements offering a level of difficulty that will truly test even the most hardened samurai’s skills, patience, and strategy. Offering a deep and original storyline that takes place during the Warring States Period of Japanese history alongside strategic sword-fighting action, Nioh will challenge players in a way that makes every mission and accomplishment feel earned and worthwhile.",
        directors: ["Fumihiko Yasuda", "Yosuke Hayashi"],
        company: ObjectId("5f664d176b10122f8dff192b"),
        release: Date.parse("Feb 7, 2017"),
        platforms: ["PS4", "PC"],
        price: 19.95,
    },
    {
        title: "Nioh 2",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1sh7.jpg",
        trailer: "https://www.youtube.com/embed/ETWtvVGFNqU",
        description: "Master the lethal arts of the samurai as a mysterious half-human, half-supernatural Yokai warrior, in this challenging action RPG sequel. Explore violent Sengoku-era Japan and the deadly Dark Realm, both plagued with grotesque, merciless demons. Unsheathe your deadly weapons and cut down all enemies in your path using a revamped combat system and the ability to transform into a full Yokai to unleash devastating paranormal powers.",
        directors: ["Fumihiko Yasuda"],
        company: ObjectId("5f664d176b10122f8dff192b"),
        release: Date.parse("Mar 13, 2020"),
        platforms: ["PS4"],
        price: 59.95,
    },
    {
        title: "Final Fantasy VII Remake",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1qxr.jpg",
        trailer: "https://www.youtube.com/embed/eBZyJl7_OPM",
        description: "A spectacular re-imagining of one of the most visionary games ever, Final Fantasy VII Remake rebuilds and expands the legendary RPG for today. The first game in this project will be set in the eclectic city of Midgar and presents a fully standalone gaming experience.",
        directors: ["Yoshinori Kitase", "Tetsuya Nomura", "Naoki Hamaguchi", "Motomu Toriyama"],
        company: ObjectId("5f6787cec729ca189d8edf16"),
        release: Date.parse("Apr 10, 2020"),
        platforms: ["PS4"],
        price: 59.95,
    },
]


Game.create(games)
    .then(allGamesCreated => console.log('A total of', allGamesCreated.length, 'games were created into the DB'))
    .catch(err => console.log('ERROR: ', err))