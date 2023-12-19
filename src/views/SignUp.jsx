import {Component} from "react";
import banner from "../assets/ArkaBanner.png";
import mailIcon from "../assets/mail.png";
import calendarIcon from "../assets/calendar.png";
import driveIcon from "../assets/drive.png";
import vpnIcon from "../assets/vpn.png";
import {LanguageDropdownAlt} from "../components/LanguageDropdown";
import packageJson from "../../package.json";
import t from "../utils/i18n";

export default class SignUp extends Component {
    render() {
        return <>
            <div className={"w-full h-screen bg-gradient-to-r from-violet-100 to-white"}>
                <header className={'p-4 px-8 flex items-center justify-between mb-6'}>
                    <a href="/home">
                        <img src={banner} alt="Arka Banner" className={"h-12"}/>
                    </a>
                    <div className={'w-full max-w-[275px]'}>
                        <ul className='w-full grid grid-cols-2'>
                            <li className={'flex items-center justify-center'}>
                                <span className={'text-5xl text-indigo-600'}>•</span>
                            </li>
                            <li className={'flex items-center justify-center relative'}>
                                <div className={'absolute h-0.5 bg-indigo-600 opacity-60 top-7'} style={{
                                    left: 'calc(-50% + 0.65em)',
                                    width: 'calc(100% - 1.28em)'
                                }}></div>
                                <span className={'text-5xl text-indigo-600 opacity-50'}>•</span>
                            </li>
                        </ul>
                        <ul className='w-full grid grid-cols-2'>
                            <li className={'flex items-center justify-center'}>
                                <p className={'text-xs font-bold text-slate-950 text-center'}>{t`Account setup`}</p>
                            </li>
                            <li className={'flex items-center justify-center'}>
                                <p className={'text-xs font-normal text-slate-950 opacity-50 text-center'}>{t`Verification`}</p>
                            </li>
                        </ul>
                    </div>
                    <LanguageDropdownAlt />
                </header>
                <main className={'flex items-center justify-center w-full'}>
                    <article className={'w-[18.5%]'}>
                        <section className={'w-full bg-white rounded-2xl p-8 py-10 drop-shadow-2xl mb-10'}>
                            <h1 className={'text-3xl font-bold mb-2'}>{t`Create your Arka Account`}</h1>
                            <p className={'text-slate-600 text-base font-normal mb-6'}>{t`One account. All Arka services.`}</p>
                            <SignUpForm />
                            <div className={'flex w-full items-center justify-center flex-wrap'}>
                                <p className={'text-center text-sm text-slate-700'}>{t`Already have an account?`} <a href="/signin" className={"text-indigo-600 underline"}>{t`Sign in`}</a></p>
                                <div className={'w-full h-[1px] bg-gray-300 my-5'}></div>
                                <p className={'text-center text-sm text-slate-600 w-60'}>{t`By creating a Arka account, you agree to our`} <a href="/legal/terms" className={"text-indigo-600 underline"}>{t`terms and conditions`}</a></p>
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
                                <a href="/legal/terms" className={'text-violet-600 underline'}>{t`Terms`}</a> | <a href="/legal/privacy" className={'text-violet-600 underline'}>{t`Privacy policy`}</a> | Version {packageJson.version}
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </>;
    }
}

