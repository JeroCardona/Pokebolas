const express = require('express');
const pokeneaRoutes = require('./src/routes/pokeneaRoutes');
const app = express();
const PORT = 80;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Set the views folder

// Middleware to use routes
app.use(pokeneaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
