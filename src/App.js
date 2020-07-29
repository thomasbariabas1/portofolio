import React from 'react';
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
import {PostTransitionProvider} from "./hooks/postTransition";
import {PostProvider} from "./hooks/posts";
import Post from "./views/Post/Post";
import MobileProvider from "./hooks/mobile";

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <MobileProvider>
                    <Router>
                        <PostTransitionProvider>
                            <Switch>
                                <Route path="/contact">
                                    <MainLayout>
                                        <Contact/>
                                    </MainLayout>
                                </Route>

                                <Route path="/posts">

                                    <MainLayout>
                                        <PostProvider>
                                            <Posts/>
                                        </PostProvider>
                                    </MainLayout>
                                </Route>

                                <Route path="/post/:id">
                                    <MainLayout>
                                        <PostProvider>
                                            <Post/>
                                        </PostProvider>
                                    </MainLayout>
                                </Route>

                                <Route path="/about">
                                    <MainLayout>
                                        <About/>
                                    </MainLayout>
                                </Route>

                                <Route path="/">
                                    <HomeLayout>
                                        <PostProvider>
                                            <Home/>
                                        </PostProvider>
                                    </HomeLayout>
                                </Route>

                            </Switch>
                        </PostTransitionProvider>
                    </Router>
                </MobileProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
}


export default App;
