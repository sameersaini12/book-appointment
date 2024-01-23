import React, {useState } from 'react'
import {useNavigate} from "react-router-dom"
import './ConsultationForm.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const ConsultationForm = () => {

    const [formSection , setFormSection ] = useState(0);
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name : '',
        phone : '',
        age : '',
        city : '',
        company : '',
        chiefComplaints : '',
        previousExperience : 'NO'
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate(`/city/${formData.city}`)
    }

    const handleNextFormButton = () => {
        setFormSection((formSection+1))
    }

    const handleBackFormButton = () => {
        setFormSection(formSection-1)
    }
    

  return (
    <div className='consultation-form'>
        <div className='consultant-form-card'>
        <form onSubmit={handleSubmit}>
            {(formSection===0) && (
                <>
                    <div className='formTitleText'>
                        Enter all details here 
                    </div>
                    <div className='input_feild'> 
                        <input 
                            placeholder='Name' 
                            type='text' 
                            value={formData.name} 
                            onChange={e => setFormData({...formData , name : e.target.value})}
                            
                        />
                    </div>
                    <div className='input_feild'>
                        <input 
                            placeholder='Phone Number' 
                            type='text' 
                            value={formData.phone} 
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            
                        />
                    </div>
                    <div className='btn'>
                        <button 
                            onClick={handleNextFormButton}
                        >
                            <div>
                                Next
                            </div>
                            <NavigateNextIcon />
                        </button>
                    </div>
                </>
            ) }
            {(formSection===1) && (
                <>
                    <ArrowBackIcon 
                        style={{marginBottom : "10px", cursor: "pointer", color: "#DDE6ED"}} 
                        onClick={handleBackFormButton} 
                    />
                    <div className='input_feild'>
                        <input 
                            placeholder='Age' 
                            type='number' 
                            value={formData.age} 
                            onChange={e => setFormData({ ...formData, age: e.target.value })} 
                        />
                    </div>
                    <div className='input_feild'>
                        <input 
                            placeholder='City' 
                            type='text' 
                            value={formData.city} 
                            onChange={e => setFormData({ ...formData, city: e.target.value })} 
                        />
                    </div>
                    <div className='input_feild'>
                        <input 
                            placeholder='Company' 
                            type='text' 
                            value={formData.company} 
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                    <div className='btn'>
                        <button onClick={handleNextFormButton}>
                            <div>
                                Next
                            </div>
                            <NavigateNextIcon />
                        </button>
                    </div>
                </>
            )}

            {(formSection===2) && (
                <>
                    <ArrowBackIcon 
                        style={{marginBottom : "10px", cursor: "pointer" , color : "#DDE6ED"}} 
                        onClick={handleBackFormButton} 
                    />
                    <div className='input_feild'>
                        <input 
                            placeholder='Chief Complaints' 
                            value={formData.chiefComplaints} 
                            onChange={e => setFormData({ ...formData, chiefComplaints: e.target.value })}
                        />
                    </div>
                    {(formData.age>=40) && (
                        <div className='input_feild'>
                            <div className='previousExperienceText'>
                                Any Previous Experience with physiotherpy :
                            </div>
                            <select 
                                placeholder="any" 
                                value={formData.previousExperience} 
                                onChange={e => setFormData({ ...formData, previousExperience: e.target.value })} 
                            >
                                <option value="YES">Yes</option>
                                <option value="NO">No</option>
                            </select>
                        </div>
                    )}
                    <div className='btn'>
                    {(formData.city!='') && 
                        <>
                            <button type='submit'>
                                <div>
                                    Search
                                </div>
                                <NavigateNextIcon style={{color: "#DDE6ED"}} />
                            </button>
                        </>
                    }
                    {(formData.city==='') && 
                        <>
                            <button 
                                style={{ pointerEvents : "none" , cursor: "pointer"}}
                            >
                                <div>
                                    Go back! and Enter City First
                                </div>
                            </button>
                        </>
                    }
                        
                    </div>
                </>
            )}
        </form>
        </div>
    </div>
  )
}

export default ConsultationForm