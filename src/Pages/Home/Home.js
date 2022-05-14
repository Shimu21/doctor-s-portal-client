import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import './Home.css';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import ServiceSection from './ServiceSection';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceSection></ServiceSection>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;