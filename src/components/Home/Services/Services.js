import React from 'react';
import './Services.css';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: "Fluoride Treatment",
        img: flouride
    },
    {
        name: "Cavity Filing",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        img: tooth
    }
]

const Services = () => {
    return (
        <section className="services-conatiner mt-5">
            <div className="text-center">
                <h5>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;