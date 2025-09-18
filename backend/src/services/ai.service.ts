// AI service for health assistant
export class AIService {
    private responses = [
        "I recommend consulting with a healthcare professional for this concern.",
        "This sounds like it could be serious. Please seek medical attention immediately.",
        "For minor symptoms, try rest and hydration. If symptoms persist, see a doctor.",
        "I suggest monitoring your symptoms and consulting a doctor if they worsen.",
        "This is a common issue. Try over-the-counter remedies, but consult a doctor if needed."
    ];

    async generateResponse(userMessage: string): Promise<string> {
        // Simulate AI processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simple keyword-based response (in real app, use actual AI model)
        const message = userMessage.toLowerCase();
        
        if (message.includes('emergency') || message.includes('urgent')) {
            return "This sounds urgent. Please call emergency services or go to the nearest hospital immediately.";
        }
        
        if (message.includes('pain') || message.includes('hurt')) {
            return "I understand you're experiencing pain. Please describe the severity and location. For severe pain, seek immediate medical attention.";
        }
        
        if (message.includes('fever') || message.includes('temperature')) {
            return "Fever can indicate various conditions. Monitor your temperature and symptoms. If fever is high (>102°F) or persistent, see a doctor.";
        }
        
        // Return random response for general queries
        const randomIndex = Math.floor(Math.random() * this.responses.length);
        return this.responses[randomIndex];
    }
}

export const aiService = new AIService();
