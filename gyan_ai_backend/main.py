import random
import json
import pickle
import numpy as np
import nltk
import os

from keras.models import load_model
from nltk.stem import WordNetLemmatizer

lemmatizer = WordNetLemmatizer()

model_path = os.path.join(os.path.dirname(__file__), 'src', 'chatbot_model.h5')
intents_path = os.path.join(os.path.dirname(__file__), 'src', 'intents.json')
words_path = os.path.join(os.path.dirname(__file__), 'src', 'words.pkl')
classes_path = os.path.join(os.path.dirname(__file__), 'src', 'classes.pkl')
model = load_model(model_path)
with open(intents_path, 'r') as file:
    intents = json.load(file)
words = pickle.load(open(words_path, "rb"))
classes = pickle.load(open(classes_path, "rb"))

def clean_up(sentence):
    tokens = nltk.word_tokenize(sentence)
    tokens = [lemmatizer.lemmatize(word.lower()) for word in tokens]
    return tokens

def bag_of_words(sentence, words):
    tokens = clean_up(sentence)
    bag = [0] * len(words)
    for s in tokens:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence, words)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.25
    results = [(i, r) for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return [{"intent": classes[r[0]], "probability": str(r[1])} for r in results]

def get_response(intents_list, intents_json):
    tag = intents_list[0]["intent"]
    for intent in intents_json["intents"]:
        if intent["tag"] == tag:
            return random.choice(intent["responses"])

# print("Bot is running! Type 'quit' to stop.")
# while True:
#     message = input("You: ")
#     if message.lower() == "quit":
#         break
#     ints = predict_class(message)
#     response = get_response(ints, intents)
#     print("Bot:", response)
