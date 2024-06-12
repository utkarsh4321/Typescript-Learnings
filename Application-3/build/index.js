"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvReader_1 = require("./csvReader");
const data = new csvReader_1.CsvReader();
const button = document.getElementById('report');
button.onclick = () => {
    console.log(data.getCsvData);
};
