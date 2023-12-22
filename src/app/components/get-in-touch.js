'use client'
import React from 'react'
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';

export default function GetInTouch() {
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium">Restons en Contact !</h3>
                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Vous avez des questions ou êtes prêt à explorer des opportunités de co-investissement ? Contactez-nous.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                        <div className="lg:col-span-8">
                            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-[30px]">
                                        <div className="lg:col-span-6 mb-5">

                                            <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Nom :" />
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Email :" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <input name="subject" id="subject" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Sujet :" />
                                        </div>

                                        <div className="mb-5">
                                            <textarea name="comments" id="comments"
                                                className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 h-28"
                                                placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send"
                                        className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Envoyer
                                        le message</button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="lg:ms-8">
                                <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Numéro de Téléphone</h5>
                                         <Link href="tel:+152534-468-854" className="text-slate-400">+213 562 419 158</Link>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                         <Link href="mailto:contact@bccmdz.net" className="text-slate-400">contact@bccmdz.net</Link>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Lieu</h5>
                                        <p className="text-slate-400 mb-2">Résidence Chabani, Copropriété N°B8, Val d&apos;Hydra Alger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
