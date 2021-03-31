from boggle import Boggle

from flask import Flask, request, render_template, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

boggle_game = Boggle()

app = Flask(__name__)

app.config['SECRET_KEY'] = "MissMillieIsGood"
app.config['DEBUG_TB_INTERCEPT_REDIRECT'] = False
debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    real_board = Boggle()
    game_board = real_board.make_board()
    return render_template('home.html', game_board=game_board)

@app.route('/check')
def check_word():
    # return redirect('home.html')
    return jsonify (
        message="It works!",
        category="success",
        status=200
    )


@app.route('/test')
def test_board():
    # testing the functionality here
    board = Boggle()
    my_board = str(board.make_board())
    return my_board
