import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="text-center text-black justify-center">
         <h1 > The route does not exist</h1>
        <b><Link to="/">Please Click here to go back</Link></b>
    </div>
  )
}

export default NotFound
