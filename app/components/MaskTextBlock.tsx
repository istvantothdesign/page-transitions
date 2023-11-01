"use client";
import React from "react";
import styles from "./styles.module.css";
import MaskText from "./MaskText";

export default function MaskTextBlock() {
  const phrases = ["Istvan", "Toth"];
  return (
    <div className={"flex flex-col gap-32 "}>
      <MaskText phrases={phrases} />
    </div>
  );
}
