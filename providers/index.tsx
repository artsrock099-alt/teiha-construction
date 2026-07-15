"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
