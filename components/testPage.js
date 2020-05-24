import React from 'react'

const Hoc = (C) => {

    return (props) => {
        // console.log(props)
        return (
            <div style={{color: "green"}}>
                <C {...props} />
            </div>
        )
        
    }
}


const TestPage = (props) => {
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    )
}

export default Hoc(TestPage);
