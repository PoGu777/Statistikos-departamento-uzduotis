import React from 'react';
import './Plan.css';



function Plan() {
    return(
        <div id="plan" className='plan_container'>
            <h1 className='plan_head'>Renginio programa</h1>
            <div className='table-container'>
                <div className='row'>
                    <div className='time'>
                        <p>10:00 - 10:15</p>
                    </div>
                    <div className='event'>
                        <p>IVPK pristatymas "Ką parodė Atvirų duomenų atvėrimo pažangos ir poveikio vertinimo apklausa?"</p>
                    </div>

                </div>
                <div className='row'>
                    <div className='time'>
                        <p>10:15 - 10:40</p>
                    </div>
                    <div className='event'>
                        <p>Lietuvos statistikos departamento teikiamų paslaugų pristatymas</p>
                    </div>

                </div>
                <div className='row'>
                    <div className='time'>
                        <p>10:40 - 11:00</p>
                    </div>
                    <div className='event'>
                        <p>2 ministerijų duomenų atverimo veiklų pristatymai: Kokia geroji patirtis? Su kokiomis problemomis susiduriama?</p>
                    </div>

                </div>
                <div className='row-sml'>
                    <div className='time'>
                        <p>11:00 - 11:10</p>
                    </div>
                    <div className='event'>
                        <p>Kavos pertrauka</p>
                    </div>

                </div>
                <div className='row-sml'>
                    <div className='time'>
                        <p>11:10 - 11:20</p>
                    </div>
                    <div className='event'>
                        <p>Diskusija</p>
                    </div>

                </div>

            </div>
        </div>
  );
}






export default Plan;