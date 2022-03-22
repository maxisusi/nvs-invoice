import { IInvoiceEntry } from "@nvs-shared/types";

export interface Row {
  desc: string;
  date: string;
  qty: number;
  unit: number;
  price: number;
}

export type Props = {
  list: IInvoiceEntry[];
};
export const helper = () => {
  const createRow = (desc: string, date: string, qty: number, unit: number) => {
    const price = priceRow(qty, unit);
    return { desc, date, qty, unit, price };
  };

  const priceRow = (qty: number, unit: number) => {
    return qty * unit;
  };

  const subtotal = (items: readonly Row[]) => {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };

  return {
    createRow,
    subtotal,
  };
};
