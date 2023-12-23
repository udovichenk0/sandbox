import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { produce } from 'immer'
const user = {
  age: 30,
  name: "John"
}
const test = produce(user, () => {})
test.age = 20
console.log(test)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
