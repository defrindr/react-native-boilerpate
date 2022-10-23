import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import CONFIG_THEME from "@config/Theme";
import Theme from "@styles/Theme";
import LoadingIndicator from "@components/LoadingIndicator";
import I18n from '@utils/I18n';
import Styles from "./Styles";

class LoadingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible || false,
            themeMode: props.themeMode || CONFIG_THEME.LIGHT,
        };
    }

    componentDidUpdate(pv) {
        if (pv.visible !== this.props.visible) {
            this.setState({
                visible: this.props.visible || false
            });
        }

        if (pv.themeMode !== this.props.themeMode) {
            this.setState({
                themeMode: this.props.themeMode || CONFIG_THEME.LIGHT
            });
        }
    }



    render() {
        const { visible, themeMode } = this.state;

        return (
            <>
                <Modal visible={visible} transparent={true}>
                    <View style={Styles(themeMode).container}>
                        <LoadingIndicator theme={themeMode} />
                        <Text style={Styles(themeMode).text}>
                            {this.props.text || I18n.t("ui.loading")}
                        </Text>
                    </View>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    themeMode: state.ui.themeMode,
})

export default connect(mapStateToProps)(LoadingComponent);