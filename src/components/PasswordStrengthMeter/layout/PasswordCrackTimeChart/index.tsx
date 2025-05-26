import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

interface Props {
  password: string;
}

interface CrackTimeResponse {
  score: number;
  strengthLabel: string;
  crackTimesSeconds: {
    onlineThrottling100PerHour: number;
    onlineNoThrottling10PerSecond: number;
    offlineSlowHashing1e4PerSecond: number;
    offlineFastHashing1e10PerSecond: number;
  };
  crackTimesDisplay: {
    onlineThrottling100PerHour: string;
    onlineNoThrottling10PerSecond: string;
    offlineSlowHashing1e4PerSecond: string;
    offlineFastHashing1e10PerSecond: string;
  };
  feedback: {
    warning: string;
    suggestions: string[];
  };
}

const formatTime = (seconds: number): string => {
  if (seconds < 60) return `${seconds.toFixed(0)} sec`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)} min`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} hr`;
  if (seconds < 31536000) return `${(seconds / 86400).toFixed(1)} days`;
  return `${(seconds / 31536000).toFixed(1)} years`;
};

export const PasswordCrackTimeChart = ({ password }: Props) => {
  const [data, setData] = useState<CrackTimeResponse | null>(null);

  useEffect(() => {
    if (!password) return;

    axios
      .post<CrackTimeResponse>(
        `${import.meta.env.VITE_API_URL}/password/crack-time`,
        {
          password,
        }
      )
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Error fetching crack time data", err);
      });
  }, [password]);

  const checks = [
    { label: "At least 12 characters", passed: password.length >= 12 },
    { label: "Contains uppercase letters", passed: /[A-Z]/.test(password) },
    { label: "Contains lowercase letters", passed: /[a-z]/.test(password) },
    { label: "Contains numbers", passed: /\d/.test(password) },
    {
      label: "Contains special characters",
      passed: /[^A-Za-z0-9]/.test(password),
    },
    {
      label: "Not a common password",
      passed: data ? !data.feedback.warning.includes("This is a top-10") : true,
    },
    { label: "No repeated characters", passed: !/(.)\1{2,}/.test(password) },
    {
      label: "No sequential characters",
      passed: !/abcd|1234|qwerty/i.test(password),
    },
  ];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-6">
      {!password ? (
        <p className="text-center text-gray-400">
          🔐 Enter a password on the left to see the cracking time analysis.
        </p>
      ) : data ? (
        <>
          <Bar
            data={{
              labels: [
                "Online (throttled 100/h)",
                "Online (10/sec)",
                "Offline (slow hash)",
                "Offline (fast hash)",
              ],
              datasets: [
                {
                  label: "Estimated time to crack",
                  data: [
                    data.crackTimesSeconds.onlineThrottling100PerHour,
                    data.crackTimesSeconds.onlineNoThrottling10PerSecond,
                    data.crackTimesSeconds.offlineSlowHashing1e4PerSecond,
                    data.crackTimesSeconds.offlineFastHashing1e10PerSecond,
                  ],
                  backgroundColor: ["#f87171", "#fb923c", "#60a5fa", "#4ade80"],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (ctx) => `≈ ${formatTime(ctx.raw as number)}`,
                  },
                },
                title: {
                  display: true,
                  text: "Estimated Hacking Time",
                  font: { size: 16 },
                },
              },
              scales: {
                y: {
                  ticks: {
                    callback: (v: number | string) => formatTime(Number(v)),
                  },
                },
              },
            }}
          />

          <div>
            <h3 className="font-semibold mb-2">Security Checks</h3>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {checks.map((c, i) => (
                <li
                  key={i}
                  className={c.passed ? "text-green-400" : "text-red-400"}
                >
                  {c.label}
                </li>
              ))}
            </ul>
          </div>

          {data.feedback.suggestions.length > 0 && (
            <div className="bg-yellow-200 text-yellow-900 p-4 rounded">
              <strong className="block mb-1">⚠ Recommendations:</strong>
              <ul className="list-disc list-inside text-sm">
                {data.feedback.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-400 text-sm">Analyzing password...</p>
      )}
    </div>
  );
};
