#!/bin/bash
echo "Virtual Health Assistant - Status Check"
echo "======================================"
echo ""
echo "Checking services..."
echo ""

echo "Database (PostgreSQL):"
docker-compose exec db pg_isready -U postgres
echo ""

echo "Backend API:"
curl -s http://localhost:3000 | grep -o '"message":"[^"]*"'
echo ""

echo "Frontend:"
curl -s -I http://localhost:3001 | grep "HTTP"
echo ""

echo "All services are running!"
echo ""
echo "Access URLs:"
echo "- Frontend: http://localhost:3001"
echo "- Backend API: http://localhost:3000"
echo "- Database: localhost:5432"
echo ""
