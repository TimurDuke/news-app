import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={News}/>
                <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </Layout>
    );
};

export default App;