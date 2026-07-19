
var meals = [
  {
    item_1: "Easy",
    item_2: "American",
    item_3: "Classic Beef Burger",
    item_4: "Juicy homemade burger with all the fixings",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">500g ground beef (80/20)</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">4 burger buns</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">4 slices cheddar cheese</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">Lettuce leaves</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">Tomato slices</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">Red onion, sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">Pickles</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class="">Burger sauce or condiments</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Divide ground beef into 4 equal portions. Form into
                      patties, making a small indent in the center</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >Season patties generously with salt and pepper on both
                      sides.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >Heat a grill or skillet over high heat. Cook patties for
                      4-5 minutes per side for medium.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >Add cheese slices in the last minute of cooking and cover
                      to melt.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >Toast burger buns lightly on the grill or in a pan.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Assemble burgers with lettuce, tomato, onion, pickles,
                      and your favorite sauce.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">650 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">50g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">30g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">12g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">6g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">1120g </span>
                </div>`,
    item_chif_1: "Use a pizza stone for crispier crust",
    item_chif_2: "Don't overload with toppings - less is more",
    item_chif_3: "Add basil after baking to keep it fresh",
    item_chif_4: "Let dough rest properly for best texture",
    image: `
        <img src="images/photo-1568901346375-23c9450c58cd.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.6 </span>
            <span class="text-secondary">(421 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">20 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">4 people</p>
            </div>
          </div>
        </div>`,
  },
  {
    item_1: "Easy",
    item_2: "Mediterranean",
    item_3: " Mediterranean Quinoa Bowl",
    item_4: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">1 cup quinoa</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">Cherry tomatoes, halved</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">Cucumber, diced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">Red onion, sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">Kalamata olives</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">Feta cheese, crumbled</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">Fresh parsley</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class="">Tahini dressing</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >While quinoa cooks, prepare all vegetables and set aside.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >Heat a grill or skillet over high heat. Cook patties for
                      4-5 minutes per side for medium.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >Fluff cooked quinoa with a fork and let cool slightly.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">480 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">18g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">58g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">20g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">10g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">640g </span>
                </div>`,
    item_chif_1: "Rinse quinoa well to remove bitter coating",
    item_chif_2: "Let quinoa cool before adding fresh ingredients",
    item_chif_3: "Make extra tahini dressing - it keeps well in the fridge",
    item_chif_4: "Add grilled chicken or chickpeas for extra protein",
    image: `
        <img src="images/photo-1546069901-ba9599a7e63c.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.6 </span>
            <span class="text-secondary">(421 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">20 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">4 people</p>
            </div>
          </div>
        </div>`,
  },
  {
    item_1: "Intermediate",
    item_2: "Mediterranean",
    item_3: " French Onion Soup",
    item_4: "Rich beef broth with caramelized onions and melted cheese",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">
4 large onions, thinly sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">4 tablespoons butter</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">1 liter beef broth</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">1/2 cup white wine</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">2 bay leaves</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">
Fresh thyme</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">Fresh parsley</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class="">Tahini dressing</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >Add white wine and deglaze the pot, scraping up brown bits.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >Meanwhile, toast baguette slices until golden.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >Meanwhile, toast baguette slices until golden.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">380 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">18g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">36g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">18g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">4g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">980g </span>
                </div>`,
    item_chif_1: "Patience is key - don't rush the onion caramelization",
    item_chif_2: "Use good quality beef broth for best flavor",
    item_chif_3: "Gruyère can be substituted with Swiss cheese",
    item_chif_4: "Watch carefully when broiling to avoid burning",
    image: `
        <img src="images/photo-1547592166-23ac45744acd.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.7 </span>
            <span class="text-secondary">(267 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">60 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">4 people</p>
            </div>
          </div>
        </div>`,
  },
  {
    item_1: "Easy",
    item_2: "Asian",
    item_3: " Chicken Stir-Fry",
    item_4: "Quick and healthy stir-fry with colorful vegetables",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">500g chicken breast, sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">2 bell peppers, sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">1 broccoli head, florets</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">2 carrots, julienned</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">3 tablespoons soy sauce</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">Feta cheese, crumbled</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">Fresh parsley</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class="">Tahini dressing</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Mix soy sauce, oyster sauce, and sesame oil for the sauce.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">320 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">34g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">18g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">12g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">5g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">480g </span>
                </div>`,
    item_chif_1: "Cut all ingredients before starting to cook",
    item_chif_2: "Keep heat high for authentic stir-fry texture",
    item_chif_3: "Don't overcrowd the wok or vegetables will steam",
    item_chif_4: "Add cashews or peanuts for extra crunch",
    image: `
        <img src="images/photo-1603133872878-684f208fb84b.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.5 </span>
            <span class="text-secondary">(324 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">4 people</p>
            </div>
          </div>
        </div>`,
  },
  {
    item_1: "Intermediate",
    item_2: "Italian",
    item_3: " Margherita Pizza",
    item_4: "Classic Italian pizza with fresh mozzarella and basil",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">300g pizza dough</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">200g crushed tomatoes</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">250g fresh mozzarella</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">Fresh basil leaves</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">2 tablespoons olive oil</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">
2 cloves garlic, minced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">Salt and pepper to taste</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class="">Parmesan cheese for topping</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Let pizza dough come to room temperature and rest for 1 hour.

</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >Preheat oven to maximum temperature (usually 250°C/480°F).


                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.

</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >Roll out dough on a floured surface to desired thickness.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >
Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oi
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">580 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">24g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">68g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">22g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">4g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">920g </span>
                </div>`,
    item_chif_1: "Use a pizza stone for crispier crust",
    item_chif_2: "Don't overload with toppings - less is more",
    item_chif_3: "Balance sweet, sour, and salty flavors",
    item_chif_4: "Prepare all ingredients before starting to cook",
    image: `
        <img src="images/photo-1574071318508-1cdbab80d002.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.9 </span>
            <span class="text-secondary">(512 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">90 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">12 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">2 people</p>
            </div>
          </div>
        </div>`,
  },
  {
    item_1: "Easy",
    item_2: "Seafood",
    item_3: " Honey Garlic Salmon",
    item_4: "Pan-seared salmon with a sweet and savory glaze",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">2 salmon fillets (6oz each)</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">3 tablespoons honey</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">2 tablespoons soy sauce</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">4 cloves garlic, minced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">1 tablespoon olive oil</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">
1 teaspoon fresh ginger, grated</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">1 teaspoon fresh ginger, grated</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class=""> Green onions, sliced</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Pat salmon fillets dry with paper towels. Season with salt and pepper.


</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.


                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >
Heat olive oil in a large skillet over medium-high heat.

</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >
Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">380 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">35g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">28g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">14g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">0g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">720g </span>
                </div>`,
    item_chif_1: "Don't overcook salmon - it should be slightly pink in the center",
    item_chif_2: "Use wild-caught salmon for best flavor and nutrition",
    item_chif_3: "Let the sauce caramelize slightly for deeper flavor",
    item_chif_4: "Pair with steamed broccoli or asparagus for a complete meal",
    image: `
        <img src="images/photo-1467003909585-2f8a72700288.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.9 </span>
            <span class="text-secondary">(187 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">10 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">2 people</p>
            </div>
          </div>
        </div>`,
  },
  {
    item_1: "Easy",
    item_2: "Asian",
    item_3: " Teriyaki Chicken Bowl",
    item_4: "Sweet and savory chicken over rice with vegetables",
    item_Ingredients: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >1</span
                    >
                    <span class="">400g chicken thighs, sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >2</span
                    >
                    <span class="">1/2 cup teriyaki sauce</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >3</span
                    >
                    <span class="">2 cups cooked rice</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >4</span
                    >
                    <span class="">1 broccoli head, florets</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >5</span
                    >
                    <span class="">1 carrot, julienned</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >6</span
                    >
                    <span class="">
Sesame seeds</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >7</span
                    >
                    <span class="">Green onions, sliced</span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 rounded-circle bg-orange number"
                      >8</span
                    >
                    <span class=""> 
1 tablespoon sesame oil</span>
                  </div>`,
    item_Instructions: `<div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >1</span
                    >
                    <span class=""
                      >Heat sesame oil in a pan. Cook chicken until browned on all sides.

</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >2</span
                    >
                    <span class=""
                      >Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >3</span
                    >
                    <span class=""
                      >
Meanwhile, steam broccoli and carrots until tender-crisp.

</span
                    >
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >4</span
                    >
                    <span class=""
                      >Divide rice between bowls.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >5</span
                    >
                    <span class=""
                      >
Top with teriyaki chicken and steamed vegetables.
                    </span>
                  </div>

                  <div class="d-flex align-items-center mb-18">
                    <span
                      class="text-white fw-bold me-4 p-4 rounded-4 bg-orange number"
                      >6</span
                    >
                    <span class=""
                      >Garnish with sesame seeds and green onions. Serve hot.
                    </span>
                  </div>`,
    item_Nutrition: `<div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-2 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-orange-light number"
                      ><i class="fa-solid fa-fire text-orange"></i>
                    </span>
                    <span class="fw-bold">Calories </span>
                  </div>
                  <span class="fs-5 fw-bold">540 kcal </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-primary-subtle number"
                      ><i class="fa-solid fa-dumbbell text-primary"></i>
                    </span>
                    <span class="fw-bold">Protein </span>
                  </div>
                  <span class="fs-5 fw-bold">42g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-warning-subtle number"
                      ><i class="fa-solid fa-wheat-awn text-warning"></i>
                    </span>
                    <span class="fw-bold">Carbohydrates </span>
                  </div>
                  <span class="fs-5 fw-bold">58g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-danger-subtle number"
                      ><i class="fa-solid fa-droplet text-danger"></i>
                    </span>
                    <span class="fw-bold">Fat </span>
                  </div>
                  <span class="fs-5 fw-bold">14g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-success-subtle number"
                      ><i class="fa-solid fa-seedling text-success"></i>
                    </span>
                    <span class="fw-bold">Fiber </span>
                  </div>
                  <span class="fs-5 fw-bold">4g </span>
                </div>

                <div
                  class="col-5 d-flex justify-content-between align-items-center bg-light-2 p-3 rounded-4"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="text-white fw-bold p-3 rounded-2 bg-bink number"
                      ><i class="fa-solid fa-cube text-bink"></i>
                    </span>
                    <span class="fw-bold">Sodium </span>
                  </div>
                  <span class="fs-5 fw-bold">1240g </span>
                </div>`,
    item_chif_1: "Use chicken thighs for juicier meat",
    item_chif_2: "Make homemade teriyaki sauce for better flavor control",
    item_chif_3: "Add edamame for extra protein",
    item_chif_4: "Meal prep by cooking rice and chicken ahead",
    image: `
        <img src="images/photo-1546069901-eacef0df6022.jpg" class="position-absolute top-0 rounded-start-5 image" width="100%" height="100%"  alt="photo-1568901346375-23c9450c58cd">
        <div class="d-flex p-2 position-relative">
          <div
            class="bg-white d-flex align-items-center gap-2 p-2 rounded-pill position-absolute corner-1"
          >
            <i class="fa-solid fa-star text-warning"></i>
            <span class="fw-bold">4.7 </span>
            <span class="text-secondary">(367 reviews)</span>
          </div>
        </div>

        <div class="">
          <div
            class="bg-white position-absolute corner-2 text-center d-flex justify-content-around p-3 rounded-4"
          >
            <div>
              <i class="fa-solid fa-clock text-orange fs-4"></i>
              <p class="m-0 text-secondary">Prep Time</p>
              <p class="fw-bold m-0">15 min</p>
            </div>
            <div>
              <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
              <p class="m-0 text-secondary">Cook Time</p>
              <p class="fw-bold m-0">20 min</p>
            </div>
            <div>
              <i class="fa-solid fa-users text-primary fs-4"></i>
              <p class="m-0 text-secondary">Servings</p>
              <p class="fw-bold m-0">2 people</p>
            </div>
          </div>
        </div>`,
  }
];

function getMeal() {
  var randomIndex = Math.floor(Math.random() * meals.length);
  var selectedMeal = meals[randomIndex];

  document.getElementById("item-1").innerHTML = selectedMeal.item_1;
  document.getElementById("item-2").innerHTML = selectedMeal.item_2;
  document.getElementById("item-3").innerHTML = selectedMeal.item_3;
  document.getElementById("item-4").innerHTML = selectedMeal.item_4;

  document.getElementById("item-Ingredients").innerHTML =
    selectedMeal.item_Ingredients;
  document.getElementById("item-Instructions").innerHTML =
    selectedMeal.item_Instructions;
  document.getElementById("item-Nutrition").innerHTML =
    selectedMeal.item_Nutrition;

  document.getElementById("Chef-1").innerHTML = selectedMeal.item_chif_1;
  document.getElementById("Chef-2").innerHTML = selectedMeal.item_chif_2;
  document.getElementById("Chef-3").innerHTML = selectedMeal.item_chif_3;
  document.getElementById("Chef-4").innerHTML = selectedMeal.item_chif_4;

  document.getElementById("image").innerHTML = selectedMeal.image;
}
