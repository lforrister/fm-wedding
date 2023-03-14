import React from 'react'
import Header from '../components/Header'
import TextBlock from '../components/TextBlock'

const Home = () => {
    const headline = "Our Story"
    return (
        <>
            <Header />
            <TextBlock headline={headline} />
        </>
    )
}


export default Home