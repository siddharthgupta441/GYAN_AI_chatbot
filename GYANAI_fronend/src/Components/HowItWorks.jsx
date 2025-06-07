import { motion } from "framer-motion";
import { Bot, Star, ClipboardList, AlarmClock } from "lucide-react";

const steps = [
  { label: "Talk to Chatbot", icon: <Bot className="w-8 h-8 text-indigo-600" /> },
  { label: "Get Best Scheme", icon: <Star className="w-8 h-8 text-yellow-500" /> },
  { label: "View Checklist", icon: <ClipboardList className="w-8 h-8 text-green-600" /> },
  { label: "Apply & Set Reminder", icon: <AlarmClock className="w-8 h-8 text-red-500" /> },
];

const HowItWorks = () => (
  <section className="py-16 bg-gray-50">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
      How It Works
    </h2>

    <div className="flex flex-wrap justify-center gap-10 px-6 max-w-5xl mx-auto">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-tr from-white to-indigo-50 border border-indigo-200 rounded-2xl p-8 w-56 flex flex-col items-center text-center cursor-pointer transition-transform"
        >
          {/* Step number badge */}
          <div className="absolute top-4 left-4 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold shadow-md select-none">
            {i + 1}
          </div>

          {/* Icon container */}
          <div className="mb-5 p-4 rounded-full bg-indigo-100 shadow-md flex items-center justify-center">
            {step.icon}
          </div>

          {/* Label */}
          <p className="text-lg font-semibold text-gray-700">{step.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
