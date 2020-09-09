export interface Feedback {
  id: number;
  content: string;
  createDate: Date;
  customerEmail: string;
  customerName: string;
  customerPhone: number;
  processStatus: boolean;
  responseContent: string;
  topic: string;
}
