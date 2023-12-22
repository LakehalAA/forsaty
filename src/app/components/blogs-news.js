'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { BlogsNewsdata } from '../Data/data';
import * as Unicons from '@iconscout/react-unicons';

export default function BlogsNews({ title, desc }) {
    const data = BlogsNewsdata.slice(0, 3)
    return (
        <>
            <div className="container lg:py-24 py-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium font-Arial">{title}</h3>

                    <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{desc}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
                    {data.map((item, index) => (
                        <div className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden" key={index}>
                            <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} />

                            <div className="content p-6">
                                <Link href={`/projet-detail/${item.id}`} className="text-lg hover:text-violet-600 dark:text-white dark:hover:text-violet-600 transition duration-500 ease-in-out font-medium h5 font-Arial">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.detail}</p>

                                <div className="mt-5">
                                    <Link href={`/projet-detail/${item.id}`} className="hover:text-violet-600 dark:hover:text-violet-600 after:bg-violet-600 dark:text-white transition duration-500 inline-flex items-center gap-1">{item.more}<Unicons.UilArrowRight width={16} /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-8">
                        <Link href="/projets" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md font-Arial inline-flex items-center gap-4">
                            <Unicons.UilFilesLandscapesAlt width={24} />Explorer les Projets</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
