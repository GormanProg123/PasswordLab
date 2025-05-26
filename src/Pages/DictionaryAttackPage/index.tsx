import { FaSearch } from "react-icons/fa";
import { DictionaryAttack } from "../../components/DictionaryAttackDemo";

export const DictionaryAttackPage = () => {
  return (
    <div className="pt-16 px-6 pb-6 space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="bg-red-600 rounded-full p-4">
            <FaSearch size={32} color="white" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Dictionary Attack Simulation</h1>
      </div>

      <DictionaryAttack />
    </div>
  );
};
