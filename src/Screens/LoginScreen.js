import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  View,
  VStack,
  Pressable,
  Flex,
  Checkbox,
  Spacer,
} from "native-base";
import React from "react";
import Colors from "../color";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert } from "react-native";

function LoginScreen({ navigation }) {
  const [textInput1, setTextInput1] = React.useState("");
  const [textInput2, setTextInput2] = React.useState("");

  const logIn = () => {
    if (textInput1 == "abc@naver.com" && textInput2 == "123123") {
      navigation.navigate("Bottom");
    } else {
      Alert.alert("로그인 실패", "이메일과 비밀번호를 확인해주세요", [
        {
          text: "확인",
          onPress: () => console.log("로그인 실패 안내창 닫기"),
          style: "cancel",
        },
      ]);
    }
  };

  return (
    <Box flex={1} bg={Colors.kakao}>
      {/* <Image flex={1}
      resizeMode="cover"
      size="lg"
      alt="Log"
      w="full"
      source={require("../../assets/jumoonjjang2.png")}/> */}
      <Box
        w="full"
        h="full"
        position="absolute"
        top="4"
        px="4"
        justifyContent="center"
      >
        <Heading marginBottom={3} marginLeft={60}>
          로그인
        </Heading>
        <VStack space={3} alignItems="center">
          {/* email  */}
          <Input
            InputLeftElement={
              <AntDesign
                name="mail"
                size={20}
                color={Colors.black}
                marginRight={30}
              />
            }
            variant="underlined"
            placeholder="이메일주소"
            w="70%"
            pl={2}
            color={Colors.black}
            bg={Colors.white}
            borderBottomColor={Colors.black}
            value={textInput1}
            onChangeText={(text) => setTextInput1(text)}
          />
          {/* password */}
          <Input
            InputLeftElement={
              <AntDesign name="eye" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="비밀번호"
            w="70%"
            pl={2}
            type="password"
            color={Colors.black}
            bg={Colors.white}
            borderBottomColor={Colors.black}
            value={textInput2}
            onChangeText={(text) => setTextInput2(text)}
          />
        </VStack>
        <Box >
          <Flex direction="row" mr={0} px={20} marginTop={2} marginTop={5} marginLeft={0}>
            <Checkbox
              value="test"
              color={Colors.black}
              accessibilityLabel="This is a dummy checkbox"
            />

            <Text>자동로그인</Text>
            <Spacer />
            <Pressable>
              <Text>비밀번호찾기</Text>
            </Pressable>
          </Flex>
        </Box>
        <Box marginLeft={100}>
        <Button
          _pressed={{
            bg: Colors.black,
          }}
          my={30}
          w="60%"
          rounded={50}
          bg={Colors.black}
          onPress={() => logIn()}
          marginBottom={3}
        >
          로그인
        </Button>
        </Box>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Box
            height={190}
            justifyContent="center"
            alignItems="center"
            bg={Colors.white}
            rounded={50}
          >
            <Text color={Colors.black}>주문짱 사장님 입점 신청하기</Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
}
export default LoginScreen;
