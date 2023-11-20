export type Receiver = {
  id: string;
  name: string;
  email: string;
  tax_id: string;
  branch: string | null;
  account: string | null;
  account_type: string | null;
  bank_name: string | null;
  bank_code: string | null;
  pix_key: string;
  pix_key_type: string;
  status: string;
  created_at: string;
  updated_at: string;
};
