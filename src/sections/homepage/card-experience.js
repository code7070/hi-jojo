import { motion } from "framer-motion";
import style from "@styles/home.module.css";
import { useEffect, useState } from "react";

const chatList = [
  { text: "What tools u used before?", type: "start" },
  { text: "i use ReactJS, NextJS", type: "end" },
  { text: "Sass & TailwindCSS too 😜", type: "end" },
  { text: "Cool! Let's talk", type: "start" },
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

const ResponseView = ({ variants, setVariants }) => {
  const reload = () => {
    setVariants("initial");
    setTimeout(setVariants, 1000, "animated");
  };

  const varInit = variants === "initial";

  return (
    <div className="mt-8 flex justify-center gap-3">
      <button
        className="btn btn-square btn-secondary"
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
          className="btn btn-primary btn-outline border-2 w-full !font-extrabold"
          type="button"
        >
          Contact Here
        </button>
      </motion.div>
    </div>
  );
};

export default function CardExperience() {
  const [variants, setVariants] = useState("forced");

  return (
    <div
      className={`${style.homeCard} ${style.right} bg-accent transition-all duration-500 xl:mt-10`}
    >
      <div className="p-6">
        <div className="text-4xl font-extrabold opacity-40 mb-8">
          Four years as UI maker.
        </div>
        {chatList.map((item, index) => (
          <Bubble item={item} index={index} key={index} animate={variants} />
        ))}
        <ResponseView variants={variants} setVariants={setVariants} />
      </div>
    </div>
  );
}
