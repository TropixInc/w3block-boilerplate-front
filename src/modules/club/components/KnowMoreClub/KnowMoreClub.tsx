import Topic from './components/Topic';

interface KnowMoreClubProps {
  className?: string;
}

const KnowMoreClub = ({ className }: KnowMoreClubProps) => {
  const topics: Array<string> = [
    'Descontos e benefícios em produtos dos mais diversos fornecedores',
    'Descontos e benefícios em produtos dos mais diversos fornecedores',
    'Descontos e benefícios em produtos dos mais diversos fornecedores',
    'Descontos e benefícios em produtos dos mais diversos fornecedores',
    'Descontos e benefícios em produtos dos mais diversos fornecedores',
    'Descontos e benefícios em produtos dos mais diversos fornecedores',
  ];

  return (
    <div className={` ${className}`}>
      <h3 className="font-roboto text-[50px] text-[#5a9dbf] text-center">
        Conheça mais sobre o clube
      </h3>
      <p className="font-roboto text-white  mt-[56px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        semper pretium dui, non laoreet velit efficitur vitae. Nulla tempor
        blandit posuere. Aliquam erat volutpat. Nullam et ullamcorper turpis. Ut
        non dolor quis elit pretium pellentesque. Nam at gravida lorem. Vivamus
        dictum interdum aliquam. Sed euismod metus ligula, in suscipit nisi
        interdum vel. Maecenas eleifend justo magna, sit amet eleifend est
        maximus ultricies. Vestibulum mauris erat, consectetur sed sollicitudin
        at, mollis a justo. Donec mauris neque, laoreet eget dapibus in,
        tincidunt quis enim. Vestibulum ultricies eros ut maximus sodales. In
        tristique eget risus sed sagittis. Nullam ac ultrices tellus, sed
        vulputate ipsum. Quisque dictum nulla ac tempor sagittis. Quisque
        elementum mattis nulla, eget efficitur lacus consequat quis. Vivamus
        aliquet ligula a felis accumsan, quis lobortis orci dictum. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Duis venenatis nunc leo, quis rutrum odio posuere at. Nullam
        interdum, mi at tempor varius, ipsum metus vulputate ex, sed porttitor
        enim dui ut sapien.
      </p>
      <div className="flex justify-between gap-x-[150px] mt-[90px]">
        <div className="flex-1 flex flex-col gap-y-[50px] pl-6 pr-9">
          {topics
            .filter((t, index) => index % 2 == 0)
            .map((t, index) => (
              <Topic key={index}>{t}</Topic>
            ))}
        </div>
        <div className="flex-1 flex flex-col gap-y-[50px] pr-6 pl-9">
          {topics
            .filter((t, index) => index % 2 > 0)
            .map((t, index) => (
              <Topic key={index}>{t}</Topic>
            ))}
        </div>
      </div>
    </div>
  );
};

export default KnowMoreClub;
