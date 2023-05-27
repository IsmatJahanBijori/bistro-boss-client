import React from 'react';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg'; 
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const ChefRecommends = () => {
    return (
        <section>
        <SectionTitle heading={'Should Try'} subHeading={'CHEF RECOMMENDS'}></SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-16 md:mx-32 mb-20'>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={slide1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Escalope de Veau</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline  border-0 border-b">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={slide2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Roast Duck Breast</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={slide3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Fish Parmentier</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ChefRecommends;