import pkg from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
// Initialize the client
const client = new pkg.Client({
  authStrategy: new pkg.LocalAuth(), // Saves your session locally
});

// Generate QR Code for WhatsApp Web login
client.on("qr", (qr) => {
  console.log("Scan this QR code to log in:");
  qrcode.generate(qr, { small: true });
});

// Log when the client is ready
client.on("ready", () => {
  console.log("WhatsApp Bot is ready!");
});

// Listen for incoming messages
client.on("message", (message) => {
  console.log(`Received message: ${message.body} from ${message.from}`);

  const text = ["bro", "hi", "hello", "surya", "hey", "oi", "hai"];
  // Basic bot responses
  if (text.includes(message.body.toLowerCase())) {
    message.reply("Hi! How can I help you today?");
  } else if (message.body.toLowerCase() === "help") {
    message.reply(
      "I can assist you with basic queries. If needed, I will connect you to a live agent."
    );
  } else if (message.body.toLowerCase() === "bye") {
    message.reply("Goodbye! Have a great day!");
  } else {
    // Here, notify a live agent (e.g., via email or another system)
  }
});

// Start the client
client.initialize();
