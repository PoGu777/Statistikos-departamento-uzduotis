import React from 'react';
import './Meet_info.css';

function Meet_info() {
    return(
        <div className='meet_info_container'>
            <div className='date_time'>
                <h5>
                    DATA IR LAIKAS
                </h5>
                <p className='meet_info_text'>
                    Ketvirtadienis, Spalio 20, 2022
                    10:00 - 12:00
                    Trukmė: 2 val.
                </p>
            </div>
            <div className='location'>
                <h5>
                    VIETA
                </h5>
                <p className='meet_info_text'>
                    Vilnius
                    Gedimino pr. 29
                    Didžioji posėdžių salė (2a)
                </p>
            </div>
            <div className='contacts'>
                <h5>
                    KONTAKTAI
                </h5>
                <p className='meet_info_text'>
                    tel. +370 689 76 725
                    info@stat.gov.lt
                </p>
                
            </div>
        </div>
    )
}

export default Meet_info;