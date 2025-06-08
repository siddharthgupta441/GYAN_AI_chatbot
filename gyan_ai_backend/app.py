from flask import Flask, request, jsonify
from main import predict_class, get_response, intents
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods = ["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message")
    intent_list = predict_class(user_input)
    responce = get_response(intent_list, intents)
    return jsonify({"reply": responce})

if __name__ == "__main__":
    app.run(debug=True, port=5000)