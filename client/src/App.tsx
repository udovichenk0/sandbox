import './App.css'
import { faker } from '@faker-js/faker';

export function createRandomUser(){
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
const arr = [...Array(10000)].reduce((acc, item) => {
  const id = faker.string.uuid()
  acc[id] = {
    userId: id,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }
  return acc
}, {})
console.log(Object.fromEntries(Object.entries(arr)))
console.log(arr.length)

function App() {
  return (
    <>
      <canvas id='the-canvas'></canvas>
      {/* <Document file={'../udovichenko__cv.docx.pdf'}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document> */}
    </>
  )
}

export default App
