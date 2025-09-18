import { useEffect, useState } from "react";
import Logo from "../../assets/purplezone.png";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const sentenceSets = [
    [
      "She go to school every day.",
      "He have a big car.",
      "They was playing football.",
    ],
    [
      "I has two dog.",
      "The book are on the table.",
      "We was going to the park.",
    ],
    [
      "She are my best friend.",
      "They is working hard.",
      "It have four legs.",
    ],
    [
      "We was happy yesterday.",
      "He don’t likes pizza.",
      "I am goes to market.",
    ],
  ];
  const correctAnswerSets = [
    [
      "She goes to school every day.",
      "He has a big car.",
      "They were playing football.",
    ],
    [
      "I have two dogs.",
      "The book is on the table.",
      "We were going to the park.",
    ],
    [
      "She is my best friend.",
      "They are working hard.",
      "It has four legs.",
    ],
    [
      "We were happy yesterday.",
      "He doesn’t like pizza.",
      "I am going to the market.",
    ],
  ];
  

  const [setIndex, setSetIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [sentences, setSentences] = useState([...sentenceSets[0]]);
  const navigate = useNavigate();

    useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sentenceSets.length);
    setSetIndex(randomIndex);
    setSentences([...sentenceSets[randomIndex]]);
  }, []);

  const handleChange = (index, value) => {
    const updated = [...sentences];
    updated[index] = value;
    setSentences(updated);
  };

  const handleAction = (e) => {
    e.preventDefault();
    if (isEditing) {
      let score = 0;
      sentences.forEach((s, i) => {
        if (s.trim() === correctAnswerSets[setIndex][i]) score++;
      });
      navigate("/result", {
        state: { username: "Harshada", sentences, correctAnswers:correctAnswerSets[setIndex], score },
      });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Logo */}
      <div className="w-full h-full px-20 py-3">
        <img src={Logo} alt="Logo" className="h-8 object-contain" />
      </div>

      <div className="bg-gray-700 flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleAction}
          className="shadow-lg py-16 px-10 rounded-md bg-gray-500 w-[480px] flex flex-col"
        >
          {/* Header */}
          <header className="text-md font-semibold text-white mb-10">
            Test {setIndex + 1}
          </header>

          {/* Inputs */}
          <div className="space-y-10">
            {sentences.map((sentence, index) => (
              <input
                key={index}
                type="text"
                value={sentence}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border-b-2 focus:outline-none bg-gray-500 disabled:bg-gray-500 disabled:text-white ${
                  isEditing
                    ? "border-white text-white"
                    : "border-gray-400 text-gray-500 bg-gray-100"
                }`}
              />
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-white bg-opacity text-gray-600 hover:text-black w-[100px] text-sm rounded-md px-4 py-2 transition"
          >
            {isEditing ? "Submit" : "Edit"}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
