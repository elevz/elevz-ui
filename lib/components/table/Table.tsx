import { combineClassName } from "@lib/utils";
import { Spinner } from "../feedback";
import { TableProps } from "./types";

export default function Table<T>({
  columns,
  data,
  loading,
  onChangeRowsPerPage,
  onRowClick,
  pointerOnHover,
  rowsPerPage,
  cellDataProps,
  cellHeaderProps,
  rowDataProps,
  rowHeaderProps,
  pagination,
  paginationProps,
  ...props
}: TableProps<T>): JSX.Element {
  const paginationsOptions = paginationProps?.rowsOptions || [20, 50, 100];

  return (
    <table {...props} className={combineClassName("border-collapse w-full", props.className)}>
      <thead>
        <tr {...rowHeaderProps} className={combineClassName("border-b text-sm", rowHeaderProps?.className)}>
          {columns.map(({ label, headerProps }, i) =>
            <th
              key={i}
              {...cellHeaderProps}
              {...headerProps}
              className={combineClassName(
                "p-2 text-nowrap font-semibold text-left",
                cellHeaderProps?.className,
                headerProps?.className
              )}
            >
              {label}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {(data && data?.length > 0) ?
          data?.map((row, i) =>
            <tr
              {...rowDataProps}
              key={i}
              className={combineClassName("border-b text-sm", [pointerOnHover, "cursor-pointer hover:bg-hover"], rowDataProps?.className)}
              onClick={(e) => {
                onRowClick?.(row);
                rowDataProps?.onClick?.(e)
              }}
            >
              {columns.map(({ selector, headerProps, ...props }, i) =>
                <td
                  key={i}
                  {...cellDataProps}
                  {...props}
                  className={combineClassName("p-2", cellDataProps?.className, props.className)}
                >
                  {selector(row)}
                </td>
              )}
            </tr>
          )
          :
          <tr className="border-b">
            <td colSpan={columns.length} className="text-center p-2">
              {loading ?
                <Spinner className="size-6 text-disabled m-auto" />
                :
                <span>There are no records to display</span>
              }
            </td>
          </tr>
        }
      </tbody>
      {pagination &&
        <tfoot>
          <tr>
            <td colSpan={columns.length} align="right" className="p-2">
              <div className="flex items-center w-full justify-end text-sm">
                <div>
                  {paginationProps?.label || "Rows per page:"}
                  <select
                    className="cursor-pointer bg-surface p-1 ml-2 mr-3"
                    onChange={({ target }) => onChangeRowsPerPage?.(Number(target.value))}
                    value={rowsPerPage}
                  >
                    {paginationsOptions.map((value, i) =>
                      <option key={i} value={value}>
                        {value}
                      </option>
                    )}
                  </select>
                </div>

                <button
                  {...paginationProps?.previousButton}
                  className={combineClassName(
                    "p-1 cursor-pointer disabled:text-gray-400",
                    paginationProps?.previousButton?.className
                  )}
                >
                  Prev
                </button>
                <button
                  {...paginationProps?.nextButton}
                  className={combineClassName(
                    "p-1 cursor-pointer disabled:text-gray-400",
                    paginationProps?.nextButton?.className
                  )}
                >
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      }
    </table>
  )
}