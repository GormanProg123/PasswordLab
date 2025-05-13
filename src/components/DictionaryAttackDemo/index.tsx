import { useState } from "react";
import zxcvbn from "zxcvbn";

import type { ZXCVBNResult } from "zxcvbn";

export const DictionaryAttack = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<ZXCVBNResult | null>(null);

  const dictionaryWords = [
    "password",
    "123456",
    "qwerty",
    "letmein",
    "welcome",
    "admin",
    "iloveyou",
    "dragon",
    "monkey",
    "sunshine",
  ];

  const handleCheckPassword = (password: string) => {
    const strength = zxcvbn(password);
    setResult(strength);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    handleCheckPassword(newPassword);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dictionary Attack</h2>
      <div className="mb-4">
        <label htmlFor="password-input">Enter Password:</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">Common Dictionary Words</h3>
        <ul className="list-disc pl-6">
          {dictionaryWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">Password Strength</h3>
          <p>
            Evaluation:{" "}
            <strong>
              {result.feedback.suggestions.length > 0
                ? result.feedback.suggestions.join(" | ")
                : "This password is good"}
            </strong>
          </p>
          <p>
            Estimated Crack Time:{" "}
            <strong>
              {result.crack_times_display.online_no_throttling_10_per_second}
            </strong>
          </p>
          <p>
            This password contains common dictionary words and is vulnerable to
            dictionary-based attacks, which are fast and effective for weak
            passwords.
          </p>
        </div>
      )}
    </div>
  );
};
