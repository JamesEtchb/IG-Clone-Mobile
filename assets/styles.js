import { StyleSheet, StatusBar, Platform } from 'react-native'

export const loginStyles = StyleSheet.create({
  appBar: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  appBarTitle: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    paddingVertical: 18,
  },
  button: {
    fontSize: 22,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 40,
    height: '100%',
    backgroundColor: 'white'
  }
})

export const photoCardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  cardHeader: {
    marginLeft: 1,
    flexDirection: 'row',
  },
  cardHeadertext: {
    marginLeft: 15,
  },
  cardLocation: {
    color: 'grey',
    fontSize: 12,
  },
  cardText: {
    margin: 20,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    flex: 1,
  }
})

export const photoListStyles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: 'white',
  },
})
