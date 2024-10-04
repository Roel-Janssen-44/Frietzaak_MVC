import { Category, Order, Product } from "./types";

export const order: Order = {
  id: 1,
  status: "open",
  orderLines: [
    {
      id: 1,
      productId: 1,
      product: {
        id: 1,
        name: "Kleine friet",
        price: 2.5,
        discountPrice: 2,
        image: "friet.jpg",
        category: "",
      },
      amount: 1,
    },
    {
      id: 2,
      productId: 2,
      product: {
        id: 2,
        name: "Frikandel",
        price: 2.5,
        image: "friet.jpg",
        category: "",
      },
      amount: 2,
    },
  ],
};

export const orders: Order[] = [
  {
    id: 1,
    status: "open",
    orderLines: [
      {
        id: 1,
        productId: 1,
        product: {
          id: 1,
          name: "Kleine friet",
          price: 2.5,
          discountPrice: 2,
          image: "friet.jpg",
          category: "",
        },
        amount: 1,
      },
      {
        id: 2,
        productId: 2,
        product: {
          id: 2,
          name: "Frikandel",
          price: 2.5,
          image: "friet.jpg",
          category: "",
        },
        amount: 2,
      },
    ],
  },
  {
    id: 2,
    status: "open",
    orderLines: [
      {
        id: 1,
        productId: 1,
        product: {
          id: 1,
          name: "Kleine friet",
          price: 2.5,
          discountPrice: 2,
          image: "friet.jpg",
          category: "",
        },
        amount: 1,
      },
      {
        id: 2,
        productId: 2,
        product: {
          id: 2,
          name: "Frikandel",
          price: 2.5,
          image: "friet.jpg",
          category: "",
        },
        amount: 2,
      },
    ],
  },
  {
    id: 3,
    status: "closed",
    orderLines: [
      {
        id: 1,
        productId: 1,

        product: {
          id: 1,
          name: "Kleine friet",
          price: 2.5,
          discountPrice: 2,
          image: "friet.jpg",
          category: "",
        },
        amount: 1,
      },
      {
        id: 2,
        productId: 2,
        product: {
          id: 2,
          name: "Frikandel",
          price: 2.5,
          image: "friet.jpg",
          category: "",
        },
        amount: 2,
      },
    ],
  },
  {
    id: 4,
    status: "closed",
    orderLines: [
      {
        id: 1,
        productId: 1,

        product: {
          id: 1,
          name: "Kleine friet",
          price: 2.5,
          discountPrice: 2,
          image: "friet.jpg",
          category: "",
        },
        amount: 1,
      },
      {
        id: 2,
        productId: 2,

        product: {
          id: 2,
          name: "Frikandel",
          price: 2.5,
          image: "friet.jpg",
          category: "",
        },
        amount: 2,
      },
    ],
  },
  {
    id: 5,
    number: 5,
    status: "closed",
    orderLines: [
      {
        id: 1,
        productId: 1,

        product: {
          id: 1,
          name: "Kleine friet",
          price: 2.5,
          discountPrice: 2,
          image: "friet.jpg",
          category: "",
        },
        amount: 1,
      },
      {
        id: 2,
        productId: 2,

        product: {
          id: 2,
          name: "Frikandel",
          price: 2.5,
          image: "friet.jpg",
          category: "",
        },
        amount: 2,
      },
    ],
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Friet",
    products: [
      {
        id: 21,
        name: "Kleine friet",
        price: 2.5,
        discountPrice: 2,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 22,
        name: "Middel friet",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 23,
        name: "Grote friet",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
    ],
  },
  {
    id: 2,
    name: "Snacks",
    products: [
      {
        id: 4,
        name: "Frikandel",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 5,
        name: "Kroket",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 6,
        name: "Hamburger",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 7,
        name: "Vega burger",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
    ],
  },
  {
    id: 3,
    name: "Burgers",
    products: [
      {
        id: 8,
        name: "Hamburger",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 9,
        name: "Cheeseburger",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 10,
        name: "Vega burger",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
    ],
  },
  {
    id: 4,
    name: "Vega",
    products: [
      {
        id: 11,
        name: "Vega burger",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 12,
        name: "Vega frikandel",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 13,
        name: "Vega kroket",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
    ],
  },
  {
    id: 5,
    name: "Diversen",
    products: [
      {
        id: 14,
        name: "Saus",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 15,
        name: "Salade",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 16,
        name: "Fruit",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
    ],
  },
  {
    id: 6,
    name: "Dranken",
    products: [
      {
        id: 17,
        name: "Cola",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 18,
        name: "Fanta",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 19,
        name: "Sprite",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
      {
        id: 20,
        name: "Water",
        price: 2.5,
        image: "/images/friet.jpg",
        category: "",
      },
    ],
  },
];
