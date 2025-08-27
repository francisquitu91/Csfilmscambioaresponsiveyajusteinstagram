import React, { useState } from 'react';
import { projectTypes } from './data/projectTypes';
import PhoneInput from './PhoneInput';

const QuoteForm: React.FC = () => {
  const [phone, setPhone] = useState('');

  return (
    <form 
      action="https://formspree.io/f/xeoqywgk" 
      method="POST"
      className="max-w-2xl mx-auto space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
          Nombre <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
          Correo Electrónico <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
          Teléfono (opcional)
        </label>
        <PhoneInput
          onChange={setPhone}
        />
        <input type="hidden" name="phone" value={phone} />
      </div>

      <div>
        <label htmlFor="project-type" className="block text-sm font-medium text-gray-200 mb-2">
          Tipo de Proyecto <span className="text-red-500">*</span>
        </label>
        <select
          id="project-type"
          name="project-type"
          required
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
        >
          <option value="">Selecciona un tipo de proyecto</option>
          {projectTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
          Detalles del Proyecto <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
      >
        Solicitar Cotización
      </button>

      <p className="text-sm text-gray-300 text-center mt-4">
        Completa este formulario y nuestros expertos te responderán en menos de 24 horas
      </p>
    </form>
  );
};

export default QuoteForm;