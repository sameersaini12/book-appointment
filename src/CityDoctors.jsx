import React, { useEffect, useState } from 'react'
import "./CityDoctors.css"
import DoctorCard from './DoctorCard'
import {useParams } from "react-router-dom"

const CityDoctors = () => {

    const city = useParams()
    const [doctors , setDoctors] = useState(null)

    const handleSubmit = async () => {
        const doctorListResponse = await fetch(
            `http://localhost:3000/doctors`,
            {
                method : "POST",
                headers : { "Content-Type": "application/json" },
                body : JSON.stringify(city)
            }
        )
        const respose = await doctorListResponse.json()
        setDoctors(respose)
    }

    useEffect(() => {
      handleSubmit()
    }, [])
    

  return (
    <div>
        <div className='doctor-list-title'>
            Availabe Doctors in your city 
        </div>
        <div className='doctor-list-grid'>
            {doctors!=null && doctors.map((doctor) => {
                return (
                    <DoctorCard doctor={doctor} />
                )
            })}
        </div>
    </div>
  )
}

export default CityDoctors