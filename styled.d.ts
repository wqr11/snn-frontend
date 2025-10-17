import { Theme } from "@/shared/components/provider";

declare module "styled-components/native" {
  interface DefaultTheme extends Theme {}
}
