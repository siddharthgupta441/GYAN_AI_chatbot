import { motion } from "framer-motion";
import { Sparkles, Mic, ClipboardCheck } from "lucide-react";

const features = [
  {
    title: "Personalized Scheme Finder",
    icon: <Sparkles size={28} className="text-indigo-500" />,
  },
  {
    title: "Chat in Hinglish (Voice + Text)",
    icon: <Mic size={28} className="text-green-500" />,
  },
  {
    title: "Smart Document Checklist",
    icon: <ClipboardCheck size={28} className="text-yellow-500" />,
  },
];

const Features = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-300">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-12">
        ⚡ Key Features for Effortless Discovery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
