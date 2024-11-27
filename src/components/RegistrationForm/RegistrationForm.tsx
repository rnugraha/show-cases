import { Field, Fieldset, Legend } from "@headlessui/react";
import React from "react";

function RegistrationForm() {
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", e.target);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <div className="container max-w-screen-md mx-auto px-4 border border-gray-300 rounded-lg shadow-lg py-5 bg-slate-50">
      <h1 className="text-4xl text-center mt-8 text-slate-600 font-extralight">
        Badminton Registration Form
      </h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <Fieldset className="space-y-4 mb-10">
          <Legend className="text-lg font-bold">Personal Details</Legend>
          <Field className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field className="mb-0">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </Field>
            <Field className="mb-0">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </Field>
          </Field>
          <Field className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@email.com "
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </Field>
          <Field className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Field className="flex mt-1">
              <select
                id="countryCode"
                name="countryCode"
                required
                className="block w-1/4 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+91">🇮🇳 +91</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="0666666666"
                required
                pattern="[0-9]{10}"
                title="Enter only numeric values without any spaces"
                maxLength={10}
                className="block w-3/4 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </Field>
          </Field>
          <Field className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field className="mb-0">
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-700"
              >
                Birth Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                max={minDate.toISOString().split("T")[0]}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </Field>
            <Field className="mb-0">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-Binary</option>
              </select>
            </Field>
          </Field>
        </Fieldset>

        <Fieldset className="space-y-4 mb-10">
          <Legend className="text-lg font-bold">Contact Details</Legend>
          <Field className="mb-4">
            <label
              htmlFor="streetName"
              className="block text-sm font-medium text-gray-700"
            >
              Street Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="streetName"
              name="streetName"
              required
              placeholder="123 Main St"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </Field>
          <Field className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <Field className="col-span-3 mb-0">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="New York"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </Field>
            <Field className="col-span-2 mb-0">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                required
                placeholder="12345"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </Field>
          </Field>
          <Field className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">-- Select Country --</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
              <option value="CA">Canada</option>
            </select>
          </Field>
        </Fieldset>
        <Fieldset className="space-y-4 mb-10">
          <Legend className="text-lg font-bold">Badminton Level</Legend>
          <Field className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Give indication your badminton skill{" "}
              <span className="text-red-500">*</span>
            </label>
            <Field className="mt-2 space-y-2">
              <Field className="flex items-center">
                <input
                  id="beginner"
                  name="badmintonLevel"
                  type="radio"
                  value="beginner"
                  required
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor="beginner"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Beginner
                </label>
              </Field>
              <Field className="flex items-center">
                <input
                  id="intermediate"
                  name="badmintonLevel"
                  type="radio"
                  value="intermediate"
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor="intermediate"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Intermediate
                </label>
              </Field>
              <Field className="flex items-center">
                <input
                  id="advanced"
                  name="badmintonLevel"
                  type="radio"
                  value="advanced"
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor="advanced"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Advanced
                </label>
              </Field>
            </Field>
          </Field>
        </Fieldset>

        <Field className="mb-4">
          <hr></hr>
          <Field className="mt-5 space-y-2">
            <Field className="flex items-center">
              <input
                id="membershipRules"
                name="membershipRules"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label
                htmlFor="membershipRules"
                className="ml-2 block text-sm text-gray-900"
              >
                I confirm that information I provided is true and that I am at
                least 18 years old.
              </label>
            </Field>
          </Field>
        </Field>
        <Field className="flex justify-end">
          <button
            type="reset"
            className="mr-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </Field>
      </form>
    </div>
  );
}

export default RegistrationForm;
