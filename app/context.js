export function state() {
  return {
    googleFonts: null
  }
}

export default async (ctx) => {
  if (ctx.server) {
    ctx.state.googleFonts = ctx.server.googleFonts;
  }
}
