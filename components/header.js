var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var HeaderView = React.createClass({
  render: function() {
    return (
      <View style={styles.header}>
        <Image style={styles.logo} source={require('image!profile')}/>
        <Text style={styles.title}>Philos, one week one project!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 40,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
  },
  logo: {
    height: 120,
    width: 150
  },
});

module.exports = HeaderView;