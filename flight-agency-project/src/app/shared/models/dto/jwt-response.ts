//Created by: Quân
export class JwtResponse {
  [prop: string]: any;
  jwttoken: string;
  accountId: number;
  name: string;
  accountName: string;
  photoURL: string;
  authorities: Authority[];
}

export interface Authority {
  authority: string;
}
