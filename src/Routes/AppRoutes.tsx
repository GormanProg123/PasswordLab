import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { PasswordStrength } from "../Pages/PasswordStrength";
import { PasswordGeneratorPage } from "../Pages/PasswordGeneratorPage";
import { DictionaryAttackPage } from "../Pages/DictionaryAttackPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/strength" element={<PasswordStrength />} />
      <Route path="/generate" element={<PasswordGeneratorPage />} />
      <Route path="/dictionary" element={<DictionaryAttackPage />} />
    </Routes>
  );
};
