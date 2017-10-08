/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { firebaseApp } from '../firebase';

const storage = firebaseApp.storage();
const storageRef = storage.ref();
const pictureRef = storageRef.child('topPictureOrganization.jpg');

export default class MainScreen extends React.Component {
  state = {
    imageUrl: null,
  }
  componentDidMount() {
    this.download();
  }

  async download() {
    pictureRef.getDownloadURL().then((imageUrl) => {
      console.warn('OK');
      this.setState({ imageUrl });
    }).catch((error) => {
      switch (error.code) {
        case 'storage/object_not_found':
          console.warn('storage/object_not_found')
          break;

        case 'storage/unauthorized':
          console.warn('storage/unauthorized');
          break;

        case 'storage/canceled':
          console.warn('storage/canceled');
          break;
        case 'storage/unknown':
          console.warn('storage/unknown');
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.state.imageUrl }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
