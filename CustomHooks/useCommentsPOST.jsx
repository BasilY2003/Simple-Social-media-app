import { useState } from "react";

function useCommentsPOST(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postJsonData = async (jsonData) => {
    setIsLoading(true);
    let responseJson = null;

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

      responseJson = await response.json(); // Get the parsed JSON from the response
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }

    return responseJson; // Return the parsed response
  };

  return { postJsonData, isLoading, error };
}


export default useCommentsPOST;
