import { useState } from "react";

type PasswordCheckResult = {
  result: {
    feedback: {
      suggestions: string[];
    };
    crack_times_display: {
      online_no_throttling_10_per_second: string;
    };
  };
  containsDictionaryWord: boolean;
  dictionaryWords: string[];
  message: string;
};

export const DictionaryAttack = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<PasswordCheckResult | null>(null);
  const [loading, setLoading] = useState(false);

  const checkPasswordRemote = async (password: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/password/check`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const data: PasswordCheckResult = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error checking password:", error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length > 0) {
      checkPasswordRemote(newPassword);
    } else {
      setResult(null);
    }
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
          autoComplete="off"
        />
      </div>

      {loading && <p>Checking password strength...</p>}

      {result && (
        <>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Common Dictionary Words</h3>
            <ul className="list-disc pl-6">
              {result.dictionaryWords.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium">Password Strength</h3>
            <p>
              Evaluation:{" "}
              <strong>
                {result.result.feedback.suggestions.length > 0
                  ? result.result.feedback.suggestions.join(" | ")
                  : "This password is good"}
              </strong>
            </p>
            <p>
              <strong>{result.message}</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
};
