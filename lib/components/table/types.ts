export interface TableProps<T> extends React.TableHTMLAttributes<HTMLTableElement> {
  data: T[];
  columns: Array<{
    label: string;
    selector: (row: T) => any;
    headerProps?: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
  } & React.TdHTMLAttributes<HTMLTableCellElement>>;
  loading?: boolean;
  pointerOnHover?: boolean;
  onChangeRowsPerPage?: (rows: number) => void;
  onRowClick?: (row: T) => void;
  cellDataProps?: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
  cellHeaderProps?: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
  rowDataProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
  rowHeaderProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
  /**
   * show pagination
  */
 pagination?: boolean;
 paginationProps?: {
   previousButton?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
   nextButton?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
   label?: string;
   rowsOptions?: number[];
  }
  rowsPerPage?: number;
}
