import { FaPalette, FaCheckCircle, FaBullseye, FaCogs, FaChartLine, FaLaptopCode } from "react-icons/fa";

const cardData = [
  {
    title: "Modern & Clean Design",
    desc: "We deliver visually stunning and user-focused interfaces.",
    icon: <FaPalette />,
    gradient: "from-orange-50 to-orange-100",
  },
  {
    title: "Fast Communication",
    desc: "Smooth workflow, quick response, and dedicated support.",
    icon: <FaCheckCircle />,
    gradient: "from-green-50 to-green-100",
  },
  {
    title: "On-Time Delivery",
    desc: "We respect your deadlines—always.",
    icon: <FaBullseye />,
    gradient: "from-blue-50 to-blue-100",
  },
  {
    title: "High-Quality Output",
    desc: "Precision, polish, and professional-level execution.",
    icon: <FaCogs />,
    gradient: "from-purple-50 to-purple-100",
  },
  {
    title: "Strategy + Creativity",
    desc: "Every project blends design thinking with business goals.",
    icon: <FaChartLine />,
    gradient: "from-pink-50 to-pink-100",
  },
  {
    title: "Long-Term Partnership",
    desc: "We grow with you—not just complete a project.",
    icon: <FaLaptopCode />,
    gradient: "from-yellow-50 to-yellow-100",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center">
      <div className="container m-auto px-4 py-20 pt-40">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">Biz-Bee</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help brands grow with powerful digital experiences—combining design,
            strategy, creativity, and technology to create results that matter.
          </p>
        </div>

        {/* GRID CONTENT: Who We Are + Team Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Text */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed">
              Biz-Bee is a multidisciplinary digital agency that transforms ideas
              into meaningful digital impact. We partner with businesses,
              entrepreneurs, and creators to build modern brands, engaging content,
              and high-performance online presence.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 pt-6">What We Do</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <FaLaptopCode className="text-orange-600 mt-1" />
                <span><strong>Website Design</strong> – UI/UX, SEO-ready, fast & responsive builds</span>
              </li>
              <li className="flex items-start gap-3">
                <FaBullseye className="text-orange-600 mt-1" />
                <span><strong>Video Editing</strong> – ads, reels, promos, storytelling visuals</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPalette className="text-orange-600 mt-1" />
                <span><strong>Graphic Design</strong> – branding, social media designs, marketing assets</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChartLine className="text-orange-600 mt-1" />
                <span><strong>Digital Marketing</strong> – ads, social media strategy, analytics, content</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/team-image/team-image.webp"
              alt="Biz-Bee Agency Team"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* WHY CHOOSE US: Soft Gradient Cards */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
            Why Clients Choose Us
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-md bg-gradient-to-br ${card.gradient} flex flex-col items-start gap-3 relative`}
              >
                <div className="text-gray-800 text-3xl absolute top-4 right-4">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800">{card.title}</h4>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
