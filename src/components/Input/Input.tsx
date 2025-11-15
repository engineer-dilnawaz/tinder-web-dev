import {
  useId,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder: string;
  icon: ReactNode;
  errorMessage: string;
  isValid: boolean;
  isTouched: boolean;
};

export const Input = ({
  type,
  placeholder,
  icon,
  errorMessage,
  isValid,
  isTouched,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = useId();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const inputType = showPassword ? "text" : type;

  return (
    <AnimatePresence key={inputId}>
      <motion.label
        key={inputId}
        className={`input ${
          isTouched || errorMessage
            ? isValid
              ? "input-success"
              : "input-error"
            : ""
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {icon}
        <input type={inputType} placeholder={placeholder} {...props} />
        {type === "password" && (
          <button
            type="button"
            onClick={handleShowPassword}
            className="btn btn-ghost btn-xs"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4 opacity-50" />
            ) : (
              <Eye className="w-4 h-4 opacity-50" />
            )}
          </button>
        )}
      </motion.label>
      {errorMessage && (
        <motion.p
          className="mb-2 text-error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {errorMessage}
        </motion.p>
      )}
    </AnimatePresence>
  );
};
