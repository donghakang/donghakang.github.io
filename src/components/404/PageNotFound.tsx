import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {

    console.log('page not found')
    return (
        <div>
            Error View.. 
            <Link to='/'>Go to main page</Link>
        </div>
    )
}

export default PageNotFound
