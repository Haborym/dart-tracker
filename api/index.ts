import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.get('/test', (req: Request, res: Response) => {
  res.json({
    code: 200,
    status: "OK",
    data: {
      test: "hello world",
      type: "json",
      unique: false,
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
