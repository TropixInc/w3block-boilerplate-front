import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BackButton from '../../src/modules/core/components/BackButton/BackButton';
import FAQQuestions from '../../src/modules/core/components/FAQQuestions/FAQQuestions';
import Footer from '../../src/modules/core/components/Footer/Footer';
import Header from '../../src/modules/core/components/Header/Header';
const FAQ = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="video-bg-adjustment absolute -z-[5] w-screen h-screen"></div>
        <div className="w-screen h-screen absolute -z-10 bg-brand-primary">
          <video
            className="w-screen object-cover sm:h-screen opacity-50"
            muted
            loop
            autoPlay
            playsInline={true}
          >
            <source src="./images/hero_video.mp4" />
          </video>
        </div>

        <div className="container mx-auto pt-[54px] px-4 sm:px-2">
          <BackButton path="Home - FAQ" />
          <div className="max-w-[350px]">
            <h2 className="text-[#5a9dbf] font-roboto text-[48px] font-bold mt-[150px]">
              Tire suas dúvidas
            </h2>
            <p className="text-[20px] text-white leading-6 mt-8 font-roboto">
              Antes de mergulhar, tire todas as suas dúvidas em nosso faq. Caso
              não esteja contemplada, nos contate através do Discord ou Email:
              <a
                className="text-underline cursor-pointer"
                href="mailto:suporte@primesea.io"
              >
                suporte@primesea.io
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="background-faq w-screen pt-[170px]">
        <div className="container mx-auto px-4 sm:px-2">
          <div className="max-w-[700px]">
            <FAQQuestions />
          </div>
        </div>

        <Footer className="bg-transparent mt-8 pt-[240px]" />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? '')),
    },
  };
};

export default FAQ;
