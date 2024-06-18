import { StyleSheet } from 'react-native';

export const styled = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#b0b0b0',
    width: 80,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 100,
    height: 80,
  },
  buttonImage: {
    width: '100%',
    height: 80,
    position: 'absolute',
    borderRadius: 10,
    opacity: 0.8,
  },
  icon: {
    width: '50%',
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    resizeMode: 'contain',
  },
  textButton: {
    padding: 2,
    marginBottom: -60,
    fontSize: 20,
    color: 'white',
  },
});
