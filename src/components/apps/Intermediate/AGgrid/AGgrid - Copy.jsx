import {useState, useEffect, useMemo} from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

// const GridExample = () => {
//   return (<div></div>);
// }

function AGgrid() {
    // Custom Cell Renderer (Display flags based on cell value)
    const CompanyLogoRenderer = ({ value }) => (
        <span style={{ display: "flex", height: "100%", width: "100%", alignItems: "center" }}>{value && <img alt={`${value} Flag`} src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`} style={{display: "block", width: "25px", height: "auto", maxHeight: "50%", marginRight: "12px", filter: "brightness(1.1)"}} />}<p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{value}</p></span>
    );

    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([
        {field: '', checkboxSelection: true},
        { field: "mission", filter: true,},
        { field: "company",
        cellRenderer: CompanyLogoRenderer},
        { field: "location" },
        { field: "date",
        valueFormatter: params => { return (new Date(params.value)).toLocaleDateString()  } },
        { field: "price",
        valueFormatter: params => { return '£' + params.value.toLocaleString(); } },
        { field: "successful" },
        { field: "rocket" }
    ])


    const defaultColDef = useMemo(() => ({
        filter: true, // Enable filtering on all columns
        editable: true,
        
      }))
    
    // ([
    //     { field: "title" },
    //     { field: "language" },
    //     { field: "content type" },
    //     { field: "Version" },
    //     { field: "publish stage" },
    //     { field: "workflow stages" },
    //     { field: "modified at" }
    // ]);

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
          .then(result => result.json()) // Convert to JSON
          .then(rowData => setRowData(rowData)); // Update state of `rowData`
      }, [])
    

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
    {/* The AG Grid component */}
        <AgGridReact 
            defaultColDef={defaultColDef} 
            rowData={rowData} 
            columnDefs={colDefs}
            pagination={true} // Enable Pagination 
            rowSelection= {true}
            onCellValueChanged={event => console.log(`New Cell Value: ${event.value}`)} 
            onSelectionChanged = {event => console.log(`New Cell Value: ${event.hasOwnProperty() }`)} 
            />
    </div>
  )
}

export default AGgrid