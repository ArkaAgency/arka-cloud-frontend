import Header from "../../src/features/layout/Header";
import Footer from "../../src/features/layout/Footer";

export default function BasePageModel({ children }) {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}