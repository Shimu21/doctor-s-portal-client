import React from 'react';
import './Banner.css';
import chair from '../../assets/images/chair.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6"> <small>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</small></p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;