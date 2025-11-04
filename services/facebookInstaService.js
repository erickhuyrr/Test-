import fetch from "node-fetch";

async function facebookInstaService(url) {
  try {
    let apiUrl = "";
    if (url.includes("facebook.com")) {
      apiUrl = `https://fdown.net/download.php?URL=${encodeURIComponent(url)}`;
    } else if (url.includes("instagram.com")) {
      apiUrl = `https://snapinsta.app/action.php?url=${encodeURIComponent(url)}`;
    } else {
      throw new Error("Invalid URL: Only Facebook and Instagram links are supported");
    }

    const response = await fetch(apiUrl);
    const html = await response.text();

    // Regex extract video URLs
    const videoRegex =
      /(https?:\/\/[^\s"]+\.(?:mp4|m3u8|mov|avi|webm|mkv|flv|3gp))/g;
    const found = html.match(videoRegex);

    if (!found || found.length === 0) {
      throw new Error("No downloadable video found.");
    }

    return {
      success: true,
      developer: "@Asmit Adk",
      platform: url.includes("facebook.com") ? "Facebook" : "Instagram",
      videos: found,
    };
  } catch (error) {
    throw new Error("Error fetching media: " + error.message);
  }
}

export default facebookInstaService;
