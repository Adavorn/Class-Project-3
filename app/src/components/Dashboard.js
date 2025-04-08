import {Link} from "react-router-dom"
function Dashboard()
{
    return (
        <>
            <nav>
                <span>[logo]</span>
                {" "}
                <span>username</span>
                {" "}
                <Link to="/login">logout</Link>
            </nav>
            <p></p>
            <table>
                <tr>
                    <td>
                        <p>Category 1</p>
                        <p>Category 2</p>
                        <p>Category 3</p>
                        <p>Category 4</p>
                        <p>Category 5</p>
                        <p>Category 6</p>
                    </td>
                    <td>
                        <p>Category 1</p>
                    </td>
                    <td>
                        [about]
                    </td>
                </tr>
            </table>
            <p></p>
            <span>Footer @ 2025</span>
        </>
    )
}
export default Dashboard;