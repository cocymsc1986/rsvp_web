import { render, screen } from "@testing-library/react"
import { BeforeTheDay } from "./BeforeTheDay"

describe("BeforeTheDay component", () => {
  it("should render", () => {
    render(<BeforeTheDay />)

    expect(screen.getByText("The Night Before the Big Day")).toBeInTheDocument()
  })
})
