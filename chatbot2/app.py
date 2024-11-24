from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Showroom chatbot logic
def car_showroom_response(user_input):
    user_input = user_input.lower()
    
    if "hello" in user_input or "hi" in user_input:
        return "Hello! Welcome to our car showroom. How can I assist you today?"
    
    elif "available cars" in user_input or "show me cars" in user_input:
        return "We have a range of cars including sedans, SUVs, and electric vehicles. Would you like details about a specific model?"

    elif "car prices" in user_input or "how much" in user_input:
        return "Our prices start from $20,000 for compact models to $60,000 for luxury models. Let me know which car you're interested in."

    elif "electric cars" in user_input or "ev" in user_input:
        return "We offer several electric cars, including the Tesla Model 3 and Nissan Leaf. Would you like more information about one of them?"

    elif "test drive" in user_input:
        return "We'd love for you to test drive one of our cars! Let me know which model you'd like to try, and I'll schedule it for you."

    elif "financing options" in user_input or "loan" in user_input:
        return "We offer flexible financing plans. Would you like to speak with a finance expert?"

    elif "warranty" in user_input:
        return "Our cars come with a 3-year/36,000-mile warranty. Extended warranties are available as well. Would you like more details?"

    elif "bye" in user_input:
        return "Goodbye! Feel free to come back anytime. Have a great day!"

    else:
        return "Sorry, I couldn't understand that. Could you please ask something else related to cars or services?"

# Flask routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.form["message"]
    bot_message = car_showroom_response(user_message)
    return jsonify({"message": bot_message})

if __name__ == "__main__":
    app.run(debug=True)
