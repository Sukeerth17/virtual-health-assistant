#!/bin/bash
echo "Starting Virtual Health Assistant..."
echo ""
echo "This will start:"
echo "- Database (PostgreSQL) on port 5432"
echo "- Backend API on port 3000"
echo "- Frontend on port 3001"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""
docker-compose up --build
