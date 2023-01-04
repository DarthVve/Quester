import React, { useState, useEffect, useRef } from 'react';
import './VerificationForm.css';

const VerificationForm = () => {
    const userRef = useRef()

    const [licencenumber, setLicencenumber] = useState('');
    const [occupation, setOccupation] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const licenceHandler = (e) => {
        setLicencenumber(e.target.value);
    }

    const occupationHandler = (e) => {
        setOccupation(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(licencenumber, occupation);

        try {
            setLicencenumber('');
            setOccupation('');
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className='verification-container'>
        <h1 className='h1-text'>Verification Form</h1>
        <form onSubmit={handleSubmit}>
            <div className='licenceBox'>
                <label for="licencenumber">Licence Number</label>

                <input 
                type="text" 
                id='licencenumber'
                className='verification-field'
                ref={userRef}
                onChange={licenceHandler}
                value={licencenumber}
                placeholder='Enter licence number'
                required
            />
            </div>

            <div className='licenceBox'>
                <label for="occupation" title='Occupation'>Occupation</label>

                    <select name="occupation" id="occupation" className='verification-field'>
                        <optgroup label='Occupations'>
                            <option value="physical Therapist" selected defaultChecked>--Select Occupation</option>
                            <option value="physical Therapist">Physical Therapist</option>
                            <option value="physician">Physician</option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="surgeon">Surgeon</option>
                            <option value="dentist">Dentist</option>
                            <option value="nurse-practitioner">Nurse Practitioner</option>
                            <option value="optometrist">Optometrist</option>
                            <option value="chiropractors">Chiropractors</option>
                            <option value="genetic-counselors">Genetic Counselors</option>
                            <option value="dietitian">Dietitian</option>
                            <option value="radiation-therapist">Radiation Therapist</option>
                            <option value="pedatricians">Pedatricians</option>
                        </optgroup>
                    </select>
            </div>
            
            <button className="btn">Request Verification</button>
        </form>
    </div>
  )
}

export default VerificationForm
