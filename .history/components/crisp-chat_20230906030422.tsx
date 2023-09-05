"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6fa8149e-d903-4dca-81ce-266319af9119");
  });
  return null;
};
