import { InitGate } from "@/entities/init";
import { MainPageUI } from "@/pages/main";
import { useGate } from "effector-react";

export default function Index() {
  useGate(InitGate);

  return <MainPageUI />;
}
