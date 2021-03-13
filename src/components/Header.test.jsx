import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe("Header component", () => {
  it("should render", () => {
    render(<Header />)

    expect(screen.getByAltText("Michael & Eleni wedding")).toBeInTheDocument()
  })
})
