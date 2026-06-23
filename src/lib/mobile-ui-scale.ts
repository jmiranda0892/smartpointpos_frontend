export const KPU_DESIGN_W = 390
export const KPU_DESIGN_H = 760
export const KPU_BASE_PX = 16
export const KPU_SCALE_MAX = 1.28
export const KPU_DESKTOP_MQ = '(min-width: 640px)'

export function computeMobileUiScale(
  width: number,
  height: number,
  desktop = false,
): number {
  if (desktop) return 1
  return Math.min(
    Math.max(width / KPU_DESIGN_W, height / KPU_DESIGN_H),
    KPU_SCALE_MAX,
  )
}

function viewportSize() {
  const vv = window.visualViewport
  const width = vv?.width ?? document.documentElement.clientWidth
  const layoutH = vv?.height ?? document.documentElement.clientHeight
  // ponytail: layout height hides URL bar; screen long edge ≈ full phone (Pixel 8 Pro ~915)
  const screenLong = Math.max(window.screen.width, window.screen.height)
  const height = Math.max(layoutH, screenLong)
  return { width, height }
}

export function applyMobileUiScale() {
  const root = document.documentElement
  const desktop = window.matchMedia(KPU_DESKTOP_MQ).matches
  const { width, height } = viewportSize()
  const scale = computeMobileUiScale(width, height, desktop)
  root.style.fontSize = `${KPU_BASE_PX * scale}px`
}

// ponytail: self-check — Pixel 8 Pro layout ~412×780 + screen 915 → ~1.2×
if (import.meta.env.DEV) {
  const layout = computeMobileUiScale(412, 780)
  const screen = computeMobileUiScale(412, 915)
  console.assert(layout >= 1.02, `layout scale: ${layout}`)
  console.assert(screen >= 1.15 && screen <= KPU_SCALE_MAX, `screen scale: ${screen}`)
}
