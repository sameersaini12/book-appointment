import express from "express";
const app = express();
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv"
const PORT = process.env.PORT || 3000
import {doctorList} from "./doctorsList.js";



dotenv.config()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

// console.log(doctorList)

app.post('/doctors' , (req,res) => {
    try {
        // console.log(req.body)
        const findCity = req.body.city
        const cityDoctorList = [];
        for(let i=0;i<doctorList.length;i++) {
            if(doctorList[i].city.toLowerCase() == findCity.toLowerCase()) {
                cityDoctorList.push(doctorList[i]);
            }
        }
        res.send(cityDoctorList)
    }catch(err) {
        console.log("Error while fetching the doctors " + err)
    }
})

app.get('/alldoctors' , (req,res) => {
    try {
        res.send(doctorList)
    }catch(err) {
        console.log("Error while sending the all doctors List "+ err)
    }
})


app.listen(PORT , () => {
    console.log(`Listening of port ${PORT}`)
})





