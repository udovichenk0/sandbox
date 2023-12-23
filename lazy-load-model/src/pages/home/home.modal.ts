import { createEvent } from "effector/effector.mjs"

const createPage = () => {
  const event = createEvent()

  return {
    event
  }
}

export const $$page = createPage()