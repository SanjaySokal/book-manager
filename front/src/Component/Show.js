import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Show() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('http://localhost:4000/data').then(response => response.json()).then(json => setData(json))
  }

  function DeleteEle(e) {
    axios.delete(`http://localhost:4000/delete/${e}`, e).then((res) => {
      alert("Data Deleted");
      getData()
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {data && data.length > 0 && data.map((userObj, index) => (
            <div key={userObj._id} className="col-md-6">
              <div className="card mb-4">
                <div className="card-header">
                  {userObj.name}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{userObj.email}</li>
                  <li className="list-group-item">{userObj.phone}</li>
                  <li className="list-group-item d-flex justify-content-around">
                    <Link className='btn btn-primary d-inline-block' to={`/view/${userObj._id}`}>View Full Details</Link>
                    <Link className='btn btn-warning d-inline-block' to={`/edit/${userObj._id}`}>Edit</Link>
                    <Link className='btn btn-danger d-inline-block' to="#delete" onClick={e => DeleteEle(userObj._id)}>Delete</Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Show