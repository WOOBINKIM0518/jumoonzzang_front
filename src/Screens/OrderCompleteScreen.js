import { Box, HStack, Input, Text, Center,Button,Pressable,Image,VStack,ScrollView,Flex,Heading } from 'native-base';
import React from 'react'
import Colors from '../color';
import { useNavigation } from '@react-navigation/native'






function OrderCompleteScreen() {
  const navigation = useNavigation()
  return <Box flex={1} bg={Colors.white}>
    <HStack
        space={2}
        w="full"
        px={4}
        bg={Colors.main}
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
          onPress={() => navigation.navigate("Order")}
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
        {completedorders.map((completedorder) => (
          <Pressable
            key={completedorder._id}
            w="49%"
            bg={Colors.lightblue}
            rounded="md"
            shadow={2}
            pt={1}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Box height={200} px={4} pt={1} justifyContent="center" bg={Colors.lightblue}>
              <Text fontSize={16} mt={1} >
                주문일시 : {completedorder.date}
                </Text>
              <Text fontSize={16} mt={1} >
                주문내역 : {completedorder.ordercontents}
              </Text>
              <Text fontSize={16} mt={1} >
                가 격 : {completedorder.price}
              </Text>
              <Text fontSize={16} mt={1} >
                배달주소 : {completedorder.address}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  </Box>
}

export default OrderCompleteScreen;