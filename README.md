# Vivel Kawale — Free Portfolio Website

A responsive, cinematic portfolio website for Vivel Kawale, Video Editor & Photographer.

## 1. Add your media

Put your images in:

`assets/images/`

Put your main showreel here:

`assets/videos/showreel.mp4`

Recommended image names:
- hero.jpg
- project-01.jpg
- project-02.jpg
- project-03.jpg
- project-04.jpg
- showreel-poster.jpg

## 2. Connect the images to the site

Open `index.html`. For each portfolio card, replace the placeholder `<div class="media image-placeholder">...</div>` with:

```html
<div class="media">
  <img src="assets/images/project-01.jpg" alt="Project One">
  <div class="media-tag">VIDEO</div>
</div>
```

For the hero, replace the placeholder with:

```html
<div class="hero-image">
  <img src="assets/images/hero.jpg" alt="Vivel Kawale">
</div>
```

Then add this CSS to `style.css`:

```css
.hero-image img, .media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

## 3. Replace contact details

In `index.html`, search for:
- `your.email@example.com`
- `https://www.linkedin.com/`
- `https://www.instagram.com/`

Replace them with your actual details.

## 4. Change project names

Replace Project One, Project Two, etc. with your real project names and descriptions.

## 5. Publish FREE with GitHub Pages

1. Create a free account at GitHub.
2. Create a new public repository named `yourusername.github.io`.
3. Upload all files from this folder, keeping the `assets` folder structure.
4. Go to repository Settings → Pages.
5. Select Deploy from branch → main → /(root).
6. Save.
7. Your website will be available at `https://yourusername.github.io/`.

No paid hosting is required.

## Design

Dark cinematic layout, responsive mobile design, smooth scrolling, project gallery, showreel area, skills/tools, contact section and footer.
