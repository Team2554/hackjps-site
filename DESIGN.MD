# Hack GPS Design System

## Purpose
Hack GPS is the canonical design language for HackJPS digital properties. It codifies the visual and interaction rules established in the homepage and resources page so future hackathon sites, tools, and docs remain consistent.

Primary goals:
- Keep the brand unmistakably HackJPS.
- Make event information scannable under pressure.
- Preserve a technical, command-center tone without sacrificing readability.

## Brand Core
- Brand: `HackJPS`
- Design system name: `Hack GPS`
- Tone: `mission control`, `industrial`, `editorial`, `high-signal`
- Audience: high-school hackers, mentors, judges, sponsors, volunteers

## Visual Principles
1. Black-first surfaces.
The default canvas is black or near-black, with light typography and thin structural lines.

2. Technical overlays over decorative UI.
Use telemetry-style labels, monospace metadata, and grid/rule structure instead of soft consumer-card metaphors.

3. Sharp geometry with detached-corner accents.
Cards, navigation blocks, and CTA shells should feel precise and engineered.

4. Big display type, restrained body copy.
Use large uppercase display headlines, then calm readable paragraphs.

5. Color as signal, not decoration.
Green indicates action and emphasis. Warm off-white carries text hierarchy. Avoid rainbow accents.

## Color Tokens
### Core
- `--background`: `#000000`
- `--foreground`: `#ffffff`
- `--card`: `#111111`
- `--muted`: `#1a1a1a`
- `--muted-foreground`: `#888888`
- `--border`: `#3a3a44`

### Hack GPS Specific
- `Telemetry Warm`: `#c7c3b5`
- `Telemetry Warm Bright`: `#e1dece`
- `Primary Signal Green`: `#16a34a`
- `Danger`: `#b30000`

### Usage Rules
- Use `Telemetry Warm` for operational labels, outlines, and dense resource surfaces.
- Use white for hero-level branding and critical text.
- Use green for action states and highlighted interaction only.
- Keep gradients subtle and atmospheric; do not use bright multicolor backgrounds.

## Typography
### Font Stack
- Display: `AgencyFB` with `Space Grotesk` fallback
- Sans/UI: `Inter`
- Mono/Telemetry: `ShareTechMono`

### Type Scale Guidance
- Hero title: `text-7xl` to `text-[14rem]`, uppercase, tight tracking
- Section title: `text-4xl` to `text-6xl`, uppercase
- Resource hero title: `text-6xl` to `text-8xl`, uppercase
- Body copy: `16px` to `18px`, relaxed leading
- Telemetry/meta labels: `10px` to `12px`, uppercase, wide tracking

### Typographic Behavior
- Keep metadata uppercase and monospace.
- Keep body copy sentence case.
- Use sparse punctuation in major labels to retain control-panel tone.

## Layout System
### Structure
- Homepage: full-screen vertical snap sections.
- Resources: left rail navigation + right detail pane.
- Header rows: left telemetry, center brand, right telemetry.

### Spacing
Base rhythm: 4px/8px with larger jumps for section transitions.
Common values: `4, 6, 8, 12, 16, 24, 32, 48, 64, 96`.

### Density Rules
- Hero and section openings should breathe.
- Resource blocks can be denser but need clear separators (`border-t` or rail lines).

## Shape, Lines, and Surfaces
- Primary corners are square or minimally rounded.
- Detached-corner accents are preferred for important interactive surfaces.
- Border treatment should stay thin (`1px` or `2px` max for accents).
- Avoid heavy drop shadows; depth comes from overlays and contrast.

## Signature Components
### Top Telemetry Bar
A slim command-line header with:
- Location
- Date/countdown context
- Participant/build metrics

### Hero Mark
Massive `HACKJPS` wordmark over dramatic event imagery with vignette masking.

### Section Frames
Each major section starts with uppercase display heading + short descriptive paragraph.

### Resource Rail Navigation
- Left list of categories/actions
- Active row uses inverted colors (warm background, dark text)
- External utility links include icon indicators

### Utility Link Cards
Bordered low-contrast blocks with monospace labels and right-aligned outbound icon.

### Expandable FAQ Items
Button-driven disclosures with visible expanded/collapsed state and keyboard accessibility.

## Motion
- Motion should be minimal and meaningful.
- Preferred patterns:
  - Soft fade-in overlays
  - Subtle hover color shifts
  - Small directional icon nudges
  - Countdown updates at sensible intervals
- Avoid elastic, playful, or spring-heavy motion styles.

## Accessibility and Safety Standards
- Interactive containers must be semantic (`button`, `a`) not clickable `div`s.
- Any external link opened in a new tab must include `rel="noopener noreferrer"`.
- Keep contrast high on black surfaces.
- Treat event-critical strings (date, location, links) as centralized config values.
- Do not bypass type errors in production build config.

## Content Voice
- Direct, short, operational.
- Emphasize readiness, logistics, and action.
- Example style:
  - "General Information"
  - "Event Rules"
  - "Building: 48 Hours"
  - "Get Started"

## Responsive Behavior
### Mobile
- Preserve telemetry style but shorten labels.
- Resource rail becomes horizontal scrollable strip.
- Keep primary headings large but avoid clipping.

### Tablet/Desktop
- Restore split-pane resources layout.
- Keep center brand lockup in header rows.
- Preserve full detached-corner and line treatments.

## Implementation Rules for Future Hackathons
1. Reuse the same token vocabulary before introducing new colors or typography.
2. Add new content sections by composition, not one-off style overrides.
3. Put event-specific details in shared config modules.
4. Keep external links behind a shared safe-link abstraction.
5. Run build + typecheck before shipping any design iteration.

## Non-Goals
- This system is not a generic startup SaaS style.
- It is not playful gradient-heavy Gen-Z branding.
- It is not soft, rounded consumer UI.

Hack GPS should always feel like an event operations cockpit for ambitious student builders.
