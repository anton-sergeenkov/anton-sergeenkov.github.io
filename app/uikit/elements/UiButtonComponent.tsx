"use client"

import UiButton from "@/sawyer-react-lib/ui-kit/basic/UiButton"

const UiButtonComponent = () => {
  const onClick = () => {
    console.log("Click")
  }

  return (
    <>
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
    </>
  )
}

export default UiButtonComponent
