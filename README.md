🛒 Smart Checkout System

A barcode-based cashless checkout web app that eliminates long billing queues in shopping malls.

Customers scan product barcodes, add items to a cart, pay using a virtual cashless wallet, and receive a QR code for exit verification.

🚀 Features

📷 1D Barcode scanning (EAN-13)

🗄️ MongoDB product database

🛒 Real-time cart updates

💰 Cashless token / virtual wallet payment

📱 QR code generation after payment

🔐 Designed for anti-theft exit gate systems

🌐 Fully web-based (no app required)

🧠 How It Works

Scan product barcode

Product fetched from MongoDB

Item added to cart

Pay using virtual wallet

QR code generated for verification

🏗️ Tech Stack

Frontend: HTML, CSS, JavaScript, QuaggaJS, QRCode.js
Backend: Node.js, Express.js, MongoDB, Mongoose

📁 Project Structure
backend/
 ├── server.js
 └── models/Product.js

frontend/
 ├── index.html
 ├── style.css
 └── script.js

🗄️ Database Format

Database: smartcheckout
Collection: products

{
  "barcode": "1234567890128",
  "name": "Milk Packet",
  "price": 52
}

⚙️ Run Locally
cd backend
npm install
node server.js


Open frontend using Live Server or mobile browser.

💳 Payment Method

Virtual cashless wallet (₹1000 initial balance)

Safe for demos & hackathons

Can be replaced with real payment gateways

🎯 One-Line Pitch

“A smart, queue-less checkout system using barcode scanning, cashless payment, and QR-based exit verification.”
