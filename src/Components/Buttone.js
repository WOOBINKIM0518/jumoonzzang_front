import { Button } from "native-base";
import React from "react";
import Colors from "../color";

function Buttone({mt, bg, color, children, onPress,onPressIn,onPressOut,marginTop}) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
        fontSize:20
      }}
      _pressed={{bg:bg}}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      marginTop={marginTop}
    >
      {children}
    </Button>
  );
}

export default Buttone;
