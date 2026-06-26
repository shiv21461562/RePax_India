"use client";

import { useState } from "react";
import { createBoothBooking } from "@/app/services/BoothBookingApi";

import Swal from "sweetalert2";

export default function BoothBookingModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    designation: "",
    email: "",
    phone: "",
    booth_package: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await createBoothBooking(formData);

Swal.fire({
  toast: true,
  position: "top-end",
  icon: "success",
title: "Thank you! We'll contact you shortly.",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: "#fff",
  color: "#111827",
  width: "330px",
  padding: "10px 14px",

  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

      setFormData({
        full_name: "",
        company_name: "",
        designation: "",
        email: "",
        phone: "",
        booth_package: "",
        message: "",
      });

      onClose();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-3xl rounded-[32px] bg-white p-8 shadow-2xl md:p-10">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 transition hover:bg-red-500 hover:text-white"
        >
          ✕
        </button>

        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-[#001B4D] md:text-4xl">
            Book Exhibition Booth
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mt-3 text-sm text-slate-500 md:text-base">
            Fill in your details and our team will contact you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid Layout - 2 columns */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Company Name
              </label>
              <input
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                type="text"
                placeholder="Enter company name"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Designation
              </label>
              <input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                type="text"
                placeholder="Enter designation"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Package */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Booth Package
              </label>
              <select
                name="booth_package"
                value={formData.booth_package}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none"
              >
                <option value="">Select Booth Package</option>
                <option>Premium</option>
                <option>Standard</option>
                <option>Platinum</option>
              </select>
            </div>
          </div>

          {/* Message - Full Width */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 rounded-xl border border-slate-300 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-2/3 rounded-xl bg-orange-500 py-3.5 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
              {loading ? "Submitting..." : "Book Booth"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
