from flask import Flask, render_template

app = Flask(__name__)

# for hot reload - use '.venv/Scripts/python -m flask --debug run'

@app.route("/", methods=["GET"])
def index():
    # return render_template("homepage.html")
    return render_template("homepage.html")