import React from 'react';
import { Box, Sparkles, Infinity, Wind, Shirt } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Box size={60} strokeWidth={1.5} />,
      title: "Comfort Fit",
      desc: "Perfect for every occasion"
    },
    {
      icon: <Sparkles size={60} strokeWidth={1.5} />,
      title: "Skin Friendly",
      desc: "Soft on your skin"
    },
    {
      icon: <Infinity size={60} strokeWidth={1.5} />,
      title: "Made to Last",
      desc: "Durable quality fabrics"
    },
    {
      icon: <Wind size={60} strokeWidth={1.5} />,
      title: "Natural Fibers",
      desc: "Breathable cotton threads"
    },
    {
      icon: <Shirt size={60} strokeWidth={1.5} />,
      title: "Sizes upto 5XL",
      desc: "Inclusivity in every stitch"
    }
  ];

  return (
    <section className="pb-32 bg-[#fafafa] font-['Albert_Sans']">
      <div className=" mx-auto">
        <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-gray-50">
            {benefits.map((b, i) => (
              <div key={i} className="group flex flex-col items-center text-center px-4 pt-8 first:pt-0 md:pt-8 lg:pt-0">
                <div className="mb-10 text-gray-900 group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-300">
                  {b.icon}
                </div>
                <h3 className=" font-black mb-4 text-gray-500 group-hover:text-[#c36a4e] transition-colors">{b.title}</h3>
                <p className="hidden md:block text-gray-400 font-bold">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
