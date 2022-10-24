import { FAQQA } from '../../constants/FAQQ&A';
import Question from './Question';
const FAQQuestions = () => {
  return (
    <div className="">
      {FAQQA.map((faq) => {
        return <Question key={faq.question} {...faq} />;
      })}
    </div>
  );
};

export default FAQQuestions;
