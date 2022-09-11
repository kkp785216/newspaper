import React from 'react'

export const Aside = ({ children }) => {
    return (
        <aside className="w-1/3">
            <div className="sticky top-6">
                {children}
            </div>
        </aside>
    )
}

export const Main = ({children}) => {
    return (
        <main className="w-2/3">
            <div className="sticky top-6">
                {children}
            </div>
        </main>
    )
}

export const Section = ({ children }) => {
    return (
        <section className="max-w-screen-lg m-auto mt-11 flex space-x-11">
            {children}
        </section>
    )
}