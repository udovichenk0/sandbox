import { createEvent } from "effector"

const createPage = () => {
  const event = createEvent()

  return {
    event
  }
}

export const $$page = createPage()