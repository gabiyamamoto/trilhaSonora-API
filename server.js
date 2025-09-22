import express from "express";
import dotenv from "dotenv";
import trilhasSonorasRoutes from "./src/routes/trilhasSonorasRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando");
});

// 👉 Rotas
app.use("/trilhasSonoras", trilhasSonorasRoutes);

app.listen(serverPort, () =>
  console.log(`Servidor rodando na porta ${serverPort} ➝ http://localhost:${serverPort}`)
);