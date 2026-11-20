# THE HUMAN CONDITION
## Museum of the Recorded Human — 2046
### Complete 3D World, Exhibition Assets & Interaction Implementation Specification
**Document version:** 2.0  
**Project type:** Interactive 3D educational art museum  
**Target production environment:** MANI Engine / Manifest or a compatible editable real-time 3D engine  
**Historical subject:** Human digital culture in 2026  
**Fictional museum date:** 2046

---

# 0. EXECUTION CONTRACT — READ BEFORE BUILDING

You are acting as the 3D world architect, environment artist, asset developer and interaction programmer for an interactive museum.

Your job is to implement the project, not merely summarize the concept or generate promotional images.

Use the supplied architectural reference image as the **primary source of visual design**.

## Non-negotiable requirements

1. Preserve the visual identity of the reference architecture: a monumental curved central atrium, layered balconies, flowing pale mineral surfaces, translucent hanging architectural membranes, and six connected exhibition wings.
2. Build one coherent, physically traversable world. Never build six unrelated rooms or a miniature architectural maquette.
3. Construct every interactive artwork as independent, selectable objects, grouped under a named parent.
4. Keep the architecture, exhibit objects, interactive controls, information panels, animation states and lights separately editable.
5. Do not use a static picture or textured plane as a substitute for the requested 3D building or interactive sculpture.
6. Do not merge sculptures into the structural building meshes.
7. Do not regenerate the entire building when adjusting one exhibit.
8. Do not invent unsupported engine APIs. Inspect the actual runtime or editor before implementing scripts.
9. All archival records must be identified as historical source material, simulated examples, or speculative AI reconstructions.
10. No scores, leaderboards, failure screens, compulsory quizzes, or timed challenges.
11. Every exhibit must respond to at least one meaningful visitor interaction.
12. Preserve the user-approved sculptural and architectural visual references.

If an advanced effect is technically unsupported, retain the object and its interaction using the specified fallback rather than removing the entire exhibit.

## Build priority

Priority 1: Spatial coherence, navigability, object independence and reliable interaction.

Priority 2: Recognizable architectural design, materials and lighting.

Priority 3: Detailed sculpture, visual effects, animation and sound.

Priority 4: Optional polish.

---

# 1. MUSEUM CONCEPT AND NARRATIVE

The project imagines a museum established in 2046 to investigate the digital civilization of 2026.

The fictional future institution has recovered social-media records, AI-generated images, workplace measurements, communications, cultural objects, personal memories and automated decision records.

It tries to understand human society by collecting, classifying and reconstructing these materials.

However, the collection contains partial histories, conflicting sources, generated identities and missing personal experiences.

**Central research question:**

"What remains of humanity when a society becomes data?"

The museum should not present artificial intelligence as either inherently good or inherently bad.

It should let the visitor discover the difference between:

- Human experience.
- A record of that experience.
- A machine-generated interpretation.
- A reconstructed possibility.
- Missing or unknowable information.

## Educational approach

Use speculative historical inquiry, museum learning and critical AI literacy.

The visitor is treated as a researcher exploring an archive.

The visitor should be able to inspect evidence, change classification conditions, compare reconstructions and observe what is missing.

There is no single correct interpretation for every exhibition.

For educational clarity, each exhibit must still communicate one specific mechanism or question.

---

# 2. WORLD COORDINATES, SCALE AND SPATIAL STRUCTURE

## 2.1 Coordinate convention

Use a consistent world coordinate system.

Preferred convention:

- X: east/west.
- Y: vertical elevation.
- Z: north/south.
- 1 world unit approximately equals 1 metre, if the engine supports metric scaling.
- Visitor eye level approximately 1.6 metres.
- Reference visitor height approximately 1.7 metres.

If the engine uses a different coordinate convention, convert consistently and document the conversion.

## 2.2 Overall scale

Design target: approximately 450m × 320m for the overall conceptual site, equivalent to approximately 144,000 square metres.

This is the campus-scale design envelope, not a requirement to fill every square metre with dense 3D geometry.

The navigable museum must contain a complete architectural core and six substantial wings.

Use simplified distant geometry, modular repetition, mesh instancing and level-of-detail where possible.

### Central Archive Index

Plan dimensions: approximately 140m × 100m.

Shape: large asymmetric ellipse with flowing outer boundaries.

Height: approximately 45m at the primary atrium.

Central usable floor: a wide open area, unobstructed by decorative sculptures.

Architectural feature: a large segmented elliptical skylight with structurally supported curved beams.

### Floor levels

- B1: optional below-ground archive and technical support, approximately Y = -6m.
- L1: public entrance and atrium, Y = 0m.
- L2: main exhibition circulation, approximately Y = 12m.
- L3: partial observation and research galleries, approximately Y = 24m.
- Roof structure and skylight: approximately Y = 42–50m.

If a multi-storey navigation system cannot be generated reliably, maintain a fully traversable main route on L1 and use connected partial upper galleries as a later construction phase.

Never present decorative upper floors as accessible if they are not actually traversable.

## 2.3 Building composition

One central atrium plus six irregular exhibition wings.

Suggested conceptual positions relative to the central atrium:

- WING_01 — southwest.
- WING_02 — west.
- WING_03 — northwest.
- WING_04 — northeast.
- WING_05 — east.
- WING_06 — southeast.

Suggested zone centres, subject to geometry refinement:

| Wing | X | Z | Approximate footprint |
|---|---:|---:|---|
| WING_01 Archive Vault | -105 | -105 | 90 × 65m |
| WING_02 Machine Archive | -160 | 10 | 80 × 70m |
| WING_03 Identity Chamber | -100 | 100 | 90 × 75m |
| WING_04 Reconstruction Lab | 100 | 100 | 80 × 65m |
| WING_05 Weather Chamber | 160 | 5 | 90 × 80m |
| WING_06 Floating Evidence | 105 | -105 | 100 × 70m |

The coordinates are layout targets, not instructions to overlap wings with the atrium. Refine the connections based on actual walkable geometry.

## 2.4 Circulation

Provide two route systems.

**Primary route:** Central atrium → Archive Vault → Machine Archive → Identity Chamber → Reconstruction Lab → Weather Chamber → Floating Evidence Hall → Reflection Deck.

**Secondary route:** A continuous perimeter connection and shortcuts back to the central atrium.

Main corridors should be approximately 10–14m wide.

Avoid dead ends except inside intentionally bounded exhibit alcoves.

Use ramps, stairs or lifts for floor changes.

Provide railings along elevated routes and physically usable door openings.

Keep corridor collision boundaries accurate.

The building should feel monumental, but a visitor must not need to walk hundreds of metres simply to activate a small interactive exhibit. Provide unobtrusive fast-navigation points if necessary.

---

# 3. GLOBAL ARCHITECTURAL STYLE

## 3.1 Main visual language

**Style:** Experimental post-human archival architecture.

The building should be elegant, sculptural, contemporary and physically plausible.

Primary forms:

