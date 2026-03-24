"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    hasValidation: "",
    company: "",
    position: "",
    conversations: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        website: "",
        hasValidation: "",
        company: "",
        position: "",
        conversations: "",
        budget: "",
      });
    }, 3000);
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="fale-conosco">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center space-y-4 py-20"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Formulário enviado!</h3>
            <p className="text-gray-600">Em breve nosso especialista entrará em contato.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nome"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
              />
            </div>

            {/* Telefone e Email em linha */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone (com DDD) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Telefone"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
                />
              </div>
            </div>

            {/* Validação Meta */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Um site ativo é o principal requisito para verificar sua empresa no Google Ads. A empresa possui site? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: "sim", label: "Sim, possuo um site ativo." },
                  { value: "nao", label: "Não, e não pretendo ativar." },
                  { value: "nao-mas-interesso", label: "Não, mas tenho interesse em me adequar para ativar." },
                ].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`validation-${option.value}`}
                      name="hasValidation"
                      value={option.value}
                      checked={formData.hasValidation === option.value}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500 cursor-pointer"
                    />
                    <label htmlFor={`validation-${option.value}`} className="ml-3 text-sm text-gray-700 cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Qual é o seu site */}
            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                Qual o seu site? <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                placeholder="Digite aqui o seu site!"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
              />
            </div>

            {/* Nome da Empresa */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                Nome da Empresa <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Digite o nome da sua Empresa"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
              />
            </div>

            {/* Cargo */}
            <div>
              <label htmlFor="position" className="block text-sm font-semibold text-gray-900 mb-2">
                Cargo
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Digite seu cargo atual"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
              />
            </div>

            {/* Quantas conversas */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantas conversas você recebe no whatsapp por dia? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  "1 a 25 atendimentos por dia",
                  "26 a 50 atendimentos por dia",
                  "51 a 100 atendimentos por dia",
                  "101 a 300 atendimentos por dia",
                  "mais de 300 atendimentos por dia",
                ].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={`conversations-${option}`}
                      name="conversations"
                      value={option}
                      checked={formData.conversations === option}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500 cursor-pointer"
                    />
                    <label htmlFor={`conversations-${option}`} className="ml-3 text-sm text-gray-700 cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                Quanto você planeja investir mensalmente para automatizar e escalar seu atendimento? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                placeholder="Digite o valor mensal estimado"
                rows={4}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 resize-none bg-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded transition-colors duration-200"
            >
              SOLICITAR CONTATO DO ESPECIALISTA
            </button>

            {/* Footer Links */}
            <div className="text-center text-xs text-gray-500 space-y-1">
              <p>
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                {" | "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
