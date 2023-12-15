import { useSelector } from "react-redux";
import { selectPage } from "../features/router/routerSlice";
import Routes, { RouteComponent } from "../constants/Routes.constants";
import {selectLanguage} from "../features/language/languageSlice";

export default function Router() {
    // subscribe to language change
    useSelector(selectLanguage);

    // get page and get page component
    const page = useSelector(selectPage);
    const pageComponent = RouteComponent(Routes[page]);


    return <>
        {pageComponent}
    </>
}