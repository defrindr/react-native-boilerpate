import Theme from '@styles/Theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import Styles from './Styles';

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themeMode: props.themeMode,
      onPress: props.onPress,
      disabled: props.disabled,
    };
  }

  render() {
    const { themeMode, onPress, disabled } = this.state;

    const {
      icon = null,
      label = null,
      labelStyle = {},
      style = {},
      size = "m",
    } = this.props;

    return (
      <>
        <TouchableOpacity
          onPress={onPress}
          style={[Styles(themeMode).link, style]}
          disabled={disabled}>
          {
            icon &&
            <Icon name={icon} size={Theme(themeMode).FONT_SIZE[size]} color={Theme(themeMode).COLOR.primary} />
          }
          {
            label &&
            <Text style={[Styles(themeMode).label(size), labelStyle]}>
              {label}
            </Text>
          }
        </TouchableOpacity>
      </>
    );
  }
}

const mapStateToProps = state => ({
  themeMode: state.themeMode,
});

export default connect(mapStateToProps)(Link);
