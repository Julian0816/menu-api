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
        price: 13.00,
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
    },
    4: {
        id: 4,
        name: "Chicken Butterfly",
        price: 13.25,
        decription: "Two chicken breasts, flame-grilled with crispy skin. Infused with PERi-PERi and served in your choice of spice.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/chicken-butterfly-10.Image-16-9.093328.jpg"
    },
    5: {
        id: 5,
        name: "4 Boneless Chicken Thighs",
        price: 13.25,
        decription: "Flame-grilled with crispy skin. Infused with PERi-PERi and served in your choice of spice.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/4-boneless-chicken-thighs-11.Image-16-9.093514.jpg"
    },
    6: {
        id: 6,
        name: "1/4 Chicken",
        price: 9.50,
        decription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served on the bone with crispy skin, in your choice of spice.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/1-4-chicken-13.Image-16-9.093758.jpg"
    },
    7: {
        id: 7,
        name: "Whole Chicken",
        price: 14.95,
        decription: "Flame-grilled, infused with PERi-PERi and served in your choice of spice. Cut into quarters and perfect with sides, it's great for sharing!",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/whole-chicken-14.Image-16-9.094004.jpg"
    },
    8: {
        id: 8,
        name: "Chicken Livers & Portuguese Roll",
        price: 13,
        decription: "Try something different! Chicken livers cooked in our special sauce, served with a Portuguese roll.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/chicken-livers-portuguese-roll-15.Image-16-9.182858.jpg"
    },
    9: {
        id: 9,
        name: "3 Chicken Wings",
        price: 9.25,
        decription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice.",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/3-chicken-wings-15.Image-16-9.094057.jpg"
    },
    10: {
        id: 10,
        name: "10 Chicken Wings",
        price: 16.25,
        decription: "Flame-grilled with crispy skin and great for sharing!",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/10-chicken-wings-17.Image-16-9.094243.jpg"
    },
    11: {
        id: 11,
        name: "15 Chicken Wings",
        price: 14.95,
        decription: "Bigger is always better. A feast that’s great for sharing!",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/15-chicken-wings-18.Image-16-9.094348.jpg"
    },
    12: {
        id: 12,
        name: "10 Wing Roulette",
        price: 11.50,
        decription: "Can't decide on your spice? Tuck in to 10 wings with various heat levels (it's not for the faint-hearted!).",
        image: "https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/10-wing-roulette-19.Image-16-9.094421.jpg"
    }
}

/**
 * Service Methods
 */

//Simulating asyncronous nature of read and write operations
export const findAll = async (): Promise<Item[]> => Object.values(items);
export const find = async (id: number): Promise<Item> => items[id];


//Method to create a new item in the store
export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf(); //This is what gives a unique id to each item

    items[id] = {
        id,
        ...newItem,
    };

    return items[id]
}
/**
 * The create method receives an object of type BaseItem as an argument,
 * providing all the required values to define a new item in the store, except the item's id.
 * To create a unique id value for each new element added to the store, you use the value
 * of the current Date, based on the number of milliseconds between 1 January 1970
 * 00:00:00 UTC and the current time.
 */


//Method to update an existing store item
export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await find(id);

    if(!item) {
        return null;
    }

    items[id] = {id, ...itemUpdate};

    return items[id];
};
/**
 * The update method receives the item id property and an itemUpdate object as
 * arguments. You use the id to find the item in the store to update it wit the properties of
 * itemUpdate. If the store doesn't have the item, you return null.
 */


//Method to remove an item from the store
export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);

    if(!item) {
        return null;
    }

    delete items[id];
};
/**
 * The remove method receives an id value as a parameter and uses it to look up an item
 * in the store and to delete it if found.
 */