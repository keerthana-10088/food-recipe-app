import { useState } from "react";
import "./App.css";

const recipes = [
  {
    id: 1,
    name: "Strawberry Pancakes",
    category: "Breakfast",
    time: "20 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    description: "Fluffy pancakes served with fresh strawberries.",
    ingredients: [
      "1 cup all-purpose flour",
      "1 egg",
      "3/4 cup milk",
      "1 tablespoon sugar",
      "Fresh strawberries",
      "Butter for cooking",
    ],
    instructions: [
      "Mix flour, sugar, egg, and milk in a bowl.",
      "Whisk until the batter becomes smooth.",
      "Heat a lightly buttered pan.",
      "Pour small portions of batter into the pan.",
      "Cook both sides until golden.",
      "Serve with fresh strawberries.",
    ],
  },
  {
    id: 2,
    name: "Creamy Garden Pasta",
    category: "Lunch",
    time: "25 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    description: "Creamy pasta with herbs and fresh ingredients.",
    ingredients: [
      "200 g pasta",
      "1 cup milk",
      "2 garlic cloves",
      "1 tablespoon butter",
      "Parmesan cheese",
      "Salt and pepper",
    ],
    instructions: [
      "Cook pasta according to the package instructions.",
      "Melt butter in a pan.",
      "Add chopped garlic and cook briefly.",
      "Add milk and seasonings.",
      "Mix in the cooked pasta.",
      "Finish with cheese and herbs.",
    ],
  },
  {
    id: 3,
    name: "Berry Smoothie Bowl",
    category: "Breakfast",
    time: "10 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80",
    description: "A refreshing smoothie bowl with colourful fruits.",
    ingredients: [
      "1 banana",
      "1/2 cup strawberries",
      "1/2 cup yogurt",
      "1 teaspoon honey",
      "Granola",
      "Fresh berries",
    ],
    instructions: [
      "Add banana, strawberries, yogurt, and honey to a blender.",
      "Blend until smooth.",
      "Pour into a serving bowl.",
      "Top with granola and fresh berries.",
      "Serve immediately.",
    ],
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    time: "45 min",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description: "A rich chocolate cake for your sweet cravings.",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "3/4 cup sugar",
      "2 eggs",
      "1/2 cup milk",
      "1 teaspoon baking powder",
    ],
    instructions: [
      "Preheat the oven to 180°C.",
      "Mix flour, cocoa powder, sugar, and baking powder.",
      "Add eggs and milk.",
      "Mix until the batter is smooth.",
      "Pour into a prepared cake tin.",
      "Bake until a toothpick comes out clean.",
    ],
  },
  {
    id: 5,
    name: "Fresh Rainbow Salad",
    category: "Lunch",
    time: "15 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "A colourful salad packed with fresh vegetables.",
    ingredients: [
      "1 cup lettuce",
      "1 cucumber",
      "1 tomato",
      "1 carrot",
      "1 tablespoon olive oil",
      "Lemon juice and salt",
    ],
    instructions: [
      "Wash all the vegetables thoroughly.",
      "Chop the vegetables into bite-sized pieces.",
      "Place them in a large bowl.",
      "Add olive oil, lemon juice, and salt.",
      "Toss everything together and serve fresh.",
    ],
  },
  {
    id: 6,
    name: "Golden Waffles",
    category: "Dessert",
    time: "20 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
    description: "Crispy waffles with a delicious fruity topping.",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "3/4 cup milk",
      "1 tablespoon sugar",
      "1 teaspoon baking powder",
      "Butter and fresh berries",
    ],
    instructions: [
      "Mix flour, sugar, and baking powder.",
      "Add egg and milk.",
      "Whisk until smooth.",
      "Preheat and lightly grease a waffle maker.",
      "Pour in the batter and cook until golden.",
      "Serve with butter and fresh berries.",
    ],
  },
  {
    id: 7,
    name: "Creamy Mushroom Pasta",
    category: "Dinner",
    time: "30 min",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    description: "Comforting pasta with mushrooms and creamy sauce.",
    ingredients: [
      "200 g pasta",
      "1 cup sliced mushrooms",
      "2 garlic cloves",
      "1/2 cup cream",
      "1 tablespoon olive oil",
      "Salt, pepper, and herbs",
    ],
    instructions: [
      "Cook pasta according to the package instructions.",
      "Heat olive oil in a pan.",
      "Add garlic and sliced mushrooms.",
      "Cook until the mushrooms soften.",
      "Add cream and seasonings.",
      "Mix in pasta and serve warm.",
    ],
  },
  {
    id: 8,
    name: "Avocado Toast",
    category: "Breakfast",
    time: "10 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    description: "Golden toast topped with creamy avocado.",
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "1 teaspoon lemon juice",
      "Salt and pepper",
      "Chilli flakes",
    ],
    instructions: [
      "Toast the bread until golden.",
      "Mash the avocado in a bowl.",
      "Mix in lemon juice, salt, and pepper.",
      "Spread the avocado over the toast.",
      "Sprinkle chilli flakes and serve.",
    ],
  },
];

