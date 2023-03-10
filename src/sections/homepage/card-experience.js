import { motion } from "framer-motion";
import style from "@styles/home.module.css";
import { useState } from "react";

const chatList = [
  { text: "What stacks have u used before?", type: "start" },
  { text: "i use ReactJS, NextJS often", type: "end" },
  { text: "Sass, TailwindCSS for styling", type: "end" },
  { text: "now, i trying explore Angular", type: "end" },
  { text: "Cool! How can i contact you?", type: "start" },
];

const transition = (num, variants) => ({
  type: "spring",
  delay: variants === "initial" ? 0 : num * 0.75,
  damping: 6,
  duration: 0.1,
});

const Bubble = ({ item, index, animate }) => {
  const num = index + 1;
  const isEnd = item.type === "end";
  const typeClass = isEnd ? "chat-end" : "chat-start";
  const bubbleClass = isEnd ? "chat-bubble-secondary" : "chat-bubble-primary";
  const className = `chat ${typeClass}`;

  let initial = { opacity: 0, translateY: "20%", tranitionDelay: 0 };
  let animated = { opacity: 1, translateY: "0%" };
  const animates = { initial, animated, forced: animated };
  // let variants = { initial, animated: { opacity: 1, translateY: "0%" } };

  return (
    <motion.div
      animate={animates[animate]}
      transition={transition(num, animate)}
      className={className}
      layout
    >
      <div className={`chat-bubble ${bubbleClass} text-sm font-medium`}>
        {item.text}
      </div>
    </motion.div>
  );
};

const ResponseView = ({ variants, setVariants, toggleFlip }) => {
  const reload = () => {
    setVariants("initial");
    setTimeout(setVariants, 1000, "animated");
  };

  const varInit = variants === "initial";

  return (
    <div className="mt-8 flex justify-center gap-3">
      <button
        className="btn btn-square btn-secondary text-xl font-black"
        type="button"
        onClick={reload}
        disabled={varInit}
      >
        <motion.span animate={{ rotate: varInit ? "180deg" : "0deg" }}>
          ↻
        </motion.span>
      </button>
      <motion.div
        layout
        className="flex-1"
        animate={variants}
        variants={{
          initial: { opacity: 0, translateY: "100%" },
          animated: { opacity: 1, translateY: "0%" },
          forced: { opacity: 1, translateY: "0%" },
        }}
        transition={transition(chatList.length + 1, variants)}
      >
        <button
          className="btn btn-primary border-2 w-full !font-bold tracking-wide"
          type="button"
          onClick={toggleFlip}
        >
          Contact Here
        </button>
      </motion.div>
    </div>
  );
};

export default function CardExperience({ toggleFlip }) {
  const [variants, setVariants] = useState("forced");
  const vars = { variants, setVariants, toggleFlip };
  return (
    <div
      className={`${style.homeCard} ${style.right} bg-secondary-focus transition-all duration-500 xl:mt-10`}
    >
      <div className="p-6 text-accent-content font-extrabold">
        <h3 className="block">
          <div className="text-4xl opacity-70">Four years</div>
          <div className="text-2xl opacity-40 mb-6">as an UI maker</div>
        </h3>
        {chatList.map((item, index) => (
          <Bubble item={item} index={index} key={index} animate={variants} />
        ))}
        <ResponseView {...vars} />
      </div>
    </div>
  );
}
