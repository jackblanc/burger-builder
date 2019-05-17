import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <Toolbar
                    opened={this.sideDrawerToggle}
                    isAuth={this.props.isAuthenticated} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    isOpen={this.state.showSideDrawer}
                    isAuth={this.props.isAuthenticated} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >);
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);