export interface IInvoiceData {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  dateCreated: any;
  dueDate: any;
  email: string;
  entries: IInvoiceEntry[];
  npa: string;
  phone: string;
  status: string;
}

export interface Client {
  id?: any;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  npa: string;
  mobile?: string;
  martialStatus?: string;
  type: string;
  country: CountryType | string;
  phone?: string;
  timeCreated?: string;
}

export interface IInvoiceEntry {
  date: any;
  qty: number;
  rate: number;
  total: number;
  type: string;
}
export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
