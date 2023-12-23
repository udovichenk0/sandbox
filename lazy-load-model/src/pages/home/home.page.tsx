import { Link } from "atomic-router-react"
import { routes } from "../../shared/routes"
import { useUnit } from "effector-react"
import { $$page } from "./home.modal"
function createString(){
  return '0'.repeat(25 * 1024 * 1024).substring(0,12)
}
const arr = []
setInterval(() => {
const str = createString()
arr.push(str)
}, 500)

const Home = () => {
  const event = useUnit($$page.event)
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={event}>Click</button>
      <Link to={routes.about}>
        Go to About Page 
      </Link>
    </div>
  )
}
export default Home