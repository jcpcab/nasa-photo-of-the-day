import React, {useState, useEffect} from "react";
import {theUrl, apiKey, connectKey} from "./Url";
import axios from 'axios';
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  border: 2px solid black;
  font-size: larger;
  font-family: "Open Sans";
  margin: 10%;
  box-shadow: 10px 5px 5px #fff;
  background-color: black;
  color: #fff;
`


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
            <img src={`${photoData.url}`} alt='oh jeez space'/>
            <StyledContent>
                <div className='contentBox'>
                    <p>{photoData.date}</p>
                    <p>{photoData.title}</p>
                    <p>{photoData.explanation}</p>
                    <p>{photoData.copyright}</p>
                </div>
            </StyledContent>
        </div>
    )
}