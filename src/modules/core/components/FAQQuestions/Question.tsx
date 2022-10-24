import { ReactNode, useState } from 'react';

interface QuestionProps {
  question: string;
  answer: ReactNode;
}

const Question = ({ question, answer }: QuestionProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="mt-[24px]">
      <div
        onClick={() => setOpened(!opened)}
        className="flex justify-between items-center cursor-pointer"
      >
        <p
          className={`font-roboto  font-bold ${
            opened ? 'text-[#5a9dbf] text-[36px]' : 'text-white text-[27px]'
          }`}
        >
          {question}
        </p>
        <p className="font-roboto font-bold text-[28px] text-[#5a9dbf]">
          {opened ? '-' : '+'}
        </p>
      </div>
      {opened && <p className="font-roboto text-white text-[20px]">{answer}</p>}
    </div>
  );
};

export default Question;
