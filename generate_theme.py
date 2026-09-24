import json

config = {
  "colors": {
    "on-secondary": "#ffffff",
    "surface-variant": "#d5e5ed",
    "on-error": "#ffffff",
    "on-background": "#0e1e24",
    "secondary-fixed-dim": "#86d3da",
    "primary": "#00353b",
    "error-container": "#ffdad6",
    "on-secondary-fixed-variant": "#004f54",
    "surface-container": "#e0f0f9",
    "background": "#f3faff",
    "on-tertiary-container": "#d2ae72",
    "on-tertiary-fixed-variant": "#5c4211",
    "inverse-on-surface": "#e3f3fc",
    "secondary-fixed": "#a2eff7",
    "surface-container-low": "#e6f6ff",
    "on-surface-variant": "#40484a",
    "surface-dim": "#ccdde5",
    "tertiary-container": "#5a410f",
    "on-tertiary": "#ffffff",
    "secondary-container": "#9fedf4",
    "primary-container": "#0e4d54",
    "on-primary-container": "#86bdc4",
    "surface-bright": "#f3faff",
    "primary-fixed-dim": "#99d0d8",
    "on-primary": "#ffffff",
    "on-tertiary-fixed": "#271900",
    "on-surface": "#0e1e24",
    "primary-fixed": "#b4ecf4",
    "on-primary-fixed": "#001f23",
    "on-primary-fixed-variant": "#104e55",
    "tertiary-fixed": "#ffdea9",
    "on-secondary-fixed": "#002022",
    "outline": "#70797a",
    "on-error-container": "#93000a",
    "error": "#ba1a1a",
    "secondary": "#036970",
    "tertiary": "#402b00",
    "inverse-surface": "#243339",
    "surface-container-highest": "#d5e5ed",
    "surface-container-lowest": "#ffffff",
    "surface": "#f3faff",
    "surface-tint": "#2f666d",
    "outline-variant": "#bfc8c9",
    "inverse-primary": "#99d0d8",
    "surface-container-high": "#dbebf3",
    "on-secondary-container": "#0f6d74",
    "tertiary-fixed-dim": "#e6c184"
  },
  "borderRadius": {
    "DEFAULT": "0.25rem",
    "lg": "0.5rem",
    "xl": "0.75rem",
    "full": "9999px"
  },
  "spacing": {
    "margin-mobile": "1.25rem",
    "space-md": "1.25rem",
    "space-xs": "0.375rem",
    "gutter-mobile": "1rem",
    "space-xl": "3.5rem",
    "gutter": "1.5rem",
    "margin": "3rem",
    "space-lg": "2rem",
    "space-sm": "0.75rem"
  },
  "fontFamily": {
    "headline-sm": ["Plus Jakarta Sans"],
    "display-xl": ["Plus Jakarta Sans"],
    "label-sm": ["Plus Jakarta Sans"],
    "body-lg": ["Plus Jakarta Sans"],
    "headline-md": ["Plus Jakarta Sans"],
    "headline-lg-mobile": ["Plus Jakarta Sans"],
    "title-lg": ["Plus Jakarta Sans"],
    "body-md": ["Plus Jakarta Sans"],
    "body-sm": ["Plus Jakarta Sans"],
    "label-md": ["Plus Jakarta Sans"],
    "headline-lg": ["Plus Jakarta Sans"],
    "display-xl-mobile": ["Plus Jakarta Sans"]
  },
  "fontSize": {
    "headline-sm": ["22px", {"lineHeight": "30px", "letterSpacing": "-0.005em", "fontWeight": "600"}],
    "display-xl": ["56px", {"lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "600"}],
    "body-lg": ["18px", {"lineHeight": "30px", "letterSpacing": "0em", "fontWeight": "400"}],
    "headline-md": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
    "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
    "title-lg": ["18px", {"lineHeight": "26px", "letterSpacing": "0em", "fontWeight": "600"}],
    "body-md": ["16px", {"lineHeight": "26px", "letterSpacing": "0em", "fontWeight": "400"}],
    "body-sm": ["14px", {"lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400"}],
    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600"}],
    "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.015em", "fontWeight": "600"}],
    "display-xl-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.015em", "fontWeight": "600"}]
  }
}

css = ["@import \"tailwindcss\";", "", "@theme inline {"]

# Colors
for k, v in config["colors"].items():
    css.append(f"  --color-{k}: {v};")

# Border Radius
for k, v in config["borderRadius"].items():
    if k == "DEFAULT":
        css.append(f"  --radius: {v};")
    else:
        css.append(f"  --radius-{k}: {v};")

# Spacing
for k, v in config["spacing"].items():
    css.append(f"  --spacing-{k}: {v};")

# FontFamily
for k, v in config["fontFamily"].items():
    font_name = v[0]
    css.append(f"  --font-{k}: '{font_name}', sans-serif;")

# FontSize
for k, v in config["fontSize"].items():
    size = v[0]
    props = v[1]
    css.append(f"  --text-{k}: {size};")
    if "lineHeight" in props:
        css.append(f"  --text-{k}--line-height: {props['lineHeight']};")
    if "letterSpacing" in props:
        css.append(f"  --text-{k}--letter-spacing: {props['letterSpacing']};")
    if "fontWeight" in props:
        css.append(f"  --text-{k}--font-weight: {props['fontWeight']};")

css.append("}")
css.append("")
css.append("""
body {
  background-color: var(--color-background);
  color: var(--color-on-surface);
  font-family: var(--font-body-md);
  font-size: var(--text-body-md);
  line-height: var(--text-body-md--line-height);
  -webkit-font-smoothing: antialiased;
}

@layer base {
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    overscroll-behavior: none;
  }
  main > :first-child {
    margin-top: 0 !important;
  }
  main > :last-child {
    margin-bottom: 0 !important;
  }
}

::-webkit-scrollbar {
  display: none;
}
""")

with open("src/app/globals.css", "w") as f:
    f.write("\n".join(css))

