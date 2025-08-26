import { useTheme } from "../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { lightMode, setLightMode } = useTheme();

  return (
    <button
      onClick={() => setLightMode(!lightMode)}
      className="cursor-pointer h-[30px] text-black"
    >
      {lightMode ? (
        <div className="flex items-center justify-between bg-gray-200 border border-gray-400 rounded-full h-[30px] px-[5px] gap-2 font-bold text-sm">
          <div className="bg-blue-600 w-[26px] h-[26px] rounded-full"></div>
          <span>Claro</span>
        </div>
      ) : (
          <div className="flex flex-row-reverse items-center justify-between bg-gray-200 border border-gray-400 rounded-full h-[30px] px-[5px] gap-2 font-bold text-sm">
            <div className="bg-blue-600 w-[26px] h-[26px] rounded-full"></div>
            <span>Escuro</span>
          </div>
      )}
    </button>
  );
};
