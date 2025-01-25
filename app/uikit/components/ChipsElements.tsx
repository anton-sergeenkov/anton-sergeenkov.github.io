"use client"

import ChipsElement, {
  ThemeMode,
} from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"

const ChipsElementsComponent = () => {
  return (
    <div>
      <h3>Chips</h3>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <div>
          <ChipsElement
            items={["One", "Two"]}
            theme={{ mode: ThemeMode.DARK }}
            isUserSelect
          />
        </div>

        <div>
          <ChipsElement
            items={["One", "Two"]}
            theme={{ mode: ThemeMode.LIGHT }}
            isUserSelect
          />
        </div>
      </div>
    </div>
  )
}

export default ChipsElementsComponent
