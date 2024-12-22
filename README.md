# Projet Angular

## Groupe

Membres du groupe:

- Mat 
- Pierre VIPREY

### Installation

Pour installer:

```
npm ci
```

Pour démarrer l'application vous devez tapez ces deux commandes:

```
npm start
npm run api
```

### Utilisation

Compte qui a la posibilité de creer des offres:

```
user: john.doe@example.com
password: test
```

Compte sans la posibilité de creer des offres:

```
user: jane.doe@example.com
password: test
```

- Une authentification
  - Inscription / Connexion ✓ _(features/login et features/sigin)_
- Routing _(app.routes.ts)_
  - Au minimum 3 routes ✓
  - Dont au minimum une qui transmet une donnée à travers la route ✓
- Composant
  - Au minimum un par page ✓
  - Au minimum un composant utilisé 2 fois ✓ _(shared/components)_
  - Au minimum 1 Input ✓ _(shared/components/job-card)_
  - Au minimum 1 Output ✓ _(features/jobs/components/jobs-search)_
- Service
  - Au minimum 2 ✓ _(core/services)_
- HTTP
  - Communication avec un backend (json-server ou autre) ✓
  - Minimum 3 tables ✓ _(backend/db.json)_
- Reactive Forms
  - Minimum 3 FormControl ✓ _(features/jobs/components/jobs-search; features/profile/components/profile-form; features/create-jobs/components/create-jobs-form)_
  - Attention ce form est en plus des 2 pour l'authentifications
- Validator Custom
  - Minimum 1 ✓ _(shared/components/auth-form)_
- Pipe Custom
  - Minimum 1 ✓ _(shared/pipes/format-date)_
- Directive Custom
  - Minimum 1 ✓ _(shared/directives/new-badge)_
