import './WorkStyles.css';
import React from 'react';
import IMG1 from '../Assets/poster3.jpeg';
import IMG2 from '../Assets/flyer.jpg';
import IMG3 from '../Assets/poster.jpg';
import IMG4 from '../Assets/brochure.jpg';
import IMG5 from '../Assets/business.jpeg';
import IMG6 from '../Assets/cover.jpeg';
import IMG7 from '../Assets/logo1.jpeg';
import IMG8 from '../Assets/letterhead.jpeg';

import { NavLink } from 'react-router-dom'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Poster design',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid0SzNRExUzKGMmqcoEWdfZng6iBz7YYvUc1FXwtFHxBFcadi8iQLRAFVHLshHUCrcLl/?app=fbl'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Flyer design',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid094oE24F1eUiyeAHNWM9ExGnr4aTxiawAoHKj3sfQA82B1htVcwDZx7gPXVg7YSsAl/?app=fbl'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Banner design',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid02fsumL4BkDWx2ouZD9DfgfdMJfCs7LpMorLSBs1NdCEBs1oxWDx7xzgMwUWP2DPTZl/?app=fbl'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Bookmark design',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid02CHexXbhEesppQ3FFtQbeTZeHnzsuqrQYPtnxVvVcE2i6j4ZmGdXvFDoEzbzu5kSzl/?app=fbl'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Business card',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid0y2pHapMrw3NgfUrJBwPnuoZaeB9G3A3oUczFjHzEfEnNoPm4HHP4UBPnAtjdMoyDl/?app=fbl'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Cover art',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid02gmnXbZKo2eJsNqHKSXL7F8ZCUxML1wajkMqwroPBPPDaK5Gu7QYa8f3Y1CcwZnq6l/?app=fbl'
    },
    {
        id: 7,
        image: IMG7,
        title: 'Logo',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid0JEsP3TJzfPYybbgYZt3aCTtHDcTVLG9Hgp9EyqbJNSdSnxgW2HuxjYvBDQV9ZsLql/?app=fbl'
    },
    {
        id: 7,
        image: IMG8,
        title: 'Letterhead Design',
        source: 'https://www.facebook.com/100062809791733/posts/pfbid0y2pHapMrw3NgfUrJBwPnuoZaeB9G3A3oUczFjHzEfEnNoPm4HHP4UBPnAtjdMoyDl/?app=fbl'
    },
]

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Services Offered</h1>
        <div className='project-container'>
        {data.map(({id,image,title,source}) => {
            return(
            <div key={id} className='project-card'>
                <div className='project-card-image'><img src={image} alt='image1'/></div>
                <h3 className='project-title'>{title}</h3>
                <div classname='pro-buttons'>
                    <NavLink to={source} className='btn' style={{marginRight: '1rem'}}>View</NavLink>
                    <NavLink to='/contact' className='btn btn-light'>Order</NavLink>
                </div>
            </div>)
        })}
        </div>
        <footer></footer>
    </div>
  )
}

export default WorkCard