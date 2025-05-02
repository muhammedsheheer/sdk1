import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuData = {
  food: [
    {
      name: "NOVA MEZE PLATTER (V)",
      description:
        "Homemade Hummus, Baba Ghanoush, Cacik, Couscous With Caponata & Bread",
      price: 16,
    },
    {
      name: "CRISPY FOCACCIA (V)",
      description: "Focaccia bread, Ricotta & Truffle Honey",
      price: 7,
    },
    {
      name: "SPICY SALMON TARTARE",
      description:
        "Raw Salmon, Avocado, Red Sweet Chilli, Mint, Tobico, Lemon & Virgin Olive Oil",
      price: 14,
    },
    {
      name: "LOBSTER (GF)",
      description: "Whole Grilled Lobster, Chives Oil & Saffron Mayo",
      price: 90,
    },
    {
      name: "FIVE VARIATION SASHIMI",
      description:
        "Choose one or mix & match: Salmon, tuna, hamachi, unagi, prawns",
      price: 45,
    },
    {
      name: "Tomahawk(650g - 750g)",
      description: "Thick bone-in Ribeye, Mixed Aromatic Herbs & Garlic Puree",
      price: 98,
    },
  ],
  drinks: [
    {
      name: "RENOVATE",
      description:
        "Bacardi 4 Years, Bombay Sapphire Gin, Bacardi Blanca, Mango and Lime",
      price: 15,
    },
    {
      name: "NOVAS",
      description:
        "Bacardi 8 Years, Watermelon and Grenadine Syrup with Lime Juice and Guava Juice",
      price: 15,
    },
    {
      name: "TUTTI FRUITI",
      description:
        "Mango based springtime delicacy, Grenadine with Banana and Pineapple and Lemon Juice",
      price: 9,
    },
    {
      name: "BUBBLEPOLITAN",
      description:
        "Raspberry Vodka, Bubblegum Syrup, Cranberry Juice, Raspberry Puree",
      price: 15,
    },
    {
      name: "NOVIOLETTE",
      description:
        "Floral Violet Syrup spiced wiht Ginger , paved with Lime and Lychee after taste.",
      price: 9,
    },
    {
      name: "I AM BLUE",
      description:
        "Blue Orange attraction with Lychee and Lemon Juice topped with Lemonade",
      price: 9,
    },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pb-0 pt-12 md:px-24 md:pb-20 md:pt-20 2xl:px-40">
      <div className="absolute -top-5 right-0 md:top-[18%]">
        <Image
          src={"/images/home/follow/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[900px] w-full object-cover md:h-[750px]"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#8C7753]">
              highlights
            </span>
            <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-5xl">
              what’s in the menu
            </h6>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-2 gap-8 md:gap-20 2xl:gap-40">
          {/* Food Items */}
          <div className="flex flex-col gap-6 md:gap-14">
            {menuData.food.map((item, index) => (
              <div
                key={`food-item-${index}`}
                className="flex w-full flex-row items-center justify-center gap-0"
              >
                <div className="flex w-auto flex-col md:w-[488px]">
                  <p className="font-inter text-sm font-[600] uppercase text-[#000] md:text-lg md:tracking-[3px]">
                    {item.name}
                  </p>
                  <p className="text-[rgba(0, 0, 0, 0.60)] font-inter text-xs font-[300] md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 md:mb-12">
                  <div className="*: flex flex-col gap-0">
                    <div className="hidden h-1 w-[150px] border-b-[1px] border-b-[#000] md:block" />
                    <div className="hidden h-1 w-[150px] border-b-[1px] border-b-[#000] md:block" />
                  </div>
                  <p className="flex font-inter text-base font-[500] uppercase tracking-[0.57px] text-[#000]">
                    £{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Drink Items */}
          <div className="flex flex-col gap-6 md:gap-14">
            {menuData.drinks.map((item, index) => (
              <div
                key={`drink-item-${index}`}
                className="flex w-full flex-row items-center justify-center gap-0"
              >
                <div className="flex w-auto flex-col md:w-[488px]">
                  <p className="font-inter text-sm font-[600] uppercase text-[#000] md:text-lg md:tracking-[3px]">
                    {item.name}
                  </p>
                  <p className="text-[rgba(0, 0, 0, 0.60)] font-inter text-xs font-[300] md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 md:mb-12">
                  <div className="*: flex flex-col gap-0">
                    <div className="hidden h-1 w-[150px] border-b-[1px] border-b-[#000] md:block" />
                    <div className="hidden h-1 w-[150px] border-b-[1px] border-b-[#000] md:block" />
                  </div>
                  <p className="flex font-inter text-base font-[500] uppercase tracking-[0.57px] text-[#000]">
                    £{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Link href={"/menu"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase"
              variant="imageoutline"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
