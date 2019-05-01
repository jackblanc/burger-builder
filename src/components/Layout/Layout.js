import React, { Component } from 'react';

import Aux from '../../hoc/Wrapper';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenedHandler = () => {
        this.setState({ showSideDrawer: true })
    }

    sideDrawerToggle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar opened={this.sideDrawerToggle} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    isOpen={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >);
    }
}

export default Layout;