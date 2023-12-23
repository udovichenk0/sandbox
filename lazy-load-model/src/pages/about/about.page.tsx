import { Link } from "atomic-router-react"
import { routes } from "../../shared/routes"
import { useUnit } from "effector-react"
import { $$page } from "./about.modal"

const About = () => {
  const event = useUnit($$page.event)
  return (
    <div>
      <h1>About page</h1>
      <button onClick={event}>Click</button>
      <Link to={routes.home}>
        Go to Home Page 
      </Link>
    </div>
  )
}

export default About