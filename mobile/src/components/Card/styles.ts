import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 5,
  },
  cardFront: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 130,
    maxHeight: 140,
    minWidth: 100,
    maxWidth: 110,
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
  },
  cardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 130,
    maxHeight: 140,
    minWidth: 100,
    maxWidth: 110,
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  textBack: {
    backgroundColor: 'white',
    color: 'white',
    display: 'none',
    backfaceVisibility: 'hidden',
  },
  textFront: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    fontWeight: '900',
  },
})
