import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p className='font-bold'>
                    <small>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try Another Day.</span>
                        }
                    </small>
                </p>
                <p className='font-bold'>
                    <small>
                        {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                    </small>
                </p>

                <div className="card-actions  justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm btn-secondary text-white uppercase
                        bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;