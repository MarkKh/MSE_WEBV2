import { Users, Layers, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      label: "Team Members",
      value: "25+",
      icon: Users,
    },
    {
      label: "Integrated System",
      value: "Fully",
      icon: Layers,
    },

  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white py-24"
    >
      {/* background blob */}
      <div className="absolute -top-48 -left-32 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[32rem] h-[32rem] bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            About Modular Software
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We’re a team of technologists transforming hospitals with innovative
            digital solutions.
          </p>
        </header>

        {/* Glass card */}
        <div className="">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Story */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Our Success Story
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Modular Software Expertise Co., Ltd. (MSE) is a software house
                specialising in Hospital Information Systems. Our flagship
                product, <b>MSE Proteus HIS</b>, is built by experts with 30+
                years’ healthcare &amp; IT experience — bringing efficiency,
                reliability and seamless integration to modern hospitals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm py-8 px-4"
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white ring-4 ring-white shadow-lg">
                      <Icon className="w-7 h-7" />
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-slate-800">
                    {value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
