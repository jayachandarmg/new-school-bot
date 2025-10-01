const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const path = require('path');

// Replace with your Bot Token from BotFather
const TOKEN = '8107729428:AAHb_pem2ENFXnlfCSzJTw-iMQcBtraOTEI';
const bot = new TelegramBot(TOKEN, { polling: true });

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// School Info
const schoolName = "New Bharath Matriculation Higher Secondary School";
const schoolTimings = "8:00 AM - 6:00 PM Monday to Friday";
const schoolContact = "Phone: 1234567890, Email: info@newbharathschool.com";

// Fees for each class (example)
const fees = {
  "kg": "₹15,000/year",
  "1": "₹20,000/year",
  "2": "₹20,000/year",
  "3": "₹25,000/year",
  "4": "₹25,000/year",
  "5": "₹30,000/year",
  "6": "₹35,000/year",
  "7": "₹35,000/year",
  "8": "₹40,000/year",
  "9": "₹45,000/year",
  "10": "₹50,000/year",
  "11": "₹55,000/year",
  "12": "₹60,000/year"
};

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const keyboard = [['Admissions', 'Fee'], ['Timings', 'Contact']];
    bot.sendMessage(msg.chat.id, `Welcome to ${schoolName}!`, {
        reply_markup: {
            keyboard: keyboard,
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

// Handle messages
bot.on('message', (msg) => {
    const text = msg.text.toLowerCase();
    let reply = "Sorry, I didn't understand that. You can ask about admissions, fees, timings, or contact.";

    if (text.includes("admission")) {
        reply = `Admissions are open for 2025 at ${schoolName}. Please visit our website or contact us at ${schoolContact}`;
    } else if (text.includes("timing")) {
        reply = `School timings: ${schoolTimings}`;
    } else if (text.includes("fee")) {
        reply = "Fees for each class:\n" + Object.entries(fees).map(([cls, fee]) => `Class ${cls.toUpperCase()}: ${fee}`).join("\n");
    } else if (text.includes("contact")) {
        reply = `Contact Info:\n${schoolContact}`;
    }

    bot.sendMessage(msg.chat.id, reply);
});

// Run express server (optional, for frontend)
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
