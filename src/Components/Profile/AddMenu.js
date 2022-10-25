import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../color";
import React from "react";
import Buttone from "../Buttone";

const Inputs = [
  {
    label: "상품명",
    type: "text",
  },
  {
    label: "가격",
    type: "text",
  },
  {
    label: "사진",
    type: "password",
  },
];

const AddMenu = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
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
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={0}
                type={i.type}
                color={Colors.main}
                fontSize={20}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.main} color={Colors.white}>
            등록하기
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default AddMenu;
