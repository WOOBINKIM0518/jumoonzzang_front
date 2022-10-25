import {
  Box,
  Button,
  HStack,
  Pressable,
  ScrollView,
  Text,
  Center,
} from "native-base";
import React from "react";
import Colors from "../../color";
import { useNavigation } from '@react-navigation/native'
import { Alert } from "react-native";

const createTwoButtonAlert = () =>
Alert.alert(
  "로그아웃",
  "로그아웃 하시겠습니까?",
  [
    {
      text: "취소",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "로그아웃", onPress: () => console.log("로그아웃이 완료되었습니다.") }
  ]
);

const Orders = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} bg={Colors.subkakao}>
      <HStack
        space={2}
        w="full"
        px={20}
        bg={Colors.kakao}
        py={1}
        alignItems="center"
        safeAreaTop
      >
        <Center w={250} py={3}>
          <Text color={Colors.black} fontSize={20} bold>
            설정
          </Text>
        </Center>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable  onPress={createTwoButtonAlert} >
          <HStack
            space={4}
            alignItems="center"
            bg={Colors.white}
            borderColor={Colors.black}
            borderWidth={0.5}
            py={4}
            px={7}
          >
            <Text fontSize={20} color={Colors.black} bold isTruncated>
              로그아웃 [계정명]
            </Text>
          </HStack>
        </Pressable>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.white}
            borderColor={Colors.black}
            borderWidth={0.5}
            py={4}
            px={7}
          >
            <Text fontSize={20} color={Colors.black} bold isTruncated onPress={() => navigation.navigate("EditInfo")}>
              일반정보변경
            </Text>
          </HStack>
        </Pressable>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.white}
            borderColor={Colors.black}
            borderWidth={0.5}
            py={4}
            px={7}
          >
            <Text fontSize={20} color={Colors.black} bold isTruncated onPress={() => navigation.navigate("ChangePassword")}>
              비밀번호 변경
            </Text>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
