import { useNavigate } from "react-router-dom";
import { FaKey, FaShieldAlt, FaSearch, FaBolt } from "react-icons/fa";
import shieldicon from "../../assets/security.png";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 text-center">
      <div className="mt-[10vh] flex flex-col items-center">
        <div className="bg-blue-600 rounded-full p-4 mb-4">
          <img src={shieldicon} alt="Shield Icon" className="w-16 h-16" />
        </div>
        <h1 className="text-6xl font-bold mb-6 text-white">Password-lib</h1>
        <p className="text-lg text-white max-w-xl mb-12 leading-relaxed">
          Your comprehensive toolkit for password security. Generate strong
          <br />
          passwords, verify their strength, and understand security
          <br />
          vulnerabilities through educational simulations.
        </p>
        <div className="flex gap-6 mb-20">
          <button
            onClick={() => navigate("/generate")}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg hover:brightness-110 transition"
          >
            <FaKey size={20} />
            Generate Password
          </button>
          <button
            onClick={() => navigate("/strength")}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaShieldAlt size={20} />
            Verify Strength
          </button>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Powerful Security Tools
        </h2>
        <p className="text-white text-lg">
          Everything you need to understand and improve your password security
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        <div className="border border-white/20 rounded-xl p-6 text-left text-white bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 mb-4 mx-auto">
            <FaKey size={20} />
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Password Generator
          </h3>
          <p className="text-sm text-center mb-4">
            Create cryptographically secure passwords with customizable options
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mb-6">
            <li>Customizable length and character sets</li>
            <li>Exclude ambiguous characters</li>
            <li>Multiple password generation</li>
            <li>Copy to clipboard functionality</li>
          </ul>
          <button
            onClick={() => navigate("/generate")}
            className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 transition"
          >
            Try Generator
          </button>
        </div>

        <div className="border border-white/20 rounded-xl p-6 text-left text-white bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mb-4 mx-auto">
            <FaShieldAlt size={20} />
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Password Verification
          </h3>
          <p className="text-sm text-center mb-4">
            Analyze password strength and get improvement suggestions
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mb-6">
            <li>Real-time strength analysis</li>
            <li>Entropy calculation</li>
            <li>Common pattern detection</li>
            <li>Security recommendations</li>
          </ul>
          <button
            onClick={() => navigate("/strength")}
            className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 transition"
          >
            Check Strength
          </button>
        </div>

        <div className="border border-white/20 rounded-xl p-6 text-left text-white bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 mb-4 mx-auto">
            <FaSearch size={20} />
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Dictionary Attack
          </h3>
          <p className="text-sm text-center mb-4">
            Educational simulation of password cracking attempts
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mb-6">
            <li>Simulated attack scenarios</li>
            <li>Time-to-crack estimates</li>
            <li>Common password database</li>
            <li>Educational insights</li>
          </ul>
          <button
            onClick={() => navigate("/dictionary")}
            className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 transition"
          >
            Run Simulator
          </button>
        </div>
      </div>
      <div className="mt-20 text-center px-4 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Password Security Best Practices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-left">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaBolt className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Use Long Passwords</h3>
                <p className="text-sm">
                  Aim for at least 12–16 characters to increase security
                  exponentially.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBolt className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Mix Character Types</h3>
                <p className="text-sm">
                  Combine uppercase, lowercase, numbers, and special characters.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBolt className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Avoid Personal Information</h3>
                <p className="text-sm">
                  Don't use names, birthdays, or other easily guessable
                  information.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaBolt className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Use Unique Passwords</h3>
                <p className="text-sm">
                  Never reuse passwords across multiple accounts or services.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBolt className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Enable 2FA</h3>
                <p className="text-sm">
                  Add an extra layer of security with two-factor authentication.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBolt className="mt-1 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Use a Password Manager</h3>
                <p className="text-sm">
                  Let tools handle the complexity while you remember one master
                  password.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