- Large asymmetric elliptical floor plates.
- Sweeping curved balcony edges.
- Smooth flowing ceiling apertures.
- Thin translucent architectural veils.
- Recessed glass partitions.
- Deliberately exposed structural supports.
- Long continuous sightlines.
- Large negative spaces.

Do not create floating concrete slabs without visible structural support.

Use columns, load-bearing cores, beams and perimeter structural walls where visually necessary.

The architecture may be abstract, but it must look buildable.

## 3.2 Global materials

Create reusable material presets rather than assigning inconsistent random textures.

### MAT_01_IVORY_MINERAL

Application: principal atrium walls, curved ceilings, gallery circulation structure.

Appearance: warm ivory limestone or fine mineral composite.

Base colour: approximately #E6DFD3.

Metalness: 0.

Roughness: 0.65–0.82.

Texture: subtle mineral variation, no large repetitive concrete stains.

Avoid obvious brick patterns.

### MAT_02_PALE_CONCRETE

Application: concealed support surfaces, service structure, structural cores.

Base colour: #BDBBB7.

Roughness: approximately 0.75.

Visible construction joints should be subtle and intentional.

### MAT_03_BRUSHED_STEEL

Application: archive drawers, exhibit bases, structural hardware, display frames.

Base colour: approximately #858A8A.

Metalness: 0.75–1.0.

Roughness: 0.22–0.4.

Use subtle directional brushing, not mirror chrome.

### MAT_04_DARK_GRAPHITE

Application: Identity Chamber, dark experimental alcoves and some display structures.

Base colour: #292B30.

Metalness: 0–0.3 depending on the surface.

Roughness: 0.55–0.8.

### MAT_05_CLEAR_GLASS

Application: research vitrines, viewing partitions and transparent archival panels.

Use clear transmission or engine-supported transparency.

Approximate roughness: 0.02–0.12.

Keep reflections restrained.

Use correct depth handling and physically plausible refractive appearance when supported.

### MAT_06_FROSTED_GLASS

Application: translucent building partitions.

Base tint: very pale gray or cyan.

Approximate roughness: 0.3–0.6.

Use frosted, diffused transmission when supported.

Fallback: transparent layered planes with softened edges.

### MAT_07_OPALESCENT_RESIN

Application: human sculptures and translucent sculptural bodies.

Base tint: warm ivory.

Surface: smooth resin with partially translucent edges, gentle internal scattering and delicate surface details.

Do not use opaque stone, cement or clay for sculptures intended to appear translucent.

### MAT_08_ARCHIVAL_AMBER

Application: 2026 source markers and selective archival lighting.

Colour: #C99F68.

This is a visual identity accent, not a requirement that every object emit light.

### MAT_09_MACHINE_CYAN

Application: 2046 AI-generated reconstructions and machine classification indicators.

Colour: #93BDC7.

Use sparingly.

### MAT_10_SUSPENDED_MEMBRANE

Application: central atrium veils and translucent art structures.

Material: thin semi-transparent fabric, fine polymer mesh or lightly frosted glass-like film.

Visually lightweight with soft shadows.

Avoid the appearance of solid white concrete sheets.

## 3.3 Global lighting system

Use realistic architectural illumination as a baseline.

Main atrium:

- Broad daylight through skylights.
- Neutral daylight tone, approximately 5000–6000K.
- Soft reflected illumination.
- Subtle warm architectural accents around 3000–3500K.
- No arbitrary particle effects in the architecture.

Archive drawers:

- Warm neutral directional lighting, approximately 3200–3800K.
- Narrow task lights inside functional drawers.

Machine Archive:

- Neutral white light, approximately 4200–5000K.
- Limited cyan accent lighting only for active data elements.

Identity Chamber:

- Lower ambient level.
- Controlled sculpture spotlights, approximately 3000–4000K.
- Darker backgrounds to increase contrast with translucent resin.

Reconstruction Lab:

- Neutral laboratory illumination, approximately 4000–5000K.
- Adjustable warm-to-neutral spotlights on vitrines.

Weather Chamber:

- Dimmable neutral ambient lighting.
- Separate exhibit-controlled lighting for emotional weather states.

Floating Evidence Hall:

- Soft, diffused light to reveal transparent panels.
- Controlled reflections, no excessive bloom.

All lighting values are visual targets. Adapt brightness and units to the actual renderer.

---

# 4. CENTRAL ATRIUM — THE ARCHIVE INDEX

Object group: `ATRIUM_ARCHIVE_INDEX`

## Architectural form

Large asymmetric elliptical floor with flowing balcony edges.

Three visible levels.

A central floor circle approximately 30–45m wide remains available for visitor orientation.

An elliptical skylight occupies the highest point.

Overlapping curved bridges connect partial upper floors.

The building should evoke the architectural reference: pale mineral curves, large suspended translucent veils and deep layered space.

## Hanging archival membranes

Create 12 independent translucent architectural panels:

`INDEX_PANEL_001` through `INDEX_PANEL_012`.

These are not finished art installations. They form a spatial archive directory.

Shapes:

- Some tall vertical sheets.
- Some gently curved suspended films.
- Varied lengths and heights.
- Lightweight material with softly visible edges.

Use subtle neutral, amber and cyan tint differences.

Each panel contains:

- Archive number.
- Brief title.
- Connected wing.
- A small source-versus-reconstruction symbol.

## Visitor orientation

At arrival, show:

"THE HUMAN CONDITION"

"Museum of the Recorded Human — 2046"

"Explore the surviving records of human life in 2026."

A minimal navigation panel should indicate six wings.

Clicking an index panel should highlight its corresponding wing on the visitor map.

Optional: enable a direct movement or guided navigation action, but do not force teleportation.

## Centrepiece restrictions

Do not insert a giant human sculpture into the main atrium during initial architectural construction.

The main atrium is an orientation space and visual index.

Keep the identity sculptures in WING_03.

---

# 5. SIX EXHIBITION ENVIRONMENTS — DETAILED ASSET SPECIFICATIONS

## WING_01 — ARCHIVE DRAWER VAULT

### Architecture

Approximate space: 90 × 65m.

Height: approximately 24m.

Long axial gallery.

The side walls contain repeated metal drawers.

Create multiple storage blocks rather than one huge unified mesh.

Use matte brushed stainless steel, pale gray mineral structure and thin amber under-cabinet lighting.

Create high-level maintenance walkways and discreet metal railings.

Use a narrow clerestory/skylight along the length of the hall.

Floor: durable pale polished stone, approximate roughness 0.28–0.4.

### Storage cabinet modules

Name example: `ARCHIVE_RACK_A01`.

Cabinet structural dimensions: approximately 2.5m wide, 0.8m deep and 3–4m high.

Each cabinet can have multiple drawer faces.

Use repeated instances for non-interactive background cabinets.

Create selected interactive drawers as separate movable objects.

Interactive drawer geometry must have:

- Outer metal body.
- Separate sliding drawer.
- Handle.
- Label holder.
- Interior archival tray.
- Independent transparent protective evidence box.
- Small concealed warm light.

### Exhibition content

Archive 002 — The Attention Archive.

Reserve one prominent research island with a projected attention timeline.

