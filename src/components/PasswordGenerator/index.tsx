import { useState } from "react";

const generatePassword = (
  length: number,
  useNumbers: boolean,
  useSymbols: boolean,
  useUppercase: boolean
): string => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=<>?";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let charset = lowercaseChars;

  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;
  if (useUppercase) charset += uppercaseChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
};

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);

  const handleGenerate = () => {
    const generatedPassword = generatePassword(
      length,
      useNumbers,
      useSymbols,
      useUppercase
    );
    setPassword(generatedPassword);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Password Generator</h2>

      <div className="mb-4">
        <label>Length: </label>
        <input
          type="number"
          value={length}
          min={8}
          max={20}
          onChange={(e) => setLength(Number(e.target.value))}
          className="ml-2 p-1 border rounded"
        />
      </div>

      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          Include Numbers
        </label>
      </div>

      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />
          Include Symbols
        </label>
      </div>

      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={useUppercase}
            onChange={() => setUseUppercase(!useUppercase)}
          />
          Include Uppercase Letters
        </label>
      </div>

      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate Password
      </button>

      {password && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Generated Password</h3>
          <p>{password}</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">
          Why this password is secure:
        </h3>
        <ul>
          <li>
            - **Length**: Longer passwords are more secure because it increases
            the number of possible combinations.
          </li>
          <li>
            - **Numbers**: Including numbers makes it harder for attackers to
            guess the password, as it increases the character set.
          </li>
          <li>
            - **Symbols**: Special characters further increase password
            complexity, making brute-force attacks more difficult.
          </li>
          <li>
            - **Uppercase letters**: Using uppercase letters makes the password
            more diverse and harder to guess or brute-force.
          </li>
        </ul>
      </div>
    </div>
  );
};
