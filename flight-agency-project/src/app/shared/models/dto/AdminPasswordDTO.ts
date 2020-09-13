export interface AdminPasswordDTO {
  id: number;
  password: string;
  newPassword: string;
  confirmPassword: string;
  backendMessage: string;
}