Keep the rest of the storage system mostly architectural.

---

## WING_02 — MACHINE ARCHIVE

### Architecture

Approximate space: 80 × 70m.

Height: approximately 22m.

A large open room divided by several groups of translucent modular panels.

Glass modules vary in width from approximately 2–6m.

Some panels extend vertically across multiple levels.

Architectural colour palette: pale cool gray, transparent cyan-gray glass and restrained metallic framing.

Avoid bright cyberpunk signs and dense neon-blue grid walls.

### Physical components

- Transparent modular partitions.
- Recessed data storage columns.
- Elevated transparent observation walkway.
- Three choice portals.
- Information-filtering wall.
- Transparent rule-controlled passageways.

Panels must be separated objects for individual visibility changes.

### Exhibition content

Archive 004 — The Choice Machine.

Archive 008 — The Algorithmic Filter.

Archive 010 — The Invisible Rules.

Use distinct spatial subsections:

- Choice area.
- Recommendation area.
- Rule/Access area.

Do not place all three experiments into one undifferentiated cluster.

---

## WING_03 — IDENTITY CHAMBER

### Architecture

Approximate space: 90 × 75m.

Height: 25–30m.

Large, predominantly dark, curved gallery.

Floor: dark polished graphite mineral surface.

Walls: curved charcoal panels with subtle mineral texture.

Two central display areas should be physically separated.

Do not use a traditional rectangular gallery with sculpture plinths lined along the wall.

### Spatial layout

Exhibit 001 on the left side.

Exhibit 006 on the right side.

Maintain approximately 20–30m of separation between the main display positions, subject to actual wing geometry.

Provide circular walking space around both artworks.

### Display stage

Each main sculpture should have a separate low circular base.

Metal base approximate diameter: 5–8m depending on asset scale.

Pedestal height: approximately 0.3–0.7m.

No excessive tall pedestals.

### Exhibition content

Archive 001 — The Multiple Selves.

Archive 006 — The Quantified Body.

These must be conceptually and technically separate artworks.

---

## WING_04 — RECONSTRUCTION LAB

### Architecture

Approximate space: 80 × 65m.

Height: approximately 20m.

Bright, precise research environment.

Pale concrete structure.

Glass research partitions.

Brushed stainless-steel tables.

Independent sealed display vitrines.

Overhead lighting tracks with adjustable spotlights.

### Display cabinets

Each cabinet has:

- Steel base.
- Separated glass panels.
- Independent frame.
- Internal light.
- Small evidence platform.
- Information label.
- Selectable individual content objects.

Suggested main cabinet dimensions: approximately 3–4m wide, 2–3m deep, 3–4m high.

Provide multiple work islands for different historical records.

Avoid excessive medical equipment.

The lab should read as a museum reconstruction institute, not a hospital ward.

### Exhibition content

Archive 003 — The Manufactured Culture.

Archive 009 — The Reconstructed Memory.

---

## WING_05 — WEATHER CHAMBER

### Architecture

Approximate space: 90 × 80m.

Height: approximately 30m.

A darker, immersive, enclosed hall.

Curved ceiling with one circular suspension rig.

The centre contains a shallow recessed collection zone or visual floor ring.

Provide a continuous dry visitor path around the central installation.

Use drainage grates and overhead attachment points as architectural details.

Clouds, rain and voices belong to the exhibit layer, not to the fixed building geometry.

### Exhibition content

Archive 005 — The Weather of Emotion.

Archive 007 — The Incomplete Relationship.

Provide two separate active exhibition areas with acoustic and visual separation.

---

## WING_06 — FLOATING EVIDENCE HALL

### Architecture

Approximate space: 100 × 70m.

Height: approximately 28m.

A luminous curved gallery.

Pale stone surfaces.

Continuous curved elevated visitor walkway.

Large areas of vertical empty space.

Ceiling rails and fine suspension points for hanging evidence objects.

### Material palette

Mostly ivory, pale gray, glass and selective amber.

Transparent evidence panels must remain visible against their backgrounds.

### Exhibition content

Archive 011 — The Last Human Message.

Archive 012 — The Fragile Truth.

Keep these as two separate suspended archive installations.

Use transparent glass-like panels of different sizes and hanging positions.

The panels should have physical depth and independent geometry, not simply 2D images covering the entire room.

---

# 6. INTERACTION ARCHITECTURE — SHARED SYSTEM

Every exhibit uses a common interaction pattern.

## Interaction loop

1. Visitor approaches the exhibit.
2. The control panel becomes discoverable.
3. Visitor clicks or activates an object.
4. One or more named scene objects change state.
5. The associated archival evidence is shown.
6. A short explanation of the mechanism appears.
7. Visitor can perform additional actions, compare versions or reset.

## Input system

Preferred: pointer click on objects or visible UI buttons.

Optional: keyboard interaction using E or F when a nearby object is focused.

On touchscreen: tapping should perform the equivalent action.

Avoid invisible interactions that depend on guessing where to click.

A subtle hover state is acceptable.

Provide a small "Interact" prompt near active exhibits.

## Shared UI components

Each exhibition should have:

- `EX##_TITLE`
- `EX##_CONTROL_PANEL`
- `EX##_ARCHIVE_PANEL`
- `EX##_REFLECTION_PANEL`
- `EX##_RESET`

Information panels should never block the main artwork by default.

Use a compact, anchored interface.

Display text should be readable and contrast adequately with the background.

## Shared state requirements

Each exhibit must have its own independent state.

Activating Exhibit 005 must not reset or change Exhibit 001.

Provide one local reset control per exhibit.

Provide a global optional "Reset Museum" control in the central index.

Do not auto-reset exhibits merely because the visitor moves the camera.

For transparency effects, prefer stable preconfigured states over expensive material regeneration.

## Interaction animation guidelines

Object fade: approximately 0.6–1.2 seconds.

Drawer open: approximately 0.5–0.9 seconds.

Panel transition: approximately 0.3–0.7 seconds.

Object movement: approximately 0.8–1.5 seconds.

Weather transition: approximately 1.5–3 seconds.

These values are design targets.

A simple immediate state switch is acceptable if interpolation is unsupported.

---

# 7. ARCHIVE 001 — THE MULTIPLE SELVES

**Wing:** WING_03  
**Concept:** Multiple social and imagined identities of a single person in the digital era.

## Visual reference priority

The original multi-face translucent bust reference must be preserved.

The artwork is ONE visual sculptural composition composed of MULTIPLE independently editable 3D objects.

It is not a crowd of separate people and not a stack of disconnected heads.

## Sculpture shape

An approximately 7–9m high multi-faced bust.

It has one dominant head, elongated neck, shoulders and upper chest.

Additional faces emerge from overlapping translucent planes at different angles.

The faces connect into one shared visual silhouette.

Curved transparent membranes weave through the faces.

The surface is an opalescent resin and glass hybrid.

The sculpture has a polished metal circular pedestal with discreet amber internal illumination.

## Materials

Main face:

- Ivory resin.
- Approximately 85–100% visual opacity in the central facial surfaces.
- Fine pores, subtle natural imperfections and restrained gold fissures.
- Semi-translucent edges.

