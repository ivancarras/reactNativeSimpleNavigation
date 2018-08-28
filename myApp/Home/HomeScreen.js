
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {

    return (
      <View style={styles.container}>
        <Button title="Go to Second Screen"
          onPress={() => this.props.navigation.navigate('SScreen')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});
export default HomeScreen;


