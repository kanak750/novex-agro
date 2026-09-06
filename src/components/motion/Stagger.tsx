import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  className = "",
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function StaggerItem({
  children,
  direction = 'up',
  duration = 0.5,
  className = "",
  ...props
}: StaggerItemProps) {
  const getInitial = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 20 };
      case 'down': return { opacity: 0, y: -20 };
      case 'left': return { opacity: 0, x: 20 };
      case 'right': return { opacity: 0, x: -20 };
      case 'none': return { opacity: 0 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getInitial(),
        visible: { opacity: 1, y: 0, x: 0, transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
