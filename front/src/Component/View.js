import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function View() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const { id } = useParams();

    console.log(data);

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

    return (
        <div className='container mt-5'>
            <h2 className='mb-3'>Details of {data.name}</h2>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        <td colSpan="2">{data.phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Message</th>
                        <td colSpan="2">{data.message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default View