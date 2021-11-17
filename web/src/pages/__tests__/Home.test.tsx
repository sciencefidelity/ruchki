import * as React from "react"
import { render } from "@testing-library/react"
import { expect } from "chai"
import Home from "@/pages/Home"

describe("<Home>", () => {
  it("the header title", () => {
    const { getByText } = render(<Home title="home" />)
    const linkElement = getByText(/Create-React-Snowpack-App/i)
    expect(document.body.contains(linkElement))
  })
})
