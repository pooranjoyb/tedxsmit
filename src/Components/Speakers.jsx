import React from 'react'

export default function Speakers() {
    const speakers = [
        {
            name: "Mr. Ishaan Sharma",
            role: "Youtuber & Entrepreneur",
            img: "./assets/ishaan.png"
        },
        {
            name: "Mr. Kunzang Topgay Bhutia",
            role: "Rubaru Mr. India 2022",
            img: "./assets/kunzang.png"
        },
        {
            name: "Ashish Mishra",
            role: "Project Director (Chandrayaan 3)",
            img: "./assets/mishra.png"
        },
        {
            name: "Antara Nandy",
            role: "Playback Singer",
            img: "./assets/antara.png"
        }
    ]
    return (
        <>
            <div class="bg-transparent py-18 sm:py-32">
                <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div class="max-w-2xl justify-center items-center flex flex-col">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">MEET OUR <span className='text-[#EB0028]'>SPEAKERS</span></h2>
                        <p class="mt-6 text-lg leading-8 text-white text-center">
                        We are thrilled to announce our speakers for TEDx SMIT 2023.<br/> Their insights and experiences promise to challenge our thinking, inspire us to dream bigger, and encourage us to drive change in our communities.
                        </p>
                    </div>
                    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {speakers.map(({ name, role, img }) => (
                            <li>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-28 w-28 rounded-full" src={img} alt="" />
                                    <div>
                                        <h3 class="text-xl font-black leading-7 tracking-tight text-[#EB0028]">{name}</h3>
                                        <p class="text-sm font-semibold leading-6 text-white">{role}</p>
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
