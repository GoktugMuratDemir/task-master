import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Config/FireBase";
import { FormInputGroup } from "../../Components/Form/FormInputGroup";
import { FormSubmitButton } from "../../Components/Form/FormSubmitButton";
import { AuthNavigateButton } from "../../Components/AuthNavigateButton";

interface FormData {
  email: string;
  password: string;
}

export const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormInputGroup
            type="email"
            value={formData.email}
            label="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <FormInputGroup
            type="password"
            value={formData.password}
            label="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <FormSubmitButton title="Register" />
        </form>
        <AuthNavigateButton
          title="Do you have a account? Login"
          to="/auth/login"
        />
      </div>
    </div>
  );
};
