/* eslint-disable @next/next/no-img-element */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CTAClub from '../../src/modules/club/components/CTAClub/CTAClub';
import CTASocial from '../../src/modules/club/components/CTASocial/CTASocial';
import KnowMoreClub from '../../src/modules/club/components/KnowMoreClub/KnowMoreClub';
import Presentantion from '../../src/modules/club/components/Presentantion/Presentation';
import Teams from '../../src/modules/club/components/Teams/Teams';
import BackButton from '../../src/modules/core/components/BackButton/BackButton';
import CTAPrimesea from '../../src/modules/core/components/CTAPrimesea/CTAPrimesea';
import Footer from '../../src/modules/core/components/Footer/Footer';
import Header from '../../src/modules/core/components/Header/Header';
import VideoContainer from '../../src/modules/core/components/VideoContainer/VideoContainer';

const ClubPage = () => {
  return (
    <div>
      <Header />
      <div className="">
        <VideoContainer>
          <div className="container mx-auto px-4 sm:px-2 pt-[54px]">
            <BackButton path="Home - Foodbusters" />
            <Presentantion />
          </div>
          <div className="bg-gradient-to-b from-brand-primary to-black">
            <div className="container mx-auto">
              <CTAClub className="mt-[100px]" />
              <KnowMoreClub className="mt-[150px]" />
              <Teams className="mt-[150px]" />
              <CTASocial className="mt-[180px]" />
            </div>
            <CTAPrimesea className="mt-[150px]" />
            <Footer className="mt-[150px]" />
          </div>
        </VideoContainer>
      </div>
    </div>
  );
};

export async function getServerSideProps({ locale, params }) {
  return {
    // Passed to the page component as props
    props: {
      ...(await serverSideTranslations(locale ?? '')),
      club: params.club ?? '',
    },
  };
}

export default ClubPage;
