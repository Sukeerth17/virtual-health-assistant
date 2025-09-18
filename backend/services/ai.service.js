"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiService = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
exports.aiService = {
    getDiagnosis(symptoms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const scriptPath = path_1.default.join(__dirname, '..', 'ai', 'ai_model.py');
                const symptomString = JSON.stringify(symptoms);
                // Execute the Python script with symptoms as an argument
                (0, child_process_1.exec)(`python3 ${scriptPath} '${symptomString}'`, (error, stdout, stderr) => {
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
                        const result = JSON.parse(stdout);
                        resolve(result);
                    }
                    catch (e) {
                        console.error('Failed to parse Python script output:', stdout);
                        console.error('Parsing error:', e);
                        resolve({ error: 'Failed to process AI model output.' });
                    }
                });
            });
        });
    }
};
