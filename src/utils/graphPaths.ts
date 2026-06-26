export interface Point {
  x: number;
  y: number;
}

export function getNodeAnchor(
  pos: { x: number; y: number; width: number; height: number },
  target: Point,
): Point {
  const cx = pos.x + pos.width / 2;
  const cy = pos.y + pos.height / 2;
  const dx = target.x - cx;
  const dy = target.y - cy;

  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx > 0
      ? { x: pos.x + pos.width, y: cy }
      : { x: pos.x, y: cy };
  }

  return dy > 0
    ? { x: cx, y: pos.y + pos.height }
    : { x: cx, y: pos.y };
}

export function getNodeCenter(pos: {
  x: number;
  y: number;
  width: number;
  height: number;
}): Point {
  return {
    x: pos.x + pos.width / 2,
    y: pos.y + pos.height / 2,
  };
}

/** Cubic path that stays within the endpoint bounding box — avoids top/bottom clipping */
export function getEdgePath(from: Point, to: Point): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  if (Math.abs(dx) >= Math.abs(dy) * 0.45) {
    const offset = Math.max(Math.abs(dx) * 0.42, 24);
    return `M ${from.x} ${from.y} C ${from.x + offset} ${from.y}, ${to.x - offset} ${to.y}, ${to.x} ${to.y}`;
  }

  const offset = Math.max(Math.abs(dy) * 0.42, 24);
  return `M ${from.x} ${from.y} C ${from.x} ${from.y + offset}, ${to.x} ${to.y - offset}, ${to.x} ${to.y}`;
}

export function getEdgeMidpoint(path: string): Point {
  const cubic = path.match(
    /M\s*([\d.]+)\s*([\d.]+)\s*C\s*([\d.]+)\s*([\d.]+),\s*([\d.]+)\s*([\d.]+),\s*([\d.]+)\s*([\d.]+)/,
  );
  if (cubic) {
    const x0 = parseFloat(cubic[1]);
    const y0 = parseFloat(cubic[2]);
    const x1 = parseFloat(cubic[3]);
    const y1 = parseFloat(cubic[4]);
    const x2 = parseFloat(cubic[5]);
    const y2 = parseFloat(cubic[6]);
    const x3 = parseFloat(cubic[7]);
    const y3 = parseFloat(cubic[8]);
    const t = 0.5;
    const mt = 1 - t;
    return {
      x:
        mt * mt * mt * x0 +
        3 * mt * mt * t * x1 +
        3 * mt * t * t * x2 +
        t * t * t * x3,
      y:
        mt * mt * mt * y0 +
        3 * mt * mt * t * y1 +
        3 * mt * t * t * y2 +
        t * t * t * y3,
    };
  }

  const quad = path.match(
    /M\s*([\d.]+)\s*([\d.]+)\s*Q\s*([\d.]+)\s*([\d.]+)\s*([\d.]+)\s*([\d.]+)/,
  );
  if (quad) {
    const x1 = parseFloat(quad[1]);
    const y1 = parseFloat(quad[2]);
    const cx = parseFloat(quad[3]);
    const cy = parseFloat(quad[4]);
    const x2 = parseFloat(quad[5]);
    const y2 = parseFloat(quad[6]);
    const t = 0.5;
    const mt = 1 - t;
    return {
      x: mt * mt * x1 + 2 * mt * t * cx + t * t * x2,
      y: mt * mt * y1 + 2 * mt * t * cy + t * t * y2,
    };
  }

  return { x: 0, y: 0 };
}
