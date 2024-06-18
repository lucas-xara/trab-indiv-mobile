import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  },

  button: {
    backgroundColor: '#b0b0b0',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 100,
    height: 50,
  },

  textButton: {
    padding: 2,
    marginBottom: 4,
    fontSize: 25,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

});