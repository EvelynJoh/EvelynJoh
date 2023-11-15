
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

app.use(express.json());

// 2.2 MongoDB-Verbindung
mongoose.connect('mongodb://database-container:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// 2.3 Produkt-Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

// 2.4 CRUD-Routen für Produkte
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CRUD-Routen für Hinzufügen, Bearbeiten und Löschen an dieser Stelle einfügen

// 2.5 Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
