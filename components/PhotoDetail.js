import React from 'react';
import {Text, View, Linking} from 'react-native';
import CardSection from './CardSection';
import { Button, Card } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const PhotoDetail = ({title, imageUrl}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    card,
  } = styles;

  return (
    <Card style={card}>      
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Avatar.Image
            style={thumbnailStyle}
            source={{uri: imageUrl}}
            size={50}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>
      
      <Card.Cover source={{uri: imageUrl}}/>
      <Card.Actions>
        <Button
            style={{flex:1}}
            mode="contained"
            color="rgb(0, 122, 255)"
            onPress={() => Linking.openURL(imageUrl)}>
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
  buttonContentStyle: {
    flex: 1
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default PhotoDetail;
