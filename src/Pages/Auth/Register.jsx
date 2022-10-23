import React from "react";
import { Button, Card, Link, PasswordInput, Root, Spinner, TextInput } from "@components/index";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import CONFIG_THEME, { Theme } from "@styles/Theme";
import { ScrollView } from "react-native-gesture-handler";
import { responsiveHeight, responsiveWidth } from "@utils/Size";
import Icon from "react-native-vector-icons/FontAwesome5";
import I18n from "@utils/I18n";
import { Actions } from "react-native-router-flux";
import Validation from "@validations/index";

class Register extends React.Component {
    constructor(props) {
        super(props);

        const themeMode = props.themeMode || CONFIG_THEME.DEFAULT;

        this.state = {
            themeMode,
            isFetching: false,
            messageFetch: "",
            // "username", "password", "phone", "email", "name", "photo_url"
            usernameValue: "",
            usernameValidation: [
                new Validation.Required(),
                new Validation.Min(5),
            ],
            usernameError: "",

            passwordValue: "",
            passwordValidation: [
                new Validation.Required(),
                new Validation.Min(8),
            ],
            passwordError: "",
            hidePassword: true,


            passwordKonfirmasiValue: "",
            passwordKonfirmasiValidation: [
                new Validation.Required(),
            ],
            passwordKonfirmasiError: "",

            phoneValue: "",
            phoneValidation: [
                new Validation.Required(),
                new Validation.Phone()
            ],
            phoneError: "",

            emailValue: "",
            emailValidation: [
                new Validation.Required(),
                new Validation.Email(),
            ],
            emailError: "",

            nameValue: "",
            nameValidation: [
                new Validation.Required(),
                new Validation.Min(3),
            ],
            nameError: "",

            photo_urlValue: "",
            photo_urlValidation: [
                new Validation.Required(),
            ],
            photo_urlError: "",
        };
    }

    // on theme change
    componentDidUpdate(pv) {

        if (pv.themeMode !== this.props.themeMode) {
            const themeMode = this.props.themeMode || CONFIG_THEME.DEFAULT;
            this.setState({
                themeMode
            });
        }

        if (pv.isFetching !== this.props.isFetching) {
            this.setState({
                isFetching: this.props.isFetching,
                messageFetch: this.props.messageFetch
            });
        }

        if (pv.passwordValue !== this.props.passwordValue) {
            this._onPasswordChange(this.props.passwordValue);
        }
    }

    _handleRegister = () => {
    }

    _onPasswordChange = (value) => {
        this.setState({ passwordValue: value });

        // trigger match password validation
        this._onPasswordKonfirmasiChange(this.state.passwordKonfirmasiValue);
    }

    _onPasswordKonfirmasiChange = (value) => {

        // trigger match password validation
        const { passwordKonfirmasiValidation = [] } = this.state;

        if (passwordKonfirmasiValidation.length > 0) {
            passwordKonfirmasiValidation.forEach((validation) => {
                let errors = new Validation.Match({
                    value: this.state.passwordValue,
                    field: I18n.t("auth.register.password")
                })

                if (errors) {
                    this.setState({ passwordKonfirmasiError: errors });
                }
            });
        }
    }

