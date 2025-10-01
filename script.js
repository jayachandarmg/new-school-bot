const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const schoolName = "New Bharath Matriculation Higher Secondary School";
const schoolTimings = "8:00 AM - 6:00 PM Monday to Friday";
const schoolContact = "Phone: 8925055554, Email: info@newbharathschool.com";  

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

const last year sslc mark = 
    "1st rank - 493
    2nd rank - 489
    3rd rank  -479 " :

 const last year hsc mark = [ 
      1st rank - 562
      2nd rank - 559
      3rd rank - 532   ];

const sports = [ 
     1. Throw ball
     2. Volley ball
     3. Floor ball 
     4. Hockey ];

const admissionDocs = [
  "Birth certificate",
  "Transfer certificate",
  "Previous school mark sheet",
  "Passport size photos",
  "Address proof"
];

// 11th standard groups
const groups11 = [
  "Science: Mathematics, Biology, Computer Science",
  "Commerce: Accountancy, Business, Economics",
  "Arts: History, Economics, Geography"
];

// Handle user input
sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    userInput.value = '';

    setTimeout(() => {
        const reply = getBotReply(text);
        addMessage(reply, 'bot');
    }, 500);
});

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(text) {
    text = text.toLowerCase();
    let reply = "Sorry, I didn't understand that. You can ask about admissions, fees, timings, contact, or 11th groups.";

    // Admission questions
    if (text.includes("admission") || text.includes("apply") || text.includes("documents required")) {
        reply = `Admissions are open for 2025 at ${schoolName}.\nRequired documents:\n- ${admissionDocs.join("\n- ")}\nContact us at ${schoolContact}`;
    }

    // Fees questions
    else if (text.includes("fee") || text.includes("fees") || text.includes("cost")) {
        reply = "Fees for each class:\n" + Object.entries(fees).map(([cls, fee]) => `Class ${cls.toUpperCase()}: ${fee}`).join("\n");
    }

    // Timings questions
    else if (text.includes("timing") || text.includes("time") || text.includes("school opens")) {
        reply = `School timings: ${schoolTimings}`;
    }

    // Contact questions
    else if (text.includes("contact") || text.includes("phone") || text.includes("email")) {
        reply = `Contact Info:\n${schoolContact}`;
    }

    // 11th groups
    else if (text.includes("11th") && text.includes("group")) {
        reply = "Available 11th standard groups:\n- " + groups11.join("\n- ");
    }

    // sslc mark
    else if (text.includes("sslc mark")  | | text.includes("10th mark") ) { 
         reply = " last year sslc mark : ${last year sslc mark}`;
    return reply;
}



