import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !reason) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_reason: reason,
    };

    emailjs
      .send(
        "service_4fshqn7", // Your EmailJS service ID
        "template_nsw4b6j", // Your template ID
        templateParams,
        "UsGytCvQ9CY_Dm-Fa" // Your Public API Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          alert("Your message has been sent!");
          setName("");
          setEmail("");
          setPhone("");
          setReason("");
          setLoading(false);
        },
        (error) => {
          console.error("Failed to send email", error);
          alert("Something went wrong, please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16">
      <div className="max-w-3xl mx-auto text-center text-white mb-8">
        <h2 className="text-4xl font-bold text-yellow-400">Contact Me</h2>
        <p className="text-lg mt-2 text-yellow-400">
          Feel free to reach out to me for any inquiries or collaborations!
        </p>
      </div>
      <div className="max-w-lg mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-sm font-bold mb-2 ">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone Number"
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="reason" className="block text-sm font-bold mb-2">
              Reason for Contact
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Briefly explain your reason for contacting me."
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-300 text-gray-800 font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="mt-8 text-center text-white">
        <div className="bg-transparent p-6 rounded-lg shadow-md inline-block">
          <p className="text-lg font-semibold text-yellow-400">You can also reach me at:</p>
          <p className="mt-2">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:+919182363534" className="hover:underline">
              +91 91823 62534
            </a>
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:saimrigude@gmail.com"
              className="hover:underline"
            >
              saimrigude@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
