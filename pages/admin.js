import React from 'react'

const admin = ({ logedIn }) => {
    return (
        <div>
            {!logedIn &&
                <div>User is not loged in</div>}

            {logedIn &&
                <div>
                    
                </div>}
        </div>
    )
}

export async function getServerSideProps(context) {
    const logedIn = false;
    return {
        props: { logedIn }, // will be passed to the page component as props
    }
}

export default admin