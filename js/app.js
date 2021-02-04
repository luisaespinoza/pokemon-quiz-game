// console.log("I'm alive!")

// document.querySelector("#start-button").addEventListener()
const game = {
	// Thank you to sindresorhus for this array @ https://github.com/sindresorhus/pokemon
	pokemonList: [
		"Bulbasaur",
		"Ivysaur",
		"Venusaur",
		"Charmander",
		"Charmeleon",
		"Charizard",
		"Squirtle",
		"Wartortle",
		"Blastoise",
		"Caterpie",
		"Metapod",
		"Butterfree",
		"Weedle",
		"Kakuna",
		"Beedrill",
		"Pidgey",
		"Pidgeotto",
		"Pidgeot",
		"Rattata",
		"Raticate",
		"Spearow",
		"Fearow",
		"Ekans",
		"Arbok",
		"Pikachu",
		"Raichu",
		"Sandshrew",
		"Sandslash",
		"Nidoran♀",
		"Nidorina",
		"Nidoqueen",
		"Nidoran♂",
		"Nidorino",
		"Nidoking",
		"Clefairy",
		"Clefable",
		"Vulpix",
		"Ninetales",
		"Jigglypuff",
		"Wigglytuff",
		"Zubat",
		"Golbat",
		"Oddish",
		"Gloom",
		"Vileplume",
		"Paras",
		"Parasect",
		"Venonat",
		"Venomoth",
		"Diglett",
		"Dugtrio",
		"Meowth",
		"Persian",
		"Psyduck",
		"Golduck",
		"Mankey",
		"Primeape",
		"Growlithe",
		"Arcanine",
		"Poliwag",
		"Poliwhirl",
		"Poliwrath",
		"Abra",
		"Kadabra",
		"Alakazam",
		"Machop",
		"Machoke",
		"Machamp",
		"Bellsprout",
		"Weepinbell",
		"Victreebel",
		"Tentacool",
		"Tentacruel",
		"Geodude",
		"Graveler",
		"Golem",
		"Ponyta",
		"Rapidash",
		"Slowpoke",
		"Slowbro",
		"Magnemite",
		"Magneton",
		"Farfetch’d",
		"Doduo",
		"Dodrio",
		"Seel",
		"Dewgong",
		"Grimer",
		"Muk",
		"Shellder",
		"Cloyster",
		"Gastly",
		"Haunter",
		"Gengar",
		"Onix",
		"Drowzee",
		"Hypno",
		"Krabby",
		"Kingler",
		"Voltorb",
		"Electrode",
		"Exeggcute",
		"Exeggutor",
		"Cubone",
		"Marowak",
		"Hitmonlee",
		"Hitmonchan",
		"Lickitung",
		"Koffing",
		"Weezing",
		"Rhyhorn",
		"Rhydon",
		"Chansey",
		"Tangela",
		"Kangaskhan",
		"Horsea",
		"Seadra",
		"Goldeen",
		"Seaking",
		"Staryu",
		"Starmie",
		"Mr. Mime",
		"Scyther",
		"Jynx",
		"Electabuzz",
		"Magmar",
		"Pinsir",
		"Tauros",
		"Magikarp",
		"Gyarados",
		"Lapras",
		"Ditto",
		"Eevee",
		"Vaporeon",
		"Jolteon",
		"Flareon",
		"Porygon",
		"Omanyte",
		"Omastar",
		"Kabuto",
		"Kabutops",
		"Aerodactyl",
		"Snorlax",
		"Articuno",
		"Zapdos",
		"Moltres",
		"Dratini",
		"Dragonair",
		"Dragonite",
		"Mewtwo",
		"Mew",
		"Chikorita",
		"Bayleef",
		"Meganium",
		"Cyndaquil",
		"Quilava",
		"Typhlosion",
		"Totodile",
		"Croconaw",
		"Feraligatr",
		"Sentret",
		"Furret",
		"Hoothoot",
		"Noctowl",
		"Ledyba",
		"Ledian",
		"Spinarak",
		"Ariados",
		"Crobat",
		"Chinchou",
		"Lanturn",
		"Pichu",
		"Cleffa",
		"Igglybuff",
		"Togepi",
		"Togetic",
		"Natu",
		"Xatu",
		"Mareep",
		"Flaaffy",
		"Ampharos",
		"Bellossom",
		"Marill",
		"Azumarill",
		"Sudowoodo",
		"Politoed",
		"Hoppip",
		"Skiploom",
		"Jumpluff",
		"Aipom",
		"Sunkern",
		"Sunflora",
		"Yanma",
		"Wooper",
		"Quagsire",
		"Espeon",
		"Umbreon",
		"Murkrow",
		"Slowking",
		"Misdreavus",
		"Unown",
		"Wobbuffet",
		"Girafarig",
		"Pineco",
		"Forretress",
		"Dunsparce",
		"Gligar",
		"Steelix",
		"Snubbull",
		"Granbull",
		"Qwilfish",
		"Scizor",
		"Shuckle",
		"Heracross",
		"Sneasel",
		"Teddiursa",
		"Ursaring",
		"Slugma",
		"Magcargo",
		"Swinub",
		"Piloswine",
		"Corsola",
		"Remoraid",
		"Octillery",
		"Delibird",
		"Mantine",
		"Skarmory",
		"Houndour",
		"Houndoom",
		"Kingdra",
		"Phanpy",
		"Donphan",
		"Porygon2",
		"Stantler",
		"Smeargle",
		"Tyrogue",
		"Hitmontop",
		"Smoochum",
		"Elekid",
		"Magby",
		"Miltank",
		"Blissey",
		"Raikou",
		"Entei",
		"Suicune",
		"Larvitar",
		"Pupitar",
		"Tyranitar",
		"Lugia",
		"Ho-Oh",
		"Celebi",
		"Treecko",
		"Grovyle",
		"Sceptile",
		"Torchic",
		"Combusken",
		"Blaziken",
		"Mudkip",
		"Marshtomp",
		"Swampert",
		"Poochyena",
		"Mightyena",
		"Zigzagoon",
		"Linoone",
		"Wurmple",
		"Silcoon",
		"Beautifly",
		"Cascoon",
		"Dustox",
		"Lotad",
		"Lombre",
		"Ludicolo",
		"Seedot",
		"Nuzleaf",
		"Shiftry",
		"Taillow",
		"Swellow",
		"Wingull",
		"Pelipper",
		"Ralts",
		"Kirlia",
		"Gardevoir",
		"Surskit",
		"Masquerain",
		"Shroomish",
		"Breloom",
		"Slakoth",
		"Vigoroth",
		"Slaking",
		"Nincada",
		"Ninjask",
		"Shedinja",
		"Whismur",
		"Loudred",
		"Exploud",
		"Makuhita",
		"Hariyama",
		"Azurill",
		"Nosepass",
		"Skitty",
		"Delcatty",
		"Sableye",
		"Mawile",
		"Aron",
		"Lairon",
		"Aggron",
		"Meditite",
		"Medicham",
		"Electrike",
		"Manectric",
		"Plusle",
		"Minun",
		"Volbeat",
		"Illumise",
		"Roselia",
		"Gulpin",
		"Swalot",
		"Carvanha",
		"Sharpedo",
		"Wailmer",
		"Wailord",
		"Numel",
		"Camerupt",
		"Torkoal",
		"Spoink",
		"Grumpig",
		"Spinda",
		"Trapinch",
		"Vibrava",
		"Flygon",
		"Cacnea",
		"Cacturne",
		"Swablu",
		"Altaria",
		"Zangoose",
		"Seviper",
		"Lunatone",
		"Solrock",
		"Barboach",
		"Whiscash",
		"Corphish",
		"Crawdaunt",
		"Baltoy",
		"Claydol",
		"Lileep",
		"Cradily",
		"Anorith",
		"Armaldo",
		"Feebas",
		"Milotic",
		"Castform",
		"Kecleon",
		"Shuppet",
		"Banette",
		"Duskull",
		"Dusclops",
		"Tropius",
		"Chimecho",
		"Absol",
		"Wynaut",
		"Snorunt",
		"Glalie",
		"Spheal",
		"Sealeo",
		"Walrein",
		"Clamperl",
		"Huntail",
		"Gorebyss",
		"Relicanth",
		"Luvdisc",
		"Bagon",
		"Shelgon",
		"Salamence",
		"Beldum",
		"Metang",
		"Metagross",
		"Regirock",
		"Regice",
		"Registeel",
		"Latias",
		"Latios",
		"Kyogre",
		"Groudon",
		"Rayquaza",
		"Jirachi",
		"Deoxys",
		"Turtwig",
		"Grotle",
		"Torterra",
		"Chimchar",
		"Monferno",
		"Infernape",
		"Piplup",
		"Prinplup",
		"Empoleon",
		"Starly",
		"Staravia",
		"Staraptor",
		"Bidoof",
		"Bibarel",
		"Kricketot",
		"Kricketune",
		"Shinx",
		"Luxio",
		"Luxray",
		"Budew",
		"Roserade",
		"Cranidos",
		"Rampardos",
		"Shieldon",
		"Bastiodon",
		"Burmy",
		"Wormadam",
		"Mothim",
		"Combee",
		"Vespiquen",
		"Pachirisu",
		"Buizel",
		"Floatzel",
		"Cherubi",
		"Cherrim",
		"Shellos",
		"Gastrodon",
		"Ambipom",
		"Drifloon",
		"Drifblim",
		"Buneary",
		"Lopunny",
		"Mismagius",
		"Honchkrow",
		"Glameow",
		"Purugly",
		"Chingling",
		"Stunky",
		"Skuntank",
		"Bronzor",
		"Bronzong",
		"Bonsly",
		"Mime Jr.",
		"Happiny",
		"Chatot",
		"Spiritomb",
		"Gible",
		"Gabite",
		"Garchomp",
		"Munchlax",
		"Riolu",
		"Lucario",
		"Hippopotas",
		"Hippowdon",
		"Skorupi",
		"Drapion",
		"Croagunk",
		"Toxicroak",
		"Carnivine",
		"Finneon",
		"Lumineon",
		"Mantyke",
		"Snover",
		"Abomasnow",
		"Weavile",
		"Magnezone",
		"Lickilicky",
		"Rhyperior",
		"Tangrowth",
		"Electivire",
		"Magmortar",
		"Togekiss",
		"Yanmega",
		"Leafeon",
		"Glaceon",
		"Gliscor",
		"Mamoswine",
		"Porygon-Z",
		"Gallade",
		"Probopass",
		"Dusknoir",
		"Froslass",
		"Rotom",
		"Uxie",
		"Mesprit",
		"Azelf",
		"Dialga",
		"Palkia",
		"Heatran",
		"Regigigas",
		"Giratina",
		"Cresselia",
		"Phione",
		"Manaphy",
		"Darkrai",
		"Shaymin",
		"Arceus",
		"Victini",
		"Snivy",
		"Servine",
		"Serperior",
		"Tepig",
		"Pignite",
		"Emboar",
		"Oshawott",
		"Dewott",
		"Samurott",
		"Patrat",
		"Watchog",
		"Lillipup",
		"Herdier",
		"Stoutland",
		"Purrloin",
		"Liepard",
		"Pansage",
		"Simisage",
		"Pansear",
		"Simisear",
		"Panpour",
		"Simipour",
		"Munna",
		"Musharna",
		"Pidove",
		"Tranquill",
		"Unfezant",
		"Blitzle",
		"Zebstrika",
		"Roggenrola",
		"Boldore",
		"Gigalith",
		"Woobat",
		"Swoobat",
		"Drilbur",
		"Excadrill",
		"Audino",
		"Timburr",
		"Gurdurr",
		"Conkeldurr",
		"Tympole",
		"Palpitoad",
		"Seismitoad",
		"Throh",
		"Sawk",
		"Sewaddle",
		"Swadloon",
		"Leavanny",
		"Venipede",
		"Whirlipede",
		"Scolipede",
		"Cottonee",
		"Whimsicott",
		"Petilil",
		"Lilligant",
		"Basculin",
		"Sandile",
		"Krokorok",
		"Krookodile",
		"Darumaka",
		"Darmanitan",
		"Maractus",
		"Dwebble",
		"Crustle",
		"Scraggy",
		"Scrafty",
		"Sigilyph",
		"Yamask",
		"Cofagrigus",
		"Tirtouga",
		"Carracosta",
		"Archen",
		"Archeops",
		"Trubbish",
		"Garbodor",
		"Zorua",
		"Zoroark",
		"Minccino",
		"Cinccino",
		"Gothita",
		"Gothorita",
		"Gothitelle",
		"Solosis",
		"Duosion",
		"Reuniclus",
		"Ducklett",
		"Swanna",
		"Vanillite",
		"Vanillish",
		"Vanilluxe",
		"Deerling",
		"Sawsbuck",
		"Emolga",
		"Karrablast",
		"Escavalier",
		"Foongus",
		"Amoonguss",
		"Frillish",
		"Jellicent",
		"Alomomola",
		"Joltik",
		"Galvantula",
		"Ferroseed",
		"Ferrothorn",
		"Klink",
		"Klang",
		"Klinklang",
		"Tynamo",
		"Eelektrik",
		"Eelektross",
		"Elgyem",
		"Beheeyem",
		"Litwick",
		"Lampent",
		"Chandelure",
		"Axew",
		"Fraxure",
		"Haxorus",
		"Cubchoo",
		"Beartic",
		"Cryogonal",
		"Shelmet",
		"Accelgor",
		"Stunfisk",
		"Mienfoo",
		"Mienshao",
		"Druddigon",
		"Golett",
		"Golurk",
		"Pawniard",
		"Bisharp",
		"Bouffalant",
		"Rufflet",
		"Braviary",
		"Vullaby",
		"Mandibuzz",
		"Heatmor",
		"Durant",
		"Deino",
		"Zweilous",
		"Hydreigon",
		"Larvesta",
		"Volcarona",
		"Cobalion",
		"Terrakion",
		"Virizion",
		"Tornadus",
		"Thundurus",
		"Reshiram",
		"Zekrom",
		"Landorus",
		"Kyurem",
		"Keldeo",
		"Meloetta",
		"Genesect",
		"Chespin",
		"Quilladin",
		"Chesnaught",
		"Fennekin",
		"Braixen",
		"Delphox",
		"Froakie",
		"Frogadier",
		"Greninja",
		"Bunnelby",
		"Diggersby",
		"Fletchling",
		"Fletchinder",
		"Talonflame",
		"Scatterbug",
		"Spewpa",
		"Vivillon",
		"Litleo",
		"Pyroar",
		"Flabebe",
		"Floette",
		"Florges",
		"Skiddo",
		"Gogoat",
		"Pancham",
		"Pangoro",
		"Furfrou",
		"Espurr",
		"Meowstic",
		"Honedge",
		"Doublade",
		"Aegislash",
		"Spritzee",
		"Aromatisse",
		"Swirlix",
		"Slurpuff",
		"Inkay",
		"Malamar",
		"Binacle",
		"Barbaracle",
		"Skrelp",
		"Dragalge",
		"Clauncher",
		"Clawitzer",
		"Helioptile",
		"Heliolisk",
		"Tyrunt",
		"Tyrantrum",
		"Amaura",
		"Aurorus",
		"Sylveon",
		"Hawlucha",
		"Dedenne",
		"Carbink",
		"Goomy",
		"Sliggoo",
		"Goodra",
		"Klefki",
		"Phantump",
		"Trevenant",
		"Pumpkaboo",
		"Gourgeist",
		"Bergmite",
		"Avalugg",
		"Noibat",
		"Noivern",
		"Xerneas",
		"Yveltal",
		"Zygarde",
		"Diancie",
		"Hoopa",
		"Volcanion",
		"Rowlet",
		"Dartrix",
		"Decidueye",
		"Litten",
		"Torracat",
		"Incineroar",
		"Popplio",
		"Brionne",
		"Primarina",
		"Pikipek",
		"Trumbeak",
		"Toucannon",
		"Yungoos",
		"Gumshoos",
		"Grubbin",
		"Charjabug",
		"Vikavolt",
		"Crabrawler",
		"Crabominable",
		"Oricorio",
		"Cutiefly",
		"Ribombee",
		"Rockruff",
		"Lycanroc",
		"Wishiwashi",
		"Mareanie",
		"Toxapex",
		"Mudbray",
		"Mudsdale",
		"Dewpider",
		"Araquanid",
		"Fomantis",
		"Lurantis",
		"Morelull",
		"Shiinotic",
		"Salandit",
		"Salazzle",
		"Stufful",
		"Bewear",
		"Bounsweet",
		"Steenee",
		"Tsareena",
		"Comfey",
		"Oranguru",
		"Passimian",
		"Wimpod",
		"Golisopod",
		"Sandygast",
		"Palossand",
		"Pyukumuku",
		"Type: Null",
		"Silvally",
		"Minior",
		"Komala",
		"Turtonator",
		"Togedemaru",
		"Mimikyu",
		"Bruxish",
		"Drampa",
		"Dhelmise",
		"Jangmo-o",
		"Hakamo-o",
		"Kommo-o",
		"Tapu Koko",
		"Tapu Lele",
		"Tapu Bulu",
		"Tapu Fini",
		"Cosmog",
		"Cosmoem",
		"Solgaleo",
		"Lunala",
		"Nihilego",
		"Buzzwole",
		"Pheromosa",
		"Xurkitree",
		"Celesteela",
		"Kartana",
		"Guzzlord",
		"Necrozma",
		"Magearna",
		"Marshadow",
		"Poipole",
		"Naganadel",
		"Stakataka",
		"Blacephalon",
		"Zeraora",
		"Meltan",
		"Melmetal"
	],

	selectedPokemon: null,

	pokemonTypes: "normal fire water electric grass ice fighting poison ground flying psychic bug rock ghost dragon dark steel fairy".split(" "),

	// pokemonDialogueBoxUrl: "https://www.pngfind.com/pngs/m/641-6412603_pokemon-dialog-box-pokemon-text-box-png-transparent.png",

	pokemonUrl: null,

	questionData:[],
	nameData:[],

	score: null,
	questions: null,

	difficulty: null,

	selectRandomPokemon: function() {

		let temp =Math.floor(
			Math.random()*this.pokemonList.length
			)



		//Be very careful here! Recurion imminent
		if(game.nameData.indexOf(temp)>=0) {
			return game.selectRandomPokemon()
		}
		//Whew!! That was a close one!!


		else {
			return temp
		}
	},

	setPokemonUrl: function(integer) {

		game.pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${integer}`
		return game.pokemonUrl
	},

	renderWhoQuestion: function(questionDataArray) {
		if(typeof(questionDataArray[0]) === "object" && document.querySelector("#question-page")=== null) {
		let questionPage = document.createElement("div")
		questionPage.setAttribute("id","question-page")

		let questionContainer = document.createElement("div")
		questionContainer.setAttribute("id","question-container")
		
		
		let questionImage = document.createElement("img")
		questionImage.setAttribute("id","question-image")
		questionImage.setAttribute("src",`${questionDataArray[0].sprites.front_default}`)
		questionImage.setAttribute("width","150px")
		questionImage.setAttribute("height","150px")

		let question = document.createElement("div")
		question.setAttribute("id","question")
		question.style.backgroundImage = "url(./images/pokemon-dialog-box-gameboy-style.png)"

		let questionText = document.createElement("div")
		questionText.setAttribute("id","question-text")
		questionText.textContent = "Who's that Pokemon?!"

		questionPage.appendChild(questionContainer)
		questionContainer.appendChild(questionImage)
		question.appendChild(questionText)

		questionContainer.appendChild(question)
		
		document.querySelector("body").appendChild(questionPage)
		}
	},

	renderWhoAnswer: function(questionDataArray, difficulty) {
		if ( typeof(questionDataArray[0])==="object" && typeof(questionDataArray[1])==="object" && typeof(questionDataArray[2])==="object" && typeof(questionDataArray[3])==="object"){


			let answersContainer = document.createElement("div")
			answersContainer.setAttribute("id","answers-container")

			let answers = document.createElement("ul")
			answers.setAttribute("id", "answers")

			document.querySelector("#question-page").appendChild(answersContainer)
			answersContainer.appendChild(answers)

			let answersArray = []
			for(let i = 0; i <= 3; i++) {
				let answer = document.createElement("li")

				answer.setAttribute("value", i)
				
				if(difficulty==="easy"){		
					answer.setAttribute("class", `answer-easy`)		
					answer.style.backgroundImage = `url(${questionDataArray[i].sprites.front_default}), url(./images/pokemon-dialog-box-gameboy-style.png)`}
				else if(difficulty === "hard") {
					answer.setAttribute("class", `answer-hard`)
					answer.style.backgroundImage = `url(./images/pokemon-dialog-box-gameboy-style.png)`
				}

				let answerText= document.createElement("div")

				let stringTemp = null
				stringTemp =questionDataArray[i].name.substring(0,1).toUpperCase()  + questionDataArray[i].name.slice(1) 
	
				answerText.textContent = stringTemp
				answerText.addEventListener("click", function(){
					game.checkAnswer({target:{value:i}})
				})
				answer.addEventListener("click",game.checkAnswer)
				answers.appendChild(answer)
				answer.appendChild(answerText)
				answersArray[i] = answer
			}
			let tempArray = []
			randIndex =  null
			for(let i = answersArray.length; i >= 1; i--) {

				randIndex = Math.floor(Math.random()*i)
				tempArray.push(answersArray[randIndex])
				answersArray.splice(randIndex,1)
			}
			answersArray = [...tempArray]
			for(answer in answersArray) {

				answers.appendChild(answersArray[answer])
			}
		}
	},

	feedbackWindow: function(correct) {
		let window = document.createElement("div")

		window.style.backgroundImage = `url(${game.questionData[0].sprites.front_default}), url(./images/pokemon-dialog-box-gameboy-style.png)`
		window.style.zIndex = 5
		window.setAttribute("id","feedback-window")
		
		
		let windowText = document.createElement("h4")

		windowText.setAttribute("id","feedback-window-text")
		if(correct) {
			windowText.textContent = "Right!"
		} else {
			windowText.textContent = "Wrong!"
		}

		windowText.textContent = windowText.textContent + "\n" + `It's ${game.questionData[0].name}!`
		windowText.addEventListener("click", game.start)
		window.appendChild(windowText)
		window.addEventListener("click",game.start)
		document.querySelector("#question-page").appendChild(window)
	},

	checkAnswer: function(event) {
		let correct = null
		if(event.target.value === 0 ) {
			
			correct = true
			game.score++
			game.questions++
			game.feedbackWindow(correct)
		
		} else if(event.target.value > 0 && event.target.value <=3) {
			
			correct = false
			game.questions++
			game.feedbackWindow(correct)
		
		}
	},

	whoIsThatPokemonFetch: function(nameData) {
		for(let i= 0; i< nameData.length;i++) {

			fetch(this.setPokemonUrl(nameData[i]))
			
			.then( function(results) {
				return results.json()
			
			})
			.then(function(jsonData){

				game.questionData[i] = jsonData
				game.renderWhoQuestion(game.questionData)
				game.renderWhoAnswer(game.questionData,game.difficulty)

				})
			}
		},

	generateWhoQuestion: function() {

				this.whoIsThatPokemonFetch(this.nameData)
	
	},


	start: function() {


		if(game.difficulty===null) {

			game.difficulty = document.querySelector("select").value

		}

		document.body.innerHTML = ""
		game.nameData = []
		game.questionData = []

		for(let i=0; i<=3; i++){
			
			game.nameData[i] = game.selectRandomPokemon()
		}

		game.generateWhoQuestion()

	},

	main: function() {

		document.querySelector("#start-button").addEventListener("click", game.start)
	},

}

game.main()
