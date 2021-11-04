import React, {useState, useEffect} from "react";
import {theUrl, apiKey, connectKey} from "./Url";
import axios from 'axios';

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get(`${theUrl}${connectKey}${apiKey}`)
            .then(res => {
                return setPhotoData(res.data);
            })
            .catch(err => {
                    console.error(err);
                }
            )
    }, [])
    console.log(photoData);

    return (
        <div>
            <h2>nasaPhoto</h2>
            <img src={`${photoData.url}`} alt='oh jeez space'/>
            <div className='contentBox'>
                <p>{photoData.date}</p>
                <p>{photoData.title}</p>
                <p>{photoData.explanation}</p>
                <p>{photoData.copyright}</p>
            </div>
        </div>
    )
}