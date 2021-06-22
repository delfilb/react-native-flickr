import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { ActivityIndicator, Colors } from 'react-native-paper';

const AlbumList = ({navigation}) => {
  const [state, setState] = useState({photoset: null});
  const {
    loading
  } = styles;

  useEffect(() => {

    componentWillMount()
  }, [])

  const componentWillMount = () => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
      )
      .then((response) =>
        setState({photoset: response.data.photosets.photoset}),
      );
  }

  const renderAlbums = ({item}) => {
    return (
      <AlbumDetail
        navigation={navigation}
        key={item.id}
        title={item.title._content}
        albumId={item.id}
      />
    );
  }

  return (
    !state.photoset ? (
      <View style={loading}>
        <ActivityIndicator animating={true} size={'large'} color={Colors.blue500}/>
      </View>
    ) : (
    <View>
      <FlatList
        data={state.photoset}
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

export default AlbumList;
