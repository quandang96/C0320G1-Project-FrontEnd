export class JwtResponse {
  [prop: string]: any;
  jwttoken: string;
  accountId: number;
  accountName: string;
  photoURL: string;
  authorities: Authority[];
}

export interface Authority {
  authority: string;
}
