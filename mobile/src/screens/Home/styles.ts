import {StyleSheet} from 'react-native'

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
})
