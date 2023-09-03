import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { OpenAI } from "openai";
import fetch from "node-fetch";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async startAi() {
    const openaiapi = new OpenAI({
      apiKey: process.env.API_KEY,
      baseURL: process.env.API_URL
    });
    const completion = await openaiapi.chat.completions.create({
      messages: [{ role: 'user', content: 'My dog is sick. Translate this sentence to Amharic.' }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices;
    
  }

  async hiGpt() {
    console.log('hi Gpt');
    config();
    console.log(process.env.API_KEY);
    return this.startAi();
  }

  async get_text_from_response(response){
    var response_json = response.json()
    return response_json;
  }

  async hiHug() {
    config();
    const API_TOKEN = process.env.HF_KEY2;
    console.log(API_TOKEN);
    async function query(data) {
      const response = await fetch(
          "https://api-inference.huggingface.co/models/OpenLemur/lemur-70b-chat-v1",
          {
              headers: { Authorization: `Bearer ${API_TOKEN}` },
              method: "POST",
              body: JSON.stringify(data),
          }
      );
      const result = await response.json();
      return result;
  }
  query("Can you please let us know more details about your ").then((response) => {
      console.log(JSON.stringify(response));
  });
    // const url = "https://api-inference.huggingface.co/models/togethercomputer/GPT-NeoXT-Chat-Base-20B"
    // const apiKey = process.env.HF_KEY;
    // const headers = {
    //   Authorization: `Bearer ${apiKey}`,
    // };

    // const data = {"inputs": "Hello who are you?"}

    // try {
    //   // const response = await axios.post(url, data);
    //   const response = await axios.post(url, data, { headers: headers });
    //   return response.data;
    // } catch (error) {
    //   throw new Error(`${error.message}`);
    // }
  }
}
