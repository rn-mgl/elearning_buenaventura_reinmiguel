import React from "react";
import Nav from "../COMPONTENTS/Nav";
import questions from "../questions";
export default function Test() {
  const [score, setScore] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [passed, setPassed] = React.useState(false);
  const [answers, setAnswers] = React.useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });
  const handleCheck = ({ name, value }) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    setSubmitted((prev) => !prev);
    questions.forEach((ans) => {
      setScore((prev) => (ans.answer === answers[ans.id] ? prev + 1 : prev));
    });
  };

  const handleClear = () => {
    setAnswers({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "" });
    setScore(0);
    setSubmitted(false);
    window.location.reload();
  };

  React.useEffect(() => {
    setPassed(score >= 7);
  }, [score]);

  return (
    <div>
      <Nav />
      <div className="mx-auto w-[60vw] mt-28">
        {submitted && !passed && (
          <div className="fixed flex flex-col w-96 bg-white border-2 shadow-md font-lexend text-lg items-center justify-center p-3 rounded-lg gap-5 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <div className="font-semibold">
              You got <span className="text-pr-orange">{score} points.</span> Try again?
            </div>
            <div>
              Passing score is <span className="text-pr-orange">7 points and above.</span>
            </div>
            <div className="flex items-center justify-center cursor-pointer gap-10 ">
              <div
                onClick={handleClear}
                className="font-poppins hover:bg-pr-yellow px-5 py-1 rounded-md"
              >
                No
              </div>
              <div
                onClick={handleClear}
                className="font-poppins hover:bg-pr-yellow px-5 py-1 rounded-md"
              >
                Yes
              </div>
            </div>
          </div>
        )}
        {submitted && passed && (
          <div
            onClick={() => handleClear()}
            className="fixed flex flex-col w-96 bg-white border-2 shadow-md font-lexend text-lg items-center justify-center p-3 rounded-lg gap-5 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          >
            <div>
              You got <span className="text-pr-orange">{score} points.</span> You passed!
            </div>
            <div>Topic 2 is now loading...</div>
          </div>
        )}
        <form>
          {questions.map((q) => {
            return (
              <div key={q.id}>
                <div className="flex flex-col mb-5 gap-3 border-2 p-5 rounded-lg">
                  <div className="flex gap-5 font-lexend text-lg">
                    <div>{q.id}.</div>
                    <div>{q.question}</div>
                  </div>

                  <div className="ml-10 flex gap-10 font-poppins text-lg">
                    <label className="flex items-center justify-center gap-2 cursor-pointer">
                      True
                      <input
                        className={` ${answers[q.id] && "bg-pr-orange text-white"} cursor-pointer`}
                        checked={answers[q.id] === "true"}
                        id={q.id}
                        name={q.id}
                        type={"radio"}
                        value={true}
                        onChange={(e) => handleCheck(e.target)}
                      />
                    </label>
                    <label className="flex items-center justify-center gap-2 cursor-pointer">
                      False
                      <input
                        className={`${answers[q.id] && "bg-pr-orange text-white"} cursor-pointer`}
                        checked={answers[q.id] === "false"}
                        id={q.id}
                        name={q.id}
                        type={"radio"}
                        value={false}
                        onChange={(e) => handleCheck(e.target)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </form>
      </div>
      <div
        onClick={handleSubmit}
        className="bg-pr-black w-60 mb-20 text-center mx-auto cursor-pointer hover:scale-105 transition-all py-2 px-5 text-xl rounded-md font-lexend text-white"
      >
        SUBMIT
      </div>
    </div>
  );
}
