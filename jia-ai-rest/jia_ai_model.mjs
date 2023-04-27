import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config';
//Updates application by using AI to generate song recommendations and returning the result

// Configure connection to OpenAI's API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // Function takes song title as argument and uses API to generate result
  const getRecommendationsForSong = async (_songtitle) => {
    const prompt = `Can you provide me with a list of three different artists and their songs who are similar to ${_songtitle}? Please don't use the same artists and songs.`;
    let result;
    await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
        temperature: 0.8,
        max_tokens: 1000 
    })
    .then(aiResult => {
        result = aiResult.data.choices[0].message.content;
    });
    return {"result": result};
};

export default getRecommendationsForSong; 