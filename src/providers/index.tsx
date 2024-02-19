import { ILayout } from "@/types";
import { ChakraUIProvider } from "./ChakraUIProvider";

export const Providers = ({ children }: ILayout) => {
  return <ChakraUIProvider>{children}</ChakraUIProvider>;
};
