# PokéVenture

Application React SSR (Vike) avec Pokédex interactif et système d'authentification.

## Installation

```bash
npm install
npx prisma migrate dev
npm run dev
```

## Variables d'environnement

Créer `.env` :

```
DATABASE_URL="file:./prisma/dev.db"
```

## Stack

- Vike (SSR) + React + TypeScript
- Prisma 7 + SQLite
- PokéAPI + react-window

## Modèles de données

- **User** : email, username, password (hashé)
- **Character** : name, userId
- **Pokedex** : pokemonId, characterId, caughtAt

## Commandes utiles

```bash
npx prisma generate
npx prisma studio
```

## À faire

- [ ] Auth (Argon2 + JWT + cookies)
- [ ] Telefunc + PageContext
- [ ] Système de personnages
- [ ] Tracking des captures
