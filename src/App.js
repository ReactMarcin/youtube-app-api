import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import GlobalStyles from './components/Layout/styles/GlobalStyles'
import StartPage from './components/Layout/StartPage'
import './styles.css'

const App = () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route exact path="/">
                    <StartPage />
                </Route>
                <Route exact path="/:activeVideo">
                    <StartPage />
                </Route>
            </Switch>
            <GlobalStyles />
        </>
    </BrowserRouter>
);
export default App