import React from "react";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Theme from "@styles/Theme";
import Config from "@config";
import Styles from "./Styles";

class Card extends React.Component {
    constructor(props) {
        super(props);

        // setting props to state
        this.state = {
            p: props.p || "s",
            m: props.m || "s",
            w: props.w || "auto",
            themeMode: props.themeMode || Config.THEME.DEFAULT,
            radius: props.radius || "s",
            style: props.style || null
        };
    }

    componentDidUpdate(pv) {
        if (pv.themeMode !== this.props.themeMode) {
            this.setState({
                themeMode: this.props.themeMode,
            });
        }
    }

    render() {
        const { p, m, w, themeMode, radius, style } = this.state;
        const { shadow = true } = this.props;
        return (
            <>
                <View style={[
                    Styles(themeMode).container(p, m, radius, w),
                    shadow && Styles(themeMode).shadow,
                    style
                ]}>
                    {this.props.children}
                </View>
            </>
        );
    }
}

const mapStateToProps = state => ({
    themeMode: state.ui.THEME_MODE
});

export default connect(mapStateToProps)(Card);