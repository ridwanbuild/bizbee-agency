"use client";

import Image from "next/image";
import { FC } from "react";

interface CardData {
  image: string;
  name: string;
  handle: string;
  review: string;
}

interface CreateCardProps {
  card: CardData;
}

const cardsData: CardData[] = [
  {
    image: 'https://tse2.mm.bing.net/th/id/OIP.AmB23QGlrKsR__x8XOmXCAHaEJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Briar Martin',
    handle: '@neilstellar',
    review: "Biz-Bee helped refine our brand online with a clean, engaging design and fast turnaround time.",
  },
  {
    image: 'https://t3.ftcdn.net/jpg/07/10/07/62/360_F_710076249_1WZdpHlerBukURaZyspil9nMB3u4aDY8.jpg',
    name: 'Avery Johnson',
    handle: '@averywrites',
    review: "Their strategy improved our visibility and audience engagement across social platforms.",
  },
  {
    image: 'https://www.unitopled.com/wp-content/uploads/2023/05/man-2.webp',
    name: 'Jordan Lee',
    handle: '@jordantalks',
    review: "Excellent collaboration and transparent communication — we saw real growth within weeks.",
  },
  {
    image: 'https://img.freepik.com/free-photo/handsome-smiling-bearded-man-looking-excited_176420-17937.jpg',
    name: 'Lucas Carter',
    handle: '@lucascreative',
    review: "Creative visuals and tailored campaigns helped us connect directly with our target audience.",
  },
  {
    image: 'https://www.unitopled.com/wp-content/uploads/2023/05/man-2.webp',
    name: 'Mia Thompson',
    handle: '@miathinks',
    review: "The team is professional and results-driven — our site performance and lead flow improved.",
  },
  {
    image: 'https://img.freepik.com/free-photo/handsome-smiling-bearded-man-looking-excited_176420-17937.jpg',
    name: 'Ethan Brooks',
    handle: '@ethaninsights',
    review: "Every step was clear and organized — we appreciated their focus on strategy and execution.",
  },
];

const CreateCard: FC<CreateCardProps> = ({ card }) => (
  <div className="rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
    <div className="flex gap-2 items-start p-4">
      <Image
        className="w-11 h-11 rounded-full object-cover"
        src={card.image}
        alt={card.name}
        width={44}
        height={44}
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-medium">{card.name}</p>
          <svg className="mt-0.5 fill-blue-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
          </svg>
        </div>
        <span className="text-xs text-slate-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-800 px-4">
      {card.review}
    </p>
  </div>
);

const Testimonials: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        <p className="text-gray-600 mt-2">What our users say about us</p>
      </div>

      {[0, 1].map((row) => (
        <div key={row} className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent"></div>

          <div className={`marquee-inner ${row === 1 ? "marquee-reverse" : ""} flex transform-gpu min-w-[200%] pt-10 pb-5`}>
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent"></div>
        </div>
      ))}

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
