import { GoogleGenAI, Schema, Type } from "@google/genai";
import { CareerPathData } from "../types";

const apiKey = process.env.API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

const ORIENTA_SYSTEM_INSTRUCTION = `
You are Orienta, an advanced AI Career Compass. 
Your task is to analyze the user's vague interests and map them to a concrete educational and career path.

Output a JSON object with the following structure:
1. "major": One specific, modern college major that fits the interest.
2. "careers": An array of exactly 3 distinct career titles possible with this major.
3. "futures": For each career, provide exactly 2 short (1-3 words) future development tags (e.g., "CTO Role", "Global Market").

Do not include markdown formatting like \`\`\`json. Just return the raw JSON.
`;

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    major: { type: Type.STRING },
    careers: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          futures: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "futures"]
      }
    }
  },
  required: ["major", "careers"]
};

export const generateCareerMap = async (userInterest: string): Promise<CareerPathData | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userInterest,
      config: {
        systemInstruction: ORIENTA_SYSTEM_INSTRUCTION,
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const text = response.text;
    if (!text) return null;

    try {
      const data = JSON.parse(text) as CareerPathData;
      // Enforce limits just in case the model hallucinates more items
      if (data.careers.length > 3) data.careers = data.careers.slice(0, 3);
      data.careers.forEach(c => {
        if (c.futures.length > 2) c.futures = c.futures.slice(0, 2);
      });
      return data;
    } catch (e) {
      console.error("Failed to parse Gemini JSON:", e);
      return null;
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
