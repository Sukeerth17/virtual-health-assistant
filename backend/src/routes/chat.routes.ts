import express from 'express';
import { Request, Response } from 'express';
import { aiService } from '../services/ai.service';

const router = express.Router();

// Send message to AI assistant
router.post('/send', async (req: Request, res: Response) => {
  try {
    const { message, userId } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    // Generate AI response
    const response = await aiService.generateResponse(message);

    res.json({
      message: response,
      timestamp: new Date().toISOString(),
      userId: userId || 'anonymous'
    });
  } catch (error) {
    console.error('Error processing chat message:', error);
    res.status(500).json({ message: 'Failed to process message' });
  }
});

export { router as chatRoutes };
