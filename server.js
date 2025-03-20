const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/', function (req, res) {
  res.send('Node Api ')
})
app.get('/about', function (req, res) {
  res.send('About')
})
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://chess:chess123@cluster0.z6ilm.mongodb.net/NODEAPI?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    app.listen(3000,()=>{
        console.log('Server started on port 3000');
    })
    console.log('Connected to MongoDB...');
})
.catch(err => console.error('Could not connect to MongoDB...', err));
