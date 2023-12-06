import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Show() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('http://localhost:8080/books').then(response => response.json()).then(json => setData(json))
  }

  function DeleteEle(e) {
    fetch(`http://localhost:8080/delete/${e}`).then(resu => resu.text()).then((res) => {
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
            <div key={index} className="col-md-4">
              <div className="card mb-4">
                <div className="card-header">
                  {userObj.name}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{userObj.writer}</li>
                  <li className="list-group-item d-flex justify-content-around">
                    <Link className='btn btn-primary d-inline-block' to={`/view/${userObj.id}`}>View Full Details</Link>
                    <Link className='btn btn-warning d-inline-block' to={`/edit/${userObj.id}`}>Edit</Link>
                    <Link className='btn btn-danger d-inline-block' to="#delete" onClick={e => DeleteEle(userObj.id)}>Delete</Link>
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