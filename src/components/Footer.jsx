import banner from "../assets/ArkaBanner.png";
import { BsTwitterX, BsInstagram, BsGlobeEuropeAfrica } from "react-icons/bs";
import LanguageDropdown from "./LanguageDropdown";

export default function Footer() {
    return <>
        <footer className="container mx-auto my-6">
            <article className="grid grid-cols-5 gap-x-20">
                <section>
                    <img src={banner} alt="Arka Cloud Banner" className="h-12 mb-3" />
                    <p className="text-sm font-medium text-slate-600 mb-4">Arka Cloud - THE local cloud by default</p>
                    <ul className="flex items-center justify-start">
                        <li className="mr-2">
                            <a href="https://arka-group.io" rel="noreferrer" target="_blank" className="text-slate-700">
                                <BsGlobeEuropeAfrica size={14} />
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="https://x.com/arka_corporate" rel="noreferrer" target="_blank" className="text-slate-700">
                                <BsTwitterX size={14} />
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="https://www.instagram.com/arka_corporate/" rel="noreferrer" target="_blank" className="text-slate-700">
                                <BsInstagram size={14} />
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="mb-6">
                            <p className="text-lg font-bold">Products</p>
                        </li>
                        <li className="mb-6">
                            <a href="/mail" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Arka Mail
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/calendar" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Arka Calendar
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/drive" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Arka Drive
                            </a>
                        </li>
                        <li className="">
                            <a href="/vpn" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Arka VPN
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="mb-6">
                            <p className="text-lg font-bold">Privacy and community</p>
                        </li>
                        <li className="mb-6">
                            <a href="/tor" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Tor
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/easyswitch" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Switch to Arka Cloud
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/community" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Community
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/opensource" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Open Source
                            </a>
                        </li>
                        <li className="">
                            <a href="/pricing" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="mb-6">
                            <p className="text-lg font-bold">Company</p>
                        </li>
                        <li className="mb-6">
                            <a href="/mail" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Abous us
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/calendar" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Team
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/drive" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Careers
                            </a>
                        </li>
                        <li className="">
                            <a href="/vpn" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Shop
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className="mb-6">
                            <p className="text-lg font-bold">Connect</p>
                        </li>
                        <li className="mb-6">
                            <a href="/blog" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Blog
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/support" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Help and support
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/partners" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Partners and affiliates
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="/media" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Press and media
                            </a>
                        </li>
                        <li className="">
                            <a href="/support/contact" className="text-base text-slate-600 font-medium hover:text-indigo-500">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
            
            <div className="h-[1px] bg-slate-300 w-full my-12"></div>

            <article className="flex justify-between mb-12">
                <section>
                    <p className="text-xs font-medium mb-2">Arka Inc</p>
                    <p className="text-xs text-slate-600">xxx <br />xxxxx <br />Paris, France</p>
                </section>
                <section>
                    <LanguageDropdown />
                </section>
            </article>

            <article>
                <section className="mb-12">
                    <ul className="">
                        <li className="inline-block mr-6">
                            <a href="https://status.cloud.arka-group.io" className="text-base font-medium text-slate-600 hover:text-indigo-500">
                                System status
                            </a>
                        </li>
                        <li className="inline-block mr-6">
                            <a href="/support/reportabuse" className="text-base font-medium text-slate-600 hover:text-indigo-500">
                                Report abuse
                            </a>
                        </li>
                        <li className="inline-block mr-6">
                            <a href="/support/reportbug" className="text-base font-medium text-slate-600 hover:text-indigo-500">
                                Report a problem
                            </a>
                        </li>
                        <li className="inline-block mr-6">
                            <a href="/security/reponsecenter" className="text-base font-medium text-slate-600 hover:text-indigo-500">
                                Report a security issue
                            </a>
                        </li>
                        <li className="inline-block mr-6">
                            <a href="/community/requestfeature" className="text-base font-medium text-slate-600 hover:text-indigo-500">
                                Request a feature
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <p className="text-xs text-slate-600 font-medium">
                        <a href="/legal/privacy">Privacy Policy</a> <span className="mx-3 font-light">|</span>
                        <a href="/legal/terms">Terms & conditions</a> <span className="mx-3 font-light">|</span>
                        <a href="/legal/transparency">Transparency Report</a> <span className="mx-3 font-light">|</span>
                        © 2023 Arka Inc. All rights reserved.
                    </p>
                </section>
            </article>
        </footer>
    </>
}