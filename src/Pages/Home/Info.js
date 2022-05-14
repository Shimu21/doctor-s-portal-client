import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import './Info.css'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" description="We are open from 9.00 AM to 5 PM" cardTitle="Opening Hours" img={marker}></InfoCard>
            <InfoCard bgClass="bg-[#3A4256]" description="DOHS Dhaka." cardTitle="Visit Our Location" img={phone}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" description="+880 1874666200" cardTitle="Contact Us Soon" img={clock}></InfoCard>
        </div>
    );
}

export default Info;