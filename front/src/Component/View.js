import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function View() {
    const { id } = useParams();

    const [data, setData] = useState({
        id: id,
        name: "",
        writer: "",
        date: ""
    });

    useEffect(() => {
        fetch(`http://localhost:8080/get/${id}`).then(response => response.json()).then((json) => {
            setData({
                id: json.id,
                name: json.name,
                writer: json.writer,
                date: json.date
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
                        <th scope="row">Writer</th>
                        <td>{data.writer}</td>
                    </tr>
                    <tr>
                        <th scope="row">Date</th>
                        <td colSpan="2">{data.date}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default View