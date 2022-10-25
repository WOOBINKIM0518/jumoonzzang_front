import React, { useState, useEffect } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

const CurryImagePicker = ({ image, onImagePicked }) => {
  const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
      if (image) {
        console.log("useEffect: " + image);
        setSelectedImage({ uri: image });
      }
    }, [image]);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });
    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={{ uri:selectedImage}} style={styles.imageContainer} />
      </View>
      <View styels={styles.button}>
        <Button title="사진업로드" onPress={PickImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 0.5,
    borderColor: "grey",
    backgroundColor: "#eee",
    width: "100%",
    height: 150,
    width: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  button: {
    margin: 8,
  },
  previewImage: {
    width: "100%",
    height: "100%",
    borderWidth:1,
  },
});

export default CurryImagePicker;
