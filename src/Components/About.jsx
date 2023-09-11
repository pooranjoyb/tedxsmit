import React from 'react'

export default function About() {
    return (
        <>
            <div className='flex-auto flex-col items-center justify-center w-full z-20 text-center w-3/5'>
                <img className='inline-block' src="./assets/rising.png" width={500} />
                <div className='mx-[12rem] my-5 text-center font-sm'>
                    Centered around the theme "Rising Above Ranges" for the 6th Edition of TEDxSMIT 2023, our objective is to cultivate a
                    mindset that transcends the barriers obstructing progress. Through this, we aspire to navigate towards a future that is not
                    only more radiant and expansive but also inherently superior.
            </div>
            </div>
        </>
    )
}
