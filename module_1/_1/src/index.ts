import express from "express";
import { list } from "./list";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const port = 9000;

app.get("/index", (_req, res) => {
  res.send("Hello World");
});

//listing
app.get("/listings", (_req, res) => {
  return res.send(list);
});
//delete
app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return res.send(list.splice(i, 1));
    }
  }

  return res.send("Failed to delete");
});
app.listen(port);

console.log(`Is runing in ${port}`);
