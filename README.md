# jan-saudek.cz

Microsite o životě a díle Jana Saudka, díla odkazují na [Galerii Tagua](https://www.galerietagua.cz/prodej/jan-saudek/).

- **Obsah:** `src/_data/site.json` – upravuje se v [Pages CMS](https://app.pagescms.org) (konfigurace `.pages.yml`), obrázky jdou do `src/img`.
- **Šablona:** `src/index.njk`, styly `src/style.css` (Eleventy 3).
- **Nasazení:** každý push do `main` spustí GitHub Actions → GitHub Pages. Doména se bere z pole `domain` (soubor `CNAME`).

```bash
npm install
npm start   # náhled na http://localhost:8080
```
