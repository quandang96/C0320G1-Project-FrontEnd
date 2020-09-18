export interface PaymentDetail {
  id: string;
  payer: {
    email_address: string,
    name: {
      given_name: string,
      surname: string
    }
  };
  amount: {
    currency_code: string,
    value: string
  };
}
