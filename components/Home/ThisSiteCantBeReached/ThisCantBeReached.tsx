import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function ThisCantBeReached() {
  const [ShowText, setShowText] = React.useState(false);
  let CenterWidth = 0;
  let CenterHeight = 0;
  React.useEffect(() => {
    setTimeout(function () {
      setShowText(true);
    }, 1000);
  }, []);
  if (typeof window !== "undefined") {
    if(window.innerHeight>640){
      CenterHeight = (window.innerHeight)/2-160-20;
    }else{
      CenterHeight = (window.innerHeight)/2-64-20;
    }
    if(window.innerWidth>1280){
      CenterWidth = (window.innerWidth)/2-384-18;
    }else if(window.innerWidth>1024){
      CenterWidth = (window.innerWidth)/2-192-18;
    }else if(window.innerWidth>768){
      CenterWidth = (window.innerWidth)/2-144-18;
    }else if(window.innerWidth>640){
      CenterWidth = (window.innerWidth)/2-96-18;
    }else{
      CenterWidth = (window.innerWidth)/2-16-18;
    }
    
  }
 
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{opacity:0}}
      transition={{ delay:4,duration: 0.5 }}
      className="absolute h-screen w-full bg-white 
      py-16 sm:py-40 
      px-4 sm:px-24 md:px-36 lg:px-48 xl:px-96 
      flex flex-col space-y-5 sm:space-y-10
      "
    >
      <div className="relative w-full  flex flex-col space-y-4">
        {/* Icon for Desktop and Table */}
        
        
            <motion.span
            initial={{y:CenterHeight+50-20,x:CenterWidth-13,opacity:0}}
            animate={{y:CenterHeight+50,opacity:1}}
            transition={{delay:3.5,duration:0.3}}
            className="absolute font-bold text-gray-600 text-2xl">
              Hello!
            </motion.span>

        
        
        {/* Text start from here */}

       
      </div>
      <motion.div
        initial={{opacity:1}}
        animate={{ opacity: 0 }}
        transition={{ opacity: { delay: 2, duration: 0.5 } }}
        className=""
      >
       
      </motion.div>
    </motion.div>
  );
}
