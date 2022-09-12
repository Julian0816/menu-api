/**
 * Data Model Interfaces (Importing the interfaces created)
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
    1: {
        id: 1,
        name: "1/2 chicken",
        price: 13,
        decription: "One breast and one leg, flame-grilled and infused with PERi-PERi. Served on the bone with crispy skin, in your choice of spice.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/1-2-chicken-12.Image-16-9.093606.jpg"
    },
    2: {
        id: 2,
        name: "Grilled Chicken Burger",
        price: 12,
        decription: "Chicken breast infused with PERi-PERi and grilled to your favourite spice. Served in a Portuguese Roll with Lemon & Herb mayo, lettuce, tomato and PERi-Ketchup.",
        image: "https://images.menu.nandos.dev/uk/burgers-pittas-wraps/640x360/grilled-chicken-burger-27.Image-16-9.095548.jpg"
    },
    3: {
        id: 3,
        name: "5 Chicken wings",
        price: 11.25,
        decription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/5-chicken-wings-16.Image-16-9.094139.jpg"
    }
}

/**
 * Service Methods
 */

