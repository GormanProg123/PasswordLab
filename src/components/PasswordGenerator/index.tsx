import { useState } from "react";
import axios from "axios";
import { FaKey, FaSync, FaCopy } from "react-icons/fa";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/password/generate`,
        {
          length,
          useNumbers,
          useSymbols,
          useUppercase,
        }
      );
      setPassword(response.data.password);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Error generation password.");
    }
  };

  const handleCopy = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className=" text-white p-8 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-green-500 p-4 rounded-full mb-4">
          <FaKey className="text-white text-3xl" />
        </div>
        <h2 className="text-3xl font-bold mb-1 text-center">
          Password Generator
        </h2>
        <p className="text-gray-300 text-center">
          Generate cryptographically secure passwords with customizable options
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Generator Settings</h3>
          <p className="text-gray-300 mb-4">
            Customize your password requirements
          </p>

          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Password Length: {length}
            </label>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Character Types</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
                />
                <span>Include Numbers</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={useSymbols}
                  onChange={() => setUseSymbols(!useSymbols)}
                />
                <span>Include Symbols</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={useUppercase}
                  onChange={() => setUseUppercase(!useUppercase)}
                />
                <span>Include Uppercase Letters</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-black text-white py-2 px-4 rounded flex items-center justify-center space-x-2 "
          >
            <FaSync />
            <span>Generate Password</span>
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 min-h-[500px]">
          <h3 className="text-xl font-bold mb-2">Generated Password</h3>
          <p className="text-gray-300 mb-4">
            Your secure password is ready to use
          </p>

          <div className="flex items-center border border-gray-600 rounded px-4 py-2 justify-between mb-4 bg-gray-800">
            <p className="break-all">{password || "••••••••••••"}</p>
            {password && (
              <button onClick={handleCopy} title="Copy password">
                <FaCopy className="text-white ml-2 cursor-pointer hover:text-green-400" />
              </button>
            )}
          </div>

          <p className="text-gray-400 mb-2">Length: {password.length || 0}</p>

          <div className="bg-blue-800 p-4 rounded text-sm">
            <p className="font-semibold mb-2">Security Tips:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Store passwords in a secure password manager</li>
              <li>Never reuse passwords across multiple accounts</li>
              <li>Enable two-factor authentication when available</li>
              <li>Longer passwords are exponentially more secure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
