// script.js
function sendMessage() {
    let input = document.getElementById("input").value;

    if (input) {
        displayMessage(input, 'user-message', 'user-avatar'); // Display user message
        
        // Call the chatbot function to get a response
        let response = chatbot(input);
        
        // Display bot response
        setTimeout(() => {
            displayMessage(response, 'bot-message', 'bot-avatar');
        }, 1000);

        document.getElementById("input").value = ""; // Clear input field
    }
}

function displayMessage(message, className, avatarClass) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Avatar
    let avatar = document.createElement("div");
    avatar.classList.add("avatar", avatarClass);
    messageElement.appendChild(avatar);

    // Message Text
    let text = document.createElement("div");
    text.classList.add(className);
    text.innerHTML = message;
    messageElement.appendChild(text);

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Chatbot logic with car showroom-related questions and answers
function chatbot(input) {
    input = input.toLowerCase();  // Convert input to lowercase for easier matching
    let response = "";

    if (input.includes("hello") || input.includes("hi")) {
        response = "Hello! Welcome to our car showroom. How can I assist you today?";
    } else if (input.includes("available cars") || input.includes("show cars")) {
        response = "We have a variety of cars available: sedans, SUVs, trucks, and electric vehicles. What type are you interested in?";
    } else if (input.includes("price") || input.includes("cost")) {
        response = "Prices vary depending on the model. Our sedans start from $20,000, SUVs from $30,000, and electric vehicles from $35,000.";
    } else if (input.includes("test drive")|| input.includes("can i drive")) {
        response = "You can schedule a test drive anytime! Just let me know the model you'd like to test and your availability.";
    } else if (input.includes("finance") || input.includes("payment options")) {
        response = "We offer financing options with low interest rates. You can pay in full, opt for a loan, or lease a vehicle.";
    } else if (input.includes("warranty") || input.includes("guarantee")) {
        response = "Our cars come with a 3-year or 36,000-mile warranty. We also offer extended warranty options.";
    } else if (input.includes("features") || input.includes("specifications")) {
        response = "Our cars come with the latest features including adaptive cruise control, lane assist, and state-of-the-art infotainment systems. What specific features are you looking for?";
    } else if (input.includes("colors") || input.includes("paint")) {
        response = "Our cars are available in a variety of colors. Popular choices include black, white, silver, red, and blue.";
    } else if (input.includes("availability")) {
        response = "We have most models in stock, but for some specific configurations, there might be a waiting period. Which model are you interested in?";
    } else if (input.includes("fuel efficiency") || input.includes("mileage")) {
        response = "Our sedans and SUVs offer great fuel efficiency. Sedans typically give around 30 MPG, while SUVs range from 20-25 MPG. We also have electric vehicles if you're looking for zero-emission options.";
    } else if (input.includes("electric cars") || input.includes("ev")) {
        response = "Our electric vehicle lineup offers impressive range and performance, with models capable of up to 300 miles on a single charge.";
    } else if (input.includes("thank you") || input.includes("thanks")) {
        response = "You're welcome! Let me know if you have any more questions.";
    } else if (input.includes("location") || input.includes("where are you located")) {
        response = "Our showroom is located at 123 Car Avenue, Auto City. Feel free to visit us anytime!";
    } else if (input.includes("working hours") || input.includes("open hours")) {
        response = "We are open Monday to Saturday from 9 AM to 7 PM, and Sunday from 10 AM to 5 PM.";
    } else if (input.includes("appointment") || input.includes("schedule")) {
        response = "You can schedule an appointment for a test drive or to meet with one of our specialists by calling us at 555-1234 or visiting our website.";
    } else if (input.includes("trade-in") || input.includes("exchange")) {
        response = "We offer trade-in options for your old car. You can bring it to our showroom for a valuation.";
    } else if (input.includes("insurance")) {
        response = "We can assist you with car insurance through our trusted partners. Would you like more information on that?";
    } else if (input.includes("safety features") || input.includes("safety")) {
        response = "Our cars are equipped with advanced safety features including airbags, anti-lock braking systems (ABS), and automatic emergency braking.";
    } else if (input.includes("luxury") || input.includes("high-end")) {
        response = "We have a range of luxury vehicles, including high-end sedans and SUVs equipped with premium materials and cutting-edge technology.";

    // New questions and answers start here:
    
    } else if (input.includes("suv") || input.includes("sports utility vehicle")) {
        response = "Our SUVs are perfect for family trips and off-road adventures. We have compact, midsize, and full-size SUVs available. Which one would you like to explore?";
    } else if (input.includes("sedan")) {
        response = "Our sedans are known for their fuel efficiency and smooth drive. They start at $20,000. Would you like to know more about our sedan models?";
    } else if (input.includes("truck") || input.includes("pickup")) {
        response = "Our trucks are built for tough tasks, with strong towing capacity and durability. Let me know if you'd like more details.";
    } else if (input.includes("delivery")) {
        response = "We offer free home delivery for all cars purchased within the city. For other areas, delivery charges may apply. Would you like to know more about delivery options?";
    } else if (input.includes("after-sales service")) {
        response = "We provide excellent after-sales service, including free maintenance for the first year and 24/7 roadside assistance.";
    } else if (input.includes("lease")) {
        response = "Leasing a car is a great option if you want to drive the latest models without full ownership. Our leasing plans start at $299 per month.";
    } else if (input.includes("how long for delivery") || input.includes("delivery time")) {
        response = "Typically, delivery takes between 2-5 business days, depending on the availability of the model and your location.";
    } else if (input.includes("spare parts")) {
        response = "We stock a wide range of spare parts for all our models. Whether you need a replacement or an upgrade, we can assist you.";
    } else if (input.includes("test drive requirements")) {
        response = "To schedule a test drive, you'll need a valid driver's license and proof of insurance. Would you like to set up a test drive?";
    } else if (input.includes("booking a car") || input.includes("reserve car")) {
        response = "You can book a car by visiting our showroom or through our website. A deposit is required to reserve your preferred model.";
    } else if (input.includes("latest model") || input.includes("new cars")) {
        response = "We just launched our latest 2024 models, featuring improved fuel efficiency and cutting-edge technology. Would you like to explore them?";
    } else if (input.includes("customization") || input.includes("customize")) {
        response = "You can customize various aspects of your car, including paint, interiors, and tech packages. Let me know if you'd like more details!";
    } else if (input.includes("contact") || input.includes("phone number")) {
        response = "You can reach us at 555-1234 or visit our website for more contact options.carshowroom.in";
    } else {
        response = "I'm sorry, I don't have an answer to that. You can ask me about our cars, prices, services, or financing options.";
    }

    return response;
}

