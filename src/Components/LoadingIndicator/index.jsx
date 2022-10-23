import React from "react";
import { ActivityIndicator, View } from "react-native";
import CONFIG_THEME from "@config/Theme";
import Theme from "@styles/Theme";

class LoadingIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeMode: props.theme || CONFIG_THEME.DEFAULT,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.theme !== this.props.theme) {
            this.setState({
                themeMode: this.props.theme || CONFIG_THEME.DEFAULT,
            });
        }
    }

    render() {
        const { themeMode } = this.state;
        return (
            <View style={this.props.style || {}}>
                <ActivityIndicator
                    size={Theme(themeMode).SIZE.l}
                    color={Theme(themeMode).COLORS.PRIMARY.s4} />
            </View>
        );
    }
}

export default LoadingIndicator;