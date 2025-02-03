# VertiCal Calendar

calendar app for building printable, oversized tabloid sized monthly calendars,
with iCal import and lots of customization of themes/styles.

pronounced `verti-cal`

![demo screenshot, feb 2025](./docs/vertical-screenshot.png)

## Core Features

- Month/year calendar view
- Local & ICS calendar support
- Deep style customization:
  - Fonts, colors, borders
  - Background patterns
  - Grid layout
- Setup for Print-to-PDF, 12"x18" page size

## Stack

- Vue 3
- Vite
- Tailwind CSS
- Radix Vue components + shadcn/ui styles
- Pinia stores
- ICAL.js
- Fastify SSR

## Structure

```
.
├── api/
├── app/
│   ├── components/
│   │   ├── app/     # app-specific
│   │   └── ui/      # shadcn/generic UI
│   ├── lib/         # utils
│   ├── pages/
│   └── stores/      # pinia stores
├── server.js        # fastify
└── vite.config.js
```

## Stores

- `calendarStore`: events & view state
- `cssVariableStore`: theme vars
- `settingsStore`: user prefs

## Dev Quick Start

```bash
npm i
# from google fonts api
echo "GOOGLE_API_KEY=your_key" > .env
npm run dev
```

## Build

```bash
npm run build
```

## Props

Background patterns from:
- [css-pattern.com](https://css-pattern.com/)
- [magicpattern.design](https://www.magicpattern.design/tools/css-backgrounds)

UI components based on [shadcn/ui](https://ui.shadcn.com/) + [Radix Vue](https://www.radix-vue.com/)

## License

[MIT License](./LICENSE)

Copyright Jonathan Raphaelson, 2025
