# Service gallery folders

## Corporate Photography — Gallery preview (6 images)

Upload to:

```
public/images/gallery/corporate-photography/
```

Shows the **6 most recently modified** files in the **Gallery preview** section on `/photography/corporate-photography`.

## Corporate Photography — Masonry grid (Load more)

Upload to:

```
public/images/gallery/corporate-photography/masonry/
```

Powers the **large 4-column gallery** after the Ready to Connect section. All images in this folder are included, sorted newest first.

## Event Photography — Gallery preview (6 images)

Upload to:

```
public/images/gallery/event-photography/
```

Shows the **6 most recently modified** files in the **Gallery preview** section on `/photography/event-photography`.

Only files in this folder root are used (not the `masonry/` subfolder).

## Event Photography — Masonry grid (Load more)

Upload to:

```
public/images/gallery/event-photography/masonry/
```

Powers the **large 4-column gallery** further down the same page.

## Wedding Photography — Gallery preview (6 images)

Upload to:

```
public/images/gallery/wedding-photography/
```

Shows the **6 most recently modified** files in the **Gallery preview** section on `/photography/wedding-photography`.

Only files in this folder root are used (not the `masonry/` subfolder).

## Wedding Photography — Masonry grid (Load more)

Upload to:

```
public/images/gallery/wedding-photography/masonry/
```

Powers the **large 4-column gallery** further down the same page. All images in this folder are included, sorted newest first. The existing **Load more** button reveals them in batches.

## Formats

Supported: `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`  
Recommended: `.webp`

## Naming

Use descriptive filenames for accessibility, e.g. `01-ceremony.webp`, `02-reception.webp`. Alt text is generated from the filename.

No code changes needed after upload — refresh the page (production revalidates every ~60 seconds).
