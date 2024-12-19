import { Field } from "@headlessui/react/dist/components/field/field";
import React from "react";

function Confirmation({ registree }: any) {
  return (
    <div className="container max-w-fit mr-auto px-4">
      <h1 className="text-3xl font-bold mt-4">
        Thank you for registering, {registree?.firstName}!{" "}
      </h1>
      <div className="mt-4">
        <p className="text-lg">Following is the information you provided:</p>
        <div className="mt-4">
          <p>
            <strong>Name:</strong> {registree?.firstName} {registree?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {registree?.email}
          </p>
          <p>
            <strong>Phone:</strong> ({registree?.countryCode}){registree?.phone}
          </p>
          <p>
            <strong>Date of Birth:</strong> {registree?.birthDate}
          </p>
          <p>
            <strong>Address:</strong> {registree?.streetName} {registree?.city}{" "}
            {registree?.postalCode} {registree?.country}
          </p>
          <p>
            <strong>Badminton Skill Level:</strong> {registree?.badmintonLevel}
          </p>
        </div>
        <p className="text-lg mt-4">
          We will send you an email at <strong>{registree?.email}</strong> with
          further instructions.
        </p>
        <Field className="flex mt-4">
          <button
            type="button"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back
          </button>
        </Field>
      </div>
    </div>
  );
}

export default Confirmation;
