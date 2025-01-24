# InspiraPin 🎨

Um clone do Pinterest moderno construído com Next.js, Firebase, e Tailwind CSS. Este projeto demonstra a implementação de funcionalidades como autenticação, salvamento de pins, e uma interface responsiva e interativa.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.1.6**: Framework React para produção
  - Server-side rendering
  - Roteamento baseado em arquivos
  - Otimização de imagens automática

- **React 19.0.0**: Biblioteca para construção de interfaces
  - Hooks
  - Context API
  - Componentes funcionais

- **Firebase 10.8.0**: Backend as a Service
  - Autenticação
  - Armazenamento de dados
  - Hospedagem

- **Tailwind CSS 3.4.17**: Framework CSS utilitário
  - Estilização responsiva
  - Customização fácil
  - Purge CSS para produção

- **Framer Motion**: Biblioteca de animações
  - Transições suaves
  - Gestos interativos
  - Animações de layout

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",    // Validação de formulários
    "firebase": "^10.8.0",              // Backend e autenticação
    "framer-motion": "^11.0.5",         // Animações
    "next": "^15.1.6",                  // Framework principal
    "react": "^19.0.0",                 // Biblioteca UI
    "react-firebase-hooks": "^5.1.1",   // Hooks para Firebase
    "react-hook-form": "^7.50.1",       // Gerenciamento de formulários
    "react-icons": "^5.4.0",            // Ícones
    "yup": "^1.3.3"                     // Validação de esquemas
  }
}
```

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Rotas e layouts Next.js
│   ├── auth/              # Páginas de autenticação
│   ├── feed/              # Página principal do feed
│   ├── profile/           # Página de perfil
│   ├── layout-client.tsx  # Layout com providers
│   ├── layout.tsx         # Layout raiz
│   └── metadata.ts        # Metadados da aplicação
├── components/            # Componentes React
│   ├── feed/             # Componentes do feed
│   └── shared/           # Componentes compartilhados
├── contexts/             # Contextos React
│   ├── AuthContext.tsx   # Contexto de autenticação
│   └── PinsContext.tsx   # Contexto de pins
└── lib/                  # Configurações e utilidades
    └── firebase.ts       # Configuração do Firebase
```

## 🚀 Como Executar

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/inspirapin.git
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
# Edite .env.local com suas configurações
```

4. Execute o projeto
```bash
npm run dev
```

## 🌟 Funcionalidades

- ✅ Autenticação de usuários
- ✅ Feed de pins com scroll finito
- ✅ Categorias de conteúdo
- ✅ Salvamento de pins
- ✅ Curtidas em pins
- ✅ Perfil do usuário
- ✅ Interface responsiva
- ✅ Animações suaves
- ✅ Pesquisa de pins
- ✅ Modal de visualização

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- Mobile: 2 colunas
- Tablet: 3 colunas
- Desktop: 4 colunas
- Large Desktop: 5 colunas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

