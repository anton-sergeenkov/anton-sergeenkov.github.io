"use client"

import UiButton from "@/sawyer-react-lib/ui-kit/basic/UiButton"

const ButtonElementsComponent = () => {
  const onClick = () => {
    console.log("Click")
  }

  return (
    <div>
      <h3>Buttons</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <UiButton
          buttonProps={{
            size: "small",
            variant: "contained",
            onClick,
          }}
        >
          variant: contained
        </UiButton>
        <UiButton
          buttonProps={{
            size: "small",
            variant: "outlined",
            onClick,
          }}
        >
          variant: outlined
        </UiButton>
        <UiButton
          buttonProps={{
            size: "small",
            variant: "text",
            onClick,
          }}
        >
          variant: text
        </UiButton>
      </div>
    </div>
  )
}

export default ButtonElementsComponent
