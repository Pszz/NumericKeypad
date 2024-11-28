

# NumericKeypad Component Documentation

## Tech Stack & Dependencies

### Core Framework
- React (using 'use client' directive for Client Component)
- Next.js (evident from project structure)

### UI Library
- [@nextui-org/react](https://nextui.org/)
  - Utilizing `Button` component
  - Provides modern UI design and interaction experience

### Icon Library
- [lucide-react](https://lucide.dev/)
  - Using `Delete` icon component
  - Provides customizable vector icons

### Styling Solution
- Tailwind CSS
  - Using atomic CSS classes like `grid`, `w-full`, `h-16`
  - For responsive layout and style customization

### Type Support
- TypeScript
  - Files use `.tsx` extension
  - Defines `NumericKeypadProps` interface

### Installation Commands
```bash
# Install main dependencies
npm install @nextui-org/react lucide-react

# Install Tailwind CSS (if not configured)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tailwind Configuration Reference
```javascript
module.exports = {
  content: [
    './frontend/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
}
```

## Component Documentation

### NumericKeypad Component

#### Overview
NumericKeypad is a calculator-style numeric input interface that supports both keyboard input and mouse clicks.

#### Props
| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| value | string | - | Current input value |
| onChange | (value: string) => void | - | Callback when value changes |
| maxLength | number | 10 | Maximum input length |
| precision | number | 2 | Number of decimal places |
| disabled | boolean | false | Whether keypad is disabled |

#### Features
- ✨ Support for numbers 0-9
- 🔢 Decimal point support
- ⌫ Backspace deletion
- ⌨️ Keyboard input support
- 🔒 Prevents duplicate decimal points
- 🚫 Prevents leading zeros
- 📏 Maximum length limitation
- 🎯 Decimal precision control

#### Usage Example
```tsx
import { NumericKeypad } from './NumericKeypad'

function App() {
  const [value, setValue] = useState('')
  
  return (
    <NumericKeypad
      value={value}
      onChange={setValue}
      maxLength={10}
      precision={2}
    />
  )
}
```

### NumericKeypadLabel Component

#### Overview
NumericKeypadLabel is a display component for the numeric keypad, showing monetary values with responsive font sizing.

#### Props
| Prop Name | Type | Description |
|-----------|------|-------------|
| value | string | Value to display |

#### Features
- 💰 Automatic currency symbol ($)
- 📝 Placeholder "0.00" for empty values
- 📱 Responsive font sizing:
  - < 8 characters: 70px
  - 8-11 characters: 56px
  - 12-15 characters: 48px
  - ≥ 16 characters: 32px
- ✨ Smooth font size transitions

#### Usage Example
```tsx
import { NumericKeypadLabel } from './NumericKeypadLabel'

function App() {
  return <NumericKeypadLabel value="123.45" />
}
```

### Combined Usage
These components are typically used together to create a complete numeric input interface:

```tsx
function MoneyInput() {
  const [value, setValue] = useState('')
  
  return (
    <div>
      <NumericKeypadLabel value={value} />
      <NumericKeypad
        value={value}
        onChange={setValue}
        maxLength={10}
        precision={2}
      />
    </div>
  )
}
```

## Key Benefits
- 🎨 Modern UI design
- 📱 Responsive layout capabilities
- 🔒 Type safety
- ⚡ Excellent developer experience
- 🎯 High customizability

This component combination provides a robust solution for numeric input scenarios, particularly suited for financial applications or any context requiring precise numeric input with formatting.
