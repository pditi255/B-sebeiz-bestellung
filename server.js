const express = require('express'); const app = express(); const PORT = 3000; let orders = []; app.use(express.static('public')); app.use(express.json()); app.post('/api/order', (req, res) => { orders.push(req.body); res.send('Bestellung empfangen!'); }); app.get('/api/orders', (req, res) => { res.json(orders); }); app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
