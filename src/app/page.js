'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarSmallLight = dynamic(()=>import('./components/navbar-small-light'));
const Switcher = dynamic(()=>import('./components/Switcher'));
const Footer = dynamic(()=>import('./components/footer'));
const About = dynamic(()=>import('./components/about'));
const OurServices = dynamic(()=>import('./components/our-services'));
const ComfortablePricing = dynamic(()=>import('./components/comfortable-pricing'));
const ClientSreview = dynamic (()=>import('./components/clientsreview'));
const BlogsNews = dynamic(()=>import('./components/blogs-news'));
const GetInTouch = dynamic(()=>import('./components/get-in-touch'));
 
import * as Unicons from '@iconscout/react-unicons';

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function Index() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavbarSmallLight />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            <section className="py-36 lg:py-56 w-full table relative bg-[url('/images/bg/bg.jpg')] bg-top bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-gradient-to-t to-slate-950/50 via-slate-950/75 from-slate-950"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        {/*<Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-violet-600 text-violet-600 hover:text-white duration-500 ease-in-out mx-auto">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                         </Link>*/}
                        <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white font-Arial">Investissez dans le Succès de Demain avec Forsaty!</h3>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-Arial">Découvrez des projets innovants et saisissez des opportunités d&apos;investissement.</p>
                        <div className="mt-8">
                            <Link href="/projets" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md font-Arial inline-flex items-center gap-4">
                                <Unicons.UilFilesLandscapesAlt width={24}/>Explorer les Projets</Link>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <OurServices title="Nos Services, Votre Réussite" desc="Découvrez ce que Forsaty peut vous offrir!"/>
            <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/cta.jpg" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                        <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                            <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-violet-600 text-violet-600 hover:text-white duration-500 ease-in-out mx-auto">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                                            <div>
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 font-Arial">Comment Fonctionne Forsaty ?</h6>
                                                    <h3 className="md:text-2xl text-xl font-medium text-white mt-2 font-Arial">Regardez et apprenez le processus <br /> de co-investissement transparent sur Forsaty.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-violet-600"></div>
            </section>
            <ClientSreview  className="lg:py-24 py-16"/>
            <BlogsNews title="Découvrez l'Innovation Précoce" desc="Explorez notre sélection de projets prometteurs en avant-première. Ces initiatives émergentes représentent l'avenir de l'investissement, prêtes à captiver votre intérêt."/>
            <GetInTouch />
            <Footer />
        </>
    )
}
