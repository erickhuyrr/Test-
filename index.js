import express from "express";
import cors from "cors";
import facebookInstaRoutes from "./routes/facebookInstaRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 Facebook + Instagram Downloader API by Asmit Adk is running...");
});

// ✅ Use routes
app.use("/api/facebook-insta", facebookInstaRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} | Developer: Asmit Adk`);
});
