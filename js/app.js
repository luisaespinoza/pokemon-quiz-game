// console.log("I'm alive!")

// document.querySelector("#start-button").addEventListener()
const game = {

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
			Math.random()*898
			)

		//Be very careful here! Recursion imminent
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
				answerText.addEventListener("click", function(event){
					event.stopImmediatePropagation
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
	
		windowText.setAttribute("class","feedback-window-text")

		if(correct) {
			windowText.textContent = "Right!"
		} else {
			windowText.textContent = "Wrong!"
		}
		let stringTemp = null
		stringTemp = game.questionData[0].name.substring(0,1).toUpperCase()  + game.questionData[0].name.slice(1) 

		windowText.innerHTML = windowText.innerText +"<br> <br>" + "Its " + stringTemp + "!<br><br>" + "[CLICK HERE]"

		windowText.addEventListener("click", function(event) {
			event.stopImmediatePropagation()
			game.start()
		})
		
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
				document.body.style.backgroundColor = "whitesmoke"

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
