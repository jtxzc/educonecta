# EduConecta 🎓

Plataforma simples para conectar estudantes e professores para aulas de reforço, com suporte a Firebase ou Supabase.

## 📱 Funcionalidades

- Alternar entre modo Estudante e Professor
- Buscar professores por matéria e data
- Cadastro de disponibilidade de professores
- Inputs com ícones (matéria, nome, data)
- Integração com Firebase ou Supabase (pode alternar)
- Autenticação por e-mail/senha
- Interface moderna com ShadCN/UI, Tailwind e Lucide
- Responsivo e pronto para mobile

## 🔧 Tecnologias

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- ShadCN UI
- Firebase **ou** Supabase
- Framer Motion
- Lucide Icons

## 🔌 Como rodar localmente

```bash
# Clone o projeto
git clone https://github.com/jtxzc/educonecta.git
cd educonecta

# Instale as dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
# depois edite .env.local com suas chaves Firebase ou Supabase

# Rode localmente
npm run dev
