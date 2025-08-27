import React, { useState } from 'react';
import { countries } from './data/countries';
import type { PhoneInputProps } from './types';

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange, className = '' }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    updatePhone(e.target.value, phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
    updatePhone(selectedCountry, value);
  };

  const updatePhone = (countryCode: string, number: string) => {
    const fullNumber = number ? `${countryCode}${number}` : '';
    onChange?.(fullNumber);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-36 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="123456789"
        className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
      />
    </div>
  );
};

export default PhoneInput;