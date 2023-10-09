This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

0. Versione o projeto React (TypeScript ou JavaScript) no github.com e crie a estrutura de branches baseadas no GitFlow.
- https://www.objective.com.br/insights/git-flow/


1. Faça uma tela com formulário para busca de endereços por CEP na API http://viacep.com.br/ws/01001000/json/ usando axios.
2. Estilize a tela para busca de CEP com CSS próprio (“manual”). 
4. Implemente um teste unitário para a da busca de endereços por CEP.


3. Desenvolva um CRUD RESTful API para a entidade “Conta”.  A entidade precisa ter apenas os atributos “nome” e “descricao”. Use um servidor JSON como o json-server para manter o back-end.


5. Justifique a estrutura de pastas/arquivos criada.

commands
- create branchs Main, Develop, Feature/form-search-cep
- npm install axios
- npm install --save-dev jest
- npm install --save-dev ts-jest
- npx ts-jest config:init