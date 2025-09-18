import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

// Health check endpoint
router.get('/check', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: '1.0.0'
  });
});

export { router as healthRoutes };
