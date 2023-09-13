import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World !
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
