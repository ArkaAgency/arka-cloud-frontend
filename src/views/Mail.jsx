import {useSelector} from "react-redux";
import {selectRouteArgs} from "../features/router/routerSlice";
import BasePageModel from "../components/BasePageModel";
import mailIcon from "../assets/mail.png";

export default function Mail () {
    const subpage = useSelector(selectRouteArgs)[0] || 'overview';
    const subpageComponent = {
        overview: <MailOverview />,
        security: <MailSecurity />,
        pricing: <MailPricing />,
        download: <MailDownload />,
    }[subpage] || <MailOverview />;

    return <BasePageModel>
        <div className={'container mx-auto relative h-6'}>
            <div className={'absolute -top-4 flex items-center'}>
                <a href="/mail" className={'flex items-center justify-center mr-6'}>
                    <img src={mailIcon} alt="Arka Mail Icon" className="h-5 mr-2" />
                    <p className={'text-lg font-bold'}>Arka <span className={'text-violet-500'}>Mail</span></p>
                </a>
                <nav>
                    <ul className={'flex items-center'}>
                        <li className={'relative mr-5 h-5'}>
                            <a href="/mail" className={'font-semibold hover:text-purple-500' + (subpage === 'overview' ? ' text-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-current' : '')}>
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
        Overview
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