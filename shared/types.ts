export interface Invoice {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  dateCreated: any;
  dueDate: any;
  email: string;
  entries: InvoiceEntry[];
  npa: string;
  phone: string;
  status: string;
}

export interface InvoiceEntry {
  date: any;
  qty: number;
  rate: number;
  total: number;
  type: string;
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
  country: any;
  phone?: string;
  timeCreated?: string;
  contactPoint?: ClientContact[];
}

export interface ClientContact {
  id: string;
  contactPoint: ClientContactForm;
}

export interface ClientContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mobile: string;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export type $TSFixit = any;
