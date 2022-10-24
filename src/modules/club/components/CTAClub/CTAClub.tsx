interface CTAClubProps {
  className?: string;
}

const CTAClub = ({ className }: CTAClubProps) => {
  return (
    <div
      className={`w-full bg-no-repeat bg-cover bg-[url('/images/CTA_food.png')] py-4 px-4 sm:py-6 sm:px-6 flex justify-between items-center border border-[white] ${className}`}
    >
      <div className="">
        <p className=" text-4xl font-roboto font-bold leading-9 text-[#b09c60]">
          <span className="text-white">O melhor</span>
          <br />
          clube do
          <br /> &nbsp; &nbsp; &nbsp; &nbsp;mundo
        </p>
      </div>
    </div>
  );
};

export default CTAClub;
