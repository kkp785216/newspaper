import React from 'react'

export const Aside = ({ children }) => {
    return (
        <aside className="w-full md:w-1/3">
            <div className="sticky top-6">
                {children}
            </div>
        </aside>
    )
}

export const Main = ({children}) => {
    return (
        <main className="w-full md:w-2/3">
            <div className="sticky top-6">
                {children}
            </div>
        </main>
    )
}

export const Section = ({ children }) => {
    return (
        <section className="md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-5 lg:px-[22px] lg1140:px-0 m-auto mt-8 md:mt-11 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-[28px] lg:space-x-11">
            {children}
        </section>
    )
}