import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  scoreBoard: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  restartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 16,
    color: 'blue',
  },
  text: {
    fontSize: 16,
  },
  textSmall: {
    fontSize: 12,
    marginTop: 16,
    color: 'grey',
  },
  debug: {marginLeft: 'auto', marginRight: 'auto', color: 'grey'},

  modal: {
    flexGrow: 0,
    alignSelf: 'center',
    top: Dimensions.get('screen').height / 2 - 100, //100 statusBar height
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-around',
  },
})
