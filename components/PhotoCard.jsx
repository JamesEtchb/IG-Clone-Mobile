import { Avatar, Icon } from 'react-native-elements'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import { photoCardStyles } from '../assets/styles'


function PhotoCard({ photo }) {
  const BASE_URL = 'https://source.unsplash.com/random?sig='

  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          <Avatar rounded source={{ uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg` }} size='small' />
          <View style={photoCardStyles.cardHeadertext}>
            <Text>Header Text</Text>
            <Text style={photoCardStyles.cardLocation}>Location</Text>
          </View>
        </View>
        <Icon name='code' />
      </View>

      <Image source={{ uri: BASE_URL + photo.id }} style={photoCardStyles.cardImage} PlaceholderContent={<ActivityIndicator />} />
      <Text style={photoCardStyles.cardText}>The idea with react Native Elements is more about component structure than actual design</Text>
    </>
  )
}

export default PhotoCard
