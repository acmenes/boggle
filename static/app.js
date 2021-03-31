const $time = $('#time');
const $score = $('#score');
const $submit = $('#submit');

let score = 0 
let time = 60

// Submit button function here

// I hard coded the board in HTML, but this file should handle generating the board
function makeBoard(){
    console.debug("making the board")
}

// $('#submit').on("click", submitWord());

// async function submitWord(){
//     // I need to take the form value and send it to the server to check
//     const res = await axios.get("/check")
//     console.log(res)
//     console.debug("Submit")
// }

// Timer Function
function timerCount(){
    console.debug("This is the timer message.")
}

setInterval(timerCount(), 1000)

// Score Function
function scoreCount(){
    console.debug("This is the score message.")
    //if(word){
        //score++
    }




