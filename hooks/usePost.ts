import { textDecoderHandler } from "@/utils/textDecoder";
import { useState } from "react";

const ApiKey = process.env.NEXT_PUBLIC_API_KEY;

const usePost = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (message: string) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${ApiKey}`,
        },
        body: JSON.stringify({
          messages: [
            {
              content: message,
              role: "user",
            },
          ],
          frequency_penalty: 0,
          max_tokens: 2048,
          model: "deepseek-coder",
          temperature: 1,
          stop: null,
          stream: true,
          top_p: 1,
          presence_penalty: 0,
        }),
      });

      const res = (await response.body?.getReader().read())?.value;
      setData(textDecoderHandler(res));
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { postData, data, error, loading };
};

export default usePost;
