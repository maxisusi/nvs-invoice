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
  phone: string;
}

export interface IInvoiceEntry {
  date: any;
  qty: number;
  rate: number;
  total: number;
  type: string;
}
