import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./containers/News/News";
import AddNewsPage from "./containers/AddNewsPage/AddNewsPage";
import NewsDetails from "./containers/NewsDetails/NewsDetails";

const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={News}/>
            <Route path='/add' component={AddNewsPage}/>
            <Route path='/news/:id' component={NewsDetails}/>
            <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
    </Layout>
);

export default App;