import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GrValidate } from "react-icons/gr";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_htv4wjd", "template_6h1zskd", form.current, {
        publicKey: "GsckQBm7N_BqqByNj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage(true);
          setFormData({
            // Réinitialiser les champs du formulaire
            from_name: "",
            from_email: "",
            message: "",
          });
          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000); 
        },
        (error) => {
          console.log("FAILED...", error);
          setErrors({ email: "Failed to send email. Please try again later." });
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.from_name) {
      newErrors.from_name = "Please enter your name";
    }
    if (!formData.from_email) {
      newErrors.from_email = "Please enter your email";
    }
    if (!formData.message) {
      newErrors.message = "Please enter your message";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    sendEmail(e);
  };

  return (
    <div id="Contact">
    <div className="relative pt-28 lg:px-56 px-10 lg:py-36 py-14 flex flex-col items-center">
      <h1 className="lg:text-[60px] mb-8 text-[35px] title lg:mt-10 mt-0">
        {t("titreContact")} <span className="text-textPinkcustom">{t("txtMe")}</span>
      </h1>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="lg:w-3/4 w-full max-w-xl mx-auto mt-8 bg-white/30 p-8 rounded-md shadow-xl shadow-textPinkcustom/55"
      >
        <div className="mb-6">
          <label
            htmlFor="from_name"
            className="block text-sm font-medium text-gray-700"
          >
            {t("txtname")}
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
          {errors.from_name && (
            <p className="text-red-500">{errors.from_name}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="from_email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("txtEmail")}
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
          {errors.from_email && (
            <p className="text-red-500">{errors.from_email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(75, 19, 79, 0.8), rgba(201, 75, 75, 0.6))",
          }}
        >
          {t("btnSend")}
        </button>
      </form>
      {successMessage && (
        <div className="absolute bottom-0 mb-10 mt-3 bg-white/55 border-2 text-black/60 text-xl shadow-md shadow-textNude p-2 rounded-full flex items-center justify-center animate-bounce">
          <GrValidate className="h-6 w-6 mr-2 text-green-400" />
          <p>{t("msgSucces")}</p>
        </div>
      )}
    </div>
    </div>
  );
};
