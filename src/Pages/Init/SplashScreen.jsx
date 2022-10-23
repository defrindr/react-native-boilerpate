import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import LoadingIndicator from "@components/LoadingIndicator";
import Config from "@config";
import Theme from "@styles/Theme";
import i18n from "@utils/I18n";



class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = this._defaultProps(props);
    }

    _defaultProps(props) {
        return {
            THEME_MODE: props.THEME_MODE || Config.THEME.LIGHT,
            auth: props.auth || {},
        };
    }

    _checkAuth(auth) {
        // check if user is logged in
        console.log('Is user logged in?', auth.isAuthenticated);
        if (auth.isAuthenticated) {
            // if user is logged in, go to home page
            Actions.replace("app.home.dashboard");
        } else {
            // if user is not logged in, go to login page
            Actions.replace("app.auth.login")
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this._checkAuth(this.state.auth);
        }, 2000);
    }

    componentDidUpdate(prevProps) {
        this._defaultProps(this.props)
        this._checkAuth(this.props.auth);
    }

    render() {
        return (
            <View style={[styles.container, {
                backgroundColor: Theme(this.state.THEME_MODE).COLORS.NEUTRAL.s1,
            }]}>
                <LoadingIndicator THEME_MODE={this.state.THEME_MODE} style={{
                    marginBottom: Theme(this.state.THEME_MODE).SIZE.m,
                }} />

                <Text style={[Theme(this.state.THEME_MODE).TEXT_VARIANT.h3, {
                    color: Theme(this.state.THEME_MODE).COLORS.PRIMARY.s6,
                }]}>
                    {i18n.t("splashScreen.title")}
                </Text>
                <Text style={[Theme(this.state.THEME_MODE).TEXT_VARIANT.small, {
                    color: Theme(this.state.THEME_MODE).COLORS.NEUTRAL.s6,
                }]}>
                    {i18n.t("splashScreen.subtitle")}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = state => ({
    THEME_MODE: state.ui.THEME_MODE,
    auth: state.auth,
});

export default connect(mapStateToProps)(SplashScreen);