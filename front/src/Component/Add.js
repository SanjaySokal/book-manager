import React, { useState } from 'react';
import axios from "axios";

function Add() {
    const [val, setVal] = useState({
        name: "",
        writer: "",
        date: (new Date())
    })

    const getValue = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setVal({ ...val, [name]: value })
    }

    function SendData(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/add", val).then(res => setVal({ name: "", writer: "" }))
        alert("Data added!");
    }
    return (
        <div>
            <div className="container my-5">
                <form onSubmit={SendData}>
                    <input type="text" name="name" onChange={getValue} value={val.name} placeholder='Book Name' required className='form-control mb-2' />
                    <input type="text" name="writer" onChange={getValue} value={val.writer} placeholder='Writer' required className='form-control mb-2' />
                    <div className="col-md-2">
                        <input type="submit" className='mt-1 w-100 btn btn-primary' value="Add Data" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add