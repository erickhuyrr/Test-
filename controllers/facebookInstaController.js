import facebookInstaService from "../services/facebookInstaService.js";

export async function handleFacebookInstaDownload(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ success: false, error: "Missing 'url' query parameter." });
  }

  try {
    const data = await facebookInstaService(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
