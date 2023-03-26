import { createSignal } from "solid-js";

interface KWExtractor {
  extractKeywords: (text: string) => Promise<any>;
}

export default function useKWExtractor(): KWExtractor {
  const extractKeywords = async (initialText: string) => {
    const [text, setText] = createSignal(initialText);

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract the important keywords from this text. Make the first letter of each word uppercase and separate them with commas\n\n" +
          text(),
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_URL, options);
    const json = await response.json();
    const data = json.choices[0].text;

    return data;
  };

  return { extractKeywords };
}
