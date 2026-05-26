import { Link } from "react-router-dom";
export default function BeyondCode() {
  const sections = [
    {
      title: "The Reader In Me 📚",
      path: "/reader",
      color: "bg-[#09201b]",
      text: "text-[#ecdfab]",
      position: "top-[12%] left-[10%]",
      rotate: "-rotate-6",
    },

    {
      title: "Creative Side 🎨",
      path: "/creative",
      color: "bg-[#1b7754]",
      text: "text-[#ecdfab]",
      position: "top-[20%] right-[12%]",
      rotate: "rotate-6",
    },

    {
      title: "Current Obsessions ✨",
      path: "/obsessions",
      color: "bg-[#eb5c37]",
      text: "text-white",
      position: "top-[42%] left-[6%]",
      rotate: "rotate-3",
    },

    {
      title: "My Music 🎧",
      path: "/music",
      color: "bg-[#f9b122]",
      text: "text-[#09201b]",
      position: "top-[45%] right-[8%]",
      rotate: "-rotate-3",
    },

    {
      title: "Comfort Zone ☕",
      path: "/comfort",
      color: "bg-[#1b7754]",
      text: "text-[#ecdfab]",
      position: "bottom-[20%] left-[15%]",
      rotate: "rotate-6",
    },

    {
      title: "Tiny Fun Facts 🌙",
      path: "/fun-facts",
      color: "bg-[#09201b]",
      text: "text-[#ecdfab]",
      position: "bottom-[12%] left-[40%]",
      rotate: "-rotate-2",
    },

    {
      title: "Moodboard 🕯️",
      path: "/moodboard",
      color: "bg-[#eb5c37]",
      text: "text-white",
      position: "bottom-[18%] right-[12%]",
      rotate: "rotate-3",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ecdfab] overflow-hidden relative flex items-center justify-center px-6">

      {/* Background Blur Effects */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-[#f9b122]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#eb5c37]/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1b7754]/10 rounded-full blur-3xl"></div>

      {/* Center Content */}
      <div className="text-center z-10">

        <p className="uppercase tracking-[8px] text-sm text-[#1b7754] mb-6">
          Beyond The Code
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-[#09201b] leading-tight mb-8">
          The human
          <br />
          behind the screen
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-9 text-[#1b7754]">
          A collection of stories, aesthetics, music,
          creativity, and the little things that inspire me
          outside of technology.
        </p>

      </div>

      {/* Floating Section Buttons */}
      {sections.map((section, index) => (
        <Link
        to={section.path}
          key={index}
          className={`
            absolute
            ${section.position}
            ${section.color}
            ${section.text}
            ${section.rotate}
            px-8
            py-5
            rounded-[30px]
            shadow-2xl
            backdrop-blur-lg
            border
            border-[#ffffff20]
            hover:scale-110
            hover:-translate-y-2
            transition-all
            duration-500
            text-lg
            font-semibold
          `}
        >
          {section.title}
        </Link>
      ))}

    </div>
  );
}