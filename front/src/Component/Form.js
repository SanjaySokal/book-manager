import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Form() {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        name: "",
        writer: "",
        date: (new Date())
    });

    useEffect(() => {
        fetch(`http://localhost:8080/get/${id}`).then(response => response.json()).then((json) => {
            setData({
                id: json.id,
                name: json.name,
                writer: json.writer,
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
        axios.post(`http://localhost:8080/update`, { id: data.id, name: data.name, writer: data.writer, date: (new Date()) }).then((res) => {
            alert("Updated Successfully");
        })
    }

    return (
        <div className='container my-5'>
            <form onSubmit={sendData} >
                <input type="text" name="name" onChange={valueChanges} value={data.name} placeholder='Book Name' required className='form-control mb-2' />
                <input type="text" name="writer" onChange={valueChanges} value={data.writer} placeholder='Writer' required className='form-control mb-2' />
                <div className="col-md-2">
                    <input type="submit" className='mt-1 w-100 btn btn-primary' value="Add Data" />
                </div>
            </form>
        </div >
    )
}

export default Form