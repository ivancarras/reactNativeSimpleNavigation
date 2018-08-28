import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen'
  };

  render() {

    return (
      <View style={styles.container}>
        <Button title="Go to Third Screen"
          onPress={() => this.props.navigation.navigate('ThScreen')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});
export default SecondScreen;