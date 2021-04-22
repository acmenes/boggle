const $time = $('#time');
const $score = $('#score');
const $submit = $('#submit');
const $startGame = $('#start-game')
const $foundWords =$('#found-words')
const $word = $('#word')

const game = new Boggle(60, $time, $score)

foundWords = []

function startGame() {
    console.log("it works!")
    const game = new Boggle(time=60, score=0)
    return game
}

$('#submit').on("click", (evt)=>{evt.preventDefault();submitWord($word.val())})

async function submitWord(word){
    const res = await axios.get('/check', {params: {word: word}})
    word = word.trim();
    if((word) && (!foundWords.includes(word))){
        addWord(word)
        game.addScore(word.length)
    }
    else if(foundWords.includes(word)){
        alert("YOU ALREADY SUBMITTED THAT WORD USE YER BRAIN DANGIT")
        return;
    }
    else {
        return;
    }
    console.log(res)
    console.log("Submit Word")
    console.log(word)
    }

function addWord(word) {
    if(foundWords.includes(word)){
        foundWords.pop()
        foundWords.push(word)
    }
    else{
        foundWords.push(word)
        alert(foundWords)
    }
    
}