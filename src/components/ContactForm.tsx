/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Conectar com API  de serviço de email aqui
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulação de envio
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
    >
      {/* Campo Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          required
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          required
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Campo Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Escreva sua mensagem..."
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full px-4 py-2 rounded text-white transition-colors
          ${status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {/* Mensagens de feedback */}
      {status === "success" && (
        <p className="text-green-600 text-sm font-medium">
          ✅ Mensagem enviada com sucesso!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">
          ❌ Ocorreu um erro. Tente novamente.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
