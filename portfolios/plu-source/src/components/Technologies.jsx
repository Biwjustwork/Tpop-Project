import { motion } from "framer-motion";
import { FaPython, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";

const GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
      { name: "Python", Icon: FaPython, color: "text-yellow-300" },
      { name: "Java", Icon: FaJava, color: "text-red-500" },
    ],
  },
  {
    title: "Technologies",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "text-neutral-800" },
      { name: "React.js", Icon: SiReact, color: "text-cyan-400" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", Icon: SiExpress, color: "text-neutral-700" },
      { name: "Prisma", Icon: SiPrisma, color: "text-indigo-600" }
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-600" },
      { name: "MySQL", Icon: SiMysql, color: "text-blue-500" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
    ],
  },
];

const Technologies = () => {
  return (
    <div id="technologies" className="scroll-mt-24 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-[#2D4473]">
        Technologies
      </motion.h2>

      <div className="flex flex-col gap-8">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-[#7A98BF]/70">
              {group.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {group.items.map(({ name, Icon, color }, index) => (
                <motion.div
                  key={name}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex items-center gap-2 rounded-xl border border-[#7A98BF]/25 bg-white/40 px-3 py-2 transition-all duration-200 hover:-translate-y-1 hover:border-[#7A98BF] hover:shadow-md">
                  <Icon className={`text-xl ${color}`} />
                  <span className="text-sm font-medium text-[#2D4473]">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
