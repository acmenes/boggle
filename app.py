from boggle import Boggle

from flask import Flask, request, render_template, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

boggle_game = Boggle()

app = Flask(__name__)

app.config['SECRET_KEY'] = "MissMillieIsGood"
app.config['DEBUG_TB_INTERCEPT_REDIRECT'] = False
debug = DebugToolbarExtension(app)

real_board = Boggle()

@app.route('/')
def home_page():
    game_board = real_board.make_board()
    session['game_board'] = game_board
    return render_template('home.html', game_board=game_board)

@app.route('/check')
def check_word():
    print("received")
    word = request.args["word"]
    board = session["game_board"]
    response = real_board.check_valid_word(board, word)
    return jsonify({
        "result": response,
        "status": 200,
        "word": word
        })

@app.route('/test')
def test_board():
    # testing the functionality here
    board = Boggle()
    my_board = str(board.make_board())
    return my_board

@app.route('/game-over')
def game_over():
    return "Game is over!"
