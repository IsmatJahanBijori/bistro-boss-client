import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    // const popularItems = menu.filter(item => item.category === 'popular')
    // console.log(popularItems)

    const [menu]=useMenu()
    const popularItems = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-20'>
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 my-20 gap-5 mx-32'>
                {
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className=' text-center'><button className='btn btn-outline  border-0 border-b'>View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;