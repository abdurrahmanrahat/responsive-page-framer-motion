import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-600 h-[515px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
