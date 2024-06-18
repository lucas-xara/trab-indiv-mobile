import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#000',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
  },

  textButton: {
    fontSize: 35,
    color: "red",
    fontWeight: '900'
  },

});