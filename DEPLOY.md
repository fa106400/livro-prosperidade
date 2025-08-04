# Deploy no GitHub Pages

## Configurações Realizadas

1. **Vite Config**: Adicionado `base: '/lp-livro-prosperidade/'` para produção
2. **React Router**: Alterado de `BrowserRouter` para `HashRouter` para compatibilidade com GitHub Pages
3. **Arquivo .nojekyll**: Criado na pasta `public` para evitar processamento Jekyll

## Comandos para Deploy

```bash
npm run deploy
```

## URL da Aplicação

https://fa106400.github.io/lp-livro-prosperidade

## Solução de Problemas

Se a página aparecer em branco:

1. Verifique se o build foi gerado corretamente: `npm run build`
2. Verifique se a branch `gh-pages` foi criada no repositório
3. Aguarde alguns minutos para o GitHub Pages processar as mudanças
4. Limpe o cache do navegador (Ctrl+F5)

## Estrutura de Arquivos

- `dist/` - Arquivos de build (gerados automaticamente)
- `public/` - Arquivos estáticos
- `src/` - Código fonte da aplicação 