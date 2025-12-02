"use client";

import React from "react";
import { Typography as MTTypography } from "@material-tailwind/react";

export type MyTypographyProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "lead" | "paragraph" | "small" | string;
  color?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function Typography(props: MyTypographyProps) {
  return <MTTypography {...(props as any)} />;
}