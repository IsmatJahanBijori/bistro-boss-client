import React from 'react';
import chef from '../../../assets/home/chef-service.jpg'
import menuBg from '../../../assets/menu/menu-bg.png'
import './Bistro.css'
const Bistro = () => {
    return (

        <div className='relative'>
            <img src={chef} className='w-[1320px] mx-auto my-20' alt="" />
            <div className="article absolute -mt-96 pb-20"
                style={{ backgroundImage: `url(${menuBg})`, width: '800px', height: '300px',left: "500px", top: "450px" }}>
                <div className='w-[760px] h-[140px]'>
                    <h3 className='text-5xl text-center'>Bistro Boss</h3>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p></div>
            </div>
        </div>
    );
};

export default Bistro;