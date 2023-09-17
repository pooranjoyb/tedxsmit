import React from 'react'

export default function Speakers() {
    const speakers = [
        {
            name: "Mr. Ishaan Sharma",
            role: "Youtuber & Entrepreneur",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Mr. Kunzang Topgay Bhutia",
            role: "Rubaru Mr. India 2022",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Ashish Mishra",
            role: "Project Director Chandrayaan 3",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Antara Nandy",
            role: "Playback Singer",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ]
    return (
        <>
            <div class="bg-transparent py-24 sm:py-32">
                <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div class="max-w-2xl justify-center items-center flex flex-col">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">MEET OUR <span className='text-[#EB0028]'>SPEAKERS</span></h2>
                        <p class="mt-6 text-lg leading-8 text-white">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                    </div>
                    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {speakers.map(({ name, role, img }) => (
 
                            <li>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-28 w-28 rounded-full" src={img} alt="" />
                                    <div>
                                        <h3 class="text-base font-semibold leading-7 tracking-tight text-[#EB0028]">{name}</h3>
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
