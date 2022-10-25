import { Box, Button, Heading, Image, Input, Text, View, VStack } from 'native-base'
import React from 'react'
import Colors from "../color";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';


function RegisterScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.kakao}  >
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
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading marginBottom={5} alignSelf="center"> 회원가입</Heading>
        <VStack space={5} alignSelf="center">
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="사용자 이름"
            bg={Colors.white}
            w="70%"
            pl={2}
            type="text"
            color={Colors.black}
            borderBottomColor={Colors.black}
          />
          {/* EMAIL  */}
          <Input
            InputLeftElement={
              <AntDesign name="mail" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="이메일 주소"
            bg={Colors.white}
            w="70%"
            pl={2}
            type="text"
            color={Colors.black}
            borderBottomColor={Colors.black}
          />
        {/* PASSWORD */}
          <Input
            InputLeftElement={
              <AntDesign name="eye" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="비밀번호"
            bg={Colors.white}
            w="70%"
            pl={2}
            type="password"
            color={Colors.black}
            borderBottomColor={Colors.black}
          />
        </VStack>
        <Button 
          alignSelf="center"
          _pressed={{
            bg:Colors.black,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.black}
          onPress={()=> navigation.navigate("Bottom")}
        >
          등록하기
        </Button>
        <Pressable mt={4} onPress={()=> navigation.navigate("Login")} marginLeft={10}>
          <Text color={Colors.black} alignSelf="center"  marginRight={5}>로그인</Text>
        </Pressable>
      </Box>
    </Box>
  )
}
export default RegisterScreen