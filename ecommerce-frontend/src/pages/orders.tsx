import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";
type DataType = {
    _id: string
    amount: number
    quantity: number
    discount: number
    status: ReactElement;
    action: ReactElement;
};
const column: Column<DataType>[]=[{
    Header:"ID",
    accessor:"_id"
},
{
    Header:"Quantity",
    accessor:"quantity"
},
{
    Header:"Discount",
    accessor:"discount"
},
{
    Header:"Amount",
    accessor:"amount"
},
{
    Header:"Status",
    accessor:"status"
},
{
    Header:"Action",
    accessor:"action"
},

];



const Orders = () => {
    const [rows, setRows] = useState<DataType[]>([
        {
            _id: "dfajsofb",
            amount: 45454,
            quantity: 23,
            discount: 5666,
            status: <span className="red">Processing</span>,
            action: <Link to={`/orders/dfajsofb`}>view</Link>,
        },
    ]);
    const Table = TableHOC<DataType>(column,rows,"dashboard-product-box","Orders",rows.length >6)();
  return (
    
    <div className="container">
        <h1>My orders</h1>
        {
            Table
        }
    </div>
  )
}

export default Orders