import React from 'react'

export default function About() {
    return (
        <>
            <div id='about' className='glass2 flex-auto flex-col items-center justify-center w-full z-20 text-center w-3/5'>
                <img className='inline-block' src="./assets/rising.png" width={500} />
                <div className='md:mx-[12rem] my-5 text-center font-sm mini:mx-[3rem]'>
                    Centered around the theme "Rising Above Ranges" for the 6th Edition of TEDxSMIT 2023, our objective is to cultivate a
                    mindset that transcends the barriers obstructing progress. Through this, we aspire to navigate towards a future that is not
                    only more radiant and expansive but also inherently superior.

                    <br />
                    Remaining faithful to the theme "Race to Infinity," TEDxSMIT aims to reinforce this objective by highlighting the
                    notion of conquering challenges and transcending limits on the path to infinity. This concept underscores the
                    human spirit's resilience and capacity to strive relentlessly, propelling us towards limitless possibilities. Through
                    our speakers' narratives and insights, we aspire to ignite a spark of determination that fuels the journey towards
                    uncharted horizons
                </div>
            </div>
        </>
    )
}
