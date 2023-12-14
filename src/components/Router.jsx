import { useSelector } from "react-redux";
import { selectPage } from "../features/router/routerSlice";
import Routes, { RouteComponent } from "../constants/Routes.constants";

export default function Router() {
    const page = useSelector(selectPage);
    const pageComponent = RouteComponent(Routes[page]);
    return <>
        {pageComponent}
    </>
}