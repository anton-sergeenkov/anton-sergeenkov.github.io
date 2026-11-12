import nextVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-plugin-prettier"

// ESLint (flat config). В Next.js 16 команда next lint удалена,
// поэтому линтер запускается напрямую: npm run lint → eslint .
const eslintConfig = [
  ...nextVitals,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-no-target-blank": "off",
      "no-var": "error",
    },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
]

export default eslintConfig