Optional identity faces:

- Approximate visual opacity 45–85% depending on layer position.
- Face surfaces must stay recognizable.
- Fine differences in material treatment according to identity.

Transparent membrane:

- Very clear glass-like material.
- Approximate opacity 10–25%.
- Strong but controlled highlights.
- No opaque milky white material.

Internal light:

- Warm amber filaments.
- Very subtle.
- Avoid heavy bloom.

## Independent scene objects

Parent: `EX001_MULTIPLE_SELVES`

Children:

- `EX001_BASE`
- `EX001_SELF_00_ORIGINAL`
- `EX001_SELF_01_PUBLIC`
- `EX001_SELF_02_PROFESSIONAL`
- `EX001_SELF_03_PRIVATE`
- `EX001_SELF_04_AGED`
- `EX001_SELF_05_SYNTHETIC`
- `EX001_SELF_06_ALTERNATIVE`
- `EX001_GLASS_MEMBRANE_A`
- `EX001_GLASS_MEMBRANE_B`
- `EX001_GLASS_MEMBRANE_C`
- `EX001_CONTROL_PANEL`
- `EX001_INFO_PANEL`

Each identity face must be a separate object with independent visibility.

## Identity designs

**ORIGINAL — 2026 Self**

A young adult East Asian woman with blonde hair, natural facial features, calm expression and a recognizable facial identity.

Use the approved original character portrait as the likeness reference, if it is actually available to the generation system.

Do not invent a different original appearance.

**PUBLIC SELF**

The same identifiable person presented as a confident public persona.

Visibly more expressive smile, theatrical orientation and public-facing facial styling.

Archive source: simulated social-media self-presentation.

**PROFESSIONAL SELF**

Same underlying recognizable features, but more mature styling, restrained expression and distinctive professional presentation.

Archive source: simulated work or portfolio records.

**PRIVATE SELF**

Same person with a softer, less performative appearance.

Head angled downward.

Archive source: fictional diary or artist-authorized personal record.

**AGED SELF**

A speculative older version of the same person, approximately 75–85 years old.

Deep wrinkles, age-related facial changes, different posture and silver-white hair.

Archive status: imagined later-life reconstruction.

**SYNTHETIC SELF**

An AI-generated alternate identity.

The face preserves some original features but contains clearly artificial or nonhuman material transformations.

Archive status: generated, not evidence of real existence.

**ALTERNATIVE SELF**

An imagined parallel-world version.

Change the environment-dependent anatomy or material structure, but maintain recognizable identity anchors.

Archive status: fictional alternative self.

## Initial state

Only `SELF_00_ORIGINAL` is visible.

All optional faces are hidden.

Glass membrane A is visible.

Membranes B/C may be partially hidden until additional identities are added.

## Controls

Buttons:

- PUBLIC
- PROFESSIONAL
- PRIVATE
- AGED
- SYNTHETIC
- ALTERNATIVE
- RESET

## Actions

Click PUBLIC:

- Reveal `SELF_01_PUBLIC`.
- Fade in over approximately 0.8 seconds.
- Preserve the original face.
- Display public archive information.
- Add or reveal a corresponding translucent connection layer.

Click PUBLIC again:

- Hide only `SELF_01_PUBLIC`.

Apply the same pattern independently to the other identities.

Multiple optional faces can be visible simultaneously.

When several faces are active, do not physically spread them into a crowd.

Keep them overlapping and partially penetrating the dominant bust, but offset enough that each face remains visually readable.

Do not merge meshes as identities appear.

## Evidence panel content

Show the relevant source category.

For example:

"PUBLIC IDENTITY"

"Source: Simulated social-media profile, 2026."

"Interpretation: A deliberately presented version of the person."

For synthetic identities:

"Source: AI-generated alternative portrait."

"Status: Imagined, not a verified historical identity."

## Reflection question

"How many versions of a person can a digital society preserve?"

## Fallback

If true translucency is unavailable, use pale glass-like materials with limited transparency and distinct lighting.

If smooth opacity transitions fail, switch visibility instantly.

If detailed character generation fails, use individually prepared bust assets, but do not replace them with identical generic heads.

---

# 8. ARCHIVE 002 — THE ATTENTION ARCHIVE

**Wing:** WING_01  
**Concept:** Attention as a recorded and commercially valuable resource.

## Installation geometry

Create three independent metal filing drawers on a central archive research island.

Place a large horizontal timeline display above the table.

Use thin archival glass screens for records.

Object names:

- `EX002_DRAWER_MORNING`
- `EX002_DRAWER_AFTERNOON`
- `EX002_DRAWER_EVENING`
- `EX002_TIMELINE`
- `EX002_CONTENT_PANEL`
- `EX002_RESET`

## Content

Use an explicitly simulated 2026 daily attention record.

Three periods:

Morning: work and messaging.

Afternoon: browsing and recommendation feeds.

Evening: entertainment and short-form videos.

The exact record values are fictional examples for teaching, not verified statistics about 2026.

## Interaction

Initial: all drawers closed, timeline mostly empty.

Click MORNING:

- Slide the corresponding drawer forward approximately 0.35m.
- Reveal a sample timeline segment and associated archival record.
- Highlight the morning period.

Click AFTERNOON:

- Open its drawer.
- Add the afternoon segment without removing previous segments.

Click EVENING:

- Add the final segment.
- Display the accumulated example timeline.

Click a timeline segment:

- Display content type, time, system involvement and source type.

Click RESET:

- Close drawers and clear selected records.

## Reflection

"When did attention become something platforms could measure, predict and sell?"

## Fallback

Use clickable drawer-front buttons if physical drawer translation is unreliable.

---

# 9. ARCHIVE 003 — THE MANUFACTURED CULTURE

**Wing:** WING_04  
**Concept:** Human authorship, editing and AI-generated cultural material.

## Installation geometry

One rectangular glass vitrine.

Approximate dimensions: 4 × 3 × 3m.

Inside are three independent versions of one fictional visual artwork:

- `EX003_HUMAN_ORIGINAL`
- `EX003_AI_VARIATION`
- `EX003_HUMAN_AI_REVISION`

Use a restrained sculptural object or image relief as the shared subject.

The object must not switch to three unrelated artworks.

## Materials

Glass vitrine with thin brushed-metal frame.

Ivory, neutral gray and amber evidence lighting.

Artwork materials may include plaster, resin, paper or digital relief.

## Interaction

Buttons:

- ORIGINAL
- GENERATED
- REVISED
- COMPARE
- RESET

Initial: original visible.

GENERATED:

- Hide the original.
- Show AI-generated version.
- Show the generation record and source label.

REVISED:

- Show the artist-revised version.
- Display a short change history.

COMPARE:

- Arrange all three versions side by side at reduced scale.
- Add provenance labels.

RESET:

- Restore original-only display.

## Evidence language

"Human-made source."

"AI-generated variation."

"Human-edited reconstruction."

Do not claim any of the fictional case materials are authentic historical artworks.

## Reflection

