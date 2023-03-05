import React from "react";
import TableContainer from "./table";
import TR from "./table-row";
import TH from "./table-header";
import TD from "./table-data";

export type TableData = {
  headers?: (string | React.ReactNode)[];
  rows?: {
    data: (string | React.ReactNode)[];
    onClick?: () => void;
  }[];
  widths?: string[];
};

interface Props {
  data: TableData;
  minWidth?: string;
}

const Table: React.FC<Props> = ({ data, minWidth }) => {
  data.rows?.forEach(element => {
    if (data.headers && element.data.length != data.headers.length) {
      throw new Error("Number of headers and data columns must be equal");
    }
    if (data.widths && element.data.length != data.widths.length) {
      throw new Error("Number of widths and data columns must be equal");
    }
  });

  return (
    <TableContainer minWidth={minWidth}>
      <tbody>
        {data.headers && data.headers.length && (
          <TR>
            {data.headers.map((header, index) => (
              <TH key={index}>{header}</TH>
            ))}
          </TR>
        )}
        {data.rows?.map((row, index) => (
          <TR key={index} onClick={row.onClick}>
            {row.data.map((d, index) => (
              <TD key={index} width={data.widths ? data.widths[index] : ""}>
                {d}
              </TD>
            ))}
          </TR>
        ))}
        {!data.rows?.length && (
          <TR>
            <TD colSpan={data.headers?.length || 1}>No data to display</TD>
          </TR>
        )}
      </tbody>
    </TableContainer>
  );
};

export default Table;
