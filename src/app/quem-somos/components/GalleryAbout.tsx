"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, title: "Primeiro Escritório", year: "2021", aspect: "aspect-square" },
  { id: 2, title: "Lançamento V2", year: "2022", aspect: "aspect-[4/5]" },
  { id: 3, title: "Evento São Paulo", year: "2022", aspect: "aspect-square" },
  { id: 4, title: "Expansão Equipe", year: "2023", aspect: "aspect-[4/3]" },
  { id: 5, title: "Prêmio Inovação", year: "2023", aspect: "aspect-square" },
  { id: 6, title: "Summit Ratoeira", year: "2024", aspect: "aspect-[3/4]" },
  { id: 7, title: "Integração IA", year: "2024", aspect: "aspect-video" },
  { id: 8, title: "Nossa Cultura", year: "Hoje", aspect: "aspect-square" },
];

export default function GalleryAbout() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Nossa Cultura na Prática
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Por trás da tecnologia que aniquila o desperdício, existe um time obcecado por resultados e uma cultura de excelência.
          </p>
        </motion.div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden bg-gray-100 rounded-3xl shadow-md border border-gray-200 ${img.aspect} ${
                index === 1 || index === 5 ? "row-span-2" : ""
              } ${index === 6 ? "col-span-2 aspect-auto" : ""}`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">
                  {img.year}
                </span>
                <h3 className="text-white font-bold text-lg tracking-tight leading-tight">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
