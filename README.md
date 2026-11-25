# Palabras Encadenadas

Trabajo Final Integrador de Construcción de Interfaces de Usuario (UNQ). Juego de palabras encadenadas contra reloj hecho con React.

## Requisitos

- [Node.js](https://nodejs.org/) 20.19+ o 22.12+
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

## Descarga e instalación

```bash
git clone https://github.com/<usuario>/unq-ui-damian-villalba-trabajo-final.git
cd unq-ui-damian-villalba-trabajo-final
pnpm install
```

## Variables de entorno

El proyecto usa un archivo `.env` en la raíz, que no se sube al repositorio. Hay que crearlo con el siguiente contenido:

```
VITE_API_URL=https://word-api-hmlg.vercel.app/api
```

| Variable | Descripción | Valor |
|----------|-------------|-------|
| `VITE_API_URL` | URL base de la API de validación de palabras provista por la cátedra | `https://word-api-hmlg.vercel.app/api` |

## Ejecución local

```bash
pnpm dev
```

Abrir la URL que muestra la consola (por defecto `http://localhost:5173`).
