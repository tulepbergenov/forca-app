import { ILayout } from "@/types";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./ChakraUIProvider.config";

export const ChakraUIProvider = ({ children }: ILayout) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
