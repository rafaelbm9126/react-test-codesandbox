import * as React from "react";
import ReactDataGrid, { DataGridProps } from "react-data-grid";

import "react-data-grid/dist/react-data-grid.css";
import "./styles.css";

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
  { key: "count", name: "Count" }
];

const rows = [
  { id: 0, title: "row1", count: 20 },
  { id: 1, title: "row1", count: 40 },
  { id: 2, title: "row1", count: 60 }
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReactDataGrid
        columns={columns}
        rows={rows}
        rowHeight={25}
        //onRowsChange={(e) => console.log(e)}
        //onRowClick={(e) => console.log(e)}
        //onSelectedCellChange={(e) => console.log(e)}
        onSelectedRowsChange={(e) => console.log(e) }
        //selectedRows={ReadO}
      />
    </div>
  );
}
