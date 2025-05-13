import { useState } from "react";
import { PasswordStrengthMeter } from "../../components/PasswordStrengthMeter";
import { PasswordCrackTimeChart } from "../../components/PasswordStrengthMeter/layout/PasswordCrackTimeChart";

export const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Password security check</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full p-2 border rounded mb-4"
      />

      {password && (
        <>
          <PasswordStrengthMeter password={password} />
          <PasswordCrackTimeChart password={password} />
        </>
      )}
    </div>
  );
};
