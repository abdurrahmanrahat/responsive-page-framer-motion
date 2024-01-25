import MackbookImg from "@/assets/images/macbook-exposed.png";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.25, delayChildren: 1 },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

// banner image motion.
const laptop = {
  initial: { y: 0 },
  animate: {
    y: 20,
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid md:grid-cols-2 place-content-center">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          className="text-5xl lg:text-8xl font-bold text-nowrap"
          variants={introChildren}
        >
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>

        <motion.p
          className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
          variants={introChildren}
        >
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-stop place for all kinds of
          <span className="text-primary-foreground font-semibold">
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </motion.p>

        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 w-3/4 lg:w-full mx-auto"
        variants={laptop}
        initial="initial"
        animate="animate"
      >
        <img
          className="-rotate-[28deg] h-[90%] xxl:h-[95%] object-contain"
          src={MackbookImg}
          alt=""
        />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
