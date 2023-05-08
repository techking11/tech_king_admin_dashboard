import "./widgetlg.css"

export default function WidgetLg() {

    const Button =  ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest ransactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwbWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Dmitry Vechorko</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwbWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">10 Jul 2023</td>
                <td className="widgetLgAmount">$145.00</td>
                <td className="widgetLgStatus">
                    <Button type="Declined" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://plus.unsplash.com/premium_photo-1661414551247-6d44c04490d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0aWZ1bCUyMG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Gentle Man</span>
                </td>
                <td className="widgetLgDate">15 Aug 2020</td>
                <td className="widgetLgAmount">$255.00</td>
                <td className="widgetLgStatus">
                    <Button type="Pending" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0aWZ1bCUyMG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Albert Dera</span>
                </td>
                <td className="widgetLgDate">20 Nov 2023</td>
                <td className="widgetLgAmount">$150.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
        </table>
    </div>
  )
}
