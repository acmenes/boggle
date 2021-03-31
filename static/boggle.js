class Boggle {
    constructor(board, time, score){
        this.board = board,
        this.time = time, 
        this.score = score
    }

    async submitWord(e){
        e.preventDefault()
        const res = await axios.get('/check')
        console.log(res)
        console.debug("Submit Word")
    }
}