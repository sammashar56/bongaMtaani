import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const port: number = 3000;

mongoose.connect('mongodb://localhost:27017/forum_api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology:true
}, ()=> {
  console.log('connected to database');
  
}
)
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log("Server is running ", port)
});
