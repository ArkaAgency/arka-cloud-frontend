import Home from "../views/Home";
import NotFoundView from "../views/errors/NotFoundView";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Mail from "../views/Mail";

const Routes = {
    home: 'home',
    signin: 'signin',
    signup: 'signup',
    mail: 'mail',
    notfound: 'notfound'
};

export default Routes;

export const RouteComponent = (route) => {
    return {
        [Routes.home]: <Home />,
        [Routes.signin]: <SignIn />,
        [Routes.signup]: <SignUp />,
        [Routes.mail]: <Mail />,
        [Routes.notfound]: <NotFoundView />
    }[route.page];
}
