import Home from "../views/Home";
import NotFoundView from "../views/errors/NotFoundView";
import SignIn from "../views/SignIn";

const Routes = {
    home: 'home',
    signin: 'signin',
    notfound: 'notfound'
};

export default Routes;

export const RouteComponent = (route) => {
    return {
        [Routes.home]: <Home />,
        [Routes.signin]: <SignIn />,
        [Routes.notfound]: <NotFoundView />
    }[route];
}
