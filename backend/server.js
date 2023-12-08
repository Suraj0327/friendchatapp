const express = require("express");
const dotenv=require("dotenv");
const { chats } = require("./data");
const app = express();
dotenv.config();

const PORT =process.env.PORT ||5000;

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/chats", (req, res) => {
    res.json(chats);
});

app.get("/api/chats/:id", (req, res) => {
    const chatId = req.params.id;
    const singleChat = chats.find((c) => c.id === Number(chatId));

    if (singleChat) {
        res.json(singleChat);
    } else {
        res.status(404).json({ error: "Chat not found" });
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
