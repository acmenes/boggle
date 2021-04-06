// everything that has to do with logic for the class goes here

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
    }

    scoreFunction(){
        console.log("score")
    }
}

const $startGame = $('#start-game')

$('$startGame').on("click", startGame())

async function startGame() {
    console.log("it works!")
    const game = new Boggle(time = 60, score = 0)
}
