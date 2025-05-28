"use client"

import React, { useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        city: '',
        concern: '',
        whatsappOptIn: false,
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const res = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus('Success! We will contact you soon.');
                setForm({ name: '', phone: '', city: '', concern: '', whatsappOptIn: false });
            } else {
                setStatus(`Error: ${data.message}`);
            }
        } catch (err) {
            setStatus('Failed to submit. Please try again.');
        }
    };

    return (
        <div id='book-now' className="py-20 flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
                Book Your Eye Test or Ask a Question
            </h1>
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaPhone className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City/Town</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                placeholder="City/Town"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Concern</label>
                        <div className="relative">
                            <select
                                name="concern"
                                value={form.concern}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select your concern</option>
                                <option value="Specs">Specs</option>
                                <option value="Eye Test">Eye Test</option>
                                <option value="Contact Lens">Contact Lens</option>
                                <option value="Sunglasses">Sunglasses</option>
                            </select>
                            <FaQuestionCircle className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="whatsappOptIn"
                            checked={form.whatsappOptIn}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="whatsapp" className="text-sm text-gray-700">
                            Send me updates on WhatsApp
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 active:bg-orange-600 text-white font-semibold py-3 rounded-full shadow-md transition duration-200"
                    >
                        Get Callback
                    </button>

                    {status && <p className="text-sm text-center mt-4">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Form;
