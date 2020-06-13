import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {LanguageProvider} from './hooks/translation'
import {ThemeProvider} from "./hooks/theme";
import Contact from "./views/Contact/Contact";
import Posts from "./views/Posts/Posts";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import MainLayout from "./layouts/MainLayout";
import HomeLayout from "./layouts/HomeLayout";

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <Switch>
                        <Route path="/contact">
                            <MainLayout>
                                <Contact/>
                            </MainLayout>
                        </Route>
                        <Route path="/posts">
                            <MainLayout>
                                <Posts/>
                            </MainLayout>
                        </Route>
                        <Route path="/about">
                            <MainLayout>
                                <About/>
                            </MainLayout>
                        </Route>
                        <Route path="/">
                            <HomeLayout>
                                <Home/>
                            </HomeLayout>
                        </Route>
                    </Switch>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}


export default App;