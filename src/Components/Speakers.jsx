import React from 'react'

export default function Speakers() {
    const speakers = [
        {
            id: 1,
            name: "Mr. Ishaan Sharma",
            role: "Youtuber & Entrepreneur",
            desc: "1M+ Subscribers",
            img: "./assets/ishaan.png"
        },
        {
            id: 2,
            name: "Mr. Kunzang Topgay Bhutia",
            role: "Rubaru Mr. India 2022",
            desc: "",
            img: "./assets/kunzang.png"
        },
        {
            id: 3,
            name: "Mr. Ashish Mishra",
            role: "Deputy Project Director",
            desc: "Chandrayaan 3",
            img: "./assets/mishra.png"
        },
        {
            id: 4,
            name: "Ms. Antara Nandy",
            role: "Playback Singer",
            desc: "Part of the group Nandy Sisters",
            img: "./assets/antara.png"
        },
        {
            id: 5,
            name: "Mr. Nitesh Gurung",
            role: "Social Media Influencer",
            desc: "The journey of an influencer into the hearts of Sikkim",
            img: "./assets/nitesh.png"
        },
        {
            id: 6,
            name: "Dr. Dilip Chandra Agarwal",
            role: "Air Vice Marshal",
            desc: "Vice Chancellor of SMIT",
            img: "./assets/vice.png"
        },

    ]
    return (
        <>
            <div className="bg-transparent py-18 sm:py-32 my-5">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl justify-center items-center flex flex-col">
                        <h2 className="text-3xl font-bold text-center tracking-wide text-white sm:text-4xl">MEET OUR <span className='text-[#EB0028]'>SPEAKERS</span></h2>
                        <p className="mt-6 text-lg leading-8 text-white text-center">
                        We are thrilled to announce our speakers for TEDxSMIT 2023.<br/> Their insights and experiences promise to challenge our thinking, inspire us to dream bigger, and encourage us to drive change in our communities.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {speakers.map(({ id, name, role, desc, img }) => (
                            <li key={id}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-28 w-28 rounded-full" src={img} alt="" />
                                    <div>
                                        <h3 className="text-xl font-black leading-7 tracking-tight text-[#EB0028]">{name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-white">{role}</p>
                                        <p className="text-sm font-semibold leading-6 text-white">{desc}</p>
                                    </div>
                                </div>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