const categories = [
  "All Recipes",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Recipes");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Recipes" || recipe.category === category;

    const matchesFavorites =
      !showFavorites || favorites.includes(recipe.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function selectCategory(item) {
    setCategory(item);
    setShowFavorites(false);
  }

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">✿</span>
          tastytrail<span className="logo-dot">.</span>
        </a>

        <nav className="nav-links">
          <a
            href="#home"
            onClick={() => {
              setShowFavorites(false);
              setCategory("All Recipes");
            }}
          >
            Home
          </a>

          <a
            href="#recipes"
            onClick={() => {
              setShowFavorites(false);
              setCategory("All Recipes");
            }}
          >
            Recipes
          </a>

          <button
            className="nav-text-button"
            onClick={() => setShowFavorites(true)}
          >
            Favorites ♡
          </button>

          <a href="#about">About</a>
        </nav>

        <a href="#recipes" className="nav-button">
          Explore Recipes <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span>✦</span> YOUR DAILY DOSE OF DELICIOUS
            </div>

            <h1>
              Good food.
              <br />
              <span>Good mood.</span>
            </h1>

            <p className="hero-description">
              Discover lovely recipes, explore new flavours, and
              make every meal a little more special.
            </p>

            <div className="hero-actions">
              <a href="#recipes" className="primary-button">
                Explore Recipes <span>→</span>
              </a>

              <div className="hero-note">
                <span>♡</span> Made with love
              </div>
            </div>

            <div className="hero-stats">
              <div>
                <strong>8+</strong>
                <span>Lovely recipes</span>
              </div>

              <div className="stat-divider" />

              <div>
                <strong>Easy</strong>
                <span>Cooking ideas</span>
              </div>

              <div className="stat-divider" />

              <div>
                <strong>Fresh</strong>
                <span>Daily inspiration</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh and colourful food"
              />
            </div>

            <div className="floating-card">
              <span className="floating-icon">♡</span>
              <div>
                <strong>Cook something lovely</strong>
                <span>Your next favourite awaits.</span>
              </div>
            </div>

            <span className="decor decor-one">✳</span>
            <span className="decor decor-two">✿</span>
          </div>
        </section>

        <section className="recipe-section" id="recipes">
          <div className="section-heading">
            <div>
              <span className="section-label">
                A LITTLE INSPIRATION
              </span>

              <h2>
                Find your <span>favourite.</span>
              </h2>

              <p>
                Delicious ideas for every craving and every occasion.
              </p>
            </div>

            <span className="recipe-count">
              {filteredRecipes.length} recipes to explore
            </span>
          </div>

          <div className="recipe-controls">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search your favourite recipe..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="category-list">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`category-button ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => selectCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {showFavorites && (
            <div className="filter-notice">
              <span>♡ Your favourite recipes</span>

              <button onClick={() => setShowFavorites(false)}>
                Show all recipes →
              </button>
            </div>
          )}

          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <article className="recipe-card" key={recipe.id}>
                <div className="recipe-image">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    loading="lazy"
                  />

                  <span className="recipe-category">
                    {recipe.category}
                  </span>

                  <button
                    className={`favorite-button ${
                      favorites.includes(recipe.id)
                        ? "is-favorite"
                        : ""
                    }`}
                    onClick={() => toggleFavorite(recipe.id)}
                    aria-label={
                      favorites.includes(recipe.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    {favorites.includes(recipe.id) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="recipe-info">
                  <div className="recipe-meta">
                    <span>◷ {recipe.time}</span>
                    <span>·</span>
                    <span>{recipe.difficulty}</span>
                  </div>

                  <h3>{recipe.name}</h3>

                  <p>{recipe.description}</p>

                  <button
                    className="view-recipe"
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    View Recipe <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="empty-state">
              <span>♡</span>

              <h3>
                {showFavorites
                  ? "No favourites saved yet."
                  : "No recipes found."}
              </h3>

              <p>
                {showFavorites
                  ? "Tap the heart on any recipe to save it here."
                  : "Try another search or choose a different category."}
              </p>

              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Recipes");
                  setShowFavorites(false);
                }}
              >
                Explore all recipes →
              </button>
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="about-icon">✿</div>

          <span className="section-label">A NOTE FROM US</span>

          <h2>Good food brings us together.</h2>

          <p>
            TastyTrail is a little corner for curious cooks, sweet
            cravings, and everyday kitchen inspiration. Find a recipe,
            make it your own, and enjoy every bite.
          </p>

          <a href="#recipes" className="about-link">
            Let's find something delicious <span>→</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">✿</span>
          tastytrail<span className="logo-dot">.</span>
        </a>

        <p>Made with love, served with a little joy. ♡</p>

        <span>© 2026 TastyTrail</span>
      </footer>

      {selectedRecipe && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="recipe-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedRecipe(null)}
              aria-label="Close recipe"
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
            />

            <div className="modal-content">
              <span className="section-label">
                {selectedRecipe.category} · {selectedRecipe.time}
              </span>

              <h2 id="modal-title">{selectedRecipe.name}</h2>

              <p>{selectedRecipe.description}</p>

              <h3>Ingredients</h3>

              <ul className="ingredient-list">
                {selectedRecipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>

              <h3>How to make it</h3>

              <ol className="instruction-list">
                {selectedRecipe.instructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ol>

              <button
                className="primary-button modal-favorite"
                onClick={() => toggleFavorite(selectedRecipe.id)}
              >
                {favorites.includes(selectedRecipe.id)
                  ? "♥ Saved to Favorites"
                  : "♡ Add to Favorites"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;