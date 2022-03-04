import { NextPage } from "next";
import { motion } from "framer-motion";
import work from "../data/work.json";
import Project from "../components/project";

const project: NextPage = () => {
  return (
    <motion.div>
      <Project />
    </motion.div>
  );
};

export default project;
