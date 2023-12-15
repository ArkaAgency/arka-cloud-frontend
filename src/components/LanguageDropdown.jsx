import { HiOutlineGlobeEuropeAfrica, HiChevronDown } from "react-icons/hi2";
import { BsCheck} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {selectLanguage, setLanguage} from "../features/language/languageSlice";

export default function LanguageDropdown() {
    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);

    return <>
        <button className="group relative text-sm font-semibold text-indigo-500 border-2 border-indigo-500 rounded-full py-2 px-4 flex items-center transition-all duration-200 ease-in-out hover:text-slate-100 hover:bg-indigo-500 hover:drop-shadow-xl">
            <div className={"hidden absolute group-focus-within:block bottom-full right-0 bg-white p-3 rounded-lg mb-2 drop-shadow-xl"}>
                <ul className={"w-full"}>
                    <li className={"w-full mb-2"}>
                        <a href="#!" className={"block w-full p-2 px-6 rounded-lg hover:bg-indigo-100 text-slate-800 text-base font-medium flex items-center" + (language === "english" ? " bg-indigo-100" : "")}onClick={() => {
                            dispatch(setLanguage('english'));
                        }}>
                            English {language === "english" ? <span className={"ml-2"}>
                            <BsCheck size={20} />
                        </span> : ""}
                        </a>
                    </li>
                    <li className={"w-full"}>
                        <a href="#!" className={"block w-full p-2 px-6 rounded-lg hover:bg-indigo-100 text-slate-800 text-base font-medium flex items-center" + (language === "french" ? " bg-indigo-100" : "")} onClick={() => {
                            dispatch(setLanguage('french'));
                        }}>
                            Français {language === "french" ? <span className={"ml-2"}>
                            <BsCheck size={20} />
                        </span> : ""}
                        </a>
                    </li>
                </ul>
            </div>
            <span className="mr-2"><HiOutlineGlobeEuropeAfrica size={20} /></span> <p className="capitalize">{language}</p> <span className="ml-2"><HiChevronDown size={20} /></span>
        </button>
    </>
}