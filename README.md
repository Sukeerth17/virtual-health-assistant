# Virtual Health Assistant

A comprehensive health assistant application with AI-powered chat, hospital finder, and video consultation features.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Git (to clone the repository)

### Easy Setup (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd virtual-health-assistant
   ```

2. **Start the application**
   
   **On Windows:**
   ```bash
   start.bat
   ```
   
   **On Linux/Mac:**
   ```bash
   chmod +x start.sh
   ./start.sh
   ```

3. **Access the application**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000
   - Database: localhost:5432

### Manual Setup

If you prefer to run services individually:

```bash
# Start all services
docker-compose up --build

# Or start specific services
docker-compose up db backend frontend
```

## 🏗️ Architecture

### Services
- **Frontend**: React + TypeScript + Vite (Port 3001)
- **Backend**: Node.js + Express + TypeScript (Port 3000)
- **Database**: PostgreSQL (Port 5432)
- **AI Service**: Python Flask (Integrated with backend)

### Features
- 🤖 **AI Chat Assistant**: Get instant health advice
- 🏥 **Hospital Finder**: Locate nearby healthcare facilities
- 📹 **Video Consultation**: Connect with healthcare professionals
- 📱 **Mobile Responsive**: Works on all devices

## 📁 Project Structure

```
virtual-health-assistant/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   └── config.ts       # API configuration
│   ├── package.json
│   └── dockerfile
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── db/            # Database connection
│   ├── ai/                # Python AI service
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml      # Service orchestration
├── init.sql               # Database initialization
├── start.bat             # Windows startup script
└── start.sh              # Linux/Mac startup script
```

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
npm install
npm run start
```

### Database Setup
The database is automatically initialized with the schema defined in `init.sql`.

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/request-otp` - Request OTP for phone number
- `POST /api/auth/verify-otp` - Verify OTP and login

### Chat
- `POST /api/chat/send` - Send message to AI assistant

### Health
- `GET /api/health/check` - Health check endpoint

## 🐳 Docker Commands

```bash
# Build all services
docker-compose build

# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild specific service
docker-compose build frontend
```

## 🔍 Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 3000, 3001, and 5432 are available
2. **Docker not running**: Ensure Docker Desktop is running
3. **Build failures**: Try `docker-compose build --no-cache`

### Reset Everything
```bash
docker-compose down -v
docker system prune -f
docker-compose up --build
```

## 📱 Usage

1. **Home Page**: Overview of available features
2. **Login**: Enter phone number and verify with OTP
3. **AI Chat**: Ask health-related questions
4. **Hospital Finder**: Search for nearby medical facilities
5. **Video Call**: Connect with healthcare professionals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.