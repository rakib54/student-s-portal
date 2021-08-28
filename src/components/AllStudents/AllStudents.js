import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AllStudents.css'



const AllStudents = () => {
    const [studentData, setStudentData] = useState([])
    const [search, setSearch] = useState('')
    const [isDelete, setIsDelete] = useState(false)
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:4000/students?search='+ search)
            .then(res => res.json())
            .then(data => {
                setStudentData(data)

            })
    }, [isDelete,search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteStudent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, 'delete successfully');
                setIsDelete(!isDelete)
            })
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:4000/updateStudent/${id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            setStudentData(data)
            console.log(data);
            history.push('/')
        } )
    }

    return (
        <div className="student-container">
            <h2 className="text-center">All Students List</h2>
            <div className="col-md-3 col-3 mx-auto mt-3">
                <input onChange={handleSearch} className="form-control" type="text" placeholder="search Student" />
            </div>
            <div className="container-fluid">
                <table className="table mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">REG</th>
                            <th scope="col">ID</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Edit</th>
                            <th scope="col">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData.map((s) => {
                                return <tr key={s._id}>
                                    <th scope="row">{s.name}</th>
                                    <td>{s.registration}</td>
                                    <td>{s.ID}</td>
                                    <td><img style={{ height: '50px' }} src={s.imageUrl} alt="" /></td>
                                    <td><Link to="/updateStudent" onClick={() => handleUpdate(s._id)} className="btn btn-success">Edit</Link></td>
                                    <td><button onClick={() => handleDelete(s._id)} className="btn btn-danger">delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStudents;