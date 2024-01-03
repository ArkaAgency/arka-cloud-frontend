import {useSelector} from "react-redux";
import {selectRouteArgs} from "../features/router/routerSlice";
import BasePageModel from "../../../components/legacy/BasePageModel";
import t from "../../../lib/i18n";
import mailIcon from "../../../public/assets/mail.png";
import mOverviewHero from "../../../public/assets/mail_-Hero-desktop-mail.png";
import mOverviewEncryption from "../../../public/assets/mail_end-to-end-encryption.png";
import {BsChevronRight} from "react-icons/bs";

export default function Mail () {
    const subpage = useSelector(selectRouteArgs)[0] || 'overview';
    const subpageComponent = {
        overview: <MailOverview />,
        security: <MailSecurity />,
        pricing: <MailPricing />,
        download: <MailDownload />,
    }[subpage] || <MailOverview />;

    return <BasePageModel>
        <div className={'container mx-auto relative h-6 mb-2'}>
            <div className={'absolute -top-4 flex items-center'}>
                <a href="/app/(home)/mail/Mail" className={'flex items-center justify-center mr-6'}>
                    <img src={mailIcon} alt="Arka Mail Icon" className="h-5 mr-2" />
                    <p className={'text-lg font-bold'}>Arka <span className={'text-violet-500'}>Mail</span></p>
                </a>
                <nav>
                    <ul className={'flex items-center'}>
                        <li className={'relative mr-5 h-5'}>
                            <a href="/app/(home)/mail/Mail" className={'font-semibold hover:text-purple-500' + (subpage === 'overview' ? ' text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-current' : '')}>
                                Overview
                            </a>
                        </li>
                        <li className={'relative mr-5 h-5'}>
                            <a href="/mail/security" className={'font-semibold hover:text-purple-500' + (subpage === 'security' ? ' text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-current' : '')}>
                                Security
                            </a>
                        </li>
                        <li className={'relative mr-5 h-5'}>
                            <a href="/mail/pricing" className={'font-semibold hover:text-purple-500' + (subpage === 'pricing' ? ' text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-current' : '')}>
                                Pricing
                            </a>
                        </li>
                        <li className={'relative mr-5 h-5'}>
                            <a href="/mail/download" className={'font-semibold hover:text-purple-500' + (subpage === 'download' ? ' text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-current' : '')}>
                                Download
                            </a>
                        </li>
                        <li className={'relative h-5'}>
                            <a href="/support/mail" className={'font-semibold hover:text-purple-500'}>
                                Support
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className={'container mx-auto'}>
            {subpageComponent}
        </div>
    </BasePageModel>
}

export function MailOverview() {
    return <>
        <article className="w-full">
            <section className="w-full bg-indigo-950 rounded-2xl grid grid-cols-2 mb-12">
                <div className={'p-12 h-full flex flex-col items-start justify-center'}>
                    <h1 className={'text-white text-5xl font-medium mb-6'}>{t`Secure email that protects your privacy`}</h1>
                    <p className={'text-xl text-white font-medium mb-6'}>{t`Keep your conversations private. Proton Mail is an encrypted email service based in Switzerland.`}</p>
                    <a href="/mail/pricing" className="group py-3 pr-8 bg-gradient-to-r from-violet-400 to-violet-600 text-slate-100 text-xl font-semibold rounded-3xl transition-all duration-200 hover:pr-11 hover:drop-shadow-xl flex items-center justify-center w-fit">
                        <span className={'pl-8 group-hover:pl-5 transition-all ease-in-out duration-200'}>
                            {t`Create a free account`}
                        </span>
                        <span className="opacity-0 absolute right-4 top-3.5 group-hover:opacity-100 transition-all ease-in-out duration-200">
                            <BsChevronRight size={26} />
                        </span>
                    </a>
                    <p>{t``}</p>
                </div>
                <div className={'flex items-center justify-end'}>
                    <img src={mOverviewHero} alt="Arka Mail Overview" className={"w-full rounded-br-2xl"}/>
                </div>
            </section>
            <section className={'py-12'}>
                <div className={'grid grid-cols-2'}>
                    <div>
                        <img src={mOverviewEncryption} alt=""/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </section>
        </article>
        <article className="w-full">

        </article>
        <article className="w-full">

        </article>
    </>
}

export function MailSecurity() {
    return <>
        Security
    </>
}

export function MailPricing() {
    return <>
        Pricing
    </>
}

export function MailDownload() {
    return <>
        Download
    </>
}