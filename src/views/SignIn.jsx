import {Component} from "react";
import banner from "../assets/ArkaBanner.png";
import mailIcon from "../assets/mail.png";
import calendarIcon from "../assets/calendar.png";
import driveIcon from "../assets/drive.png";
import vpnIcon from "../assets/vpn.png";
import {LanguageDropdownAlt} from "../components/LanguageDropdown";
import { GoPersonFill, GoKey } from "react-icons/go";
import packageJson from "../../package.json";

export default class SignIn extends Component {
    render() {
        return <>
            <div className={"w-full h-screen bg-gradient-to-r from-violet-100 to-white"}>
                <header className={'p-4 px-8 flex items-center justify-between mb-6'}>
                    <a href="/home">
                        <img src={banner} alt="Arka Banner" className={"h-12"}/>
                    </a>
                    <LanguageDropdownAlt />
                </header>
                <main className={'flex items-center justify-center w-full'}>
                    <article className={'w-[18.5%]'}>
                        <section className={'w-full bg-white rounded-2xl p-8 py-10 drop-shadow-2xl mb-10'}>
                            <h1 className={'text-2xl font-bold mb-2'}>Sign In</h1>
                            <p className={'text-slate-600 text-sm font-normal mb-4'}>Enter your Arka Account details</p>
                            <form className={'w-full mb-4'}>
                                <div className={'mb-5 w-full'}>
                                    <label htmlFor="username" className={'font-semibold text-sm text-slate-900 block mb-1'}>
                                        Email or username
                                    </label>
                                    <input type="text" id={'username'} className={'w-full outline-0 border border-slate-400 rounded-lg p-2 px-3 text-slate-600 text-sm focus:border-violet-600'}/>
                                </div>
                                <div className={'mb-5 w-full'}>
                                    <label htmlFor="password" className={'font-semibold text-sm text-slate-900 block mb-1'}>
                                        Password
                                    </label>
                                    <input type="password" id={'password'} className={'w-full outline-0 border border-slate-400 rounded-lg p-2 px-3 text-slate-600 text-sm focus:border-violet-600'}/>
                                </div>
                                <div className="flex mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="staySignedIn" aria-describedby="staySignedIn-text" type="checkbox" value="" className="w-4 h-4 accent-indigo-500 rounded-full cursor-pointer" />
                                    </div>
                                    <div className="ms-2 text-sm">
                                        <label htmlFor="staySignedIn" className="font-normal text-slate-700 cursor-pointer">Keep me signed in</label>
                                        <p id="staySignedIn-text" className="text-sm font-normal text-slate-500">Not your device? Use a private browsing window to sign in and close it when done.</p>
                                    </div>
                                </div>
                                <button className={'rounded-xl bg-indigo-600 font-medium text-base text-center w-full text-white p-3 hover:bg-indigo-700'}>Sign in</button>
                            </form>
                            <div className={'flex w-full items-center justify-center flex-wrap'}>
                                <p className={'text-center text-sm text-slate-700'}>New to Arka ? <a href="/signup" className={"text-indigo-600 underline"}>Create account</a></p>
                                <div className={'w-full h-[1px] bg-gray-300 my-5'}></div>
                                <button className={'group text-sm text-indigo-600 underline cursor-pointer relative'}>
                                    Trouble signing in?
                                    <div className="hidden absolute group-focus-within:block border border-slate-200 top-full left-1/2 -translate-x-1/2 bg-white py-1 rounded-lg mt-2 drop-shadow-xl w-44">
                                        <a href={'/resetpassword'} className={'flex items-center justify-center w-full text-slate-800 py-2 hover:bg-slate-100'}>
                                            <GoKey />&nbsp;&nbsp;&nbsp;Reset password
                                        </a>
                                        <a href={'/forgotusername'} className={'flex items-center justify-center w-full text-slate-800 py-2 hover:bg-slate-100'}>
                                            <GoPersonFill />&nbsp;&nbsp;&nbsp;Forgot username?
                                        </a>
                                    </div>
                                </button>
                            </div>
                        </section>
                        <section>
                            <ul className={'w-full flex items-center justify-center mb-8'}>
                                <li className={'mr-11'}>
                                    <img src={mailIcon} alt="Arka Mail Icon" className={'h-9'}/>
                                </li>
                                <li className={'mr-11'}>
                                    <img src={calendarIcon} alt="Arka Mail Icon" className={'h-9'}/>
                                </li>
                                <li className={'mr-11'}>
                                    <img src={driveIcon} alt="Arka Mail Icon" className={'h-9'}/>
                                </li>
                                <li>
                                    <img src={vpnIcon} alt="Arka Mail Icon" className={'h-9'}/>
                                </li>
                            </ul>
                            <p className={'text-center text-base mb-4'}>
                                Arka Cloud. Local cloud by default.
                            </p>
                            <p className={'text-center text-base'}>
                                <a href="/legal/terms" className={'text-violet-600 underline'}>Terms</a> | <a href="/legal/privacy" className={'text-violet-600 underline'}>Privacy policy</a> | Version {packageJson.version}
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </>;
    }
}