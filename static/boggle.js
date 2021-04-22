// everything that has to do with logic for the class goes here

class Boggle {
    constructor(time, timeField, scoreField){
        // this.board = board,
        this.time = time, 
        this.score = 0
        this.timeField=timeField;
        this.scoreField=scoreField;
        this.timerFunction()
        //this.scoreFunction()
        this.scoreField.text(this.score);
    }

    timerFunction(){
        this.timeField.text(this.time);
        let idInt=setInterval(() => {
            this.time--;
            if(this.time === 0){
                clearInterval(idInt)
                alert("Game Over")
                alert(`Your score is ${this.score}`)
            }
            this.timeField.text(this.time);
        }, 1000);
    }

    addScore(pt){
        this.score+=pt;
        this.scoreField.text(this.score)

    }
}
