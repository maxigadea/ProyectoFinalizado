import React from 'react'
import {useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getImages } from '../actions';
import styled from 'styled-components';

const Carrousel = () => {

    const dispatch = useDispatch();
    const allImages = useSelector((state) => state.img);

    useEffect (() => {
        dispatch(getImages())
    },[dispatch])


    return (
        <div>
        <Titulo> PRODUCTOS DESTACADOS </Titulo>
        
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={allImages[0]} alt="First slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={allImages[1]} alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={allImages[2]} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        </div>
    );
}

const Titulo = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 13px 0px 5px 0px
`;

export default Carrousel;
