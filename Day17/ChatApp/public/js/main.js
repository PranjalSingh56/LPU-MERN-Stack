const API_URL = "http://localhost:5000/api/chat/send";
const SOCKET_URL = "http://localhost:5000";

let socket;
let currentUser = null;
let currentReceiver = null;

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const chatContainer = document.getElementById('chat-container');
const senderInput = document.getElementById('sender-id');
const receiverInput = document.getElementById('receiver-id');
const connectBtn = document.getElementById('connect-btn');
const messagesDiv = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const currentUserSpan = document.getElementById('current-user');
const currentReceiverSpan = document.getElementById('current-receiver');

// Event Listeners
connectBtn.addEventListener('click', connectToChat);
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function connectToChat() {
    const sender = senderInput.value.trim();
    const receiver = receiverInput.value.trim();

    if (!sender || !receiver) {
        alert("Please enter both Sender and Receiver IDs.");
        return;
    }

    currentUser = sender;
    currentReceiver = receiver;

    // Update UI
    currentUserSpan.textContent = currentUser;
    currentReceiverSpan.textContent = currentReceiver;

    // Initialize Socket
    socket = io(SOCKET_URL);

    socket.on("connect", () => {
        socket.emit("join", currentUser);
        console.log("Connected as", currentUser);

        // Switch views with animation
        loginScreen.classList.add('hidden');
        setTimeout(() => {
            loginScreen.style.display = 'none';
            chatContainer.classList.add('visible');
            messageInput.focus();
        }, 300);
    });

    socket.on("new_message", (data) => {
        addMessage(data.message, "received");
        playNotificationSound();
    });

    socket.on("connect_error", (err) => {
        console.error("Socket connection error:", err);
        alert("Failed to connect to the server.");
    });
}

async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    // Optimistic UI update
    addMessage(message, "sent");
    messageInput.value = "";

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sender: currentUser,
                receiver: currentReceiver,
                message: message
            }),
        });

        if (!res.ok) {
            throw new Error("Failed to send message");
        }

        const data = await res.json();
        // Server confirms message sent, we already displayed it.
        // potentially update status if we had 'delivered' checks
    } catch (error) {
        console.error("Error sending message:", error);
        // Maybe show an error indicator on the message
        addMessage("Failed to send previous message", "error");
    }
}

function addMessage(text, type) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${type}`;
    msgDiv.textContent = text; // Safer than innerText/innerHTML for user input

    messagesDiv.appendChild(msgDiv);
    scrollToBottom();
}

function scrollToBottom() {
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function playNotificationSound() {
    // Simple beep or sound can be added here
}
