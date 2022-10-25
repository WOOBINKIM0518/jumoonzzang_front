import {
  Box,
  HStack,
  Input,
  Text,
  Center,
  Button,
  Pressable,
  Image,
  VStack,
  ScrollView,
  Flex,
  Heading,
  Spacer,
  isPressed,
  isHovered,
  isFocused,
} from "native-base";
import React, { useState } from "react";
import { View, Alert } from "react-native";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import Buttone from "../Components/Buttone";

function OrderScreen() {
  const navigation = useNavigation();
  const [detailMode, setDetailMode] = useState(false);
  const [completeMode, setCompleteMode] = useState(false);
  const [details, setDetails] = useState([]);
  const [completeOrders, setCompleteOrders] = useState([
    {
      _id: "0",
      address: "서울시 금천구 가산디지털 1로 BYC빌딩 C동 803호",
      date: "2022-10-01",
      ordercontents: "사과 참외 세트",
      price: "5,000",
    },
  ]);
  const [orders, setOrders] = useState([
    {
      _id: "1",
      date: "2022-10-01",
      ordercontents: "털보네 진미채 1kg",
      price: "5,000",
      address: "서울시 금천구 가산디지털 1로 BYC빌딩 C동 803호 세번째 방 옆길 ",
    },
    {
      _id: "2",
      date: "2022-10-11",
      ordercontents: "참외 1봉지",
      price: "7,000",
      address: "서울시 강남구 도산대로 GT빌딩 5층",
    },
    {
      _id: "3",
      date: "2022-10-12",
      ordercontents: "잔기지떡 2팩",
      price: "10,000",
      address: "서울시 양천구 신정로 100",
    },
    {
      _id: "4",
      date: "2022-10-01",
      ordercontents: "털보네 진미채 1kg",
      price: "5,000",
      address: "서울시 금천구 가산디지털 1로 BYC빌딩 C동 803호",
    },
    {
      _id: "5",
      date: "2022-10-01",
      ordercontents: "수박 1kg",
      price: "5,000",
      address: "서울시 금천구 가산디지털 1로 BYC빌딩 C동 803호",
    },
  ]);

  const packingComplete = (itemId) => {
    Alert.alert("알림", "포장완료 처리하시겠습니까??", [
      {
        text: "취소",
        onPress: () => console.log("포장완료 취소 클릭"),
        style: "cancel",
      },
      {
        text: "확인",
        onPress: () => {
          setCompleteOrders([...completeOrders, details]);

          const newProductsItem = orders.filter((item) => item._id != itemId);
          setOrders(newProductsItem);

          setDetailMode(false);
        },
      },
    ]);
  };

  if (detailMode) {
    return (
      <Box safeArea flex={1} bg={Colors.white}>
        <HStack
          space={2}
          w="full"
          px={4}
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
            // onPressOut={() => setDetails([])}
            onPress={() => setDetailMode(false)}
            _pressed={{
              bg: Colors.pressbutton,
            }}
          >
            이전
          </Button>
          <Center w={250} py={3}>
            <Text color={Colors.black} fontSize={20} bold>
              주문
            </Text>
          </Center>
        </HStack>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <HStack space={1} alignItems="center" my={5}>
            <Spacer />
          </HStack>

          <Box height={500} bg={Colors.subkakao} lineHeight={3}>
            <Text fontSize={20} mt={5}>
              주문일시 : {details.date}
            </Text>
            <Text fontSize={20} mt={5}>
              주문내역 : {details.ordercontents}
            </Text>
            <Text fontSize={20} mt={5}>
              가 격 : {details.price}
            </Text>
            <Text fontSize={20} mt={5}>
              배달주소 : {details.address}
            </Text>
          </Box>
        </ScrollView>
        <Buttone
          // onPressIn={() => setCompleteOrders([...completeOrders,details])}
          // onPressOut={()=> console.log('@@@@@@@@@@@@@@@')}
          // onPress={()=> setDetailMode(false) }
          onPress={() => packingComplete(details._id)}
          bg={Colors.kakao}
          color={Colors.black}
          mt={10}
          fontSize={20}
        >
          포장완료
        </Buttone>
      </Box>
    );
  }
  if (completeMode) {
    return (
      <Box flex={1} bg={Colors.white}>
        <HStack
          space={2}
          w="full"
          px={4}
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
            onPress={() => setCompleteMode(false)}
            _pressed={{
              bg: Colors.pressbutton,
            }}
          >
            이전
          </Button>
          <Center w={250} py={3}>
            <Text color={Colors.black} fontSize={20} bold>
              포장완료내역
            </Text>
          </Center>
        </HStack>
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <Flex
            width={830}
            flexWrap="wrap"
            justifyContetn="space-between"
            px={1}
          >
            {completeOrders.map((completedorder) => (
              <Pressable
                key={completedorder._id}
                w="49%"
                bg={Colors.darkkakao}
                rounded="md"
                shadow={2}
                pt={1}
                my={3}
                pb={2}
                overflow="hidden"
              >
                <Box
                  height={200}
                  px={4}
                  pt={1}
                  justifyContent="center"
                  bg={Colors.darkkakao}
                >
                  <Text fontSize={16} mt={1}>
                    주문일시 : {completedorder.date}
                  </Text>
                  <Text fontSize={16} mt={1}>
                    주문내역 : {completedorder.ordercontents}
                  </Text>
                  <Text fontSize={16} mt={1}>
                    가 격 : {completedorder.price}
                  </Text>
                  <Text fontSize={16} mt={1}>
                    배달주소 : {completedorder.address}
                  </Text>
                </Box>
              </Pressable>
            ))}
          </Flex>
        </ScrollView>
      </Box>
    );
  }
  return (
    <Box flex={1} bg={Colors.white}>
      <HStack
        space={2}
        w="full"
        px={20}
        bg={Colors.kakao}
        py={1}
        alignItems="center"
        safeAreaTop
      >
        <Center w={210} py={3}>
          <Text color={Colors.black} fontSize={20} bold>
            주문
          </Text>
        </Center>
        <Button
          _pressed={{
            bg: Colors.black,
          }}
          rounded={50}
          bg={Colors.black}
          onPress={() => setCompleteMode(true)}
          _pressed={{
            bg: Colors.pressbutton,
          }}
        >
          포장완료내역
        </Button>
      </HStack>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex width={840} flexWrap="wrap" justifyContetn="space-between" px={4}>
          {orders.map((order) => (
            <Pressable
              onPress={() => setDetailMode(true)}
              onPressIn={() => setDetails(order)}
              key={order._id}
              w="47%"
              rounded="md"
              pt={0.3}
              my={1}
              pb={2}
              overflow="hidden"
            >
              {({ isPressed }) => {
                return (
                  <Box
                    bg={isPressed ? "#fff8bf" : Colors.subkakao}
                    p="5"
                    rounded="8"
                    borderColor={Colors.black}
                    borderWidth={isPressed ? 1 : 0.5 }
                    shadow={1}
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.99 : 1,
                        },
                      ],
                    }}
                  >
                    <Text fontSize={13} mt={1} isTruncated w="full">
                      주문일시 : {order.date}
                    </Text>
                    <Text fontSize={13} mt={1} isTruncated w="full">
                      주문내역 : {order.ordercontents}
                    </Text>
                    <Text fontSize={13} mt={1} isTruncated w="full">
                      가 격 : {order.price}
                    </Text>
                    <Text fontSize={13} mt={1} w="full">
                      배달주소 : {order.address}
                    </Text>
                  </Box>
                );
              }}
              {/* <Box px={4} pt={1}>
                <Text fontSize={13} mt={1} isTruncated w="full">
                  주문일시 : {order.date}
                </Text>
                <Text fontSize={13} mt={1} isTruncated w="full">
                  주문내역 : {order.ordercontents}
                </Text>
                <Text fontSize={13} mt={1} isTruncated w="full">
                  가 격 : {order.price}
                </Text>
                <Text fontSize={13} mt={1}  w="full">
                  배달주소 : {order.address}
                </Text>
              </Box> */}
            </Pressable>
          ))}
        </Flex>
      </ScrollView>
    </Box>
  );
}

export default OrderScreen;
