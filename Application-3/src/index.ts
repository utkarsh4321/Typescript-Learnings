import {CsvReader} from './csvReader'



const data = new CsvReader()

const button = document.getElementById('report')!

button.onclick = ()=>{
    console.log(data.getCsvData)
}



