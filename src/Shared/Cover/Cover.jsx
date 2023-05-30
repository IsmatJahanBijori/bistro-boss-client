import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax blur={{ min: -15, max: 15 }} bgImage={img} strength={100}>
            <div className="hero h-[800px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className='hero-overlay bg-opacity-60 w-[1000px] h-[350px]'>
                        <div className='mt-32'>
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
{/**
<h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p> */
}