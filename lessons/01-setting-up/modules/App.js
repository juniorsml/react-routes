import React from 'react'
import NavLink from './NavLink'
import {IndexLink} from 'react-router'


export default React.createClass({
  render : function (){
    return (
              <div>
                <h1>Hello, React Router Couse!</h1>
                <ul role="nav">
                  <li><IndexLink to="/" activeStyle={{color:'red'}}>Home</IndexLink></li>
                  <li><NavLink to="/about" >about</NavLink></li>
                  <li><NavLink to="/repos" >repos</NavLink></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
              </div>
            )
  }
})
