import React from "react";
import { Appearance, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect, useSelector } from "react-redux";
import {
    Button,
    TextInput,
    Card,
    PasswordInput,
    Spinner,
    Link,
    Root
} from "@components/index";

import Theme from "@styles/Theme";
import { responsiveHeight, responsiveWidth } from "@utils/Size";
import Validation from "@validations/index";

import ACTION_LOGIN from "@redux/Actions/Auth/ActionLogin";
import CONFIG_THEME from "@config/Theme";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "./LoginStyles";
import I18n from "@utils/I18n";
import { Actions } from "react-native-router-flux";

class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        const themeMode = this.props.themeMode || CONFIG_THEME.LIGHT;

        this.LABEL_USERNAME = I18n.t("auth.login.username");
        this.LABEL_PASSWORD = I18n.t("auth.login.password");
        this.GRANT_TYPE = "password";

        this.state = {
            themeMode,
            usernameValue: "",
            usernameValidation: [
                new Validation.Required(),
                new Validation.Max(12),
            ],
            usernameError: "",
            passwordValue: "",
            passwordValidation: [
                new Validation.Required(),
                new Validation.Max(8),
            ],
            passwordError: "",
            hidePassword: true,
            isFetching: false,
            messageFetch: "",
        }
    }

    // on theme change
    componentDidUpdate(prevProps) {
        if (prevProps.themeMode !== this.props.themeMode) {
            const themeMode = this.props.themeMode || CONFIG_THEME.LIGHT;

            this.setState({
                themeMode
            });
        }

        if (prevProps.isFetching !== this.props.isFetching) {
            const { isFetching, messageFetch } = this.props;
            this.setState({
                isFetching,
                messageFetch
            });
        }

    }

    _handleLogin = () => {
        const {
            usernameValidation,
            passwordValidation,
            usernameValue,
            passwordValue
        } = this.state;

        let errors = false;

        // run validation
        if (usernameValidation) {
            for (let i = 0; i < usernameValidation.length; i++) {
                errors = usernameValidation[i].validate(usernameValue);
                if (errors) {
                    this.setState({ usernameError: errors });
                    break;
                }
            }
        }

        if (passwordValidation) {
            for (let i = 0; i < passwordValidation.length; i++) {
                errors = passwordValidation[i].validate(passwordValue);
                if (errors) {
                    this.setState({ passwordError: errors });
                    break;
                }
            }
        }

        if (errors) {
            return
        }

        return this.props.ACTION_LOGIN({
            username: usernameValue,
            password: passwordValue,
            grant_type: this.GRANT_TYPE,
        });
    }

    render() {
        const {
            themeMode,
            usernameValue,
            passwordValue,
            hidePassword,
            usernameError,
            passwordError,
            usernameValidation,
            passwordValidation,
            isFetching,
            messageFetch
        } = this.state;

        const PLACEHOLDER_USERNAME = I18n.t("auth.login.placeholder", { field: this.LABEL_USERNAME });
        const PLACEHOLDER_PASSWORD = I18n.t("auth.login.placeholder", { field: this.LABEL_PASSWORD });

        return (
            <Root style={Styles(themeMode).container}>
                <View style={Styles(themeMode).topBox} />
                <Icon
                    name="user"
                    size={Theme(themeMode).FONT_SIZE.h1}
                    color={Theme(themeMode).COLOR.primary} />

                <Card p="m" m="xl" w={responsiveWidth(90)}>
                    <Text style={[Styles(themeMode).title]}>
                        {I18n.t("auth.login.login").toUpperCase()}
                    </Text>

                    <View style={Styles(themeMode).formContainer}>
                        <TextInput
                            label={this.LABEL_USERNAME}
                            placeholder={PLACEHOLDER_USERNAME}
                            value={usernameValue}
                            onChangeText={(usernameValue) => this.setState({ usernameValue })}
                            validation={usernameValidation}
                            onError={(usernameError) => this.setState({ usernameError })}
                            error={usernameError}
                            style={Styles(themeMode).input}
                        />

                        <PasswordInput
                            label={this.LABEL_PASSWORD}
                            placeholder={PLACEHOLDER_PASSWORD}
                            onToggleHide={() => this.setState({ hidePassword: !hidePassword })}
                            value={passwordValue}
                            hide={hidePassword}
                            onChangeText={passwordValue => this.setState({ passwordValue })}
                            validation={passwordValidation}
                            onError={(passwordError) => this.setState({ passwordError })}
                            error={passwordError}
                            style={Styles(themeMode).input}
                        />
                    </View>

                    <Button
                        label={I18n.t("auth.login.login")}
                        primary
                        radius="xs"
                        bold
                        p="s"
                        icon="arrow-right"
                        onPress={this._handleLogin}
                    />
                    <Text>{I18n.t("auth.login.or")}</Text>
                    <Link
                        icon="user-plus"
                        label={I18n.t("auth.login.register")}
                        onPress={() => Actions.push("app.auth.register")} />
                </Card>
                <Spinner visible={isFetching} message={messageFetch} />
            </Root>
        );
    }
}


const mapStateToProps = state => ({
    themeMode: state.ui.THEME_MODE,
    isFetching: state.ui.IS_FETCHING,
    messageFetch: state.ui.MESSAGE,
});


const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_LOGIN: (data) => dispatch(ACTION_LOGIN(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);