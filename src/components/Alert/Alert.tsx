import { motion, AnimatePresence } from "framer-motion";

type AlertProps = {
  message: string;
  type: "info" | "success" | "warning" | "error";
};

export const Alert = ({ message, type }: AlertProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        role="alert"
        className={`alert alert-${type} alert-soft`}
      >
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};
