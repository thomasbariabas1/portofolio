import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import MuiAppBar from '@material-ui/core/AppBar';
import {Link} from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useThemeMui from "@material-ui/core/styles/useTheme";
import Switch from "./inputs/Switch";
import {useTheme} from "../hooks/theme";
import {THEMES} from "../util/Enums";
import {useTranslation} from "../hooks/translation";
import Button from "./buttons/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useLocation} from "react-router-dom";
const ElevationScroll = (props) => {
    const {children} = props;
    const theme = useThemeMui()

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        style: trigger ? theme.appBar.sticky : theme.appBar.static,
        elevation: trigger ? 4 : 0,
    });
}

const AppBar = props => {
    const {theme, changeTheme} = useTheme()
    const {lang, changeLanguage, t} = useTranslation()
    const {pathname} = useLocation()

    const handleChangeTheme = () => {
        if (theme === THEMES.DARK) {
            changeTheme(THEMES.LIGHT)
        } else {
            changeTheme(THEMES.DARK)
        }
    }

    return (
        <Fragment>
            <ElevationScroll {...props}>
                <MuiAppBar position={'sticky'}>
                    <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div>logo</div>
                        <div>
                            <Link to="/">{t('home')}</Link>
                            <Link to="/about">{t('about')}</Link>
                            <Link to="/posts">{t('posts')}</Link>
                            <Link to="/contact">{t('contact')}</Link>
                            <Switch checked={theme === THEMES.DARK}
                                    name={'Theme'}
                                    onChange={handleChangeTheme}/>
                            <ButtonGroup color="primary">
                                <Button onClick={() => {
                                    changeLanguage('gr')
                                }}>gr
                                </Button>
                                <Button onClick={() => {
                                    changeLanguage('en')
                                }}>en
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Toolbar>
                </MuiAppBar>
            </ElevationScroll>
            <Toolbar/>
        </Fragment>
    );
};

AppBar.propTypes = {};

export default AppBar;