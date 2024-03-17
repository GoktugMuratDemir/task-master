import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Config/FireBase";

import { FormInputGroup } from "../../Components/Form/FormInputGroup";
import { FormSubmitButton } from "../../Components/Form/FormSubmitButton";
import { AuthNavigateButton } from "../../Components/AuthNavigateButton";
import { toast } from "react-toastify";

interface FormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login Successfull!");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          <FormSubmitButton title="Login" />
        </form>

        <AuthNavigateButton
          title="Don't have an account? Register"
          to="/auth/register"
        />
      </div>
    </div>
  );
};
