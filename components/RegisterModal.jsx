"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { createContact } from "@/app/services/EnquiriesApi";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";

export default function RegisterModal({
  open,
  onClose,
  formData,
  handleChange,
  setFormData,
}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createContact(formData);

      if (response.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "😊 Thanks! We'll get back to you soon",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });

        setFormData({
          full_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        onClose();
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-slate-100"
            >
              <X size={18} />
            </button>

            <div className="rounded-3xl bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,.18)]">
              {/* Badge */}
              <span className="inline-flex rounded-full bg-[#174d6d]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#174d6d]">
                Registration Form
              </span>

              {/* Heading */}
              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Register For REPAX Conference
              </h2>

              <p className="mt-2 text-slate-500">
                Fill in your details and we'll contact you shortly.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                />

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#174d6d] text-lg font-semibold text-white transition-all duration-300 hover:bg-[#123a53] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Send Message"}

                  {!loading && (
                    <Send
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
