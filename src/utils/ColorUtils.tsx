// Function to convert hex color to rgba with specified alpha
const hexToRgba = (hex?: string, alpha?: number) => {
  const r = parseInt(hex?.slice(1, 3)!, 16);
  const g = parseInt(hex?.slice(3, 5)!, 16);
  const b = parseInt(hex?.slice(5, 7)!, 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Convert HEX to RGB
const hexToRgb = (hex: string | any[] | undefined) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex?.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex?.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

// Convert RGB to HSL
const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h! /= 6;
  }
  return { h, s, l };
};

// Convert HSL to RGB
const hslToRgb = (h: number | undefined, s: number, l: number) => {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h! + 1 / 3)!; // Add type assertion '!' and '!' after the function call
    g = hueToRgb(p, q, h!)!;
    b = hueToRgb(p, q, h! - 1 / 3)!;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

// Convert RGB to HEX
const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

// Make color more vibrant
const adjustVibrancy = (
  hexColor: string | undefined,
  saturationIncrease = 0.2,
  lightnessIncrease = 0.1
) => {
  const { r, g, b } = hexToRgb(hexColor);
  let { h, s, l } = rgbToHsl(r, g, b);

  // Increase saturation and lightness
  s = Math.min(s + saturationIncrease, 1);
  l = Math.min(l + lightnessIncrease, 1);

  const { r: newR, g: newG, b: newB } = hslToRgb(h, s, l);
  return rgbToHex(newR, newG, newB);
};

export { adjustVibrancy, hexToRgba };
