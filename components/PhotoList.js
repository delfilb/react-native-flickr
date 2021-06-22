import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import { ActivityIndicator, Colors } from 'react-native-paper';

const PhotoList = (match) => {
  const [state, setState] = useState({photos: null});
  const {
    loading
  } = styles;

  useEffect(() => {
    componentWillMount()
  }, [])

  const componentWillMount = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${match.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      .then((response) =>
        setState({photos: response.data.photoset.photo}),
      );
  }

  const renderAlbums = ({item}) => {
    return (
      <PhotoDetail
        key={item.title}
        title={item.title}
        imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
      />
    );
  }
  
  return (
    !state.photos ? (
      <View style={loading}>
        <ActivityIndicator animating={true} size={'large'} color={Colors.blue500}/>
      </View>
    ) : (
    <View>
      <FlatList
        data={state.photos}
        renderItem={renderAlbums}
        keyExtractor={(item) => item.id}
      />
    </View>)
  );
}

const styles = {
  loading: {
    marginTop: '10%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export default PhotoList;
