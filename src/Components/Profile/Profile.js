import { Box, FormControl, Input, ScrollView, VStack,HStack,Button,Center,Text } from "native-base";
import Colors from "../../color";
import React from "react";
import Buttone from "../Buttone";
import { useNavigation } from '@react-navigation/native'

const Inputs = [
  {
    label: "현재비밀번호",
    type: "password",
  },{
    label: "신규비밀번호",
    type: "password",
  },
  {
    label: "신규비밀번호 확인",
    type: "password",
  },
];



const Profile = () => {
  const navigation = useNavigation();
  return (
    <Box h="full" bg={Colors.white} >
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
            비밀번호변경
          </Text>
        </Center>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={5} mt={5} pb={10} px={5}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                height={10}
                bg={Colors.subkakao}
                borderColor={Colors.kakao}
                py={0}
                type={i.type}
                borderWidth={0.5}
                color={Colors.black}
                fontSize={20}
                _focus={{
                  bg: Colors.subkakao,
                  borderColor: Colors.kakao,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.kakao} color={Colors.black} marginTop={20} onPress={() => navigation.navigate("Settings")}>
            변경 사항 저장 하기
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
