
# W3block boilerplate

Esse repositório visa ser um boilerplate para todos que desejarem integrar suas empresas junto a W3block. Nele voce vai encontrar o necessário para isso, junto com algumas outras configurações já feitas para maior facilidade na hora do desenvolvimento.

## Stack

**Prettier**

**Eslint** 

**Husky** 

**TailwindCSS** 

**ReviewDog** 

**W3block SDK** 


## Start
Para que se possa rodar o projeto alguns staps tem de ser feitos como requisitos mínimos:

```bash
npm install
```
ou
```bash
yarn install
```

depois de todas as dependecias instaladas o projeto pode rodar normalmente

```bash
  npm run dev
```

ou 

```bash
yarn dev
```

**Por padrão o projeto ficará disponivel na porta 3000 (localhost:3000)**


## Variáveis de ambiente

Para Rodar esse projeto com o SDK funcionando é extremamente importante que as variáveis de ambiente estejam configuradas corretamente.
As variáveis utilizadas são:

`NEXT_PUBLIC_COMMERCE_API_URL`

`NEXT_PUBLIC_PDF_API_URL`

`NEXT_PUBLIC_PIXWAY_KEY_API_URL`

`NEXT_PUBLIC_PIXWAY_ID_API_URL`

`NEXT_PUBLIC_NEXTAUTH_SECRET`

`NEXT_PUBLIC_COMPANY_ID`

`NEXT_PUBLIC_ENVIRONMENT`

`NEXT_PUBLIC_BASE_URL`

`NEXTAUTH_URL`


Em caso de dúvida entrar em contato com a equipe responsável

## Hooks

Hooks importante do projeto:

**useAxios** 

Hook para pegar instancia do axios. Principal função dela é adicionar ou nao o token na request quando o usuário estiver logado.

```javascript
  const axios = useAxios()
```

**useProducts** 

Hook utilizado para fazer a chamada na api e obter as informações dos produtos vinculados ao companyId, o padrão de resposta segue o do [React-Query](https://tanstack.com/query/v4/docs/reference/useQuery).

```javascript
  const {
  data,
  dataUpdatedAt,
  error,
  errorUpdatedAt,
  failureCount,
  failureReason,
  isError,
  isFetched,
  isFetchedAfterMount,
  isFetching,
  isPaused,
  isLoading,
  isLoadingError,
  isPlaceholderData,
  isPreviousData,
  isRefetchError,
  isRefetching,
  isStale,
  isSuccess,
  refetch,
  remove,
  status,
  fetchStatus
  } = useProducts()
```


## Suporte

Para mais informações, entre em contato via email suporte@w3block.io, ou caso prefira, crie sua PR ou deixe sua dúvida pelo próprio Github .

