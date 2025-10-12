// Estrutura de dados para coleções e produtos
// Organize as fotos nas pastas: src/assets/collections/[nome-da-linha]/[foto.jpg]

export interface Product {
  id: string;
  name: string;
  code: string;
  image: string;
  description: string;
  category: 'scarpins' | 'sandalias' | 'sapatilhas' | 'botas' | 'rasteiras' | 'tenis';
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  season: string;
  products: Product[];
}

// Para adicionar novas coleções, basta adicionar aqui seguindo a estrutura
// As imagens devem estar em: src/assets/collections/[slug]/
export const collections: Collection[] = [
  {
    id: 'elegancia-classica',
    name: 'Elegância Clássica',
    slug: 'elegancia-classica',
    description: 'Sofisticação atemporal para mulheres que apreciam o clássico',
    season: 'Inverno 2024',
    products: [
      {
        id: 'EC001',
        code: 'SK-EC-001',
        name: 'Scarpin Elegante',
        image: '/src/assets/scarpin-elegante.jpg',
        description: 'Sofisticação para momentos especiais',
        category: 'scarpins'
      },
      {
        id: 'EC002',
        code: 'SK-EC-002',
        name: 'Bota Shekinah',
        image: '/src/assets/bota-shekinah.jpg',
        description: 'Estilo contemporâneo com toque clássico',
        category: 'botas'
      }
    ]
  },
  {
    id: 'divina-delicadeza',
    name: 'Divina Delicadeza',
    slug: 'divina-delicadeza',
    description: 'Charme e leveza para seu dia a dia',
    season: 'Primavera/Verão 2024',
    products: [
      {
        id: 'DD001',
        code: 'SK-DD-001',
        name: 'Sandália Divina',
        image: '/src/assets/sandalia-divina.jpg',
        description: 'Delicadeza e charme em cada passo',
        category: 'sandalias'
      },
      {
        id: 'DD002',
        code: 'SK-DD-002',
        name: 'Sapatilha Aurora',
        image: '/src/assets/sapatilha-aurora.jpg',
        description: 'Conforto e elegância para o dia a dia',
        category: 'sapatilhas'
      }
    ]
  }
];

// Função helper para buscar produtos por categoria
export const getProductsByCategory = (category: string) => {
  return collections.flatMap(col => 
    col.products.filter(p => p.category === category)
  );
};

// Função helper para buscar coleção por slug
export const getCollectionBySlug = (slug: string) => {
  return collections.find(col => col.slug === slug);
};
