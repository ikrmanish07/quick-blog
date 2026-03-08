import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

const generateContent = async (prompt) => {
  try {
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    const result = await model.generateContent(prompt);

    const response = result.response;

    const text = response.text();

    return text;

  } catch (error) {
    console.error("Gemini API Error:", error.message);
    return "Content generation failed.";
  }
};

export default generateContent;