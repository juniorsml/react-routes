import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About.js'
import Repos from './modules/Repos.js'
import Repo from './modules/Repo.js'
import Home from './modules/Home.js'
import {Router , Route, hashHistory , IndexRoute , browserHistory} from 'react-router'



render(
  (<Router history={browserHistory}>
    <Route  path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
    </Route>
   </Router >), document.getElementById('app'))
