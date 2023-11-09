const express = require('express');
const app = express();


const dashboardController = require('./controllers/dashboardController');

app.set('view engine', 'ejs');

app.get('/', dashboardController.renderDashboard);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
