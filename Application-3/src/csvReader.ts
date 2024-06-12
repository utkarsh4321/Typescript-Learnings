import {parse} from 'csv-parse'
import fs from 'fs'

interface csvDataFormat{
    date:Date,
    home_team:string
    away_team:string
    home_goals:string
    away_goals:string
    winner:string
    reference:string
}

export class CsvReader {
    private csvData:Array<csvDataFormat> = []
    readCsv(){
        fs.createReadStream("./football.csv")
        .pipe(parse({ delimiter: ",", columns:true,ltrim:true}))
        .on("data", (row)=> {
            // console.log(row);
            this.csvData.push(row)
        })
    .on("error", function (error) {
     console.log(error.message);
    })
  .on("end", function () {
    console.log("finished");
  });
    }
    get getCsvData():Array<csvDataFormat>{
        return this.csvData
    }
   
}


