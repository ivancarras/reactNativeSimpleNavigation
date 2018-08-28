import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ThirdScreen extends React.Component {
  static navigationOptions = {
    title: 'Third Screen'
  };

  render() {

    return (
      <View style={styles.container}>
    
        <Button title="Go to Home Screen"
          onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
});
export default ThirdScreen;