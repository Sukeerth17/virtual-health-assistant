#!/bin/bash
echo "Starting Virtual Health Assistant..."
echo ""
echo "This will start:"
echo "- Database (PostgreSQL) on port 5432"
echo "- Application (Backend + Frontend) on port 3000"
echo ""
echo "Access the app at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""
docker-compose up --build
