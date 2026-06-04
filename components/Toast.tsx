"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-4 rounded-xl border shadow-2xl max-w-[min(90vw,420px)] ${
          type === "success"
            ? "bg-emerald-950/95 border-emerald-500/40 text-emerald-50"
            : "bg-red-950/95 border-red-500/40 text-red-50"
        }`}
      >
        {type === "success" ? (
          <CheckCircle size={20} className="shrink-0 text-emerald-400" />
        ) : (
          <AlertCircle size={20} className="shrink-0 text-red-400" />
        )}
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
