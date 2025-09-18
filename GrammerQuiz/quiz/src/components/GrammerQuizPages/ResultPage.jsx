import { useLocation } from "react-router-dom";
import Logo from "../../assets/purplezone.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

const ResultPage = () => {
    const location = useLocation();
    const state = location.state || {};
    const username = state.username || "User";
    const sentences = Array.isArray(state.sentences) ? state.sentences : [
        "She go to school every day.",
        "He have a big car.",
        "They was playing football.",
    ];
    const correctAnswers = Array.isArray(state.correctAnswers) ? state.correctAnswers : [
        "She goes to school every day.",
        "He has a big car.",
        "They were playing football.",
    ];
    const score = typeof state.score === "number" ? state.score : 0;

    return (
        <div className="flex flex-col gap-2">
            {/* Logo */}
            <div className="w-full h-full px-20 py-3">
                <img src={Logo} alt="Logo" className="h-8 object-contain" />
            </div>

            <div className="bg-gray-700 flex items-center justify-center min-h-screen text-sm">
                <div className="shadow-lg py-16 px-10 rounded-md bg-gray-500 w-[480px] flex flex-col">
                    {/* Header with username */}
                    <header className="flex items-center gap-2 text-md font-semibold text-white mb-10">
                        <span className="text-green-400">Congratulations</span> <span className="text-white">{username}</span>
                    </header>

                    {/* Results */}
                    <div className="space-y-10">
                        {sentences.map((sentence, index) => {
                            const isCorrect = sentence.trim() === correctAnswers[index];
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b px-1 border-white pb-2"
                                >
                                    <span
                                        className="text-sm text-white"
                                    >
                                        {sentence}
                                    </span>
                                    {isCorrect && correctAnswers ? (
                                        <IoCheckmarkCircle className="h-5 w-5 text-green-400" />
                                    ) : (
                                        <RxCrossCircled className="h-5 w-5 text-gray-900" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Score */}
                    <div className="flex justify-start mt-10 text-white text-sm font-semibold">
                        You successfully corrected: <span className="text-green-400 ml-2">{score}/{sentences.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
