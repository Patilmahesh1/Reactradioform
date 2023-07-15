import React, { useState } from 'react'
import "./style.css"


function RadioForm() {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        radio: "",
        phone: "",
        email: ""
    })

    const [radio, setRadio] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setRadio([...radio, data])
        setData({
            firstname: "",
            lastname: "",
            radio: "",
            phone: "",
            email: ""
        })
    }
    console.log([...radio]);

    return (
        <>
            <form onSubmit={handleSubmit} style={{boxShadow:"2px 6px 6px purple",width:"800px",height:"300px",margin:"0 auto", marginBottom:"40px"}}>
                <div class="row my-4">
                    <div class="col-md-4 offset-md-2" >
                        <label class="form-label"><strong>FirstName</strong></label>
                        <input type="text" class="form-control" name='firstname' value={data.firstname}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col-md-4" >
                        <label class="form-label"><strong>LastName</strong></label>
                        <input type="text" class="form-control" name='lastname' value={data.lastname}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="row my-4" >
                    <div class="col-md-4 offset-md-2" onClick={handleChange} >
                        <label class="form-label" ><strong>How should we contact you?</strong></label><br />
                        <div name="radio">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="phone" type="radio" name="radio" onClick={handleChange} />
                                <label class="form-check-label">
                                    phone
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" value="email" type="radio" name="radio" onClick={handleChange} />
                                <label class="form-check-label" >
                                    email
                                </label>
                            </div>
                        </div>
                    </div>
                    {data.radio === "phone" && <div class="col-md-4" >
                        <label class="form-label"><strong>Phone</strong></label>
                        <input type="number" class="form-control" name='phone' value={data.phone}
                            onChange={handleChange}
                        />
                    </div> || data.radio === "email" && <div class="col-md-4" >
                        <label class="form-label"><strong>Email</strong></label>
                        <input type="email" class="form-control" name='email' value={data.email}
                            onChange={handleChange}
                        />
                    </div>}
                </div>
                <div class="row my-4 col-md-6 offset-md-3">
                    <button type='submit' class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
            {radio.map((item) => {
                return <div class="mapcard">
                    <div><h6>{item.firstname}</h6></div>
                    <div><h6>{item.lastname}</h6></div>
                    <div><h6>{item.phone}{item.email}</h6></div>
                </div>
            })}
        </>
    )
}

export default RadioForm