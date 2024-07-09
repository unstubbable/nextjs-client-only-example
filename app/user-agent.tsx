"use client";

import "client-only";
import { ReactNode } from "react";

export function UserAgent(): ReactNode {
  return <p>User agent: {window.navigator.userAgent}</p>;
}
