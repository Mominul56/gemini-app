import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile } from '../types';

const getGeminiClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API Key not found in environment variables");
    }
    return new GoogleGenAI({ apiKey });
};

export const generateAIProfile = async (prompt: string): Promise<UserProfile> => {
    try {
        const ai = getGeminiClient();
        const model = "gemini-3-flash-preview";
        
        const fullPrompt = `Generate a realistic but fictitious US user profile for testing purposes. Context: ${prompt}.
        Ensure the address matches the city/state and the phone area code is correct for the region.`;

        const response = await ai.models.generateContent({
            model,
            contents: fullPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        firstName: { type: Type.STRING },
                        lastName: { type: Type.STRING },
                        email: { type: Type.STRING },
                        phone: { type: Type.STRING },
                        street: { type: Type.STRING },
                        city: { type: Type.STRING },
                        state: { type: Type.STRING },
                        zipCode: { type: Type.STRING },
                        country: { type: Type.STRING }
                    },
                    required: ["firstName", "lastName", "email", "phone", "street", "city", "state", "zipCode", "country"]
                }
            }
        });

        const text = response.text;
        if (!text) {
            throw new Error("No response from AI");
        }

        return JSON.parse(text) as UserProfile;

    } catch (error) {
        console.error("Error generating AI profile:", error);
        throw error;
    }
};

export interface RealEstateResult {
    text: string;
    sources: { title: string; uri: string }[];
}

export const searchRealEstate = async (location: string): Promise<RealEstateResult> => {
    try {
        const ai = getGeminiClient();
        // Google Search is supported on gemini-3-flash-preview
        const model = "gemini-3-flash-preview";
        
        const response = await ai.models.generateContent({
           model,
           contents: `Search for 3 real residential properties currently for sale in ${location}. 
           Prioritize listings from Zillow, Redfin, or Realtor.com.
           For each property, provide:
           1. The full address.
           2. The price.
           3. Key details (Beds, Baths, Sqft).
           4. A very brief description.
           
           Format the output as a clean, easy-to-read list.`,
           config: {
             tools: [{googleSearch: {}}],
           },
        });

        const text = response.text || "No results found.";
        
        // Extract grounding sources
        // @ts-ignore - The SDK types might not strictly match the dynamic response structure for grounding yet, but this is the correct path.
        const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        
        const sources = groundingChunks
            .map((chunk: any) => chunk.web)
            .filter((web: any) => web && web.uri && web.title);

        return { text, sources };

    } catch (error) {
        console.error("Error searching real estate:", error);
        throw error;
    }
};