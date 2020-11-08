import express from 'express';

const app = express();
const port: number = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log("Server is running ", port)
});
