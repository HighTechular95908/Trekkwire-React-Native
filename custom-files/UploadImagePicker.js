import React, { useState } from 'react';
import { View, Image, Button, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const SERVER_URL = 'http://localhost:3500';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

export const component = () => {
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    console.log('------>choosing');
    launchImageLibrary({ noData: true }, response => {
      // console.log(response);
      if (response) {
        console.log('------>response', response);
        setPhoto(response.assets[0]);
      }
      console.log('------>response no');
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload/test`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo != null ? (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      ) : null}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};
