'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function About() {
    return (
        <>
            <section className="relative md:py-24 py-16" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <Image src="/images/about.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{width: "100%", aspectRatio: 1, objectFit: 'cover' }} />
                                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="lg:ms-7">
                                <h4 className="mb-4 md:text-xl text-xl font-medium font-Arial"><strong>À l&apos;attention des porteurs d&apos;idées et de projets :</strong></h4>
                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-Arial mx-auto">Possédez-vous un projet en cours nécessitant une productivité accrue ? Rencontrez-vous des difficultés financières, administratives ou de gestion dans votre entreprise ? Avez-vous identifié une opportunité d&apos;affaires ou de marché qui ne peut être retardée ?
                                    <br /><strong>Forsaty.org est la solution idéale pour vous.</strong>
                                </p>
                                <br />
                                <h4 className="mb-4 md:text-xl text-xl font-medium font-Arial"><strong>Aux investisseurs :</strong></h4>
                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-Arial mx-auto">Vous êtes perplexe et ne savez pas où investir votre argent dans une activité ou une entreprise ? Possédez-vous des économies que vous souhaitez voir générer des bénéfices ? Aspirez-vous à devenir un investisseur ou un entrepreneur ?
                                    <br /><strong>Forsaty.org demeure la plateforme idéale pour vous.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};