import Home from "../views/Home";

const Routes = {
    home: 'home'
};

export default Routes;

export const RouteComponent = (route) => {
    return {
        [Routes.home]: <Home />
    }[route];
}
