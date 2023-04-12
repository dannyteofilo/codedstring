import express, { Request, Response } from "express";
import path from "path";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
