## 🎓 Devoir CSS : **"Disposition des cartes de profil"**

> 💡 Un fichier `index.html` vous est fourni. Votre tâche est de créer un fichier `style.css` et de suivre les instructions ci-dessous **exactement comme elles sont écrites**. N'inventez pas vos propres styles sauf si cela est mentionné dans la section bonus.

---

### ✅ Partie 1 : Styles globaux

1. Définissez `box-sizing` sur `border-box` pour tous les éléments en utilisant le sélecteur universel `*`.
2. Définissez la police par défaut pour le `body` comme suit :
    ```
    'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    ```
3. Définissez la couleur du texte du `body` sur `#333` et la couleur de fond sur `#f9f9f9`.
4. Définissez `line-height` sur le `body` à `1.6`.
5. Supprimez la `margin` par défaut du `body`.

---

### ✅ Partie 2 : Typographie

1. Stylisez l'élément `<h1>` pour :

    - Être centré (`text-align: center`)
    - Avoir une taille de police de `2.5rem`
    - Avoir des marges top et bottom de `2rem`

2. Stylisez tous les éléments `<h2>` pour :

    - Avoir une taille de police de `1.5rem`
    - Utiliser la couleur de texte `#1e90ff`
    - Avoir une marge top de `1rem` et une marge bottom de `0.5rem`

3. Stylisez les éléments avec la classe `.role` pour :

    - Être en italique
    - Avoir une taille de police de `0.9rem`
    - Utiliser la couleur de texte `#555`
    - Avoir une marge bottom de `0.5rem`

4. Stylisez les éléments avec la classe `.bio` pour :
    - Avoir une taille de police de `1rem`
    - Utiliser la couleur de texte `#666`
    - Avoir une largeur maximale de `250px`
    - Avoir une marge bottom de `1rem`

---

### ✅ Partie 3 : Mise en page avec Flexbox

1. Stylisez le conteneur avec la classe `.card-container` pour :
    - Utiliser `display: flex`
    - Utiliser `justify-content: center`
    - Utiliser un `gap` horizontal de `2rem`
    - Permettre le retour à la ligne sur les petits écrans avec `flex-wrap: wrap`
    - Ajouter une marge bottom de `2rem` sur tous les côtés

---

### ✅ Partie 4 : Style des cartes

1. Stylisez chaque élément avec la classe `.card` pour :
    - Avoir une couleur de fond `#fff`
    - Utiliser une marge bottom de `1.5rem`
    - Avoir une largeur fixe de `300px`
    - Avoir des coins arrondis avec `border-radius: 12px`
    - Utiliser une ombre douce :
        ```
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        ```
    - Centrer tout le texte à l'intérieur de la carte

---

### ✅ Partie 5 : Style des images

1. À l'intérieur de chaque `.card`, stylisez le `<img>` pour :
    - Avoir une largeur et une hauteur de `150px`
    - Utiliser `border-radius: 50%` (le rendre circulaire)
    - Utiliser une bordure solide de `4px` avec la couleur `#1e90ff`
    - Être centré en utilisant `display: block` et `margin: 0 auto 1rem`

---

### ✅ Partie 6 : Style des boutons

1. Stylisez les éléments avec la classe `.contact-btn` pour :

    - Avoir une couleur de fond `#1e90ff`
    - Avoir un texte blanc
    - Supprimer la bordure (`border: none`)
    - Utiliser une marge bottom : `0.6rem 1.2rem`
    - Utiliser une taille de police de `1rem`
    - Utiliser `border-radius: 8px`
    - Changer le curseur de la souris en pointeur

2. Ajoutez un effet au survol en utilisant le pseudo-classe `:hover` :
    - Au survol, changez la couleur de fond en `#006edc`

---

### ✅ Partie 7 : Style du pied de page

1. Stylisez le `<footer>` pour :
    - Centrer le texte
    - Utiliser une taille de police de `0.8rem`
    - Ajouter une marge bottom de `1rem`
    - Utiliser une couleur de fond `#eaeaea`

---

### ✅ Partie 8 : Sélecteurs d'ID

1. Stylisez la carte avec l'ID `card-john` pour :

    - Utiliser une couleur de fond `#ffffff`

2. Stylisez la carte avec l'ID `card-jane` pour :
    - Utiliser une couleur de fond `#f0f8ff`

---

### ⭐ BONUS (Optionnel)

> Vous pouvez choisir une ou plusieurs des options suivantes pour obtenir des points supplémentaires.

#### 🌀 Bonus 1 : Utiliser CSS Grid

-   Remplacez le Flexbox dans `.card-container` par Grid :
    -   Utilisez `display: grid`
    -   Configurez la grille pour avoir 2 colonnes en utilisant :
        ```
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        ```
    -   Gardez le `gap` à `2rem`

#### 🧱 Bonus 2 : Classes utilitaires

-   Créez les classes utilitaires suivantes et utilisez-les si nécessaire :
    ```css
    .mb-1 {
    	margin-bottom: 0.5rem;
    }
    .mb-2 {
    	margin-bottom: 1rem;
    }
    .p-1 {
    	padding: 0.5rem;
    }
    .p-2 {
    	padding: 1rem;
    }
    .text-center {
    	text-align: center;
    }
    ```
