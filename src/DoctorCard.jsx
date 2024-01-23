import React from 'react'
import "./DoctorCard.css"
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const DoctorCard = ({doctor}) => {
  return (
    <div className='doctorCard'>
        <div className='photo'>
            <img 
                style={{ width : "95%" , height: "95%" , borderRadius : "50%"}} 
                src={doctor.image} />
        </div>
        <div className='doctorName'>
            <div>
                <PersonIcon />
            </div>
            <div style={{marginLeft : "8px"}}>
                Mr. {doctor.name}
            </div>
        </div>
        <div className='doctorExpertise'>
            <div>
                <WorkIcon /> 
            </div>
            <div style={{marginLeft : "8px"}}>
                {doctor.expertise}
            </div>
        </div>
        <div className='doctorCity'>
            <div>
                <LocationOnIcon />
            </div>
            <div style={{marginLeft : "8px"}}>
                {doctor.city}
            </div>
        </div>
        <hr />
        <div style={{textAlign : "justify"}}>
            {doctor.description}
        </div>

        <div className='readBtn'>
            <button className='card-button'>
                <div>
                    Read More
                </div>
                <NavigateNextIcon />
            </button>
        </div>
    </div>
  )
}

export default DoctorCard