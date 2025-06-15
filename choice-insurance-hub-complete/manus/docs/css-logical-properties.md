# CSS Logical Properties Implementation

This document explains the CSS logical properties implementation in your Next.js project and how to use them effectively.

## What are CSS Logical Properties?

CSS logical properties provide a way to control layout through logical, rather than physical, direction and dimension mappings. They adapt to different writing modes and text directions automatically.

### Physical vs Logical Properties

| Physical Property | Logical Property | Description |
|------------------|------------------|-------------|
| `width` | `inline-size` | Size along the inline axis (horizontal in LTR) |
| `height` | `block-size` | Size along the block axis (vertical in LTR) |
| `margin-left` | `margin-inline-start` | Margin at the start of inline axis |
| `margin-right` | `margin-inline-end` | Margin at the end of inline axis |
| `margin-top` | `margin-block-start` | Margin at the start of block axis |
| `margin-bottom` | `margin-block-end` | Margin at the end of block axis |
| `padding-left` | `padding-inline-start` | Padding at the start of inline axis |
| `padding-right` | `padding-inline-end` | Padding at the end of inline axis |
| `padding-top` | `padding-block-start` | Padding at the start of block axis |
| `padding-bottom` | `padding-block-end` | Padding at the end of block axis |
| `border-left` | `border-inline-start` | Border at the start of inline axis |
| `border-right` | `border-inline-end` | Border at the end of inline axis |
| `border-top` | `border-block-start` | Border at the start of block axis |
| `border-bottom` | `border-block-end` | Border at the end of block axis |
| `left` | `inset-inline-start` | Position from start of inline axis |
| `right` | `inset-inline-end` | Position from end of inline axis |
| `top` | `inset-block-start` | Position from start of block axis |
| `bottom` | `inset-block-end` | Position from end of block axis |

## Implementation in Your Project

### 1. Layout.tsx Updates

The viewport configuration in `layout.tsx` now uses logical properties in the critical CSS:

```css
.min-h-screen { min-block-size: 100vh; }
```

### 2. Critical CSS Updates

The `critical.css` file has been updated with logical properties:

```css
/* Before */
.hero-section {
  padding: 5rem 0 8rem;
  max-inline-size: 48rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

/* After */
.hero-section {
  padding-block: 5rem 8rem;
  max-inline-size: 48rem;
  margin-inline: auto;
}
```

### 3. Tailwind CSS Extensions

Custom utilities have been added to `tailwind.config.js`:

#### Size Utilities
- `.is-full` → `inline-size: 100%`
- `.bs-screen` → `block-size: 100vh`
- `.min-bs-screen` → `min-block-size: 100vh`
- `.max-is-prose` → `max-inline-size: 65ch`

#### Spacing Utilities
- `.mi-auto` → `margin-inline: auto`
- `.pi-4` → `padding-inline: 1rem`
- `.pb-8` → `padding-block: 2rem`

#### Border Utilities
- `.border-be` → `border-block-end: 1px solid`
- `.border-is` → `border-inline-start: 1px solid`

#### Position Utilities
- `.start-0` → `inset-inline-start: 0`
- `.top-logical-0` → `inset-block-start: 0`

### 4. Global CSS Utilities

Additional utilities in `globals.css`:

```css
.inline-size-full { inline-size: 100%; }
.margin-inline-auto { margin-inline: auto; }
.padding-block-8 { padding-block: 2rem; }
.text-start { text-align: start; }
```

## Usage Examples

### Basic Layout with Logical Properties

```jsx
// Using Tailwind logical utilities
<div className="is-full min-bs-screen pi-4 pb-8">
  <header className="border-be">
    <h1 className="text-start">My Site</h1>
  </header>
  <main className="max-is-prose mi-auto">
    <p>Content here...</p>
  </main>
</div>
```

### Custom CSS with Logical Properties

```css
.card {
  inline-size: 100%;
  max-inline-size: 24rem;
  padding-block: 1.5rem;
  padding-inline: 1rem;
  margin-inline: auto;
  border-block-end: 1px solid #e5e7eb;
}

.hero {
  min-block-size: 50vh;
  padding-block: 4rem;
  text-align: center;
}

.sidebar {
  inline-size: 16rem;
  min-block-size: 100vh;
  padding-inline-start: 1rem;
  border-inline-end: 1px solid #d1d5db;
}
```

### Responsive Design with Logical Properties

```css
.container {
  inline-size: 100%;
  max-inline-size: 72rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-inline: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: 4rem;
  }
}
```

## Benefits

1. **Internationalization Ready**: Automatically adapts to RTL languages
2. **Writing Mode Support**: Works with vertical writing modes
3. **Future-Proof**: Modern CSS standard
4. **Semantic**: More meaningful property names
5. **Consistent**: Logical flow regardless of physical direction

## Browser Support

CSS Logical Properties are well-supported in modern browsers:
- Chrome 69+
- Firefox 41+
- Safari 12.1+
- Edge 79+

## Migration Tips

1. **Start with new components**: Use logical properties for all new components
2. **Gradual migration**: Update existing components one at a time
3. **Test thoroughly**: Ensure layouts work in both LTR and RTL contexts
4. **Use fallbacks**: Consider providing fallbacks for older browsers if needed

## Common Patterns

### Centering Content
```css
/* Old way */
.center {
  margin-inline-start: auto;
  margin-inline-end: auto;
}

/* New way */
.center {
  margin-inline: auto;
}
```

### Full Width with Max Width
```css
/* Old way */
.container {
  inline-size: 100%;
  max-inline-size: 1200px;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

/* New way */
.container {
  inline-size: 100%;
  max-inline-size: 75rem;
  margin-inline: auto;
}
```

### Sticky Header
```css
/* Old way */
.header {
  position: sticky;
  inset-block-start: 0;
  inline-size: 100%;
}

/* New way */
.header {
  position: sticky;
  inset-block-start: 0;
  inline-size: 100%;
}
```

This implementation provides a solid foundation for using CSS logical properties throughout your project while maintaining compatibility and performance.