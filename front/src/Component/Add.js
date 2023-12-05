import React, { useState } from 'react';
import axios from "axios";

function Add() {
    const [val, setVal] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const getValue = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setVal({ ...val, [name]: value })
    }

    function SendData(e) {
        e.preventDefault();
        axios.post("http://localhost:4000/add", val).then(res => console.log("Inserted"))
        setVal({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
        alert("Data added!");
    }
    return (
        <div>
            <div className="container my-5">
                <form onSubmit={SendData}>
                    <input type="text" name="name" onChange={getValue} value={val.name} placeholder='Name' required className='form-control mb-2' />
                    <input type="email" name="email" onChange={getValue} value={val.email} placeholder='Email' required className='form-control mb-2' />
                    <input type="tel" name="phone" onChange={getValue} value={val.phone} placeholder='Phone' required className='form-control mb-2' />
                    <textarea name="message" onChange={getValue} value={val.message} required placeholder='Message' className='form-control mb-2' >{val.message}</textarea>
                    <div className="col-md-2">
                        <input type="submit" className='mt-1 w-100 btn btn-primary' value="Add Data" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add