import { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { PasswordStrengthMeter } from "../../components/PasswordStrengthMeter";
import { PasswordCrackTimeChart } from "../../components/PasswordStrengthMeter/layout/PasswordCrackTimeChart";

export const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="p-6 min-h-screen text-white space-y-8 mt-15">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="bg-blue-600 rounded-full p-4">
            <FaShieldAlt size={32} color="white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Password Verification</h1>
        <p className="text-gray-300">
          Analyze your password strength and get security recommendations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-700 rounded-lg p-6 space-y-4 bg-gray-800">
          <div>
            <h2 className="text-xl font-bold">Enter Password</h2>
            <p className="text-sm text-gray-400">
              Type your password to analyze its security strength
            </p>
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          {password && <PasswordStrengthMeter password={password} />}
        </div>

        <PasswordCrackTimeChart password={password} />
      </div>
    </div>
  );
};
