function state() {
  return {
    googleFonts: null
  };
}
const context = async (ctx) => {
  if (ctx.server) {
    ctx.state.googleFonts = ctx.server.googleFonts;
  }
};
export {
  context as default,
  state
};
