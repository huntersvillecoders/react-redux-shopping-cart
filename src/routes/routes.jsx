import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Welcome } from '../pages/welcome/welcome.component'
import Product from '../pages/products/productsContainer'

export default class RouterConfig extends React.Component {
    render() {
        return (<div className="d-flex">
            <Router>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/product" component={Product} />
                </Switch>
            </Router></div>)
    }

}
