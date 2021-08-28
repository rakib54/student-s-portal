import React from 'react';
import AllStudents from '../AllStudents/AllStudents';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AllStudents />
        </div>
    );
};

export default Home;