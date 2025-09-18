import { exec } from 'child_process';
import path from 'path';

interface DiagnosisResult {
  disease: string;
  recommendation: string;
}

export const aiService = {
  async getDiagnosis(symptoms: string[]): Promise<DiagnosisResult | { error: string }> {
    return new Promise((resolve) => {
      const scriptPath = path.join(__dirname, '..', 'ai', 'ai_model.py');
      const symptomString = JSON.stringify(symptoms);

      // Execute the Python script with symptoms as an argument
      exec(`python3 ${scriptPath} '${symptomString}'`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Python script execution error: ${error.message}`);
          console.error(`stderr: ${stderr}`);
          return resolve({ error: 'Failed to get a diagnosis due to a server error.' });
        }
        if (stderr) {
          console.error(`Python script stderr: ${stderr}`);
          return resolve({ error: 'An error occurred during diagnosis.' });
        }
        
        try {
          const result: DiagnosisResult = JSON.parse(stdout);
          resolve(result);
        } catch (e) {
          console.error('Failed to parse Python script output:', stdout);
          console.error('Parsing error:', e);
          resolve({ error: 'Failed to process AI model output.' });
        }
      });
    });
  }
};
