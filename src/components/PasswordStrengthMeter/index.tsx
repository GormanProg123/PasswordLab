import zxcvbn from "zxcvbn";

interface Props {
  password: string;
}

export const PasswordStrengthMeter = ({ password }: Props) => {
  const strength = zxcvbn(password);

  const scoreLabel = [
    "Very weak",
    "Weak",
    "Medium",
    "Reliable",
    "Very reliable",
  ];

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Password strength assessment</h2>
      {password && (
        <div>
          <p>
            Evaluation: <strong>{scoreLabel[strength.score]}</strong>
          </p>
          <p>
            Hints:{" "}
            {strength.feedback.suggestions.join(" | ") ||
              "The password looks good"}{" "}
          </p>
        </div>
      )}
    </div>
  );
};
