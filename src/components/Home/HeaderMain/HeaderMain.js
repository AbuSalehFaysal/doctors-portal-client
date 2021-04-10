import React from 'react';
import chair from '../../../images/chair.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="title">Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum doloremque eaque ad temporibus cupiditate.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;