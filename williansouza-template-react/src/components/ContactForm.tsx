import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada: ${form.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="name" placeholder="Nome" onChange={handleChange} className="border p-2 w-full" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
      <textarea name="message" placeholder="Mensagem" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
    </form>
  );
};

export default ContactForm;
