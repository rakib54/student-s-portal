import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const UpdateStudentDetails = () => {
    const [studentData, setStudentData] = useState()
    const [singleData, setSingleData] = useState([])
    const [imageUrl, setImageUrl] = useState(null)
    const { id } = useParams()
    console.log(id);

    const history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const studentInfo = {
            name: data.name,
            registration: data.registration,
            ID: data.ID,
            imageUrl: imageUrl
        }
        fetch('https://mighty-spire-72211.herokuapp.com/updateStudent/' + id, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(studentInfo)
        })
            .then(res => res.json())
            .then(data => {
                setStudentData(data);
                console.log(data);
                history.push('/')
            })
            .catch(err => console.log(err))
    };
    useEffect(() => {
        fetch('https://mighty-spire-72211.herokuapp.com/students/' + id)
            .then(res => res.json())
            .then(data => {
                setSingleData(data)
                console.log(data);
            })

    }, [id])

    const handleImageChange = (event) => {
        const imageData = new FormData();
        imageData.set('key', '0d490a6f5bc01d67efe384d3ef08195a')
        imageData.append('image', event.target.files[0])

        axios.post(`https://api.imgbb.com/1/upload`, imageData)
            .then((res) => {
                // console.log(res);
                setImageUrl(res.data.data.image.url)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        {
                            singleData.map((s) => {
                                return <form key={s._id} onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                        <input defaultValue={s.name} {...register("name")} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Registration Number</label>
                                        <input defaultValue={s.registration} {...register("registration", { required: true })} className="form-control" id="exampleFormControlInput1" placeholder="Registration number" />
                                        {errors.registration && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">ID Number</label>
                                        <input defaultValue={s.ID} {...register("ID", { required: true })} className="form-control" id="exampleFormControlInput1" placeholder="ID number" />
                                        {errors.ID && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Upload Photo</label>
                                        <input type="file" onChange={handleImageChange} className="form-control" id="exampleFormControlInput1" placeholder="ID number" />

                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" value="Update" className={imageUrl ? 'btn btn-success' : 'btn btn-disable'} />
                                    </div>
                                </form>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStudentDetails;