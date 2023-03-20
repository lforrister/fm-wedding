import React from 'react'
import '../scss/components/TextBlock.scss'

function TextBlock ({headline, copy}) {
    return (
        <>
            <div className="textBlock__bg">
                <div className="textBlock__content">
                    <h1 className="textBlock__headline">{ headline } </h1>
                    <p className="textBlock__copy">{ copy }</p>
                </div>
            </div>
        </>

    )
}

export default TextBlock