"When creative work passes between humans and machines, how should its history and authorship be recorded?"

---

# 10. ARCHIVE 004 — THE CHOICE MACHINE

**Wing:** WING_02  
**Concept:** The relationship between recommendations and perceived options.

## Installation geometry

A circular interaction area with three tall translucent portals.

Portal height approximately 4.5–6m.

Materials: frosted glass, brushed steel and soft edge highlights.

Objects:

- `EX004_GATE_A`
- `EX004_GATE_B`
- `EX004_GATE_C`
- `EX004_RULE_PANEL`
- `EX004_EXPLANATION`
- `EX004_RESET`

## Interaction

Buttons:

- PERSONALIZED RECOMMENDATION
- BROAD EXPLORATION
- RESET

Initial: all three gates visible and equally emphasized.

PERSONALIZED:

- Emphasize the gate representing the user's recorded preference.
- Reduce emphasis on other gates.
- Do not permanently block the visitor.

BROAD EXPLORATION:

- Restore equal visibility.
- Display additional alternative routes or labels.

## Reflection

"When a machine recommends a path, which other possibilities become less visible?"

## Important

This is an illustrative recommendation model, not a claim about every real AI system.

---

# 11. ARCHIVE 005 — THE WEATHER OF EMOTION

**Wing:** WING_05  
**Concept:** The limits of digital emotional records.

## Installation geometry

Central suspended cloud structure approximately 6–9m across.

Construct using:

- Several layered translucent cloud-like meshes or fine suspended membranes.
- A slender circular suspension ring.
- Fine rain filaments.
- Glass droplets.
- Circular floor collection area.
- Discreet audiovisual equipment elements.

Objects:

- `EX005_CLOUD_CORE`
- `EX005_RAIN_LIGHT`
- `EX005_RAIN_HEAVY`
- `EX005_MIST`
- `EX005_SOUND_WAVE`
- `EX005_CONTEXT_PANEL`
- `EX005_CONTROL_PANEL`

## Materials

Cloud: translucent layered ivory/gray polymer.

Rain: clear thin glass or transparent line objects.

Metal support: brushed steel.

Lighting: soft neutral white with subdued cool and lavender variations.

Avoid exaggerated purple lightning or magical particles.

## Evidence record

A fictional 2026 message:

"I'm fine."

The museum presents three possible contexts.

A: A calm response after resolving a problem.

B: A tired response during an emotionally difficult day.

C: An ambiguous response with insufficient surrounding information.

## Interaction

Buttons:

- CONTEXT A
- CONTEXT B
- CONTEXT C
- RESET

Initial: light neutral cloud, no active rain.

CONTEXT A:

- Cloud becomes lighter.
- Rain off.
- Show the complete source context.

CONTEXT B:

- Activate moderate rain.
- Slightly darken the cloud.
- Show the additional fictional context.
- Optional: play a short original voice recording, if one is provided or permitted.

CONTEXT C:

- Activate gentle mist.
- Leave the interpretation unresolved.
- Highlight missing context.

RESET:

- Return to neutral cloud.

Weather represents alternative artistic interpretations, not a validated emotion-detection output.

## Reflection

"Can a short digital message preserve the feeling behind it?"

## Fallback

Use preset cloud meshes and static rain strings with state visibility.

Do not require expensive volumetric fluid simulations.

---

# 12. ARCHIVE 006 — THE QUANTIFIED BODY

**Wing:** WING_03  
**Concept:** How measurement systems represent the human body through functions and performance.

## Visual distinction from Exhibit 001

Exhibit 001: multiple complete identity versions.

Exhibit 006: one body divided into measurable functions.

Do not use multiple social-role faces here.

## Sculpture geometry

Approximate sculpture height: 7–9m.

One neutral head.

A partially translucent torso.

Separate functional body overlays:

- Repeated arm structures.
- Gait/leg trajectories.
- Visible spine/posture coordinate lines.
- Chest physiology visualization.

Use ivory resin, pale metal, selective transparent membranes and amber measurement markers.

The sculpture should feel like a machine-built reconstruction of a human body.

## Object hierarchy

- `EX006_BODY_BASE`
- `EX006_LABOUR_ARMS`
- `EX006_GAIT_TRAILS`
- `EX006_PHYSIOLOGY_LAYER`
- `EX006_POSTURE_LAYER`
- `EX006_DATA_TAGS`
- `EX006_TIME_RECORD`
- `EX006_INFO_PANEL`
- `EX006_RESET`

## Simulated archive data modules

**LABOUR OUTPUT**

Example record: eight-hour work period.

Fields: task count, operation duration, repetitive actions.

Visual change: multiple arm positions appear around the original arms.

Tag: `TASK REPETITION`.

**MOVEMENT**

Example record: recorded movement over a selected time interval.

Fields: position, joint movement, movement frequency.

Visual change: duplicated leg positions and gait trails appear.

Tag: `MOVEMENT TRAJECTORY`.

**PHYSIOLOGY**

Example record: simulated wearable-device measurements.

Fields: heart-rate trace, activity period and rest period.

Visual change: transparent chest layer displays a gentle pulse visualization.

Tag: `PHYSIOLOGICAL RECORD`.

**POSTURE**

Example record: simulated posture capture.

Fields: joint angles, body alignment and posture duration.

Visual change: pale wireframe spine and coordinate markers appear.

Tag: `POSTURE CLASSIFICATION`.

All simulated values must be labelled as fictional examples.

## Interaction

Buttons:

- LABOUR
- MOVEMENT
- PHYSIOLOGY
- POSTURE
- RESET

Initial: only base body visible.

Each button independently toggles its corresponding layer.

Multiple layers may be visible simultaneously.

When a layer activates:

1. Reveal the geometry.
2. Reveal its associated data tag.
3. Show the record source and time period.
4. Display which measurable properties the system is using.
5. Clarify what the measurement cannot establish about the person's full experience.

RESET hides every data layer but retains the base body.

## Reflection

"What happens when a human body is represented primarily as measurable functions?"

---

# 13. ARCHIVE 007 — THE INCOMPLETE RELATIONSHIP

**Wing:** WING_05  
**Concept:** The limits of reconstructing human relationships from partial messages.

## Installation geometry

Two translucent human silhouettes at opposite ends of a small curved interaction area.

Between them are independent message panels.

Materials: frosted glass, pale resin and subtle warm/cool contrasts.

Objects:

- `EX007_PERSON_A`
- `EX007_PERSON_B`
- `EX007_RECORD_A`
- `EX007_RECORD_B`
- `EX007_CONTEXT_LAYER`
- `EX007_RELATIONSHIP_LINES`
- `EX007_RESET`

## Evidence scenario

A fictional person sends a message that receives no immediate reply.

Two archival narratives describe the same event from different perspectives.

Avoid making either version automatically correct.

## Interaction

Buttons:

- VIEW A
- VIEW B
- VIEW BOTH
- RESET

VIEW A:

- Emphasize Person A and show their available messages and interpretation.

VIEW B:

- Emphasize Person B and show their partial record.

VIEW BOTH:

