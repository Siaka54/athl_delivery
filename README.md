# ATHL Livraison — Documentation technique (MVP)

Page web statique présentant l'architecture, l'infrastructure, la sécurité & PCI et les intégrations
externes du MVP ATHL Livraison, à destination des parties prenantes.

## Aperçu local

Ouvrir simplement `index.html` dans un navigateur, ou lancer un petit serveur local :

```bash
python3 -m http.server 8000
```

puis visiter `http://localhost:8000`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub et pousser ce contenu :
   ```bash
   git remote add origin <URL_DU_DEPOT>
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choisir
   la branche `main` et le dossier `/ (root)`.
3. La page sera publiée à l'adresse `https://<utilisateur>.github.io/<nom-du-repo>/`.

## Structure

- `index.html` — contenu de la page (sections : Contexte, Périmètre fonctionnel, Architecture,
  Infrastructure, Sécurité & PCI, Intégrations)
- `style.css` — thème visuel (clair/sombre automatique)
- `script.js` — navigation active au scroll + initialisation des diagrammes Mermaid

Le PDF source n'est pas versionné (voir `.gitignore`).
