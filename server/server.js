const express = require('express');
const PORT = 3000;
const app = express();




app.use('/listing/:id', express.static('public'));
app.use(express.static('public'));

// app.use('/listing/:id', express.static('node_modules'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})



