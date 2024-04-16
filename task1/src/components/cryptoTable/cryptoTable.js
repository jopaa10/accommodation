import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import "./cryptoTable.scss";
import { getColumns, getMobileColumns } from "../../tableColumnData/columns";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function CryptoTable({ cryptoData }) {
  const [sorting, setSorting] = useState([
    {
      id: "name",
      desc: true,
    },
  ]);
  let [data, setData] = useState(cryptoData);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const columns = getColumns(data);
  const mobileColumns = getMobileColumns(data);

  const table = useReactTable({
    data,
    columns: windowWidth < 550 ? mobileColumns : columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  useEffect(() => {
    setData(cryptoData);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cryptoData]);

  return (
    <div className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="table-header-container">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      {
                        asc: <ArrowUpwardIcon fontSize="inherit" />,
                        desc: <ArrowDownwardIcon fontSize="inherit" />,
                      }[header.column.getIsSorted() ?? null]
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row
                .getVisibleCells()
                .filter((cell) => {
                  const content = flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  );
                  return (
                    content !== null && content !== undefined && content !== ""
                  );
                })
                .map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
