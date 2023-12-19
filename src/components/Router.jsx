import { useSelector } from "react-redux";
import {selectPage, selectRoute} from "../features/router/routerSlice";
import Routes, { RouteComponent } from "../constants/Routes.constants";
import {selectLanguage} from "../features/language/languageSlice";

export default function Router() {
    // subscribe to language change
    useSelector(selectLanguage);

    // get page and get page component
    const route = useSelector(selectRoute);
    const pageComponent = RouteComponent(route);


    return <>
        {pageComponent}
    </>
}