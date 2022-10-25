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
} from "native-base";
import React, { useState } from "react";
import { View, Alert } from "react-native";
import Colors from "../color";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "../Components/Buttone";
import * as ImagePicker from "expo-image-picker";

function HomeScreen(route) {
  const [image1, setImage1] = useState(
    "https://cdn-icons-png.flaticon.com/512/2088/2088090.png"
  );
  const [textInput1, setTextInput1] = React.useState("");
  const [textInput2, setTextInput2] = React.useState("");
  const [idx, setIdx] = useState(4);
  const [writeMode, setWriteMode] = useState(false);
  const [products, setProducts] = React.useState([
    {
      _id: "1",
      name: "우리 쌀로 만든 잔기지떡",
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjhfMTMy%2FMDAxNjY0MzczNDM0MTU2.kPIk5SpXIQ8nMiPEH9btwjmi2qinl4SbZMOaYkRCzXgg.QbxjGLl4-MCTuVYQYOJqKob_zdnH5-UfjD6H21VICcUg.JPEG.rndhdhdh80%2F20220924%25A3%25DF143755.jpg&type=sc960_832",
      descripton: "descripton1",
      price: "5,000",
      countInStock: 1,
      rating: 2.5,
      numReivews: 1,
    },
    {
      _id: "2",
      name: "당도 100% 성주 참외",
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MzBfOTMg%2FMDAxNjY0NTE0NjQzNzkz.Is7oyI6GqULROohx9sPsuZwf4PpbZEvwj4EfNlhOqDYg.KzY4I3BG574AluNW2THzTxx8IN-Jg63Y-SDTzNZ40g8g.JPEG.komarketing%2F%25C2%25FC%25BF%25DC_%25C8%25A8%25C6%25E4%25C0%25CC%25C1%25F6_%25BA%25F1%25C5%25B8%25B9%25CC%25B3%25D7%25B6%25F6_%25B4%25EB%25C7%25A5%25BB%25E7%25C1%25F8.jpg&type=sc960_832",
      descripton: "descripton2",
      price: "10,000",
      countInStock: 1,
      rating: 3,
      numReivews: 1,
    },
    {
      _id: "3",
      name: "우빈이네 진미채",
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220418_201%2F1650252008100l7e72_JPEG%2F51387835729690035_879471005.jpg&type=sc960_832",
      descripton: "descripton3ddddd",
      price: "3,000",
      countInStock: 1,
      rating: 5,
      numReivews: 1,
    },
  ]);

  const registerItemMenu = () => {
    if (textInput1 == "" && textInput2 == "") {
      Alert.alert("상품 이름과 가격을 입력해주세요");
    } else if (textInput1 == "" || textInput2 == "") {
      if (textInput1 == "") {
        Alert.alert("상품 이름을 입력해주세요");
      }
      if (textInput2 == "") {
        Alert.alert("가격을 입력해주세요");
      }
    } else if (
      image1 == "https://cdn-icons-png.flaticon.com/512/2088/2088090.png"
    ) {
      Alert.alert("이미지가 없습니다.", "이미지 없이 등록 하시겠습니까?", [
        {
          text: "취소",
          onPress: () => console.log("@@@@ 이미지 없는 상품등록 취소 @@@@"),
          style: "cancel",
        },
        {
          text: "등록하기",
          onPress: () => {
            addItem(),
              console.log(
                "@@@@@@  이미지가 없는 상품이 등록되었습니다.     @@@@@@"
              );
            setTextInput2("");
            setTextInput1("");
          },
        },
      ]);
    } else {
      addItem();
      console.log(
        "@@@@@@@@@@@@@@@   상품이 등록되었습니다.     @@@@@@@@@@@@@@@@@@"
      );
      setTextInput2("");
      setTextInput1("");
      setImage1("https://cdn-icons-png.flaticon.com/512/2088/2088090.png");
    }
  };

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage1(result.uri);
    }
  };
  const addItem = () => {
    let a = { _id: idx, name: textInput1, image: image1, price: textInput2 };
    setProducts([...products, a]);
    setIdx(idx + 1);
    setWriteMode(false);
  };
  // useEffect(async () => {
  //   if (Platform.OS !== "web") {
  //     const { status } =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("Permission denied!");
  //     }
  //   }
  // }, []);

  const deleteItem = (itemId) => {
    Alert.alert("안내", itemId.item.name+" 상품을 삭제 하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "삭제",
        onPress: () => {
          const newProductsItem = products.filter((item) => item._id != itemId.item._id);
          setProducts(newProductsItem);
        },
      },
    ]);
  };

  const deleteAllItem = () => {
    Alert.alert("전체 삭제", "아이템 전체를 삭제 하시겠습니까?", [
      {
        text: "취소",
        onPress: () => console.log("@@@@ 아이템 전체를 삭제 취소 @@@@"),
        style: "cancel",
      },
      {
        text: "삭제",
        onPress: () => {
          setProducts([]),
            console.log("@@@@@@  아이템 전체를 삭제.     @@@@@@");
        },
      },
    ]);
  };

  const cancelAddMenu = () => {
    if (
      textInput1 != "" ||
      textInput2 != "" ||
      image1 != "https://cdn-icons-png.flaticon.com/512/2088/2088090.png"
    ) {
      Alert.alert(
        "알림",
        "작성중인 상품이 있습니다 확인을 누르면 데이터는 사라집니다. 취소하시겠습니?",
        [
          {
            text: "취소",
            onPress: () => console.log("추가중 상품 취소 클릭"),
            style: "cancel",
          },
          {
            text: "확인",
            onPress: () => {
              setTextInput1("");
              setTextInput2("");
              setImage1(
                "https://cdn-icons-png.flaticon.com/512/2088/2088090.png"
              );
              setWriteMode(false);
            },
          },
        ]
      );
    } else {
      setWriteMode(false);
    }
  };

  const Swiper = () => (
    <SwipeListView
      rightOpenValue={-40}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={products}
      renderItem={rederIterms}
      renderHiddenItem={hiddenItem}
      showsVerticalScrollIndicator={false}
      marginBottom={60}
    />
  );

  // Cart item
  const rederIterms = (products) => (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          borderColor={Colors.black}
          borderWidth={0.5}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="30%" bg={Colors.white}>
            <Image
              source={{ uri: products.item.image }}
              alt={products.item.name}
              w="full"
              h={24}
              resizeMode="cover"
            />
          </Center>
          <VStack w="60%" px={4} space={2}>
            <Text isTruncated color={Colors.black} bold fontSize={18}>
              {products.item.name}
            </Text>
            <Text bold color={Colors.black} fontSize={15}>
              {products.item.price} 원
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Pressable>
  );

  //Hidden
  const hiddenItem = (products) => (
    <Pressable
      w={50}
      roundedTopRight={15}
      roundedBottomRight={15}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems="center" space={2}>
        <FontAwesome
          name="trash"
          size={24}
          color={Colors.white}
          onPress={() => deleteItem(products)}
        />
      </Center>
    </Pressable>
  );

  if (writeMode) {
    return (
      <Box flex={1} bg={Colors.subkakao}>
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
              bg: Colors.pressbutton,
            }}
            rounded={50}
            bg={Colors.black}
            onPress={() => cancelAddMenu()}
          >
            이전
          </Button>
          <Center w={250} py={3}>
            <Text color={Colors.black} fontSize={20} bold>
              메뉴
            </Text>
          </Center>
        </HStack>
        <Box h="full" bg={Colors.white} px={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={3} mt={5} pb={10}>
              <Text>상품 이름</Text>
              <Input
                placeholder="상품 이름을 입력해 주세요."
                borderWidth={0.2}
                bg={Colors.subkakao}
                color={Colors.black}
                borderColor={Colors.kakao}
                value={textInput1}
                onChangeText={(text) => setTextInput1(text)}
                _focus={{
                  bg: Colors.subkakao,
                  borderColor: Colors.kakao,
                  borderWidth: 1,
                }}
              />
              <Text>가격</Text>
              <Input
                placeholder="상품 가격을 입력해 주세요."
                borderWidth={0.2}
                bg={Colors.subkakao}
                colro={Colors.kakao}
                borderColor={Colors.kakao}
                value={textInput2}
                onChangeText={(text) => setTextInput2(text)}
                _focus={{
                  bg: Colors.subkakao,
                  borderColor: Colors.kakao,
                  borderWidth: 1,
                }}
              />

              <Center mt={5}>
                <HStack
                  justifyContent="center"
                  w="100%"
                  pl={5}
                  h={45}
                  alignItems="center"
                >
                  <Button
                    onPress={PickImage}
                    px={70}
                    h={45}
                    rounded={50}
                    bg={Colors.kakao}
                    _text={{
                      color: Colors.black,
                      fontWeight: "semibold",
                    }}
                    _pressed={{
                      bg: Colors.presskakao,
                    }}
                  >
                    사진 업로드
                  </Button>
                </HStack>
              </Center>
              <Center>
                {image1 && (
                  <Image
                    alt="product_imgae"
                    source={{ uri: image1 }}
                    style={{
                      width: 250,
                      height: 250,
                    }}
                  />
                )}
              </Center>
              <Buttone
                bg={Colors.kakao}
                color={Colors.black}
                _pressed={{
                  bg: Colors.presskakao,
                }}
                onPress={registerItemMenu}
              >
                등록하기
              </Buttone>
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    );
  }
  return (
    <Box flex={1} bg={Colors.white}>
      <HStack
        space={2}
        w="full"
        px={3}
        bg={Colors.kakao}
        py={1}
        alignItems="center"
        safeAreaTop
      >
        <Button
          _pressed={{
            bg: Colors.pressbutton,
          }}
          rounded={50}
          bg={Colors.black}
          onPress={() => deleteAllItem()}
        >
          전체삭제
        </Button>
        <Center w={230} py={3}>
          <Text color={Colors.black} fontSize={20} bold>
            메뉴
          </Text>
        </Center>
        <Button
          _pressed={{
            bg: Colors.pressbutton,
          }}
          rounded={50}
          bg={Colors.black}
          onPress={() => setWriteMode(true)}
        >
          추가
        </Button>
      </HStack>
      <Box mr={6} marginTop={5}>
        <Swiper />
      </Box>
    </Box>
  );
}

export default HomeScreen;
