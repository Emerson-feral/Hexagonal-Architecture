# Hexagonal folder structure

```
hexagonal-architecture/
│── src/
│   ├── domain/            # Entities and types
│   ├── application/       # Use cases (business rules)
│   │   ├── ports/         # Interfaces (Ports)
│   │   ├── services/      # Implementation of use cases
│   ├── infrastructure/    # Adapters (DB, API, etc.)
│   │   ├── controllers/
│   │   ├── repositories/
│   │   ├── server.ts      # Initializes the app
│── package.json
│── tsconfig.json
```
