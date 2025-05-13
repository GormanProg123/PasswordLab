import { Bar } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import zxcvbn from "zxcvbn";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

interface Props {
  password: string;
}

export const PasswordCrackTimeChart = ({ password }: Props) => {
  const result = zxcvbn(password);
  const { crack_times_seconds } = result;

  const data: ChartData<"bar"> = {
    labels: [
      "Online (throttled)",
      "Online (no throttling)",
      "Offline (slow hashing)",
      "Offline (fast hashing)",
    ],
    datasets: [
      {
        label: "Hacking time (in seconds)",
        data: [
          Number(crack_times_seconds.online_throttling_100_per_hour),
          Number(crack_times_seconds.online_no_throttling_10_per_second),
          Number(crack_times_seconds.offline_slow_hashing_1e4_per_second),
          Number(crack_times_seconds.offline_fast_hashing_1e10_per_second),
        ],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Estimated hacking time</h3>
      <Bar data={data} />
    </div>
  );
};
