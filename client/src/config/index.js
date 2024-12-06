export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "protein", label: "Protein" },
      { id: "strengthpower", label: "Strength & Power" },
      { id: "energyfocus", label: "Energy & Focus" },
      { id: "recovery", label: "Recovery" },
      { id: "weightmanagement", label: "Weight Management" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "optimumnutrition", label: "Optimum Nutrition (ON)" },
      { id: "muscletech", label: "MuscleTech" },
      { id: "bsn", label: "BSN" },
      { id: "cellucor", label: "Cellucor" },
      { id: "dymatizenutrition", label: "Dymatize Nutrition" },
      { id: "my protein", label: "MyProtein" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "protein",
    label: "Protein",
    path: "/shop/listing",
  },
  {
    id: "strengthpower",
    label: "Strength & Power",
    path: "/shop/listing",
  },
  {
    id: "energyfocus",
    label: "Energy & Focus",
    path: "/shop/listing",
  },
  {
    id: "weightmanagement",
    label: "Weight Management",
    path: "/shop/listing",
  },
  {
    id: "recovery",
    label: "Recovery",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  protein: "Protein",
  strengthpower: "Strength & Power",
  energyfocus: "Energy & Focus",
  recovery: "Recovery",
  weightmanagement: "Weight Management",
};

export const brandOptionsMap = {
  optimumnutrition: "Optimum Nutrition (ON)",
  muscletech: "MuscleTech",
  bsn: "BSN",
  cellucor: "Levi",
  dymatizenutrition: "Dymatize Nutrition",
  "my protein": "MyProtein",
};

export const filterOptions = {
  category: [
    { id: "protein", label: "Protein" },
    { id: "strengthpower", label: "Strength & Power" },
    { id: "energyfocus", label: "Energy & Focus" },
    { id: "recovery", label: "Recovery" },
    { id: "weightmanagement", label: "Weight Management" },
  ],
  brand: [
    { id: "optimumnutrition", label: "Optimum Nutrition (ON)" },
    { id: "muscletech", label: "MuscleTech" },
    { id: "bsn", label: "BSN" },
    { id: "cellucor", label: "Cellucor" },
    { id: "dymatizenutrition", label: "Dymatize Nutrition" },
    { id: "my protein", label: "MyProtein" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];