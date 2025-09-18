import express from 'express';
import cors from 'cors';
import path from 'path';
import { authRoutes } from './routes/auth.routes';
import { chatRoutes } from './routes/chat.routes';
import { healthRoutes } from './routes/health.routes';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/health', healthRoutes);

// API Health check endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Virtual Health Assistant API is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Catch-all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Health Assistant API ready at http://localhost:${PORT}`);
});
