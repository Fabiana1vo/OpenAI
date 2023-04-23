const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-001",
  prompt: "Write a tagline for an ice cream shop.",
  temperature: 0.4,
  max_tokens: 64,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});