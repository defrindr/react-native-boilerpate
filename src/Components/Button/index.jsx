import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from "react-redux";
import Theme from "@styles/Theme";
import CONFIG_THEME from "@config/Theme";
import Styles from "./Styles";

class CustomButton extends React.Component {
    constructor(props) {
        super(props);

        // setting props to state
        this.state = {
            themeMode: props.themeMode || CONFIG_THEME.DEFAULT,
            onPress: props.onPress || null,
            label: props.label || "",
            fontSize: props.fontSize || "m",
            p: props.p || "xs",
            m: props.m || "s",
            w: props.w || "auto",
            bold: props.bold || false,
            radius: props.radius || null,
            elevation: props.elevation || 0,
            icon: props.icon || null,
            disabled: props.disabled || false,
            labelStyle: props.labelStyle || null,
            containerStyle: props.containerStyle || null,
            iconColor: props.iconColor || null,
            iconSize: props.iconSize || null,

        };

        this.type = props.type || "NEUTRAL";
        this.textLevel = props.textLevel || "s1";


        if (props.primary) {
            this.type = "PRIMARY";
            this.textLevel = "s1";
        } else if (props.secondary) {
            this.type = "SECONDARY";
            this.textLevel = "s1";
        } else if (props.success) {
            this.type = "SUCCESS";
            this.textLevel = "s1";
        } else if (props.danger) {
            this.type = "DANGER";
            this.textLevel = "s1";
        } else if (props.warning) {
            this.type = "WARNING";
            this.textLevel = "s5";
        } else if (props.info) {
            this.type = "INFO";
            this.textLevel = "s1";
        } else if (props.light) {
            this.type = "LIGHT";
            this.textLevel = "s1";
        } else if (props.dark) {
            this.type = "DARK";
            this.textLevel = "s1";
        }

    }

    render() {
        const {
            themeMode,
            onPress,
            label,
            fontSize,
            p,
            m,
            w,
            bold,
            radius,
            elevation,
            icon,
            disabled,
            labelStyle,
            containerStyle,
            iconColor,
            iconSize,
        } = this.state;
        const { type, textLevel } = this;
        const { COLORS, FONT_SIZE } = Theme(themeMode);

        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                style={[
                    Styles(themeMode).container(p, m, w, radius, elevation, type),
                    containerStyle
                ]} onPress={onPress}>
                {
                    icon && (
                        <View style={Styles(themeMode).iconContainer}>
                            <Icon
                                name={icon}
                                size={iconSize ?? FONT_SIZE[fontSize]}
                                color={iconColor ?? COLORS.NEUTRAL[textLevel]} />
                        </View>
                    )
                }
                <Text
                    style={[
                        Styles(themeMode).label(textLevel, bold, fontSize),
                        labelStyle
                    ]}>
                    {this.state.label}
                </Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = state => ({
    themeMode: state.ui.THEME_MODE
});

export default connect(mapStateToProps)(CustomButton);