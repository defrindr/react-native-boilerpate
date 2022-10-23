import React from "react";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import Theme from "@styles/Theme";
import CONFIG_THEME from "@config/Theme";
import Styles from "./Styles";

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);

        // setting props to state
        this.state = {
            themeMode: props.themeMode || CONFIG_THEME.DEFAULT,
            onChangeText: props.onChangeText || null,
            errors: props.errors || []
        };
    }

    // on theme change
    componentDidUpdate(pv) {
        const { THEME_MODE, error, value } = this.props;
        if (error !== pv.error) this._onChangeText(value || "");

        if (pv.THEME_MODE !== THEME_MODE) {
            this.setState({
                data: {
                    THEME_MODE: THEME_MODE,
                }
            });
        }
    }

    _onChangeText = (text) => {
        const { onChangeText, errors: errorState } = this.state;

        if (onChangeText) onChangeText(text);

        if (this.props.validation) {
            const { validation } = this.props;

            // if validate is array
            if (Array.isArray(validation)) {
                let errors = [];

                validation.forEach((classValidation) => {
                    let error = classValidation.validate(text);
                    if (error) {
                        errors.push(error);
                    }
                });

                this.setState({ errors });
            } else {
                let error = validation.validate(text);
                if (error) {
                    this.setState({ errors });
                } else {
                    this.setState({ errors: [] });
                }
            }
        }

        if (this.props.onError) {
            const { onError } = this.props;
            onError(errorState.length === 0 ? null : errorState[0]);
        }
    }

    render() {
        let themeMode, errors, keyboardType, placeholder, value, autoComplete, icon, iconColor, onToggleHide, hide, size, label, iconName;

        ({
            themeMode,
            errors
        } = this.state);

        ({
            keyboardType = "default",
            placeholder = "",
            value = "",
            autoComplete = "off",
            iconColor = Theme(themeMode).COLOR.primary,
            onToggleHide = null,
            hide = true,
            icon = true,
            size = "m",
            label = "",
        } = this.props);

        iconName = hide ? "eye-slash" : "eye";

        return (
            <View style={[Styles(themeMode).container]}>
                {
                    label && <Text style={[Styles(themeMode).label]}>
                        {label}
                    </Text>
                }

                <View style={[Styles(themeMode).inputContainer(errors.length > 0)]}>
                    <TextInput
                        style={[Styles(themeMode).input]}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={this._onChangeText}
                        secureTextEntry={hide}
                        autoComplete={autoComplete}
                    />
                    {icon && <Icon name={iconName}
                        size={Theme(themeMode).FONT_SIZE[size]}
                        color={iconColor}
                        onPress={onToggleHide}
                        style={[Styles(themeMode).icon]} />}
                </View>
                {
                    errors.length > 0 && <Text style={Styles(themeMode).error}>
                        {errors[0]}
                    </Text>
                }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    themeMode: state.ui.THEME_MODE
});

export default connect(mapStateToProps)(PasswordInput);
