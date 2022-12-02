import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto pt-8">
      <h2 className="font-bold">Importantes Informaçoes sobre o projeto</h2>
      <p>
        O projeto ja vem configurado com prettier, eslint, husky, TailwindCSS,
        reviewdog e o SDK com suas páginas principais.
      </p>
      <p>
        Recomendamos que sempre observem mudanças nesse projeto para que caso
        tenha alguma atualização, acréscimo de páginas ou funcionalidaes, para
        que quanto antes isso seja adicionado ao seu projeto.
      </p>
      <p>
        Já existem 2 hooks configurados um para chamadas de api que se chama
        useAxios, onde ja tem a configuração para fazer chamadas logado e
        deslogado, ele automaticamente insere o token de acordo com a sessão do
        usuário.
      </p>
      <p>
        O segundo hook de importancia é o hook useProducts que basicamente busca
        as Informaçoes na rota de produto, de acordo com o seu companyID, da api
        da w3block. O retorno desse hook é padrão do react-query.
      </p>
      <p>
        Fique a vontade para abrir PRs e dar sugestões de melhorias, assim que
        possível, serão analisadas pela equipe e respondidas.
      </p>
      <p>
        Fique atento as envs... elas são a parte vital do projeto, caso tenha
        alguma duvida fale com nossa equipe
      </p>
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

export default Home;
