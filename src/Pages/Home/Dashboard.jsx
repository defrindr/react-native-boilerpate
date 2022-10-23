import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Components from "@components";
import { THEME } from "@config";
import { LogoutAction } from "@redux/Actions/Auth";
import i18n from "@utils/I18n";

class HomeDasboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this._defaultProps(props);
    }

    _defaultProps(props) {
        return {
            theme_mode: props.theme_mode || THEME.LIGHT,
            auth: props.auth || {},
        };
    }

    componentDidUpdate(prevProps) {
        this.setState(this._defaultProps(this.props));
    }

    _handleLogout = () => {
        this.props.logoutAction();
    }

    render() {
        return (
            <Components.Root>
                <Components.Header
                    title={i18n.t("dasboard.title", { name: this.state.auth.name })}
                    subtitle={i18n.t("dasboard.subtitle")}
                    sfs="sm">
                    <Components.ImageRounded source={{ uri: this.state.auth.photo_url }} />
                </Components.Header>
                <Text onPress={this._handleLogout}>{i18n.t('logout')}</Text>
            </Components.Root>
        );
    }
}


const mapStateToProps = state => ({
    theme_mode: state.ui.THEME_MODE,
    auth: state.auth.USER,
});

const mapDispatchToProps = dispatch => ({
    logoutAction: () => dispatch(LogoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDasboard);