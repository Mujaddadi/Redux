import React from 'react'
import { Link }from 'react-router'


class Main extends React.Component
{
    render(){

        //React.cloneElement will pass down props to it's child component
        return (
        <div>
            <h1>
            <Link to="/">Reduxtagram</Link>
            </h1>
            {React.cloneElement(this.props.children, this.props)}
        </div>
        )
    }
}

export default Main;