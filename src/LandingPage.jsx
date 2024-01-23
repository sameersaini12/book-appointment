import React, { useState } from 'react'
import ConsultationForm from './ConsultationForm'
import DoctorCard from './DoctorCard'
import "./LandingPage.css"
import { useEffect } from 'react'
import HeroImage from "./doctor.jpg"

const LandingPage = () => {
    const [doctors, setDoctors] = useState(null)

    const handleFindAllDoctors = async() => {
        const doctorListResponse = await fetch(
            `http://localhost:3000/alldoctors`,
            {
                method : "GET",
                headers : { "Content-Type": "application/json" }
            }
        )
        const respose = await doctorListResponse.json()
        console.log(respose)
        setDoctors(respose)
    }

    useEffect(() => {
        handleFindAllDoctors()
    }, [])
    
  return (
    <div className='hero'>
        <img 
            className='hero_image' 
            src={HeroImage} />
        <div className='hero_text'>
            Book an Appointment
        </div>
        <ConsultationForm />
        <div className='doctor-list-title'>
            Choose from any doctors...
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

export default LandingPage