    render() {
        const {
            themeMode,
            isFetching,
            messageFetch,
        } = this.state;

        return (
            <>
                <ScrollView style={{ flex: 1 }}>
                    <Root style={Styles(themeMode).container}>
                        <View style={Styles(themeMode).topBox} />
                        <Icon
                            name="user-plus"
                            size={Theme(themeMode).FONT_SIZE.h1}
                            color={Theme(themeMode).COLOR.primary} />

                        <Card p="m" m="xl" w={responsiveWidth(90)}>
                            <Text style={[Styles(themeMode).title]}>
                                {I18n.t("auth.register.title").toUpperCase()}
                            </Text>
                            <Text style={[Styles(themeMode).subtitle]}>
                                {I18n.t("auth.register.subtitle").toUpperCase()}
                            </Text>

                            <View style={Styles(themeMode).formContainer}>
                                <TextInput
                                    label={I18n.t("auth.register.username")}
                                    value={this.state.usernameValue}
                                    onChangeText={(text) => this.setState({ usernameValue: text })}
                                    validation={this.state.usernameValidation}
                                    onError={(error) => this.setState({ usernameError: error })}
                                    error={this.state.usernameError}
                                    placeholder={
                                        I18n.t("auth.register.placeholder.username")
                                    }
                                    style={Styles(themeMode).input}
                                />
                                <PasswordInput
                                    label={I18n.t("auth.register.password")}
                                    value={this.state.passwordValue}
                                    onChangeText={(text) => this._onPasswordChange(text)}
                                    validation={this.state.passwordValidation}
                                    onError={(error) => this.setState({ passwordError: error })}
                                    error={this.state.passwordError}
                                    placeholder={
                                        I18n.t("auth.register.placeholder.password")
                                    }
                                    hide={this.state.hidePassword}
                                    onToggleHide={() => this.setState({ hidePassword: !this.state.hidePassword })}
                                    style={Styles(themeMode).input}
                                />

                                <PasswordInput
                                    label={I18n.t("auth.register.confirmPassword")}
                                    value={this.state.passwordKonfirmasiValue}
                                    onChangeText={(text) => this.setState({ passwordKonfirmasiValue: text })}
                                    validation={[...this.state.passwordKonfirmasiValidation,
                                    new Validation.Match({
                                        value: this.state.passwordValue,
                                        field: I18n.t("auth.register.password")
                                    })]}
                                    onError={(error) => this.setState({ passwordKonfirmasiError: error })}
                                    error={this.state.passwordKonfirmasiError}
                                    icon={false}
                                    placeholder={
                                        I18n.t("auth.register.placeholder.confirmPassword")
                                    }
                                    style={Styles(themeMode).input}
                                />

                                <TextInput
                                    label={I18n.t("auth.register.name")}
                                    value={this.state.nameValue}
                                    onChangeText={(text) => this.setState({ nameValue: text })}
                                    validation={this.state.nameValidation}
                                    onError={(error) => this.setState({ nameError: error })}
                                    error={this.state.nameError}
                                    placeholder={
                                        I18n.t("auth.register.placeholder.name")
                                    }
                                    style={Styles(themeMode).input}
                                />

                                <View style={Styles(themeMode).col}>
                                    <View style={Styles(themeMode).inputWrap}>
                                        <TextInput
                                            label={I18n.t("auth.register.phone")}
                                            value={this.state.phoneValue}
                                            onChangeText={(text) => this.setState({ phoneValue: text })}
                                            validation={this.state.phoneValidation}
                                            onError={(error) => this.setState({ phoneError: error })}
                                            error={this.state.phoneError}
                                            placeholder={
                                                I18n.t("auth.register.placeholder.phone")
                                            }
                                            keyboardType="phone-pad"
                                            style={Styles(themeMode).input}
                                        />
                                    </View>

                                    <View style={Styles(themeMode).inputWrap}>
                                        <TextInput
                                            label={I18n.t("auth.register.email")}
                                            value={this.state.emailValue}
                                            onChangeText={(text) => this.setState({ emailValue: text })}
                                            validation={this.state.emailValidation}
                                            onError={(error) => this.setState({ emailError: error })}
                                            error={this.state.emailError}
                                            placeholder={
                                                I18n.t("auth.register.placeholder.email")
                                            }
                                            style={Styles(themeMode).input}
                                        />
                                    </View>
                                </View>

                                {/* <Documen */}

                            </View>

                            <Button
                                label={I18n.t("auth.register.register")}
                                primary
                                radius="xs"
                                bold
                                p="s"
                                icon="arrow-right"
                                onPress={this._handleLogin}
                                containerStyle={Styles(themeMode).padTop}
                            />
                            <Text>{I18n.t("auth.register.or")}</Text>
                            <Link
                                icon="key"
                                label={I18n.t("auth.register.login")}
                                onPress={() => Actions.push("app.auth.login")} />
                        </Card>
                        <Spinner visible={isFetching} message={messageFetch} />
                    </Root>
                </ScrollView>
            </>
        );
    }
}

const Styles = (themeMode) => StyleSheet.create({
    container: {
        minHeight: responsiveHeight(100),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme(themeMode).COLOR.background,
    },
    input: ({
        color: Theme(themeMode).COLOR.foreground,
        borderColor: Theme(themeMode).COLORS.NEUTRAL.s2,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderStyle: "solid",
        width: '100%',
    }),
    inputWrap: {
        flex: 1,
    },
    col: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    padTop: {
        marginTop: Theme(themeMode).SIZE.l,
    },
    title: {
        color: Theme(themeMode).COLOR.foreground,
        fontSize: Theme(themeMode).SIZE.m,
        fontWeight: 'bold',
    },
    subtitle: {
        color: Theme(themeMode).COLOR.foreground,
        fontSize: Theme(themeMode).SIZE.s,
        fontWeight: 'bold',
    },
    formContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = state => ({
    themeMode: state.ui.THEME_MODE,
    isFetching: state.ui.IS_FETCHING,
    messageFetch: state.ui.MESSAGE,
});

export default connect(mapStateToProps)(Register);