# Express TypeScript CRUD API

A RESTful API built with Express.js, TypeScript, and TypeORM implementing CRUD operations.

## Features

- 🚀 Express.js with TypeScript
- 📦 TypeORM for database management
- 🔄 CRUD operations
- 🔍 Request validation using class-validator
- 🔥 Hot reloading for development
- 🗄️ SQLite database (easily configurable for other databases)
- 🛣️ Modular routing system
- 🔍 Pagination and filtering support

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Project Structure

```
src/
├── app.ts                  # Express app
├── index.ts                # Root app
├── mock-data.ts            # Init mock data
├── data-source.ts           # TypeORM
├── entities/               # Database entities
├── dtos/                   # Data Transfer
├── controllers/            # Request handlers
├── services/               # Business logic
└── routes/                 # Route definitions
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a copy of `.env.example` and rename it to `.env`:

```bash
cp .env.example .env
```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start the server with hot reloading enabled.

### Production Mode

1. Build the project:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build project for production
- `npm start` - Run production server
- `npm run typeorm` - Run TypeORM commands

## API Endpoints

All endpoints are prefixed with `/api`

### Health Check

```
GET /api/health
```

### Resources

#### Create Resource

```
POST /api/resources
Content-Type: application/json

{
    "name": "Resource Name",
    "description": "Resource Description"
}
```

#### List Resources

```
GET /api/resources?name=search&limit=10&offset=0
```

Query Parameters:

- `name` (optional): Filter by name
- `limit` (optional): Number of items per page (default: 10)
- `offset` (optional): Number of items to skip (default: 0)

#### Get Single Resource

```
GET /api/resources/:id
```

#### Update Resource

```
PUT /api/resources/:id
Content-Type: application/json

{
    "name": "Updated Name",
    "description": "Updated Description"
}
```

#### Delete Resource

```
DELETE /api/resources/:id
```

## Error Handling

The API uses the following HTTP status codes:

- `200` - Success
- `201` - Resource created
- `204` - Resource deleted
- `400` - Bad request / Validation error
- `404` - Resource not found
- `500` - Server error

Error Response Format:

```json
{
  "error": "Error Type",
  "message": "Error Message"
}
```

## Development

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