- Display the two source records side by side.
- Reveal contextual information that was absent from the initial interpretation.

The distance between the translucent silhouettes may change subtly with each presentation, but it must be understood as metaphorical, not factual.

## Reflection

"How much of a relationship can survive in a collection of messages?"

---

# 14. ARCHIVE 008 — THE ALGORITHMIC FILTER

**Wing:** WING_02  
**Concept:** Recommendation feedback loops and information visibility.

## Installation geometry

A wall or curved freestanding display with 30 modular information tiles.

Three content types:

- Art.
- Science.
- Entertainment.

Each type has a distinct visual symbol and restrained colour.

Objects:

- `EX008_TILE_GROUP_ART`
- `EX008_TILE_GROUP_SCIENCE`
- `EX008_TILE_GROUP_ENTERTAINMENT`
- `EX008_SELECTION_LOG`
- `EX008_DIVERSITY_PANEL`
- `EX008_RESET`

## Interaction

Initial: equal representation of all three categories.

Visitor clicks a category button or an active tile.

The system records the preference and changes which content tiles are displayed.

For a deterministic prototype, use a simplified simulated weighting rule.

Possible model:

Initial weight of each category = 1.

Each click increases the chosen category's weight by 2.

The visible proportions are derived from the category weights and rounded to the available tile count.

Example:

Art selected repeatedly → more art tiles become visible.

Other categories become less represented but do not necessarily disappear entirely.

Do not continuously create hundreds of new 3D objects.

Reuse the existing pool of 30 tile objects by changing their visibility or content.

Buttons:

- ART
- SCIENCE
- ENTERTAINMENT
- EXPLORE ALL
- RESET

EXPLORE ALL restores a balanced presentation.

## Reflection

"How can repeated choices shape the information we see next?"

## Educational accuracy

Describe the system as a simplified demonstration of a possible feedback mechanism, not the actual algorithm used by a named platform.

---

# 15. ARCHIVE 009 — THE RECONSTRUCTED MEMORY

**Wing:** WING_04  
**Concept:** The difference between preserved evidence and reconstructed memory.

## Installation geometry

A suspended layered photograph inside a glass vitrine.

Use several offset transparent planes.

Some parts of the image are missing.

Use fictional family, domestic or cultural archive imagery.

Objects:

- `EX009_ORIGINAL_FRAGMENT`
- `EX009_AI_FILL_LAYER`
- `EX009_EVIDENCE_A`
- `EX009_EVIDENCE_B`
- `EX009_RECONSTRUCTION_PANEL`
- `EX009_RESET`

## Interaction

Initial:

- Display incomplete original photo.
- Missing area remains blank.

Button GENERATE RECONSTRUCTION:

- Reveal a pre-authored hypothetical completion.
- Clearly label generated areas.

Button EVIDENCE A:

- Show a related fictional record.
- Modify the reconstruction to reflect this additional evidence.

Button EVIDENCE B:

- Display an alternative source.
- Show where the two sources agree or conflict.

Button ORIGINAL ONLY:

- Hide all generated sections.
- Show the surviving evidence.

RESET:

- Restore initial state.

## Reflection

"If a missing image is convincingly reconstructed, does that make the reconstruction historically true?"

---

# 16. ARCHIVE 010 — THE INVISIBLE RULES

**Wing:** WING_02  
**Concept:** How automated classification rules change access and opportunity.

## Installation geometry

Two parallel transparent passageways within one controlled installation area.

Each passage has several independent translucent barrier panels.

Two fictional applicant or visitor tokens stand at the entrance.

Objects:

- `EX010_SUBJECT_A`
- `EX010_SUBJECT_B`
- `EX010_BARRIER_A`
- `EX010_BARRIER_B`
- `EX010_RULE_PROFILE`
- `EX010_RESULT_DISPLAY`
- `EX010_RESET`

## Scenario

Two fictional applicants have equivalent relevant ability.

However, the system uses an additional access criterion, such as a requirement for uninterrupted high-speed internet or completion of a particular digital form.

This requirement can disadvantage an otherwise suitable applicant without being a direct measure of their capability.

## Interaction

Buttons:

- RULE 1: DIGITAL ACCESS REQUIRED
- RULE 2: ALTERNATIVE ACCESS AVAILABLE
- RESET

RULE 1:

- Activate a barrier for the applicant without the required access condition.
- Display the criterion used.

RULE 2:

- Change the rule.
- Remove the corresponding barrier.
- Show the change in eligibility.

RESET restores neutral state.

## Reflection

"When systems enforce rules, which assumptions become invisible?"

The exhibit must not claim to represent the real decision rules of any named institution.

---

# 17. ARCHIVE 011 — THE LAST HUMAN MESSAGE

**Wing:** WING_06  
**Concept:** Human expression and AI-mediated writing.

## Installation geometry

Three large translucent vertically suspended message panels.

They overlap from certain camera angles but remain independently readable.

Objects:

- `EX011_ORIGINAL_TEXT`
- `EX011_AI_EDITED_TEXT`
- `EX011_AI_GENERATED_TEXT`
- `EX011_PROVENANCE_PANEL`
- `EX011_RESET`

## Fictional example material

Original human message:

"I can't join tonight. I'm exhausted."

AI-edited version:

"Sorry, I won't be able to join tonight. I really need some rest."

AI-generated alternative:

"I'd love to join, but I've already made other plans."

These are illustrative examples, not genuine recovered communications.

The third version intentionally shows how a generated alternative may introduce information that was not present in the original.

## Interaction

Buttons:

- ORIGINAL
- AI EDITED
- AI GENERATED
- COMPARE ALL
- RESET

Initial: original visible.

Individual buttons show the corresponding text layer and source label.

COMPARE ALL:

- Bring all three panels into a readable staggered arrangement.
- Highlight wording differences.
- Display who authored or modified each version.

RESET:

- Restore original only.

## Reflection

"If a machine chooses the words, whose intentions are being represented?"

---

# 18. ARCHIVE 012 — THE FRAGILE TRUTH

**Wing:** WING_06  
**Concept:** Image provenance and the difference between evidence and generated reconstruction.

## Installation geometry

One suspended transparent image wall consisting of four independent image layers.

- Original fictional source image.
- Edited image.
- AI-generated speculative reconstruction.
- Source/provenance information.

Objects:

- `EX012_ORIGINAL`
- `EX012_EDITED`
- `EX012_GENERATED`
- `EX012_PROVENANCE`
- `EX012_COMPARISON_FRAME`
- `EX012_RESET`

## Interaction

Buttons:

- SOURCE IMAGE
- EDITED VERSION
- GENERATED VERSION
- VIEW PROVENANCE
- COMPARE
- RESET

Initial: one original fictional image visible.

Click EDITED:

- Replace the original display with the edited example.
- Identify the modification as an edit.

Click GENERATED:

- Show the AI-generated representation.
- Clearly label it speculative.

Click VIEW PROVENANCE:

- Reveal available source information.
- Show source date if known.
- Show modification history if available.
- Mark unknown fields explicitly as unknown.

Click COMPARE:

- Align the different image versions side by side.
- Highlight selected differences.

