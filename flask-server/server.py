from flask import Flask
import os
#from flask_cors import CORS #comment this on deployment


app = Flask(__name__)
#CORS(app)
@app.route("/")
def default():
    test = ["test1", "test2", "test3"]
    return test


if __name__ == "__main__":
    app.run(debug=True)
