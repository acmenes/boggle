const $time = $('#time');
const $score = $('#score');
const $submit = $('#submit');
const $startGame = $('#start-game')

class Boggle {
    constructor(time, score){
        // this.board = board,
        this.time = time, 
        this.score = score
        this.timerFunction()
        this.scoreFunction()
    }

    timerFunction(){
        console.log("timer")
        time --
    }

    scoreFunction(){
        console.log("score")
    }
}

$('#start-game').on("click", startGame())

async function startGame() {
    console.log("it works!")
    const game = new Boggle(time = 60, score = 0)
    $("#score").append(" " + `${game.score}`)
    $("#time").append(" " + `${game.time}`)
    setInterval(() => {
        game.timerFunction()
        $("#time").text(`Time: ${time}`)
        if(time === 0){
            clearInterval()
        }
    }, 1000);

    return game
}

$('#submit').on("click", submitWord())

async function submitWord(word){
    const res = await axios.get('/check', {params: {word: word}})
    console.log(res)
    console.log("Submit Word")
    //I want to add a bonus for the length of each word... maybe those words can be stored
    //in an array with each character spread out to a string? and then total the string into
    //the score?

    //word.length

    score ++ 
    $("#score").text(`Score: ${score}`)

    //I also need to fix it so it doesn't take every submission
    }
