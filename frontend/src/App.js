import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";
import AddNewsPage from "./containers/AddNewsPage/AddNewsPage";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={News}/>
                <Route path='/add' component={AddNewsPage}/>
                <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </Layout>
    );
};

export default App;