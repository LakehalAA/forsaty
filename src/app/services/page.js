'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('../components/navbar'));
const Switcher = dynamic(()=>import('../components/Switcher'));
const Footer = dynamic(()=>import('../components/footer'));
const ClientReview2 = dynamic (()=>import('../components/clientReview2'));
const OurServices = dynamic(()=>import('../components/our-services'));
import * as Unicons from '@iconscout/react-unicons';
export default function Services() {
    return (
        <>
            <Navbar />
            <section className="py-28 w-full table relative bg-[url('/images/bg/bg-5.jpg')] bg-bottom bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-Arial">Nos Services</h3>
                    </div>
                </div>
            </section>
            <section >
                <OurServices />
            </section>

            <section className="relative  bg-gray-50 dark:bg-slate-800">
                <ClientReview2/>
                <div className="container lg:mt-24 mt-16 mb-10">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium font-Arial">Restons en Contact !</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Vous avez des questions ou êtes prêt à explorer des opportunités de co-investissement ? Contactez-nous.</p>

                        <div className="mt-6">
                             <Link href="/contactus" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md inline-flex items-center gap-5"><Unicons.UilPhone width={24}/> Contactez nous!</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
