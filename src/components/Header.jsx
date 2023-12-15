import icon from "../assets/Arka.png";
import mailIcon from "../assets/mail.png";
import calendarIcon from "../assets/calendar.png";
import driveIcon from "../assets/drive.png";
import vpnIcon from "../assets/vpn.png";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import t from "../utils/i18n";

export default function Header() {
    return <>
        <header className="container mx-auto flex items-center py-3 mb-6">
            <a href="/home">
                <img src={icon} alt="Arka Home Icon" className="h-10 mr-10" />
            </a>
            <nav className="w-full flex items-center justify-between">
                <ul>
                    <li className="group relative">
                        <a href="#!" className="font-medium text-base flex items-center">
                            {t`Products`}
                            <span className="ml-1"><BsChevronDown /></span>
                        </a>
                        <div className="hidden group-focus-within:block absolute top-full left-0 bg-white border border-slate-200 drop-shadow-xl p-5 mt-2 rounded-lg w-[1000px]">
                            <ul className="grid grid-cols-3 w-full">
                                <li>
                                    <a href="/mail" className="p-3 py-4 flex flex-row hover:bg-slate-100 rounded-lg cursor-pointer w-full">
                                        <div className="w-16 h-auto mr-4">
                                            <div className="aspect-square bg-white rounded-lg drop-shadow-lg p-3 w-full">
                                                <img src={mailIcon} alt="Arka Mail Icon" className="w-12" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-medium">Arka <span className="text-purple-600">Mail</span></h2>
                                            <p className="text-base font-normal text-slate-500">{t`Encrypted email that's private by default.`}</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/calendar" className="p-3 py-4 flex flex-row hover:bg-slate-100 rounded-lg cursor-pointer w-full">
                                        <div className="w-16 h-auto mr-4">
                                            <div className="aspect-square bg-white rounded-lg drop-shadow-lg p-3 w-full">
                                                <img src={calendarIcon} alt="Arka Calendar Icon" className="w-12" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-medium">Arka <span className="text-purple-600">Calendar</span></h2>
                                            <p className="text-base font-normal text-slate-500">{t`A Calendar is a record of your life. Keep it safe.`}</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/drive" className="p-3 py-4 flex flex-row hover:bg-slate-100 rounded-lg cursor-pointer w-full">
                                        <div className="w-16 h-auto mr-4">
                                            <div className="aspect-square bg-white rounded-lg drop-shadow-lg p-2 w-full">
                                                <img src={driveIcon} alt="Arka Drive Icon" className="w-16" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-medium">Arka <span className="text-purple-600">Drive</span></h2>
                                            <p className="text-base font-normal text-slate-500">{t`Secured cloud storage that gives you control of your data.`}</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/vpn" className="p-3 py-4 flex flex-row hover:bg-slate-100 rounded-lg cursor-pointer w-full">
                                        <div className="w-16 h-auto mr-4">
                                            <div className="aspect-square bg-white rounded-lg drop-shadow-lg p-3 w-full">
                                                <img src={vpnIcon} alt="Arka VPN Icon" className="w-12" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-medium">Arka <span className="text-purple-600">VPN</span></h2>
                                            <p className="text-base font-normal text-slate-500">{t`Your gateway to online freedom.`}</p>
                                        </div>    
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className="inline-block mr-4">
                        <a href="/signin" className="group relative py-2 px-4 text-indigo-500 text-sm font-semibold transition-all duration-200 ease-in-out rounded-lg hover:bg-indigo-500 hover:text-slate-100 hover:drop-shadow-xl hover:pr-8">
                            {t`Sign In`}
                            <span className="opacity-0 absolute right-3 top-2 group-hover:opacity-100 transition-all ease-in-out duration-200">
                                <BsChevronRight size={16} />
                            </span>
                        </a>
                    </li>
                    <li className="inline-block">
                        <a href="/signup" className="group py-2 px-4 bg-indigo-500 text-slate-100 text-sm font-semibold rounded-lg transition-all duration-200 hover:drop-shadow-xl hover:pr-8">
                            {t`Create a free account`}
                            <span className="pacity-0 absolute right-3 top-2 group-hover:opacity-100 transition-all ease-in-out duration-200">
                                <BsChevronRight size={16} />
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}