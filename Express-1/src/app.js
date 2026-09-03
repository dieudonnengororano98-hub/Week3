import express from "express";
const hostname = "127.0.0.1";
const app = express();
const port = 3000;

app.use("/public", express.static("public"));


app.get("/", (req, res) =>{
  res.send("Hello world");
});

app.get("/api/v1/cats", (req, res) => {
  const cat = {
    cat_id: 1,
    name: "milo",
    birthdate: "2022-05-10",
    weight: 4.5,
    owner: "john",
    image: "https://loremflickr.com/320/240/cat"

  };
  res.json(cat)
});


export default app;