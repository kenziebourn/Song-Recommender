import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import getRecommendationsForSong from './jia_ai_model.mjs';
//This controls the logic of the application and receives update from the UI via GET request
// and then notifies the model to get song recommendations

// Configure express server
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors()); // allows HTTP requests across different domains 

// Gets list of three different artists and songs that are similar to a specified song
app.get('/Results1/:_songtitle', (req, res) => {
  getRecommendationsForSong(req.params._songtitle)
    .then(recommendations => {
      res.status(201).json(recommendations.result);
    })
    // Catch will occur if one of the fields is invalid
    .catch(error => {
      res.status(400).json(error);
    });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
