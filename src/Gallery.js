import React from 'react';
import './Gallery.css'
import CloseIcon from '@material-ui/icons/Close'

import { useState } from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgsrc: img1,
        },
        {
            id: 2,
            imgsrc: img2,
        },
        {
            id: 3,
            imgsrc: img3,
        },
        {
            id: 4,
            imgsrc: img4,
        },
        {
            id: 5,
            imgsrc: img5,
        },
        {
            id: 6,
            imgsrc: img6,
        },
        {
            id: 7,
            imgsrc: img7,
        },
        {
            id: 8,
            imgsrc: img8,
        },
        {
            id: 9,
            imgsrc: img9,
        },
        {
            id: 10,
            imgsrc: img10,
        }
    ]
    // const [model, setModel] = useState(false);
    // const [tempimgsrc, settempimgsrc] = useState('');

    // const getImg = (imgsrc) => {
    //     settempimgsrc(imgsrc);
    //     setModel(true);
    // }

    return (
        <>
        {/* <div className={model? "model open" : "model" }>
            <img src={tempimgsrc}/>
            <CloseIcon/>
        </div> */}
        <div className="gallery">
            {data.map((item,index)=>{
                return (
                    <div className="pics" key = {index} >
                        <img src= {item.imgsrc} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;