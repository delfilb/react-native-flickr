import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
//import Card from './Card';
import CardSection from './CardSection';
import { Button, Card } from 'react-native-paper';

const AlbumDetail = ({navigation, title, albumId}) => {
  const {
    card,
  } = styles;

  return (
    <Card style={card}>
      <Card.Title title={title} />
      <Card.Actions>
        <Button
            style={{flex:1}}
            mode="contained"
            color="rgb(0, 122, 255)"
            onPress={() => navigation.navigate('photoList', {albumId: albumId})}>
            See {title}!
        </Button>
      </Card.Actions> 
    </Card>
  );
};

const styles = {
  card: {
    marginTop: 10
  },
};

export default AlbumDetail;
