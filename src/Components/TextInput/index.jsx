import React from "react";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Theme from "@styles/Theme";
import { responsiveWidth } from "@utils/Size";
import THEME from "@config/Theme";
import Styles from "./Styles";

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);

        // setting props to state
        this.state = {
            themeMode: props.themeMode || THEME.DEFAULT,
            onChangeText: props.onChangeText || null,
            errors: []
        };
    }

    // on theme change
    componentDidUpdate(prevProps) {
        const { themeMode, error, value = "" } = this.props;

        if (prevProps.themeMode !== themeMode) {
            this.setState({ themeMode });
        }

        if (error !== prevProps.error) {
            this._onChangeText(value);
        }
    }

    _onChangeText = (text) => {
        const { onChangeText, errors: errorState } = this.state;
        const {
            validation = null,
            onError = null,
        } = this.props;

        if (onChangeText) onChangeText(text);

        if (validation) {

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
        } else {
            this.setState({ errors: [] });
        }

        if (onError) {
            onError(errorState.length === 0 ? null : errorState[0]);
        }
    }

    render() {
        let themeMode, errors, label, keyboardType, placeholder, value, secureTextEntry, autoComplete;

        ({
            themeMode,
            errors,
        } = this.state);

        ({
            label,
            keyboardType = "default",
            placeholder = "",
            value = "",
            secureTextEntry = false,
            autoComplete = "off",
            width = null,
        } = this.props);

        return (
            <View style={[Styles(themeMode).container(width)]}>
                {
                    label && <Text style={[Styles(themeMode).label]}>
                        {label}
                    </Text>
                }

                <TextInput
                    style={Styles(themeMode).input(errors.length > 0)}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={this._onChangeText}
                    secureTextEntry={secureTextEntry}
                    autoComplete={autoComplete}
                />
                {
                    (errors.length > 0) && <Text style={[Styles(themeMode).error]}>
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

export default connect(mapStateToProps)(CustomTextInput);
