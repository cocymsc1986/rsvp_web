import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

describe("Footer component", () => {
  it("should render", () => {
    render(<Footer />)

    expect(
      screen.getByText("We look forward to seeing you there!")
    ).toBeInTheDocument()
  })
})
