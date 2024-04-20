import { useState } from "react";

function useCommentsPOST(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postJsonData = async (jsonData) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      });
      if (!response.ok) {
        throw new Error("Failed to post data");
      }
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { postJsonData, isLoading, error };
}

export default useCommentsPOST;
