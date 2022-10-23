import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { THEME } from "@config";
import Styles from "./Styles";

class ImageRounded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeMode: this.props.themeMode,
            r: this.props.r || 45,
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
        const { themeMode, r } = this.state;
        return (
            <TouchableOpacity
                onPress={this.props.onPress || null}
                style={[
                    Styles(themeMode).profileImgContainer(r),
                    this.props.style || {},
                ]}>
                <Image
                    style={[
                        Styles(themeMode).profileImg(r),
                        this.props.imgStyle || {}
                    ]}
                    source={this.props.source || null}
                />
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = state => ({
    themeMode: state.iu.THEME_MODE,
});

export default connect(mapStateToProps)(ImageRounded);