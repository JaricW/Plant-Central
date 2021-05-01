# Plant Central
Plant Central is a website designed to sell plants online.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Website](#website)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Plant central has a home page where you can learn more about the website, a shop view where you can view (and sort by price) all the available plants, and also a basket view where you can view any products you have added to the basket and enter your billing information.


## Technologies
Plant Central is built with:
HTML5
Tailwind CSS
React.js
Hosted on netlify

## Website
View the full website here - https://plant-central.netlify.app/

## Code Examples
  const plantDisplay = (plants) => (
    <div className="flex items-center justify-between flex-col p-2 text-center bg-white border-2 border-black h-96 ">
      <img src={plants.img} className="max-w-full max-h-40 " />
      <h3 className="text-lg"> {plants.name}</h3>
      <p className="text-sm">{plants.description}</p>
      <p className="italic">£{plants.price}</p>
      <button
        className="text-white bg-Green rounded-lg p-2 hover:bg-white border-2 border-current hover:text-Green cursor-pointer"
        onClick={() => addToCart(plants)}
      >
        Add to Cart
      </button>
    </div>
  );

## Features
Current features:
* 14 unique plants
* Sort plants by price
* Connected to Stripe API to quickly enter saved card information
* 3 seperate 'customer' quotes, one of which is randomly displayed on the home page.

To-do list:
* Increase to 50 different plants
* Add more search/sort functionality (ie by name, size, popularity)
* Fully connect Stripe API
* Replace JSON file with a back-end.

## Status
The initial phase of the project is working and completed.
The next phase is currently being planned out, and will start by adding many more plants to the website.

## Inspiration
I chose to start this project to learn more about e-commerce websites and how to create them.

## Contact
Created by Jaric Woodhead, feel free to contact me via email jaric_woodhead@msn.com.