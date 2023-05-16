// Import dependencies.
import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config';

// Configure connection to OpenAI's API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

// CREATE model *****************************************

// RETRIEVE model *****************************************

// Retrieve song recommendations for a given genre.
const getRecommendationsByGenre = async (_genre) => {
    const prompt = `Give me 3 song recommendations (with their artists) in the ${_genre} music genre.`;
    let result;
    await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
        temperature: 0.6,
        max_tokens: 1000
    })
    .then(aiResult => {
        result = aiResult.data.choices[0].message.content;
    });
    return {"result": result};
}

// Exports for genre-microservice-controller
export {getRecommendationsByGenre};