export class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                username: '',
                email: '',
                password: '',
                passwordRepeat: ''
            },
            errors: {
                username: '',
                email: '',
                password: '',
                passwordRepeat: '',
                global: ''
            },
            displayErrors: false,
            useEmail: false,
        }

        this.toggleEmail = this.toggleEmail.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    toggleEmail() {
        this.setState((state) => {
            return {
                useEmail: !state.useEmail
            }
        });

        if (this.state.displayErrors) this.validateForm();
    }

    validateForm(state) {
        const { fields, useEmail } = this.state;
        const { username, email, password, passwordRepeat } = state ? state.fields : fields;

        const finalErrors = {
            username: '',
            email: '',
            password: '',
            passwordRepeat: '',
            global: ''
        };

        // Check for email field
        if (useEmail) {
            const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (email.length === 0) {
                finalErrors.email = t`This field is required`;
            } else if (!emailRegexp.test(email)) {
                finalErrors.email = t`Email is not valid`;
            }
        }
        // Check for username field
        else {
            const usernameRegexp = /^[A-Za-z0-9]+$/
            if (username.length === 0) {
                finalErrors.username = t`This field is required`;
            } else if (username.length < 6) {
                finalErrors.username = t`Username must contain at least 6 characters`;
            } else if (!usernameRegexp.test(username)) {
                finalErrors.username = t`Username should only contains letters and numbers`;
            }
        }

        // Check for password field
        if (password.length === 0) {
            finalErrors.password = t`This field is required`;
        } else if (password.length < 8) {
            finalErrors.password = t`Password must contain at least 8 characters`;
        }

        // Check for password repeat field
        if (passwordRepeat.length === 0) {
            finalErrors.passwordRepeat = t`This field is required`;
        } else if (password !== passwordRepeat) {
            finalErrors.passwordRepeat = t`Passwords do not match`;
        }

        // Update state
        this.setState((state) => {
            return {
                errors: finalErrors
            }
        });

        // Return
        return (!Object.values(finalErrors).some((x) => x.length > 0))
    }

    onChange(e) {
        const { displayErrors } = this.state;

        this.setState((state) => {
            return {
                fields: {
                    ...state.fields,
                    [e.target.id]: e.target.value
                }
            }
        });

        if (displayErrors) this.validateForm({
            ...this.state,
            fields: {
                ...this.state.fields,
                [e.target.id]: e.target.value
            }
        });
    }

    submit() {
        this.setState((state) => {
            return {
                displayErrors: true
            }
        });

        // send form data to API if form is valid
        if (this.validateForm()) {
            console.log('SUBMIT');
        }
    }

    render() {
        const { fields, errors, useEmail } = this.state;

        return <>
            <form className={'w-full mb-4'}>
                {useEmail ? <div className={'mb-5 w-full'}>
                    <label htmlFor="email" className={'font-semibold text-sm text-slate-900 block mb-1'}>
                        {t`Email`}
                    </label>
                    <input value={fields.email} onChange={this.onChange} name={'email'} type="email" id={'email'} className={'w-full outline-0 border border-slate-400 rounded-lg p-2 px-3 text-slate-600 text-sm focus:border-violet-600 mb-1 ' + (errors.email ? ' !border-red-600' : '')}/>
                    <FieldErrorMessage>{errors.email}</FieldErrorMessage>
                </div> : <div className={'mb-5 w-full'}>
                    <label htmlFor="username" className={'font-semibold text-sm text-slate-900 block mb-1'}>
                        {t`Username`}
                    </label>
                    <div className={'w-full relative mb-1'}>
                        <input value={fields.username} onChange={this.onChange} name={'username'} type="text" id={'username'} className={'w-full outline-0 border border-slate-400 rounded-lg p-2 px-3 pr-32 text-slate-600 text-sm focus:border-violet-600' + (errors.username ? ' !border-red-600' : '')}/>
                        <p className={'absolute right-3 top-2 text-sm font-medium text-slate-700 select-none'}>
                            @arka-group.io
                        </p>
                    </div>
                    <FieldErrorMessage>{errors.username}</FieldErrorMessage>
                </div>}
                <button type={'button'} onClick={this.toggleEmail} className={'flex items-center justify-center w-full text-sm text-indigo-600 underline cursor-pointer mb-4'}>
                    {useEmail ? t`Get a new encrypted email address` : t`Use your current email instead`}
                </button>
                <div className={'mb-6 w-full'}>
                    <label htmlFor="password" className={'font-semibold text-sm text-slate-900 block mb-1'}>
                        {t`Password`}
                    </label>
                    <input value={fields.password} onChange={this.onChange} type="password" id={'password'} className={'w-full outline-0 border border-slate-400 rounded-lg p-2 px-3 text-slate-600 text-sm focus:border-violet-600 mb-1' + (errors.password ? ' !border-red-600' : '')}/>
                    <FieldErrorMessage>{errors.password}</FieldErrorMessage>
                </div>
                <div className={'mb-10 w-full'}>
                    <label htmlFor="passwordRepeat" className={'font-semibold text-sm text-slate-900 block mb-1'}>
                        {t`Repeat password`}
                    </label>
                    <input value={fields.passwordRepeat} onChange={this.onChange} type="password" id={'passwordRepeat'} className={'w-full outline-0 border border-slate-400 rounded-lg p-2 px-3 text-slate-600 text-sm focus:border-violet-600 mb-1' + (errors.passwordRepeat ? ' !border-red-600' : '')}/>
                    <FieldErrorMessage>{errors.passwordRepeat}</FieldErrorMessage>                </div>
                <button type={'button'} onClick={this.submit} className={'rounded-xl bg-indigo-600 font-medium text-base text-center w-full text-white p-3 hover:bg-indigo-700'}>{t`Create account`}</button>
            </form>
        </>;
    }
}

export function FieldErrorMessage({ children = '' }) {
    return <p className={'text-xs text-red-600 font-semibold'}>{children.length > 0 ? `${children}` : ' '}</p>
}