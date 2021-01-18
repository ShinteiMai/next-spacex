import React, { useState } from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

interface Props extends TComponent {
  imageUrls: string[];
  children: React.ReactNode;
}

const variants = {
  enter: () => {
    return {
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10;
const swipePower = (offset: number, velocity: number) => {
  return (Math.abs(offset) * velocity) / 500;
};

const Slider = ({
  className,
  "data-testid": testId,
  imageUrls,
  children,
}: Props) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imageUrls.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={clsx("", className)} data-testid={testId || "slider"}>
      <button
        onClick={() => paginate(-1)}
        className="absolute top-0 left-0 z-20"
      >
        Previous
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-0 right-0 z-20"
      >
        Next
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <motion.img
            className="absolute object-cover h-screen lg:h-screen-5/6"
            src={imageUrls[imageIndex]}
          />

          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
