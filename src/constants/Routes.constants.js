import Home from "../views/Home";

const Routes = {
    Home: 'Home'
};

export default Routes;

export const RouteComponent = (route) => {
    return {
        [Routes.Home]: <Home />
    }[route];
}
