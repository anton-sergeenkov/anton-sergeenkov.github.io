"use client"

import ButtonElement from "@/sawyer-react-lib/ui-kit/basic/ButtonElement"

const ButtonElementsComponent = () => {
  const onClick = () => {
    console.log("Click")
  }

  return (
    <div>
      <h3>Buttons</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <ButtonElement
          buttonProps={{
            size: "small",
            variant: "contained",
            onClick,
          }}
        >
          contained
        </ButtonElement>
        <ButtonElement
          buttonProps={{
            size: "small",
            variant: "outlined",
            onClick,
          }}
        >
          outlined
        </ButtonElement>
        <ButtonElement
          buttonProps={{
            size: "small",
            variant: "text",
            onClick,
          }}
        >
          text
        </ButtonElement>
      </div>
    </div>
  )
}

export default ButtonElementsComponent
