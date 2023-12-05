import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Form() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/edit/${id}`).then(response => response.json()).then((json) => {
            setData({
                name: json[0].name,
                email: json[0].email,
                phone: json[0].phone,
                message: json[0].message
            });
        })
    }, [id])

    const valueChanges = (e) => {
        var name = e.target.name;
        var valus = e.target.value;
        setData({ ...data, [name]: valus })
    }

    const sendData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/update/${id}`, data).then((res) => {
            alert("Updated Successfully");
        })
    }

    return (
        <div className='container my-5'>
            <form onSubmit={sendData} >
                <input type="text" onChange={valueChanges} name="name" placeholder='Name' value={data.name} required className='form-control mb-2' />
                <input type="email" onChange={valueChanges} name="email" placeholder='Email' value={data.email} required className='form-control mb-2' />
                <input type="tel" onChange={valueChanges} name="phone" placeholder='Phone' value={data.phone} required className='form-control mb-2' />
                <textarea onChange={valueChanges} name="message" placeholder='Message' required value={data.message} className='form-control mb-2' >{data.message}</textarea>

                <div className="col-md-2">
                    <input type="submit" className='mt-1 w-100 btn btn-primary' value="Update" />
                </div>
            </form>
        </div >
    )
}

export default Form