import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Config/FireBase";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
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
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate("/auth/register")}
          >
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
};
