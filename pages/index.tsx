import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CentralImageSvg = () => {
  return (
    <svg width="241" height="360" viewBox="0 0 379 558" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_5_334)">
        <path
          d="M0 457.719V558H337.416L379 516.575L378.774 471.301L337.416 457.719L87.4615 416.746L41.3578 416.293L0 457.719Z"
          fill="#303030"
        />
        <path
          d="M77.7436 249.006H41.3578L0 291.79V388.902H65.5397V389.581C159.329 389.581 237.751 320.086 248.147 226.143H337.416L378.774 184.717L378.096 127.446L337.19 126.088H249.277V41.4256L251.311 0H191.421L150.063 41.4256V125.861L117.067 84.8884L41.3578 84.4357L0 125.861V225.916H146.447C136.277 260.325 117.519 248.78 77.7436 248.78V249.006Z"
          fill="#303030"
        />
        <path d="M378.774 416.293H41.3574V516.348H378.774V416.293Z" fill="#1D1D1B" />
        <path
          d="M104.637 248.78H41.3574V347.477H106.897V348.156C200.687 348.156 279.108 278.66 289.504 184.717H378.774V84.4357H290.86V0H191.195V84.4357H41.3574V184.491H187.805C177.635 218.899 144.187 248.553 104.411 248.553L104.637 248.78Z"
          fill="#1D1D1B"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_334">
          <rect width="379" height="558" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

type ButtonSvgProps = {
  isHovered: boolean;
};

const ButtonSvg: React.FC<ButtonSvgProps> = ({ isHovered }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5807" cy="24.4195" r="23.9195" stroke="#D0D0D0" />
      {isHovered ? (
        <circle cx="24.8418" cy="25.5007" r="7" fill="#D0D0D0" />
      ) : (
        <>
          <line x1="24.8291" y1="17.1188" x2="24.8291" y2="32.2236" stroke="#D0D0D0" />
          <line x1="31.8799" y1="25.1713" x2="16.775" y2="25.1713" stroke="#D0D0D0" />
        </>
      )}
    </svg>
  );
};

type ButtonComponentProps = {
  text?: string;
  onClick?: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <div className="relative" style={{ lineHeight: 0 }}>
      <div className="absolute -left-3 top-0 bottom-0 flex items-center pb-0.5">
        <AnimatePresence>
          {text && isHovered && (
            <motion.p
              initial={{ x: '-70%', opacity: 0 }}
              animate={{ x: '-100%', opacity: 1 }}
              exit={{ x: '-90%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="text-sm"
            >
              {text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <button
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <ButtonSvg isHovered={isHovered} />
      </button>
    </div>
  );
};

const OverlayButton: React.FC<ButtonComponentProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <button
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <svg width="120" height="130" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle cx="78.5" cy="78.5" r="76.5" stroke="white" stroke-width="4" />
        <AnimatePresence>
          {isHovered && (
            <motion.circle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              cx="78.5"
              cy="78.5"
              r="76.5"
              stroke="white"
              stroke-width="4"
              fill="white"
              fill-opacity="0.6"
            />
          )}
        </AnimatePresence>
        <line x1="101.97" y1="81.3091" x2="53.4135" y2="81.3091" stroke="white" stroke-width="4" />
      </svg>
    </button>
  );
};

type CreativityOverlayProps = {
  hideOverlay: () => void;
};

const CreativityOverlay: React.FC<CreativityOverlayProps> = ({ hideOverlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute top-0 bottom-0 left-0 right-0"
    >
      <div>
        <div id="some-div" className="absolute top-0 left-0 w-[1300px] h-full">
          <Image
            style={{ lineHeight: 0 }}
            src="/images/creativity_bg.png"
            layout="fill"
            // objectFit="contain"
            alt="creativity_bg"
          />
        </div>
      </div>
      <div className="absolute top-[240px] left-[680px]">
        <div className="flex items-start gap-12">
          <OverlayButton onClick={hideOverlay} />
          <div className="w-72">
            <h1 className="text-xl font-bold">Creativity</h1>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
              calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu&apos;il est prêt ou
              que la mise en page est achevée.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [showCreativity, setShowCreativity] = React.useState<boolean>(false);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative mt-4">
        <div className="absolute -top-[13px] left-[140px]">
          <ButtonComponent />
        </div>
        <div className="absolute top-[72px] left-[140px]">
          <ButtonComponent text="Creativity" onClick={() => setShowCreativity(true)} />
        </div>
        <div className="absolute top-[72px] -right-[13px]">
          <ButtonComponent />
        </div>
        <div className="absolute top-[165px] -left-[7px]">
          <ButtonComponent />
        </div>
        <div className="absolute -bottom-[13px] left-[140px]">
          <ButtonComponent />
        </div>
        <CentralImageSvg />
      </div>
      <AnimatePresence>
        {showCreativity && <CreativityOverlay hideOverlay={() => setShowCreativity(false)} />}
      </AnimatePresence>
    </div>
  );
}
