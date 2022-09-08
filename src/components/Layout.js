import React from 'react'

export const Aside = ({ children }) => {
    return (
        <aside class="w-1/3">
            <div class="sticky top-6">
                {children}
            </div>
        </aside>
    )
}

export const Main = ({children}) => {
    return (
        <main class="w-2/3">
            <div class="sticky top-6">
                {children}
            </div>
        </main>
    )
}

export const Section = ({ children }) => {
    return (
        <section class="max-w-screen-lg m-auto mt-11 flex space-x-11">
            {children}
        </section>
    )
}