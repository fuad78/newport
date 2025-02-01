import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { supabase } from "../supabaseClient";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase.from("contacts").insert([formData]);
      if (error) throw error;
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Contact Me</h2>
          <p className="mt-2 text-sm text-gray-600"><b>Let's collaborate or discuss your project</b>.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-white shadow-sm rounded-md hover:shadow-md transition-transform duration-200 transform hover:scale-105">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm">fuadxeonbd@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white shadow-sm rounded-md hover:shadow-md transition-transform duration-200 transform hover:scale-105">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm">01872841507</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white shadow-sm rounded-md hover:shadow-md transition-transform duration-200 transform hover:scale-105">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Dhaka, Bangladesh</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-md space-y-4">
            {errorMessage && <p className="text-red-600 text-xs">{errorMessage}</p>}
            <div>
              <label className="block text-xs font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition hover:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition hover:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition hover:border-blue-500 text-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-2 text-white font-semibold rounded-md shadow-md transition transform text-sm ${loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700 hover:scale-105"}`}
            >
              {loading ? "Sending..." : <><Send className="w-4 h-4" /> <span>Send Message</span></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
