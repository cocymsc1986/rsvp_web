import { render, screen } from "@testing-library/react"
import { TravelInfo } from "./TravelInfo"

describe("TravelInfo component", () => {
  it("should render", () => {
    render(<TravelInfo />)

    expect(screen.getByText("Travel Information (COVID)")).toBeInTheDocument()
  })
})
