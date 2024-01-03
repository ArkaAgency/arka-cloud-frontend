import {Header} from '@/src/features/layout/Header'
import {Footer} from '@/src/features/layout/Footer'
import React from "react";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}