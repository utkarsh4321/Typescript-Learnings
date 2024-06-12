"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
class CsvReader {
    constructor() {
        this.csvData = [];
    }
    readCsv() {
        fs_1.default.createReadStream("./football.csv")
            .pipe((0, csv_parse_1.parse)({ delimiter: ",", columns: true, ltrim: true }))
            .on("data", (row) => {
            // console.log(row);
            this.csvData.push(row);
        })
            .on("error", function (error) {
            console.log(error.message);
        })
            .on("end", function () {
            console.log("finished");
        });
    }
    get getCsvData() {
        return this.csvData;
    }
}
exports.CsvReader = CsvReader;
