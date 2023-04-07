import React from 'react'
import '../scss/components/ImgText.scss'
import image from '../assets/images/ring.jpg'

const ImgText = () => {
    return (
        <>
            <div class="wrapper">
                <div class="imgText__container">
                    <div class="imgText__image">
                        <img src={image} alt="Eric holding Lindsay's hand, with a focus on her engagement ring." />
                    </div>
                    <div class="imgText__content">
                        <h2>
                            Wedding Details
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgText