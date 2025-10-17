import { Theme } from "@/components/provider";

declare module "styled-components/native" {
  interface DefaultTheme extends Theme {}
}
