import { render, screen } from "@testing-library/react"
import { LocationMap } from "./LocationMap"

describe("LocationMap component", () => {
  it("should render map with pointer", () => {
    render(<LocationMap />)

    expect(screen.getByTestId("map-pointer")).toBeInTheDocument()
  })
})
