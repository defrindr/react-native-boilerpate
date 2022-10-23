import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Theme from "@styles/Theme";
import Styles from "./Styles";

/**
 * @class Root
 * @extends React.Component
 * @description Root component
 * @param {Object} props
 * @param {Object} props.THEME_MODE
 * @param {Object} props.style
 * @param {Object} props.children
 * @returns {React.Component}
 * @example
 * <Root>
 *    <Text>Root</Text>
 * </Root>
 * @example
 * <Root style={{ backgroundColor: "red" }}>
 *   <Text>Root</Text>
 * </Root>
 */
class Header extends React.Component {
    constructor(props) {
        super(props);

        // setting default props
        this.state = {
            themeMode: this.props.themeMode || THEME.LIGHT,
            title: this.props.title || "Header",
            subtitle: this.props.subtitle || "Subtitle",
            fs: this.props.fs || "h4",
            sfs: this.props.sfs || "m",
            p: this.props.p || "s",
            m: this.props.m || "none",
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
        const { themeMode, title, subtitle, fs, sfs, p, m } = this.state;
        const { style } = this.props;

        return (
            <>
                <View style={[
                    Styles(themeMode).container(p, m),
                    style,
                ]}>
                    <View style={[styles.titleContainer]}>
                        <Text style={[Styles(themeMode).text(fs)]}>
                            {this.state.title}
                        </Text>
                        <Text style={[
                            Styles(themeMode).text(sfs),
                            {
                                color: Theme(themeMode).COLORS.NEUTRAL.s3,
                            }
                        ]}>
                            {this.state.subtitle}
                        </Text>
                    </View>
                    {this.props.children}
                </View>
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    themeMode: state.ui.THEME_MODE,
})

export default connect(mapStateToProps)(Header);

