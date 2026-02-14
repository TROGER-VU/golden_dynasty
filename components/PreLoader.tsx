"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
  type Transition,
} from "framer-motion";
import Image from "next/image";

type ChipTheme = "black" | "gold";

interface ChipFaceProps {
  theme: ChipTheme;
  logoColor: string;
  accentColor: string;
  counterRotate?: MotionValue<number>;
}

const ChipFaceContent = ({
  theme,
  logoColor,
  accentColor,
  counterRotate,
}: ChipFaceProps) => {
  const backgroundClass =
    theme === "black"
      ? "bg-gradient-to-br from-neutral-900 to-black border-[#BF953F]"
      : "bg-gradient-to-br from-[#BF953F] via-[#FBF5B7] to-[#AA771C] border-black";

  const innerGradient =
    theme === "black"
      ? "from-white/10 to-black/80"
      : "from-black/5 to-black/20";

  return (
    <div
      className={`w-full h-full rounded-full border-[3px] md:border-4 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex items-center justify-center ${backgroundClass}`}
    >
      <div
        className={`absolute inset-0 rounded-full border-[4px] md:border-[6px] border-dashed ${accentColor}`}
      />

      <div className="absolute inset-2 md:inset-3 rounded-full bg-black/20 border border-white/10 backdrop-blur-sm flex items-center justify-center">
        <div
          className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-b ${innerGradient} border ${accentColor} flex items-center justify-center p-3 md:p-4 shadow-inner`}
        >
          <motion.div
            style={counterRotate ? { rotateY: counterRotate } : undefined}
            className={`w-full h-full flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${logoColor}`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/logo2.png"
                alt="Brand Logo"
                fill
                className="object-contain scale-450"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

interface ChipProps {
  theme: ChipTheme;
  rotation: number;
  delay: number;
  zIndex: number;
  isRotating?: boolean;
  counterRotate?: MotionValue<number>;
}

const Chip = ({
  theme,
  rotation,
  delay,
  zIndex,
  isRotating = false,
  counterRotate,
}: ChipProps) => {
  const isBlack = theme === "black";

  const accentColor = isBlack
    ? "border-[#BF953F]/50"
    : "border-black/30";

  const logoColor = isBlack
    ? "text-[#BF953F]"
    : "text-black";

  const entranceTransition: Transition = {
    type: "spring",
    stiffness: 120,
    damping: 12,
    delay,
  };

  const motionProps: React.ComponentProps<typeof motion.div> = {
    initial: { y: -500, opacity: 0, rotate: rotation },
    animate: {
      y: 0,
      opacity: 1,
      rotate: rotation,
      transition: entranceTransition,
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.5, delay: delay * 0.5 },
    },
    style: { zIndex },
    className: "absolute w-28 h-28 md:w-40 md:h-40",
  };

  return (
    <motion.div {...motionProps}>
      {isRotating ? (
        <div className="relative w-full h-full [transform-style:preserve-3d]">
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <ChipFaceContent
              theme={theme}
              logoColor={logoColor}
              accentColor={accentColor}
              counterRotate={counterRotate}
            />
          </div>

          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <ChipFaceContent
              theme={theme}
              logoColor={logoColor}
              accentColor={accentColor}
              counterRotate={counterRotate}
            />
          </div>
        </div>
      ) : (
        <ChipFaceContent
          theme={theme}
          logoColor={logoColor}
          accentColor={accentColor}
        />
      )}
    </motion.div>
  );
};

const PreLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const rotateY = useMotionValue(0);
  const counterRotate = useTransform(rotateY, (value) => -value);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#BF953F]/10 md:from-[#BF953F]/20 via-black to-black" />

      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-12 md:mb-16 flex items-center justify-center perspective-[1000px]">
        <div className="absolute -translate-x-6 md:-translate-x-10 translate-y-2 md:translate-y-3">
          <Chip theme="black" rotation={-15} delay={0.1} zIndex={10} />
        </div>

        <div className="absolute translate-x-6 md:translate-x-10 translate-y-2 md:translate-y-3">
          <Chip theme="black" rotation={15} delay={0.3} zIndex={20} />
        </div>

        <div className="absolute -translate-y-3 md:-translate-y-4">
          <motion.div
            style={{
              rotateY,
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [0, -8, 0],
              rotateY: 360,
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotateY: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              },
            }}
          >
            <Chip
              theme="gold"
              rotation={0}
              delay={0.5}
              zIndex={30}
              isRotating
              counterRotate={counterRotate}
            />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 text-center mt-8 md:mt-12 w-full max-w-[280px] md:max-w-xs">
        <div className="flex items-end justify-center gap-1 mb-3">
          <span className="text-5xl md:text-6xl font-serif font-black text-white tabular-nums tracking-tighter drop-shadow-lg">
            {progress}
          </span>
          <span className="text-xl md:text-2xl font-serif text-[#BF953F] font-bold mb-2">
            %
          </span>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#AA771C] via-[#FBF5B7] to-[#BF953F] shadow-[0_0_15px_rgba(191,149,63,0.6)]"
          />
        </div>

        <p className="mt-4 text-[#BF953F]/70 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] animate-pulse">
          Preparing the arena...
        </p>
      </div>
    </motion.div>
  );
};

export default PreLoader;
