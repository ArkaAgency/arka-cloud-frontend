import { Component } from "react";
import BasePageModel from "../components/BasePageModel";
import mailIcon from "../assets/mail.png";
import calendarIcon from "../assets/calendar.png";
import driveIcon from "../assets/drive.png";
import vpnIcon from "../assets/vpn.png";
import homepageServicesRecapLarge from "../assets/homepageServicesRecapLarge.png";
import fundamentallyDifferent from "../assets/FundamentallyDifferent.png";
import privacyByDefault from "../assets/PrivacyByDefault.png";
import homeMapLarge from "../assets/homeMapLarge.png";
import t from "../utils/i18n";
import {BsChevronRight} from "react-icons/bs";

export default class Home extends Component {
    render() {
        return <>
            <BasePageModel>
                <article className="h-[85vh] w-screen flex items-center justify-center">
                    <section className={'w-full max-w-2xl'}>
                        <p className={'text-center text-xl font-medium mb-1'}>Arka Cloud is self-hosted privacy for everyone</p>
                        <h1 className={'text-5xl font-bold text-center mb-6'}>
                            <span className={'font-thin'}>Welcome to a better internet where </span>
                            privacy and freedom come home
                        </h1>
                        <div className={'flex items-center justify-center'}>
                            <ul className="grid grid-cols-4 gap-x-4">
                                <li>
                                    <a href={'/mail'} className={'block w-fit cursor-pointer p-6 hover:bg-gray-200 rounded-3xl'}>
                                        <div className={'bg-white drop-shadow-xl w-24 h-24 rounded-3xl mb-3 relative flex justify-center items-center'}>
                                            <img src={mailIcon} alt="Arka Cloud Mail Icon" className={"w-14"}/>
                                        </div>
                                        <p className={'text-sm text-center text-slate-600 font-medium'}>Mail</p>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/calendar'} className={'block w-fit cursor-pointer p-6 hover:bg-gray-200 rounded-3xl'}>
                                        <div className={'bg-white drop-shadow-xl w-24 h-24 rounded-3xl mb-3 relative flex justify-center items-center'}>
                                            <img src={calendarIcon} alt="Arka Cloud Mail Icon" className={"w-14"}/>
                                        </div>
                                        <p className={'text-sm text-center text-slate-600 font-medium'}>Calendar</p>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/drive'} className={'block w-fit cursor-pointer p-6 hover:bg-gray-200 rounded-3xl'}>
                                        <div className={'bg-white drop-shadow-xl w-24 h-24 rounded-3xl mb-3 relative flex justify-center items-center'}>
                                            <img src={driveIcon} alt="Arka Cloud Mail Icon" className={"w-14"}/>
                                        </div>
                                        <p className={'text-sm text-center text-slate-600 font-medium'}>Drive</p>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/vpn'} className={'block w-fit cursor-pointer p-6 hover:bg-gray-200 rounded-3xl'}>
                                        <div className={'bg-white drop-shadow-xl w-24 h-24 rounded-3xl mb-3 relative flex justify-center items-center'}>
                                            <img src={vpnIcon} alt="Arka Cloud Mail Icon" className={"w-14"}/>
                                        </div>
                                        <p className={'text-sm text-center text-slate-600 font-medium'}>VPN</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </article>
                <article className={'container mx-auto lg:px-0 grid grid-cols-2'}>
                    <section className={'order-2'}>
                        <img className={'w-full h-auto'} src={homepageServicesRecapLarge} alt=""/>
                    </section>
                    <section className={'order-1 flex items-center justify-center'}>
                        <div className={'w-full max-w-xl'}>
                            <h2 className={'text-4xl font-medium text-slate-600 leading-tight mb-4'}>
                                With Arka Cloud, your data belongs to you, not tech companies, governments, or hackers
                            </h2>
                            <p className={'mb-6 font-semibold text-slate-600 text-base'}>
                                Our encrypted services help you fight for a better internet that is secure and private by default.
                            </p>
                            <a href="/signup" className="group py-3 pr-8 bg-indigo-500 text-slate-100 text-xl font-semibold rounded-3xl transition-all duration-200 hover:pr-11 hover:drop-shadow-xl flex items-center justify-center w-fit">
                                <span className={'pl-8 group-hover:pl-5 transition-all ease-in-out duration-200'}>
                                    Create a free account
                                </span>
                                <span className="opacity-0 absolute right-4 top-3.5 group-hover:opacity-100 transition-all ease-in-out duration-200">
                                    <BsChevronRight size={26} />
                                </span>
                            </a>
                        </div>
                    </section>
                </article>
                <article className={'bg-white py-20'}>
                    <div className={'container mx-auto'}>
                        <section className={'flex items-center justify-center flex-col mb-8'}>
                            <h2 className={'text-4xl font-bold text-center bg-white mb-6'}>
                                <span className={'font-thin'}>Arka Cloud is privacy </span>
                                you can trust
                            </h2>
                            <p className={'mb-3 w-5/12 text-center font-medium text-slate-600 text-lg'}>Arka Cloud provides easy-to-use encrypted email, calendar, file storage, and VPN built on the principle of your data, your rules.</p>
                            <p className={'w-5/12 text-center font-medium text-slate-600 text-lg'}>Your privacy is ensured by strong encryption, open-source code, and Swiss privacy laws.</p>
                        </section>
                        <section className={'mb-24'}>
                            <ul className={'grid grid-cols-3 grid-rows-2 gap-8'}>
                                <li className={'bg-white shadow-2xl p-8 rounded-xl'}>
                                    <div className={'flex items-center mb-6'}>
                                        <img src={mailIcon} alt="Arka Cloud Mail Icon" className={'h-6 w-auto mr-3'}/>
                                        <p className={'font-extrabold text-lg'}>
                                            Arka
                                            <span className={'text-violet-500'}> Mail</span>
                                        </p>
                                    </div>
                                    <p className={'text-slate-600 text-sm mb-4 font-base'}>
                                        Protect your communications with encrypted email that is private by default.
                                    </p>
                                    <a href="/mail" className={'block w-fit text-violet-500 font-bold text-base group relative'}>
                                        Discover Arka Mail
                                        <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={14} />
                                        </span>
                                        <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                    </a>
                                </li>
                                <li className={'bg-white shadow-2xl p-8 rounded-xl'}>
                                    <div className={'flex items-center mb-6'}>
                                        <img src={calendarIcon} alt="Arka Cloud Mail Icon" className={'h-6 w-auto mr-3'}/>
                                        <p className={'font-extrabold text-lg'}>
                                            Arka
                                            <span className={'text-violet-500'}> Calendar</span>
                                        </p>
                                    </div>
                                    <p className={'text-slate-600 text-sm mb-4 font-base'}>
                                        Your calendar is a record of your life. Keep it safe with our encrypted calendar.
                                    </p>
                                    <a href="/calendar" className={'block w-fit text-violet-500 font-bold text-base group relative'}>
                                        Discover Arka Calendar
                                        <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={14} />
                                        </span>
                                        <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                    </a>
                                </li>
                                <li className={'bg-white shadow-2xl p-8 rounded-xl'}>
                                    <div className={'flex items-center mb-6'}>
                                        <img src={driveIcon} alt="Arka Cloud Mail Icon" className={'h-6 w-auto mr-3'}/>
                                        <p className={'font-extrabold text-lg'}>
                                            Arka
                                            <span className={'text-violet-500'}> Drive</span>
                                        </p>
                                    </div>
                                    <p className={'text-slate-600 text-sm mb-4 font-base'}>
                                        Secure your files with encrypted cloud storage that gives you control of your data.
                                    </p>
                                    <a href="/drive" className={'block w-fit text-violet-500 font-bold text-base group relative'}>
                                        Discover Arka Drive
                                        <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={14} />
                                        </span>
                                        <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                    </a>
                                </li>
                                <li className={'bg-white shadow-2xl p-8 rounded-xl'}>
                                    <div className={'flex items-center mb-6'}>
                                        <img src={vpnIcon} alt="Arka Cloud Mail Icon" className={'h-6 w-auto mr-3'}/>
                                        <p className={'font-extrabold text-lg'}>
                                            Arka
                                            <span className={'text-violet-500'}> VPN</span>
                                        </p>
                                    </div>
                                    <p className={'text-slate-600 text-sm mb-4 font-base'}>
                                        Your gateway to online freedom. Access blocked content and browse privately.
                                    </p>
                                    <a href="/vpn" className={'block w-fit text-violet-500 font-bold text-base group relative'}>
                                        Discover Arka VPN
                                        <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={14} />
                                        </span>
                                        <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section className={'grid grid-cols-2 gap-x-8'}>
                            <div>
                                <img src={fundamentallyDifferent} alt="Fundamentally different" className={'w-full h-auto mb-4'}/>
                                <h3 className={'text-slate-700 text-2xl font-semibold mb-4'}>Fundamentally different</h3>
                                <p className={'text-base text-slate-700 mb-4 font-medium'}>Most tech companies, whether it’s Google or Apple, define privacy as “nobody can exploit your data except for us.” - We disagree. We believe nobody should be able to exploit your data.</p>
                                <p className={'text-base text-slate-700 mb-4 font-medium'}>Our technology and business are based upon this fundamentally stronger definition of privacy, backed also by Swiss privacy laws.</p>
                            </div>
                            <div>
                                <img src={privacyByDefault} alt="Fundamentally different" className={'w-full h-auto mb-4'}/>
                                <h3 className={'text-slate-700 text-2xl font-semibold mb-4'}>Privacy for a better world</h3>
                                <p className={'text-base text-slate-700 mb-4 font-medium'}>At Arka, we believe that a better world begins with privacy, and our mission is at the heart of everything we do. Privacy isn’t just something we talk about; it’s a deeply held core belief and the reason Arka Cloud was created in the first place.</p>
                                <p className={'text-base text-slate-700 mb-4 font-medium'}>We believe in people before profits, and we use our resources to fight for an open internet that promotes freedom of speech and freedom of information.</p>
                            </div>
                        </section>
                    </div>
                </article>
                <article className={'bg-gradient-to-b from-white to-gray-200 py-20'}>
                    <section className={'flex flex-wrap items-center justify-center mb-32'}>
                        <h2 className={'text-4xl font-bold w-1/4 text-center mb-32'}>Over 1 million people and businesses <span className={'font-thin'}>have installed Arka Cloud</span></h2>
                        <div className="w-full">
                            <div className="container mx-auto">
                                <img src={homeMapLarge} alt="World Map" className={'scale-110 w-full'} />
                            </div>
                        </div>
                    </section>
                    <section className={'container mx-auto'}>
                        <ul className={'grid grid-cols-3 gap-8'}>
                            <li>
                                <h3 className={'font-normal text-slate-700 text-3xl mb-6'}>End-to-end encryption</h3>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>Our end-to-end encryption and zero-access encryption means that no one (not even Arka) has the technical means to access your data without your permission.</p>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>We don't sell ads and can’t share your data. At Arka, privacy isn’t a promise, it’s mathematically ensured.</p>
                                <a href="/mail/security" className={'block w-fit text-violet-500 font-bold text-lg group relative'}>
                                    Discover Arka Cloud's Encryption
                                    <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={20} />
                                        </span>
                                    <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                </a>
                            </li>
                            <li>
                                <h3 className={'font-normal text-slate-700 text-3xl mb-6'}>Security made easy</h3>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>Arka Cloud’s encrypted services are so simple and intuitive that anyone can use them.</p>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>Easy Switch lets you instantly import and encrypt your data from Google, Outlook, or other services in just a couple of clicks.</p>
                                <a href="/easyswitch" className={'block w-fit text-violet-500 font-bold text-lg group relative'}>
                                    Migrate your emails to Arka Cloud
                                    <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={20} />
                                        </span>
                                    <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                </a>
                            </li>
                            <li>
                                <h3 className={'font-normal text-slate-700 text-3xl mb-6'}>Open source & audited</h3>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>As a company created by former scientists, we believe strongly that trust is earned through transparency and peer review.</p>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>All our apps are open source and independently audited by security experts so that anyone can use them, inspect them, and trust them.</p>
                                <a href="/opensource" className={'block w-fit text-violet-500 font-bold text-lg group relative'}>
                                    Akra Cloud and open source
                                    <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={20} />
                                        </span>
                                    <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                </a>
                            </li>
                            <li>
                                <h3 className={'font-normal text-slate-700 text-3xl mb-6'}>One account, any device</h3>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>Arka Cloud apps are available on all devices (Android, iPhone and iPad, Windows, Mac, Linux, and more), and with one Arka account, you can use all of our privacy-by-default services.</p>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>Arka Cloud apps have advanced anti-censorship technologies built-in, so you can access your email, files, calendar, passwords and VPN even from countries with limited online freedom.</p>
                                <a href="https://apps.cloud.arka-group.io" className={'block w-fit text-violet-500 font-bold text-lg group relative'}>
                                    Download Arka Cloud apps
                                    <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={20} />
                                        </span>
                                    <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                </a>
                            </li>
                            <li>
                                <h3 className={'font-normal text-slate-700 text-3xl mb-6'}>Free forever</h3>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>We believe that privacy is a human right, and that's why Arka Cloud services are always available for free and our encryption technology is free software.</p>
                                <p className={'text-lg font-medium text-slate-700 mb-6'}>Arka Cloud has no ads and does not sell your data. You can support the service by upgrading to a paid account with more features.</p>
                                <a href="/pricing" className={'block w-fit text-violet-500 font-bold text-lg group relative'}>
                                    Get a free Arka account
                                    <span className="absolute left-full ml-1 top-1.5">
                                            <BsChevronRight size={20} />
                                        </span>
                                    <div className={'w-full scale-x-0 h-0.5 bg-violet-500 group-hover:scale-x-100 transition-transform origin-left'}></div>
                                </a>
                            </li>
                        </ul>
                    </section>
                </article>
            </BasePageModel>
        </>
    }
}