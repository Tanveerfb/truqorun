# Truqorun Logo Assets Guide

This guide explains the different logo variations available and where each should be used throughout the application.

## Logo Files Overview

### 1. **Combinational Mark** (Logo + Text)

- `Truqorun - Combinatinal Mark.jpg` - JPG with background
- `Truqorun -Transparent Combinational Mark.png` - PNG with transparency

**Best for:**

- Social media sharing (Open Graph)
- Marketing materials
- Large hero sections

**Currently used in:**

- Open Graph image metadata (layout.tsx)

---

### 2. **LogoText** (Full horizontal logo with text)

- `Truqorun - LogoText.png` - PNG with background
- `Truqorun - Transparent LogoText.png` - PNG with transparency

**Best for:**

- Navigation bars
- Footer branding
- Email signatures
- Documentation headers

**Currently used in:**

- Navigation bar (NavLogo.tsx) - Using transparent combinational mark
- Footer (Footer.tsx) - Using transparent logotext

---

### 3. **WordMark** (Text only)

- `Truqorun - WordMark.png` - PNG with background
- `Truqorun - Transparent WordMark.png` - PNG with transparency

**Best for:**

- Tight spaces where icon + text is too wide
- Text-heavy contexts
- Mobile headers (optional alternative)

**Currently used in:**

- Not currently in use (available for future implementations)

---

### 4. **Pictorial Mark** (Icon only)

- `Truqorun - Pictorial Mark.png` - PNG with background
- `Truqorun - Transparent Pictorial Mark.png` - PNG with transparency

**Best for:**

- App icons
- Small badges
- Social media profile pictures
- Loading screens
- Favicon alternatives

**Currently used in:**

- Not currently in use (available for future implementations)

---

### 5. **Favicon**

- `Truqorun - Favicon.png` - Standard favicon
- `Truqorun - Transparent Faivcon.png` - Transparent favicon

**Best for:**

- Browser tab icons
- Bookmark icons
- Progressive Web App icons

**Currently used in:**

- Browser favicon (layout.tsx metadata)
- Apple touch icon (layout.tsx metadata)

---

### 6. **Legacy/Deprecated**

- `Truqorun_white_bg.png` - Old logo with white background

**Status:** ⚠️ Replaced by transparent versions

---

## Color Palette

The logos incorporate the Truqorun brand colors:

- **Sky Aqua**: `#04D5F2` - Primary brand color
- **Light Green**: `#8EDC89` - Success/accent color
- **Turquoise**: `#4CD5CA` - Secondary accent color

These colors are defined in `app/globals.scss` and automatically apply throughout the design system.

---

## Implementation Guidelines

### Navigation Bar

```tsx
// Use transparent combinational mark for clean rendering
<Image
  src="/Truqorun -Transparent Combinational Mark.png"
  alt="Truqorun"
  width={160}
  height={45}
  className="h-11 w-auto"
/>
```

### Footer

```tsx
// Use transparent logotext for branding
<Image
  src="/Truqorun - Transparent LogoText.png"
  alt="Truqorun"
  width={140}
  height={40}
  className="h-9 w-auto"
/>
```

### Favicons (Metadata)

```tsx
icons: {
  icon: [
    { url: "/Truqorun - Favicon.png", sizes: "32x32", type: "image/png" },
  ],
  apple: [
    { url: "/Truqorun - Favicon.png", sizes: "180x180", type: "image/png" },
  ],
}
```

### Open Graph Images

```tsx
openGraph: {
  images: [{
    url: "/Truqorun - Combinatinal Mark.jpg",
    width: 1200,
    height: 630,
  }],
}
```

---

## Dark Mode Considerations

✅ **Transparent versions work best** - They adapt automatically to light/dark backgrounds

❌ **Avoid white background versions** - They create jarring white boxes in dark mode

The current implementation uses transparent PNG versions that work seamlessly in both light and dark themes without additional CSS filters.

---

## Future Enhancements

### Potential Uses:

1. **Loading Screen**: Use Pictorial Mark with animation
2. **404 Page**: Feature the Pictorial Mark with custom error message
3. **Email Templates**: Include LogoText in header
4. **Social Media**: Profile pictures using Pictorial Mark
5. **PWA Manifest**: Configure various icon sizes for Progressive Web App

---

## File Naming Convention

Current files follow this pattern:

- `Truqorun - [Type].png` - Standard with background
- `Truqorun - Transparent [Type].png` - Transparent background

**Note:** There's a typo in "Faivcon" (should be "Favicon") but maintaining consistency with existing files.

---

## Quick Reference

| Use Case        | Recommended File                             |
| --------------- | -------------------------------------------- |
| Navbar          | Truqorun -Transparent Combinational Mark.png |
| Footer          | Truqorun - Transparent LogoText.png          |
| Favicon         | Truqorun - Favicon.png                       |
| Open Graph      | Truqorun - Combinatinal Mark.jpg             |
| Social Profile  | Truqorun - Transparent Pictorial Mark.png    |
| App Icon        | Truqorun - Pictorial Mark.png                |
| Email Signature | Truqorun - Transparent LogoText.png          |
| Print Materials | Truqorun - Combinatinal Mark.jpg             |

---

**Last Updated:** February 15, 2026
