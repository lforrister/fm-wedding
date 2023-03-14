import React from 'react'
import '../scss/components/TextBlock.scss'

function TextBlock ({headline}) {
    return (
        <>
            <div className="textBlock__bg">
                <div className="textBlock__content">
                    <h1>Headline: { headline } </h1>
                </div>
            </div>
        </>

    )
}

export default TextBlock