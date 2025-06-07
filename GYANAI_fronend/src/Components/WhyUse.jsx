import { Lightbulb, MessageCircleHeart, CalendarCheck2 } from "lucide-react";

const benefits = [
  {
    title: "Built for Students & Parents",
    icon: <Lightbulb className="w-7 h-7 text-indigo-600" />,
    bgColor: "bg-indigo-100",
    glowColor: "shadow-indigo-300",
  },
  {
    title: "Chat in Hinglish",
    icon: <MessageCircleHeart className="w-7 h-7 text-pink-500" />,
    bgColor: "bg-pink-100",
    glowColor: "shadow-pink-300",
  },
  {
    title: "No Missed Deadlines",
    icon: <CalendarCheck2 className="w-7 h-7 text-green-600" />,
    bgColor: "bg-green-100",
    glowColor: "shadow-green-300",
  },
];

const WhyUse = () => (
  <section className="py-14 px-6 bg-white text-center">
    <h3 className="text-3xl font-bold mb-6 text-gray-900">Why Use This Tool?</h3>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
      Designed to simplify the government scheme application process. Whether you're a student or a parent, get personalized help — in Hinglish — with clear steps and smart reminders.
    </p>

    <div className="flex flex-wrap justify-center gap-10">
      {benefits.map(({ title, icon, bgColor, glowColor }, i) => (
        <div
          key={i}
          className="w-60 p-7 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          aria-label={title}
        >
          <div
            className={`mx-auto mb-5 flex items-center justify-center rounded-full p-4 ${bgColor} ${glowColor} shadow-lg transition-transform duration-300 hover:scale-110`}
          >
            {icon}
          </div>
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default WhyUse;
