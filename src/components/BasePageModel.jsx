import Header from "./Header";
import Footer from "./Footer";

export default function BasePageModel({ children }) {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}