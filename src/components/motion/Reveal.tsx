import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = "",
  ...props
}: RevealProps) {
  
  const getInitial = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 30 };
      case 'down': return { opacity: 0, y: -30 };
      case 'left': return { opacity: 0, x: 30 };
      case 'right': return { opacity: 0, x: -30 };
      case 'none': return { opacity: 0 };
    }
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: getInitial(),
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration, delay: delay / 1000, ease: [0.21, 0.47, 0.32, 0.98] }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
