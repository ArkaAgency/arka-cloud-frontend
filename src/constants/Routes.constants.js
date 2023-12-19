import Home from "../views/Home";
import NotFoundView from "../views/errors/NotFoundView";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

const Routes = {
    home: 'home',
    signin: 'signin',
    signup: 'signup',
    notfound: 'notfound'
};

export default Routes;

export const RouteComponent = (route) => {
    return {
        [Routes.home]: <Home />,
        [Routes.signin]: <SignIn />,
        [Routes.signup]: <SignUp />,
        [Routes.notfound]: <NotFoundView />
    }[route];
}
