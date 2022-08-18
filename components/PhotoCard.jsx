import { Avatar, Icon } from 'react-native-elements'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import { photoCardStyles } from '../assets/styles'
import { useState } from 'react'
import { color } from 'react-native-elements/dist/helpers'

function PhotoCard({ photo }) {
  const BASE_URL = 'https://source.unsplash.com/random?sig='

  const [favorite, setFavorite] = useState('black')

  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          <Avatar
            rounded
            source={{
              uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg`,
            }}
            size="small"
          />
          <View style={photoCardStyles.cardHeadertext}>
            <Text>Header Text</Text>
            <Text style={photoCardStyles.cardLocation}>Location</Text>
          </View>
        </View>
        <Icon name="more-vert"/>
      </View>

      <Image
        source={{ uri: BASE_URL + photo.id }}
        style={photoCardStyles.cardImage}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={photoCardStyles.footer}>
        <Text style={photoCardStyles.cardText}>
          The idea with react Native Elements is more about component structure
          than actual design
        </Text>
        <Icon name="favorite" color={favorite} onPress={() => setFavorite(favorite ==='black' ? 'red': 'black')} />
      </View>
    </>
  )
}

export default PhotoCard
