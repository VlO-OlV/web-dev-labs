"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express = require("express");
const mongoose_1 = require("mongoose");
const TextItem_1 = require("./database/TextItem");
const body_parser_1 = require("body-parser");
const app = express();
app.use((0, body_parser_1.json)());
(0, dotenv_1.config)();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
(0, mongoose_1.connect)(dbUrl)
    .then(() => console.log('Connected to db'))
    .catch((error) => console.log(error));
app.listen(port, () => {
    console.log(`Started on http://localhost:${port}`);
});
app.get('/textItems', async (req, res) => {
    const textItems = await TextItem_1.default.find({});
    res.status(200).json(textItems);
});
app.post('/textItems', async (req, res) => {
    const newTextItem = new TextItem_1.default({ ...req.body });
    const error = newTextItem.validateSync();
    if (error) {
        res.status(400).json({ message: "Validation failed" });
    }
    else {
        await newTextItem.save();
        res.status(201).json(newTextItem);
    }
});
//# sourceMappingURL=main.js.map