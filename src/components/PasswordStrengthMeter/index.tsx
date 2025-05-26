import zxcvbn from "zxcvbn";

interface Props {
  password: string;
}

function calculateEntropy(password: string): number {
  let charsetSize = 0;
  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32;
  return password.length * Math.log2(charsetSize || 1);
}

export const PasswordStrengthMeter = ({ password }: Props) => {
  const { score, guesses_log10, crack_times_display } = zxcvbn(password);
  const scoreLabel = [
    "Very Weak",
    "Weak",
    "Medium",
    "Reliable",
    "Very Reliable",
  ];

  const percent = ((score + 1) / 5) * 100;
  const length = password.length;

  const scoreColor =
    score < 2
      ? "text-red-500"
      : score === 2
      ? "text-yellow-500"
      : score === 3
      ? "text-blue-500"
      : "text-green-500";

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-1">
          Strength Score
        </label>
        <div className="flex items-center justify-between">
          <div className="relative w-full h-4 bg-gray-600 rounded mr-2">
            <div
              className="h-4 rounded transition-all duration-300"
              style={{
                width: `${percent}%`,
                backgroundColor:
                  score < 2
                    ? "#ef4444"
                    : score === 2
                    ? "#f59e0b"
                    : score === 3
                    ? "#3b82f6"
                    : "#22c55e",
              }}
            />
          </div>
          <span className={`text-sm font-semibold ${scoreColor}`}>
            {scoreLabel[score]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300 mt-4">
        <div className="text-white font-medium">100% secure</div>
        <div></div>

        <div>LENGTH:</div>
        <div className="text-right">{length} characters</div>

        <div>ENTROPY:</div>
        <div className="text-right">
          {calculateEntropy(password).toFixed(1)} bits
        </div>

        <div>TIME TO CRACK:</div>
        <div className="text-right">
          {crack_times_display.offline_slow_hashing_1e4_per_second}
        </div>

        <div>LOG10(GUESSES):</div>
        <div className="text-right">{guesses_log10.toFixed(1)}</div>
      </div>
    </div>
  );
};
