import {
  FormControl,
  ScrollView,
  Box,
  HStack,
  Input,
  Text,
  Center,
  Button,
  Pressable,
  VStack,
  Container,
  
} from "native-base";
import React, { useState, userEffect, useEffect } from "react";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import Buttone from "../Components/Buttone";
import CurryImagePicker from "./CurryImagePicker"

function ProfileScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);


  // useEffect(async () => {
  //   if (Platform.OS !== "web") {
  //     const { status } =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("Permission denied!");
  //     }
  //   }
  // }, []);

  
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HStack
        space={2}
        w="full"
        px={5}
        bg={Colors.kakao}
        py={1}
        alignItems="center"
        safeAreaTop
      >
        <Button
          _pressed={{
            bg: Colors.black,
          }}
          rounded={50}
          bg={Colors.black}
          onPress={() => navigation.navigate("Settings")}
          _pressed={{
            bg: Colors.pressbutton,
          }}
        >
          이전
        </Button>
        <Center w={250} py={3}>
          <Text color={Colors.black} fontSize={20} bold>
            일반정보변경
          </Text>
        </Center>
      </HStack>
      <Box h="full" bg={Colors.white} px={8}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={1} mt={5} pb={10}>
            <CurryImagePicker />
            <Text>전화번호</Text>
            <Input  />
            <Text>상호</Text>
            <Input  />
            <Text >주소</Text>
            <Input marginBottom={10} />

            <Buttone bg={Colors.kakao} color={Colors.black} _pressed={{ bg:Colors.white}} onPress={() => navigation.navigate("Settings") }
            >
              저장하기
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ProfileScreen;  
