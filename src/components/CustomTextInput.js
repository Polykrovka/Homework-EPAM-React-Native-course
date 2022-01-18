import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function CustomTextInput({label, onChange}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text>{label}</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Text"
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    position: 'relative',
    width: '100%',
    marginBottom: 25,
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -15,
    left: 15,
    padding: 5,
    zIndex: 2,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'flex-end',
    height: 44,
    borderRadius: 4,
    borderColor: '#8F8F8F',
  },
});

export default CustomTextInput;
