import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BackButton from '../../src/modules/core/components/BackButton/BackButton';
import Footer from '../../src/modules/core/components/Footer/Footer';
import Header from '../../src/modules/core/components/Header/Header';

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="fixed bg-brand-primary -z-20 h-screen w-screen top-0"></div>
        <div className="video-bg-adjustment absolute -z-[5] w-screen h-screen min-h-screen"></div>
        <div className="w-screen min-h-screen absolute -z-10 bg-brand-primary">
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
          <BackButton path="Home - Política de privacidade" />
          <h2 className="text-[#5a9dbf] font-roboto text-[47px] font-bold mt-[150px]">
            Privacy Policy
          </h2>
          <p className="text-white font-roboto text-[20px] mt-[70px] ">
            Last Updated september 28th, 2022
            <br />
            <br />
            Welcome to the website (the “Site”) of W3BLOCK, INC (“PrimeSea,”
            “we,” “us,” or “our”). PrimeSea provides the PrimeSea NFT,
            associated Perks, and the related platform and events (collectively,
            including the Site, the “Service”).
            <br />
            <br />
            This Privacy Policy explains what personal information we collect,
            how we use and share that information, and your choices concerning
            our information practices. This Privacy Policy is incorporated into
            and forms part of our Terms of Service. Capitalized terms not
            defined in this Privacy Policy have the meaning given those terms in
            the Terms of Service.
            <br />
            <br />
            Before using the Service or submitting any personal information to
            PrimeSea, please review this Privacy Policy carefully and contact us
            if you have any questions. By using the Service, you agree to the
            practices described in this Privacy Policy. If you do not agree to
            this Privacy Policy, please do not access the Site or otherwise use
            the Service.
            <br />
            <br />
            <b>1. PERSONAL INFORMATION COLLECTION</b>
            <br />
            <br />
            Personal Information You Provide: We collect the following
            categories of personal information from you:
            <br />
            <br />
            Identification Information: We collect your name, email address, and
            shipping address. Wallet Information: We collect the cryptocurrency
            wallet IDs you provide to us when you buy, store, and transfer
            PrimeSea NFTs. Community Information: We collect information
            relating to your participation in the PrimeSea community, including
            the events you attend, the Perks you redeem, and any information you
            share through our Discord community platform. Communication
            Information: We may collect information when you contact us with
            questions or concerns and when you voluntarily respond to
            questionnaires, surveys or requests for market research seeking your
            opinion and feedback. Social Media Information: We maintain a social
            media presence on platforms like Instagram, Facebook, Twitter, and
            LinkedIn (“Social Media Pages”). When you interact with us on social
            media, we may receive personal information that you provide or make
            available to us based on your settings, such as your contact
            details. In addition, the companies that host our Social Media Pages
            may provide us with aggregate information and analytics regarding
            the use of our Social Media Pages. We may also receive information
            from social media platforms if you link your social media accounts
            with your PrimeSea account. The type of information we receive
            depends on your settings with the relevant platform, but may include
            things like your handle and followers list. Internet Activity
            Information: When you visit, use, and interact with the Service, the
            following information may be created and automatically logged in our
            systems:
            <br />
            <br />
            Device Information: The manufacturer and model, operating system, IP
            address, and unique identifiers of the device, as well as the
            browser you use to access the Service. The information we collect
            may vary based on your device type and settings. Usage Information:
            Information about how you use our Service, such as the types of
            content that you view or engage with, the features you use, the
            actions you take, and the time, frequency, and duration of your
            activities. Email Open/Click Information: We may use pixels in our
            email campaigns that allow us to collect your email and IP address
            as well as the date and time you open an email or click on any links
            in the email. The following technologies may be used to collect
            Internet Activity Information:
            <br />
            <br />
            Cookies, which are text files stored on your device to uniquely
            identify your browser or to store information or settings in the
            browser to help you navigate between pages efficiently, remember
            your preferences, enable functionality, help us understand user
            activity and patterns, and facilitate online advertising. Local
            storage technologies, like HTML5, that provide cookie-equivalent
            functionality but can store larger amounts of data, including on
            your device outside of your browser in connection with specific
            applications. Web beacons, also known as pixel tags or clear GIFs,
            which are used to demonstrate that a webpage or email was accessed
            or opened, or that certain content was viewed or clicked.
            <br />
            <br />
            <b>2. PERSONAL INFORMATION USE</b>
            <br />
            <br />
            Your personal information is used for the following purposes:
            <br />
            <br />
            Service Delivery, including to:
            <br />
            <br />
            <ul>
              <li>Provide, operate, maintain, and secure the Service;</li>
              <li> Create, maintain, and authenticate your account;</li>
              <li>Administer purchases of the PrimeSea NFT;</li>
              <li> Provide Perks; and </li>
              <li>Organize events.</li>
            </ul>
            <br />
            Communicating with You:
            <br />
            <br />
            <ul>
              <li>
                to send you updates about administrative matters such as changes
                to our terms or policies; and
              </li>
              <li>
                provide user support, and respond to your requests, questions
                and feedback.
              </li>
            </ul>
            <br />
            Service Improvement, including to:
            <br />
            <br />
            <ul>
              <li>
                improve the Service and create new features; personalize your
                experience; and
              </li>
              <li>
                create and derive insights from de-identified and aggregated
                information.
              </li>
            </ul>
            <br />
            Marketing and Advertising:
            <br />
            <br />
            We and our advertising partners may use your personal information
            for marketing and advertising purposes, including to send you direct
            marketing communications as permitted by law, including, but not
            limited to, notifying you of special promotions, offers and events
            by email and other means.
            <br />
            <br />
            Compliance and Protection, including to:
            <br />
            <br />
            <ul>
              <li>
                Comply with applicable laws, lawful requests, and legal process,
                such as to respond to subpoenas or requests from government
                authorities;
              </li>
              <li>
                Protect our, your or others rights, privacy, safety or property
                (including by making and defending legal claims);
              </li>
              <li>
                Audit our compliance with legal and contractual requirements and
                internal policies; and
              </li>
              <li>
                Prevent, identify, investigate and deter fraudulent, harmful,
                unauthorized, unethical or illegal activity, including
                cyberattacks and identity theft.
              </li>
            </ul>
            <br />
            <b>3. PERSONAL INFORMATION SHARING</b>
            <br />
            <br />
            Our Sharing: We may share the categories of personal information
            described above without further notice to you, unless required by
            the law, with the following categories of third parties:
            <br />
            <br />
            Service Providers: To assist us in meeting business operations needs
            and to perform certain services and functions, we may share personal
            information with service providers, including hosting services,
            cloud services, and other information technology services, email
            communication software and email newsletter services, advertising
            and marketing services, payment processors, customer relationship
            management and customer support services, and analytics services.
            Pursuant to our instructions, these parties will access, process, or
            store personal information in the course of performing their duties
            to us. Professional Advisors: We may share personal information with
            our professional advisors such as lawyers and accountants where
            doing so is necessary to facilitate the services they render to us.
            Business Transfers: If we are involved in a merger, acquisition,
            financing, reorganization, bankruptcy, receivership, dissolution,
            sale of all or a portion of our assets, or transition of service to
            another provider (collectively a “Transaction”), your personal
            information may be shared in the diligence process with
            counterparties and others assisting with the Transaction and
            transferred to a successor or affiliate as part of or following that
            Transaction along with other assets. Legal Requirements: We do not
            volunteer your personal information to government authorities or
            regulators, but we may disclose your personal information where
            required to do so for the Compliance and Protection purposes
            described above. Your Sharing: Through the Service, you may be able
            to make your personal information available to others, including:
            <br />
            <br />
            Other users and the public, when you post content through the
            Discord community platform and engage in public transactions through
            the Service; and Social media platforms, when you choose to share
            content on social media.
            <br />
            <br />
            <b>4. CHILDREN</b>
            <br />
            <br />
            Our Service is not directed to children who are under the age of 18.
            PrimeSea does not knowingly collect personal information from
            children under the age of 18. If you believe that a child under the
            age of 18 provided personal information to PrimeSea please contact
            us and we will delete that information.
            <br />
            <br />
            <b>5. LINKS TO OTHER WEBSITES</b>
            <br />
            <br />
            The Service may contain links to other websites not operated or
            controlled by PrimeSea, including social media services (“Third
            Party Sites”). The information that you share with Third Party Sites
            will be governed by the specific privacy policies and terms of
            service of the Third Party Sites and not by this Privacy Policy. By
            providing these links we do not imply that we endorse or have
            reviewed these sites. Please contact the Third Party Sites directly
            for information on their privacy practices and policies.
            <br />
            <br />
            <b>6. SECURITY</b>
            <br />
            <br />
            We employ a number of technical, organizational and physical
            safeguards designed to protect the personal information we collect.
            However, no security measures are failsafe and we cannot guarantee
            the security of your personal information. You use the Service at
            your own risk.
            <br />
            <br />
            <b>7. PERSONAL INFORMATION PROCESSING IN THE U.S.</b>
            <br />
            <br />
            PrimeSea is headquartered in the United States. By using our
            Service, you understand and acknowledge that your personal
            information will be transferred from your location to our facilities
            and servers in the United States, where data protection laws may be
            less protective than those in your jurisdiction.
            <br />
            <br />
            <b>8. YOUR CHOICES</b>
            <br />
            <br />
            Update or Correct Personal Information: You can contact us and
            request any updates or corrections needed to keep your personal
            information accurate, current, and complete.
            <br />
            <br />
            Opt Out of Marketing Communications: You may opt out of
            marketing-related communications by following the opt out or
            unsubscribe instructions contained in any marketing communication we
            send you. Please note, however, that you may continue to receive
            communications as described in the Communicating with You section
            after opting out of marketing communications.
            <br />
            <br />
            Do Not Track. We currently do not respond to “Do Not Track” or
            similar signals. Learn more about “Do Not Track” here.
            <br />
            <br />
            <b>9. CHANGES TO THE PRIVACY POLICY</b>
            <br />
            <br />
            The Service and our business may change from time to time. As a
            result we may change this Privacy Policy at any time. When we do we
            will post an updated version on this page, unless another type of
            notice is required by applicable law. By continuing to use our
            Service or providing us with personal information after we have
            posted an updated Privacy Policy, or notified you by other means if
            applicable, you consent to the revised Privacy Policy and the
            practices described in it.
            <br />
            <br />
            If you have any questions about our Privacy Policy or information
            practices, please feel free to contact us at our designated request
            address: suporte@primesea.io
          </p>
        </div>
      </div>
      <div className="background-about">
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

export default PrivacyPolicy;
