import React from "react";
import { Button, useToast, Box, Center, NativeBaseProvider } from "native-base";
import {iconColor}from '../res/styles/color'
const Example = () => {
  const toast = useToast();
  React.useEffect(() => {
    toast.show({
      render: () => (
        <Box bg={iconColor} px="2" py="1" rounded="sm" mb={5}>
           added to cart successfully!
        </Box>
      ),
    });
  }, []); 

  return <Center>{/* You can keep the button if you still want it */}</Center>;
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
