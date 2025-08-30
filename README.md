# 🐾 Pokédex API
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


Una aplicación web completa para gestionar Pokémon, construida con NestJS, MongoDB y una interfaz web moderna.

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Prerrequisitos](#-prerrequisitos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Ejecución](#-ejecución)
- [API Endpoints](#-api-endpoints)
- [Scripts Disponibles](#-scripts-disponibles)
- [Testing](#-testing)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

- 🔥 **API REST** completa para gestión de Pokémon
- 🗄️ **Base de datos MongoDB** con Docker
- 🌐 **Interfaz web** incluida
- 📝 **Validación de datos** con DTOs
- 🎯 **Arquitectura modular** con NestJS
- 🐳 **Containerización** con Docker
- 🧪 **Testing** unitario y e2e
- 📚 **Documentación** completa

## 🔧 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **pnpm**
- **Docker** y **Docker Compose**
- **Git**

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd pokedex
   ```

2. **Instala las dependencias**
   ```bash
   # Con npm
   npm install
   
   # Con pnpm (recomendado)
   pnpm install
   ```

## ⚙️ Configuración

### Base de Datos

La aplicación utiliza MongoDB a través de Docker. La configuración se encuentra en `docker-compose.yaml`:

```yaml
services:
  db:
    image: mongo:5
    restart: always
    ports:
      - 27017:27017
    environment:
      MONGODB_DATABASE: nest-pokemon
    volumes:
      - ./mongo:/data/db
```

### Variables de Entorno (Opcional)

Puedes configurar las siguientes variables de entorno:

- `PORT`: Puerto de la aplicación (por defecto: 3000)
- `MONGODB_URI`: URI de conexión a MongoDB (por defecto: mongodb://localhost:27017/nest-pokemon)

## 🚀 Ejecución

### 1. Iniciar la Base de Datos

Primero, inicia MongoDB con Docker:

```bash
docker-compose up -d db
```

### 2. Iniciar la Aplicación

```bash
# Desarrollo con hot reload
npm run start:dev

# Desarrollo con debugging
npm run start:debug

# Producción
npm run start:prod
```

### 3. Acceder a la Aplicación

- **API**: http://localhost:3000/api/v2
- **Interfaz Web**: http://localhost:3000
- **API Pokémon**: http://localhost:3000/api/v2/pokemon

## 🔗 API Endpoints

### Pokémon

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/v2/pokemon` | Obtener todos los Pokémon |
| `GET` | `/api/v2/pokemon/:id` | Obtener un Pokémon por ID |
| `POST` | `/api/v2/pokemon` | Crear un nuevo Pokémon |
| `PATCH` | `/api/v2/pokemon/:id` | Actualizar un Pokémon |
| `DELETE` | `/api/v2/pokemon/:id` | Eliminar un Pokémon |

### Ejemplo de uso

```bash
# Obtener todos los Pokémon
curl http://localhost:3000/api/v2/pokemon

# Crear un nuevo Pokémon
curl -X POST http://localhost:3000/api/v2/pokemon \
  -H "Content-Type: application/json" \
  -d '{"name": "Pikachu", "type": "Electric"}'
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run start          # Iniciar aplicación
npm run start:dev      # Iniciar con hot reload
npm run start:debug    # Iniciar con debugging

# Construcción
npm run build          # Compilar aplicación

# Testing
npm run test           # Tests unitarios
npm run test:watch     # Tests en modo watch
npm run test:cov       # Tests con coverage
npm run test:e2e       # Tests end-to-end

# Calidad de código
npm run lint           # Ejecutar ESLint
npm run format         # Formatear código con Prettier
```

## 🧪 Testing

### Tests Unitarios
```bash
npm run test
```

### Tests End-to-End
```bash
npm run test:e2e
```

### Coverage
```bash
npm run test:cov
```

## 🏗️ Estructura del Proyecto

```
pokedex/
├── docker-compose.yaml     # Configuración de Docker
├── package.json           # Dependencias y scripts
├── tsconfig.json         # Configuración TypeScript
├── eslint.config.mjs     # Configuración ESLint
├── nest-cli.json         # Configuración NestJS CLI
├── public/               # Archivos estáticos
│   ├── index.html
│   └── css/
├── src/                  # Código fuente
│   ├── main.ts          # Punto de entrada
│   ├── app.module.ts    # Módulo principal
│   └── pokemon/         # Módulo Pokémon
│       ├── pokemon.controller.ts
│       ├── pokemon.service.ts
│       ├── pokemon.module.ts
│       ├── dto/         # Data Transfer Objects
│       └── entities/    # Entidades
├── test/                # Tests
└── mongo/              # Datos de MongoDB (generado)
```

## 🛠️ Desarrollo

### Agregar nuevas funcionalidades

1. **Crear un nuevo módulo**
   ```bash
   nest generate module nombre-modulo
   ```

2. **Crear un controlador**
   ```bash
   nest generate controller nombre-controlador
   ```

3. **Crear un servicio**
   ```bash
   nest generate service nombre-servicio
   ```

### Comandos útiles de Docker

```bash
# Ver logs de la base de datos
docker-compose logs db

# Reiniciar la base de datos
docker-compose restart db

# Detener todos los servicios
docker-compose down

# Limpiar volúmenes (⚠️ eliminará todos los datos)
docker-compose down -v
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Adicionales

- La aplicación utiliza el prefijo global `/api/v2` para todos los endpoints
- Los archivos estáticos se sirven desde la carpeta `public/`
- MongoDB almacena los datos en la carpeta `mongo/` del proyecto
- El puerto por defecto es `3000`, configurable via variable de entorno `PORT`

## 🏆 Características Avanzadas

### Próximas mejoras

- 🔐 Autenticación y autorización
- 📊 Swagger/OpenAPI documentation
- 🚀 Rate limiting
- 📈 Logging y monitoring
- 🗃️ Migrations de base de datos
- ☁️ Deployment en la nube

## 📄 Licencia

Este proyecto está bajo la Licencia UNLICENSED - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado con ❤️ usando [NestJS](https://nestjs.com/)
