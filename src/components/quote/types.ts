export interface ProjectType {
  value: string;
  label: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface PhoneInputProps {
  onChange?: (value: string) => void;
  className?: string;
}