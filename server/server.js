const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require('./routes')(app);

app.get('/', (req, res) => {
	res.send({ message: `Connected to Port ${port}` });
})

app.listen(port, (err) => {
	if (err) { console.log(err) }
	console.log(`Listening on Port ${port}`)
})