RESET returns to initial state.

## Reflection

"How do we know what a picture can actually prove?"

Do not claim that the lack of provenance metadata proves an image is false.

---

# 19. CENTRAL MUSEUM INFORMATION SYSTEM

The museum must feel like a real archive institution.

## Standard exhibit label

Use the same visual template everywhere.

Example:

ARCHIVE 001  
THE MULTIPLE SELVES  
Historical Period: 2026  
Collection: Digital Identity  
Record Type: Simulated / Artist-Generated  
Reconstruction Date: 2046 (Fictional)  
Interpretation Status: Speculative

Research Question:  
"How many versions of a person can a digital society preserve?"

## Visual classification

Warm amber marker: recovered or simulated 2026 human record.

Cool cyan marker: fictional 2046 machine interpretation.

Neutral gray marker: unknown or missing evidence.

Never rely on colour alone. Always include a written source-status label.

## Archive fields

Every record should support:

- archive_id
- exhibit_name
- historical_period
- source_type
- source_status
- recorded_time
- generated_time
- content_description
- transformation_method
- interpretation_status
- missing_information
- educational_question

Use "unknown" rather than inventing absent factual details.

---

# 20. INTERACTION STATE-MACHINE CONTRACT

Implement the following logic for each interactive object.

## Global convention

Every interaction has:

- `trigger`
- `target_object`
- `initial_state`
- `action`
- `result_state`
- `associated_archive_panel`
- `reset_action`

Example:

Trigger: visitor clicks `EX001_BTN_AGED`.

Target: `EX001_SELF_04_AGED`.

Initial state: hidden.

Action: set visible and optionally animate opacity.

Result: aged face displayed and connected to the existing central bust.

Associated panel: `EX001_PANEL_AGED`.

Reset: hide the aged face and its associated panel.

## Generic pseudocode

The following expresses behavior, not a confirmed MANI Engine API:

```javascript
const museumState = {
  currentWing: "ATRIUM",
  selectedArchive: null,
  exhibits: {}
};

function toggleObject(objectId, panelId) {
  const obj = findSceneObject(objectId);
  if (!obj) return reportMissingObject(objectId);

  const next = !getVisible(obj);
  setVisible(obj, next);

  if (panelId) {
    setVisible(findSceneObject(panelId), next);
  }
}

function setExhibitMode(exhibitId, mode) {
  const controller = exhibitControllers[exhibitId];
  if (!controller) return;

  controller.applyMode(mode);
  controller.updateArchivePanel(mode);
}

function resetExhibit(exhibitId) {
  exhibitControllers[exhibitId]?.reset();
}
```

Translate these actions into the actual supported engine controls, scene graph bindings or scripting API.

Do not paste these placeholder functions into the runtime without implementation.

## Minimum technical functions to verify

- Find object by ID or name.
- Read visibility.
- Change visibility.
- Update a text panel.
- Handle a click event.
- Reset an interaction.
- Preserve state independently for each exhibit.

Advanced functions can be added afterward:

- Animate position.
- Animate opacity.
- Change material.
- Control environmental effects.
- Play audio after user interaction.
- Update instanced content tiles.

---

# 21. ASSET AND SCENE HIERARCHY

Use the following logical hierarchy.

```text
THE_HUMAN_CONDITION_2046
|
+-- WORLD_ROOT
|   +-- GROUND_AND_SITE
|   +-- SKY_AND_ENVIRONMENT
|   +-- GLOBAL_LIGHTS
|   +-- PLAYER_SPAWN
|   +-- PLAYER_NAVIGATION
|
+-- ARCHITECTURE
|   +-- ATRIUM_ARCHIVE_INDEX
|   |   +-- ATRIUM_FLOORS
|   |   +-- ATRIUM_CURVED_WALLS
|   |   +-- ATRIUM_SKYLIGHT
|   |   +-- ATRIUM_BALCONIES
|   |   +-- ATRIUM_MEMBRANES
|   |   +-- INDEX_PANELS_001_TO_012
|   |
|   +-- WING_01_ARCHIVE_VAULT
|   +-- WING_02_MACHINE_ARCHIVE
|   +-- WING_03_IDENTITY
|   +-- WING_04_RECONSTRUCTION
|   +-- WING_05_WEATHER
|   +-- WING_06_FLOATING_EVIDENCE
|   +-- PERIMETER_CORRIDOR
|   +-- FLOOR_CONNECTIONS
|   +-- REFLECTION_DECK
|
+-- EXHIBITS
|   +-- EX001_MULTIPLE_SELVES
|   +-- EX002_ATTENTION_ARCHIVE
|   +-- EX003_MANUFACTURED_CULTURE
|   +-- EX004_CHOICE_MACHINE
|   +-- EX005_EMOTION_WEATHER
|   +-- EX006_QUANTIFIED_BODY
|   +-- EX007_INCOMPLETE_RELATIONSHIP
|   +-- EX008_ALGORITHMIC_FILTER
|   +-- EX009_RECONSTRUCTED_MEMORY
|   +-- EX010_INVISIBLE_RULES
|   +-- EX011_LAST_HUMAN_MESSAGE
|   +-- EX012_FRAGILE_TRUTH
|
+-- INTERACTION_SYSTEM
|   +-- EXHIBIT_CONTROLLERS
|   +-- LOCAL_RESETS
|   +-- GLOBAL_MUSEUM_RESET
|   +-- NAVIGATION_UI
|   +-- HELP_UI
|
+-- ARCHIVE_CONTENT
|   +-- TEXT_RECORDS
|   +-- SOURCE_METADATA
|   +-- IMAGE_RECORDS
|   +-- AUDIO_RECORDS
|   +-- SPECULATIVE_RECONSTRUCTIONS
|
+-- TECHNICAL
    +-- PERFORMANCE_SETTINGS
    +-- INTERACTION_TESTS
    +-- DEBUG_LOGS
```

No artwork should be permanently merged with the building mesh.

---

# 22. PERFORMANCE AND RENDERING REQUIREMENTS

The project is intended to run in a browser.

The architectural world should be large, but not unnecessarily heavy.

## Geometry

Use modular geometry for repeated railings, drawers, wall panels and floors.

Use instancing where supported.

Avoid extremely dense geometry for distant areas.

Preserve higher detail for main interactive sculptures.

## Texture strategy

Use reusable, tileable architectural materials.

Reserve high-resolution unique textures for important sculptures and evidence objects.

Avoid duplicating large texture files unnecessarily.

## Transparent materials

Transparency is visually important.

However, too many overlapping transparent surfaces can produce sorting problems and slow performance.

For the multi-face bust:

- Keep the main face readable.
- Use a small number of carefully arranged transparent membranes.
- Avoid dozens of almost identical overlapping transparent layers.
- Separate opaque facial cores from transparent connecting structures.
- Test transparency from several viewing angles.

## Lighting

Avoid hundreds of shadow-casting lights.

Use shared architectural lighting.

Reserve a small number of dedicated lights for each major installation.

## Effects

Use local rain and mist effects only inside Exhibit 005.

