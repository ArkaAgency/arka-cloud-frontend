import Home from "../views/Home";
import NotFoundView from "../views/errors/NotFoundView";

const Routes = {
    home: 'home',
    notfound: 'notfound'
};

export default Routes;

export const RouteComponent = (route) => {
    return {
        [Routes.home]: <Home />,
        [Routes.notfound]: <NotFoundView />
    }[route];
}
