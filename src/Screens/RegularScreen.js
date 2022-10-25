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
} from "native-base";
import React, { useState, userEffect, useEffect } from "react";
import { Platform, View, Image, Dimensions } from "react-native";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

function RegularScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [currentDate, setcurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setcurrentDate(year + "년" + month + "월" + date + "일");
  }, []);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

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
            단골현황
          </Text>
        </Center>
      </HStack>
      <Box h="full" bg={Colors.white} px={3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={3} mt={5}>
            <Box
              height={100}
              px={4}
              justifyContent="center"
              bg={Colors.subkakao}
            >
              <Text fontSize={16} mt={1} bold>
                [ 털보네 과일과게 ]
              </Text>
              <Text fontSize={16} mt={1} bold textAlign="right">
                {currentDate} 현재
              </Text>
            </Box>
            <Box height={200} px={4} justifyContent="center" bg={Colors.white}>
              <PieChart
                data={[
                  {
                    name: "남",
                    population: 40,
                    color: "rgba(131, 167, 234, 1)",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15,
                  },
                  {
                    name: "여",
                    population: 60,
                    color: "#F00",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15,
                  },
                ]}
                width={Dimensions.get("window").width - 80}
                height={200}
                chartConfig={{
                  backgroundColor: "#8f783d",
                  backgroundGradientFrom: "#8f783d",
                  backgroundGradientTo: "#590e1b",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="70"
                //for the absolute number remove if you want percentage
              />
            </Box>
            <Box height={200} justifyContent="center" bg={Colors.white}>
              <BarChart
                data={{
                  labels: ["10대", "20대", "30대", "40대", "50대", "60대"],
                  datasets: [
                    {
                      data: [21, 42, 55, 39, 18, 7],
                    },
                  ],
                }}
                width={Dimensions.get("window").width-30} // from react-native
                height={220}
                chartConfig={{
                  backgroundColor: "#1cc910",
                  backgroundGradientFrom: "#eff3ff",
                  backgroundGradientTo: "#efefef",
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </Box>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default RegularScreen;