Disable effects that are outside the active visitor area if supported.

Use preconfigured object states when complex simulations are too expensive.

## Navigation

Ensure:

- Stable walking controls.
- No falling through floors.
- No invisible collision barriers.
- No blocked doorways.
- No inaccessible exhibition wings.
- No unintended teleportation.
- Camera height remains consistent.

## Accessibility and comfort

Provide readable UI.

Avoid intense flashing lights.

Avoid mandatory rapid camera movements.

Audio should be optional.

Use captions for spoken content.

Do not require sound to understand an exhibit.

---

# 23. SAVE, BACKUP AND RECOVERY STRATEGY

Never overwrite the only working project state.

## Required checkpoints

Save the project after each completed stage.

Suggested checkpoint names:

- `THC_00_ARCHITECTURE_BASE`
- `THC_01_SIX_WINGS_CONNECTED`
- `THC_02_MATERIALS_COMPLETE`
- `THC_03_EXHIBIT_ASSETS`
- `THC_04_FIRST_INTERACTION_WORKING`
- `THC_05_ALL_INTERACTIONS`
- `THC_06_DEMO_STABLE`
- `THC_07_FINAL_SUBMISSION`

Use native project duplication or version history where supported.

If the platform does not support true versioning, explicitly report that limitation.

## Backup package

Where supported, preserve:

1. Editable world/project data.
2. Independent sculpture models.
3. Material definitions.
4. Object naming table.
5. Interactive behavior scripts or scene event definitions.
6. Archive text and metadata.
7. Image and audio assets.
8. Screenshots of critical scene states.
9. A walk-through recording.
10. A list of unresolved technical limitations.

Do not claim an export or backup succeeded until an actual file or saved project is verified.

## Recovery rule

When a local change fails:

- Revert the affected object or exhibit.
- Do not discard the entire world.
- Restore the previous known-working checkpoint.
- Report which scene object caused the failure.

---

# 24. FALLBACK IMPLEMENTATION STRATEGY

If a requested function cannot be achieved exactly, use the nearest stable interaction.

| Desired effect | Preferred implementation | Fallback |
|---|---|---|
| Sculptural face appearing | Opacity animation | Immediate visibility toggle |
| Transparent resin | Physical transmission | Approximate alpha transparency |
| Drawer opening | Animated drawer mesh | Clickable static drawer and panel |
| Rain simulation | Local particle or animated effect | Prebuilt rain-string objects |
| AI recommendation changing | Dynamic tile redistribution | Preset state groups |
| Historical reconstruction | Switchable reconstruction layers | Separate preset models |
| Glass overlap | Correct transparent rendering | Controlled layer spacing |
| Moving barriers | Animated geometry | Visibility changes |
| Audio-reactive cloud | Audio-driven visual system | Preset cloud states |

A functioning simple interaction is better than a visually impressive but nonfunctional scene.

Never silently remove a requested educational mechanism.

---

# 25. VALIDATION AND ACCEPTANCE CRITERIA

## Architecture

- The world contains one main building.
- The central atrium is visually recognizable.
- There are six distinct exhibition wings.
- All wings are physically connected.
- The building has a credible human scale.
- The 3D camera can enter and navigate the spaces.
- At least the primary exhibition route works reliably.
- The main architectural objects are editable.

## Sculpture

- Exhibit 001 preserves the approved translucent multi-face bust composition.
- Different identity faces are visually distinguishable.
- Face objects are independent.
- Glass membranes are independently editable.
- Exhibit 006 is a different sculpture with functional body layers.
- Sculptures are correctly scaled relative to their display halls.

## Interaction

- All twelve exhibits have at least one functioning action.
- Every visible control has a real response.
- Every action changes a clearly identified object or display state.
- Archive explanations update correctly.
- Individual reset works.
- Actions can be repeated without breaking the scene.
- No interaction unexpectedly changes another exhibit.
- A visitor can inspect the exhibit without receiving a score.

## Educational content

- Every exhibit has an identifiable historical subject.
- The record or case is clearly labelled.
- Speculative reconstructions are not presented as verified historical evidence.
- Each exhibit has a meaningful research question.
- Human records and machine interpretations can be distinguished.

## Final delivery

- Editable world.
- Twelve exhibit groups.
- Twelve functional minimum interactions.
- Navigable museum route.
- Stable demonstration path.
- Technical implementation notes.
- Source and simulation disclosure.
- Preserved project backup, where supported.

---

# 26. IMPLEMENTATION ORDER FOR THE EXECUTING AI

Execute these tasks in sequence.

**Phase A — Architecture**

1. Inspect the supplied reference image.
2. Build central atrium.
3. Build the six connected architectural wings.
4. Construct the primary circulation route.
5. Verify floor scale and player traversal.
6. Save an architectural checkpoint.

**Phase B — Materials**

7. Create global reusable material presets.
8. Apply main architectural materials.
9. Refine each wing's material identity.
10. Establish skylight and architectural lighting.
11. Verify the museum is coherent and not excessively reflective.
12. Save a material checkpoint.

**Phase C — Exhibition objects**

13. Build the first identity bust as separate objects.
14. Build the quantified body.
15. Build the archive drawers and supporting display island.
16. Build the remaining exhibit structures.
17. Place all twelve installations in the appropriate wings.
18. Check sculpture-to-building scale.
19. Save an asset checkpoint.

**Phase D — Interaction implementation**

20. Test one simple click-to-show interaction.
21. Build a reusable interaction controller pattern.
22. Implement Exhibit 001.
23. Implement Exhibit 006.
24. Implement the remaining ten exhibits.
25. Attach archive information panels.
26. Add local reset controls.
27. Run repeat-action tests.
28. Save an interaction checkpoint.

**Phase E — Delivery**

29. Test the full visitor route.
30. Verify every exhibit.
31. Optimize transparency and effects.
32. Record a 2–3 minute demonstration.
33. Preserve the working project and asset backups.
34. Document limitations and any unfinished features.

---

# 27. FINAL INSTRUCTION

Do not optimize this project by removing its artistic identity.

The important visual references are:

- A flowing, multilevel, pale architectural atrium.
- A monumental archival drawer vault.
- A refined translucent machine-classification gallery.
- A dark curved human-identity chamber.
- A glass-and-metal reconstruction laboratory.
- A large atmospheric room for cloud and rain installations.
- A bright hall of suspended transparent historical evidence.

The two most important human sculptures are:

**THE MULTIPLE SELVES**

One human being represented through multiple identity versions, merged visually into a single transparent bust while remaining independent 3D objects.

**THE QUANTIFIED BODY**

One human body represented through the measurable functional categories used by digital systems.

The visitor must be able to examine, activate and compare these interpretations rather than simply look at static objects.

The completed world should feel like a credible speculative museum from 2046, built to study the digital civilization of 2026.

**The architecture preserves history. The exhibits reconstruct it. The visitor questions what the records mean.**

Begin by inspecting the available scene-editing, object-generation, material, scripting and interaction capabilities of the actual target engine. Then implement the specification in staged, verifiable steps while preserving independent object structures and working backups.