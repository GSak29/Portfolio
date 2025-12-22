import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <div id="certifications" className="section">
      
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <p className="section-desc">
          Credentials validating knowledge and practice.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="relative w-80 overflow-visible rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative mx-4 -mt-6 h-50 overflow-hidden rounded-xl shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <div className="p-6 pt-0">
              <a href ={item.link} target="_blank" className="rounded-lg bg-gray-900 px-6 py-3 text-xs font-bold uppercase text-white transition hover:bg-gray-800">
                 View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
