"use client";

import { PropsWithChildren, ReactNode, useSyncExternalStore } from "react";

const noopSubscribe = () => () => undefined;

export function ClientOnly({ children }: PropsWithChildren): ReactNode {
  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  return isClient ? children : null;
}
