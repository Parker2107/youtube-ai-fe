import api from "./axios";

export const analyzeVideo =
  async (youtubeUrl) => {

    // Fake backend delay
    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    // Later replace with real backend:
    /*
    const response = await api.post(
      "/video/process",
      {
        youtube_url: youtubeUrl,
      }
    );

    return response.data;
    */

    return {
      success: true,
      video: {
        id: Date.now(),
        title:
          "AI Processed Video",
        url: youtubeUrl,
      },
    };
  };