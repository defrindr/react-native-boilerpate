import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { THEME } from "@config";
import Styles from "./Styles";
import { ScrollView } from "react-native-gesture-handler";

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeMode: props.themeMode || THEME.LIGHT,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.themeMode !== this.props.themeMode) {
            this.setState({
                themeMode: this.props.themeMode,
            });
        }
    }

    render() {
        const { themeMode } = this.state;
        const {
            children = null,
            style = null,
        } = this.props;

        return (
            <View
                style={[Styles(themeMode).container, style]}>
                {children}
            </View>
        );
    }
}


const mapStateToProps = state => ({
    themeMode: state.ui.THEME_MODE,
});

const mapDispatchToProps = dispatch => ({
    logoutAction: () => dispatch(LogoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);