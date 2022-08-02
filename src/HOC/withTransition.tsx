import { motion } from "framer-motion";
import { ComponentType } from "react";

type WithTransitionProps = {
  children?: JSX.Element;
};

export default function withTransition<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (props: T & WithTransitionProps) => (
    <motion.div
      className="page"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <WrappedComponent {...(props as T)} />
    </motion.div>
  );
}
