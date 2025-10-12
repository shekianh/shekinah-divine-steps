# 📸 Como Adicionar Fotos e Criar Galerias Automáticas

Este guia explica como organizar as fotos dos produtos para que as galerias sejam geradas automaticamente no site.

## 📁 Estrutura de Organização

### 1. Arquivo de Dados Principal
Todas as coleções são gerenciadas no arquivo: **`src/data/collections.ts`**

### 2. Como Adicionar uma Nova Coleção

Abra o arquivo `src/data/collections.ts` e adicione uma nova coleção no array `collections`:

```typescript
{
  id: 'nome-da-colecao',              // ID único (usar kebab-case)
  name: 'Nome da Coleção',             // Nome exibido no site
  slug: 'nome-da-colecao',            // URL amigável
  description: 'Descrição da linha',   // Descrição curta
  season: 'Temporada 2024',            // Temporada/Ano
  products: [
    {
      id: 'PROD001',                   // ID único do produto
      code: 'SK-NC-001',               // Código do produto
      name: 'Nome do Produto',         // Nome do calçado
      image: '/src/assets/foto.jpg',   // Caminho da imagem
      description: 'Descrição',        // Descrição curta
      category: 'sandalias'            // Categoria
    }
  ]
}
```

### 3. Categorias Disponíveis

As categorias válidas são:
- `scarpins`
- `sandalias`
- `sapatilhas`
- `botas`
- `rasteiras`
- `tenis`

### 4. Onde Colocar as Fotos

1. **Salve as fotos na pasta**: `src/assets/`
2. **Nome dos arquivos**: Use nomes descritivos em kebab-case
   - ✅ Correto: `sandalia-rose-gold.jpg`
   - ❌ Errado: `IMG_1234.jpg`

3. **Formato recomendado**:
   - Tipo: JPG ou PNG
   - Resolução mínima: 800x800px
   - Resolução ideal: 1200x1200px
   - Fundo: Branco ou transparente

### 5. Exemplo Completo

```typescript
export const collections: Collection[] = [
  {
    id: 'verao-2024',
    name: 'Verão 2024',
    slug: 'verao-2024',
    description: 'Leveza e frescor para a estação mais quente',
    season: 'Verão 2024',
    products: [
      {
        id: 'VER001',
        code: 'SK-VER-001',
        name: 'Sandália Brisa',
        image: '/src/assets/sandalia-brisa.jpg',
        description: 'Sandália em couro trançado',
        category: 'sandalias'
      },
      {
        id: 'VER002',
        code: 'SK-VER-002',
        name: 'Rasteira Sol',
        image: '/src/assets/rasteira-sol.jpg',
        description: 'Rasteira minimalista em nude',
        category: 'rasteiras'
      }
    ]
  }
];
```

## 🔄 Atualização Automática

Depois de adicionar uma nova coleção no arquivo `src/data/collections.ts`:

1. ✅ A galeria será atualizada **automaticamente**
2. ✅ Os filtros serão criados **automaticamente**
3. ✅ Os produtos aparecerão na página **automaticamente**

Não é necessário modificar nenhum outro arquivo!

## 📷 Instagram

O feed do Instagram está configurado para redirecionar para: **@calcadoshekinah**

Todos os links de Instagram no site apontam para este perfil.

## 🎨 Dicas de Fotografia

### Para melhores resultados:
- ✨ Use iluminação natural ou estúdio
- 📐 Mantenha o mesmo ângulo para todos os produtos
- 🎯 Foco no produto (evite distrações no fundo)
- 🌈 Cores reais e vibrantes
- 📏 Mantenha proporções consistentes

### Ângulos recomendados:
1. Vista lateral (3/4)
2. Vista frontal
3. Vista de cima
4. Detalhe do acabamento

## ❓ Dúvidas Comuns

**P: Posso usar fotos com modelos?**
R: Sim! Mas certifique-se de que o calçado esteja em destaque.

**P: Qual o tamanho máximo do arquivo?**
R: Recomendamos até 500KB por imagem para carregamento rápido.

**P: Posso adicionar vídeos?**
R: Atualmente, apenas imagens são suportadas na galeria automática.

**P: Como remover uma coleção?**
R: Simplesmente remova o objeto correspondente do array em `src/data/collections.ts`.

---

## 🚀 Estrutura Moderna do Site

O site agora possui:
- ✨ Design moderno com fundo preto gradiente
- 🌈 Efeitos de mesh sutil com cores da marca
- 🎭 Animações elegantes ao rolar a página
- 📱 Totalmente responsivo
- 🔗 Links diretos para @calcadoshekinah no Instagram
- 🏪 Seção "Onde Comprar" com 7 canais de venda
- 🖼️ Galeria automática organizada por coleções

---

💡 **Dica**: Mantenha este arquivo atualizado sempre que houver mudanças na estrutura!
