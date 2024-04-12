import { chatCondition } from "@/utils/conditionalChat";
import { useState } from "react";

const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
const firstItem: number = 0;

interface roleModel {
  name: string;
  lang?: string;
}

const usePost = (url: string, role: roleModel) => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //condition

  //reader function
  async function readDataCashed(reader: any): Promise<any> {
    const { value, done } = await reader.read();
    if (!done) {
      const jsonData: string = new TextDecoder().decode(value);
      for (const thread of jsonData.split("\n")) {
        if (thread) {
          try {
            const responses = JSON.parse(thread.slice(5, thread.length));
            setData(
              (prevState: string) =>
                prevState + responses.choices[firstItem].delta.content
            );
          } catch (e) {
            ///show something
          }
        }
      }
      await readDataCashed(reader);
    }
  }

  const postData = async (message: string | undefined) => {
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
              content: chatCondition(role, message),
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

      const res = response.body?.getReader();
      readDataCashed(res);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { postData, data, error, loading };
};

export default usePost;
