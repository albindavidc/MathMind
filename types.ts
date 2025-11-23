export enum CalculatorMode {
  STANDARD = 'STANDARD',
  AI = 'AI'
}

export interface MathResponse {
  answer: string;
  steps: string[];
  reasoning: string;
}

export interface HistoryItem {
  id: string;
  expression: string;
  result: string;
  type: CalculatorMode;
  timestamp: number;
  details?: string[]; // Steps for AI answers
}

export interface KeypadButton {
  label: string;
  value: string;
  type: 'number' | 'operator' | 'action' | 'scientific';
  className?: string;
}