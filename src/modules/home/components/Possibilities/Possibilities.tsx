import Reserve from '../../../core/components/Reserve/Reserve';
import Box, { PossibilitiesBoxInfoInterface } from './components/Box';
export default function Possibilities() {
  const infos: PossibilitiesBoxInfoInterface[] = [
    {
      position: 1,
      mainInfo: 'Membros selecionados',
      body: 'A primeira viagem é para convidados: Os primeiros a embarcar na PrimeSea serão membros selecionados pela nossa equipe. Participe do nosso Discord e entre em contato conosco no email (suporte@primesea.io) para saber mais sobre nosso processo de convite.',
    },
    {
      position: 2,
      mainInfo: 'Processo simples de compra',
      body: 'Disponibilizamos dois tokens para compra: SharkToken e WhaleToken. É preciso ter um deles para ter acesso aos projetos e comunidades selecionados pela nossa curadoria. O processo de compra pode ser feito pelo PayPal.',
    },
    {
      position: 3,
      mainInfo: 'Um mar de clubes e comunidades',
      body: 'Com o SharkToken ou o WhaleToken, você poderá entrar antecipadamente nas comunidades e projetos pré-lançados no PrimeSea, por um valor diferenciado — garantindo o seu lugar na whitelist de todos os nossos cardumes.',
    },
  ];

  return (
    <div className="background-possibilities pt-[40px] sm:pt-[140px] pb-[86px]">
      <div className="container mx-auto">
        <p className="text-center font-roboto text-[30px] text-white tracking-widest px-4">
          Navegando em um mar de possibilidades
        </p>
        <div className="flex lg:flex-row flex-col items-center sm:items-start justify-center gap-x-[80px] mt-9 sm:mt-[56px]">
          {infos.map((info, index) => (
            <Box
              opened={index === 0}
              key={info.position}
              uniqueId={`box-${index}`}
              info={info}
            />
          ))}
        </div>
        <div id="subscribed">
          <Reserve className=" mt-[120px] sm:mt-[200px] mb-[120px]" />
        </div>
      </div>
    </div>
  );
}
