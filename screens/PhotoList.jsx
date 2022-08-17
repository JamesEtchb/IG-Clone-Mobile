import { ScrollView } from 'react-native'
import PhotoCard from '../components/PhotoCard'
import { photoListStyles } from '../assets/styles'

const bsPhotos = [
  { id: 1, description: 'Selfie with Mom' },
  { id: 2, description: 'Photo of Breakfast' },
  { id: 3, description: 'Airplane wing in sky' },
  { id: 4, description: 'My nails painted' },
  { id: 5, description: 'Abandoned door' },
  { id: 6, description: 'French bulldog puppy' },
  { id: 7, description: 'Windwood wall graffiti' },
  { id: 8, description: 'Black and white skyline' },
  { id: 9, description: 'My legs at beach' },
  { id: 10, description: 'My legs at pool' },
  { id: 11, description: 'Lattee art with biscuit' },
]

function PhotoList() {
  return (
    <ScrollView style={photoListStyles.photoList}>
      {bsPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </ScrollView>
  )
}

export default PhotoList
