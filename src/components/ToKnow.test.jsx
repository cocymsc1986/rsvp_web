import { render, screen } from "@testing-library/react"
import { ToKnow } from "./ToKnow"

describe("ToKnow component", () => {
  it("should render", () => {
    render(<ToKnow />)

    expect(screen.getByText("Helpful info")).toBeInTheDocument()
  })
})
