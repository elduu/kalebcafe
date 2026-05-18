// src/App.tsx

import { useEffect, useState } from "react";
import {
  Coffee,
  CakeSlice,
  Sandwich,
  Cookie,
  Package,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

import torta from "./assets/torta.jpg";
import vanillaPastry from "./assets/menu-vanialapastry.jpg";

import scrambledEgg from "./assets/menu-scrambledegg.jpg";
import strawberryTart from "./assets/menu-strawberry-tart.jpg";

import pastaTomato from "./assets/menu-pastat.jpg";
import paratha from "./assets/menu-paratha.jpg";

import orangeCake from "./assets/menu-orangecake.jpg";

import focaccia from "./assets/menu-Foccacia.jpg";
import creamery from "./assets/menu-creamery.jpg";

import coffeeBox from "./assets/menu-cofeeboxegna.jpg";
import coffee from "./assets/menu-coffee.jpg";

import chouxBox from "./assets/menu-choux boxsegna.jpg";
import chocolatePastry from "./assets/menu-chocolate-pastry.jpg";
import chocolateChips from "./assets/menu-chocolate-chips.jpg";
import chocolateTart from "./assets/menu-chcoTART.jpg";
import butterCookies from "./assets/menu-buttercooki.jpg";
import burger from "./assets/menu-burger.jpg";
import bananaTart from "./assets/menu-banana-tart.jpg";
import bananaBox from "./assets/menu-babanaboxegna.jpg";
import logo from "./assets/logo.jpg";

import profileImg from "./assets/IMG_20250906_164255_716.jpg";

type MenuItem = {
  en: string;
  am?: string;
  price: number;
  image?: string;
  tag?: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

const WHATSAPP =
  "https://wa.me/251900000000?text=Hello%20Creamery%20I%20want%20to%20order";

const categories: Category[] = [
  {
    id: "breakfast",
    title: "Breakfast & Meals",
    subtitle: "Slow mornings, warm plates",
    icon: <Sandwich size={18} />,
    items: [
      {
        en: "Pasta with Tomato Sauce",
        am: "ፓስታ በቲማቲም",
        price: 180,
        image: pastaTomato,
      },
      {
        en: "Scrambled Egg",
        am: "እንቁላል ፍርፍር",
        price: 170,
        image: scrambledEgg,
      },
      {
        en: "Creamery Sandwich",
        am: "ክሬመሪ ሳንዱች",
        price: 250,
        tag: "Signature",
        image: creamery,
      },
      {
        en: "Cheese Fetira",
        am: "ቺዝ ፈጢራ",
        price: 190,
        image: paratha,
      },
      {
        en: "Normal Full",
        price: 150,
        image: burger,
      },
      {
        en: "Special Full",
        price: 200,
        image: burger,
      },
    ],
  },

  {
    id: "bakery",
    title: "Bakery & Pastries",
    subtitle: "Freshly baked every morning",
    icon: <CakeSlice size={18} />,
    items: [
      {
        en: "Orange Cake",
        am: "ተቆራጭ",
        price: 70,
        image: orangeCake,
      },
      {
        en: "Foccacia",
        am: "የጣሊያን አምባሻ",
        price: 40,
        image: focaccia,
      },
      {
        en: "Strawberry Tart",
        price: 70,
        image: strawberryTart,
      },
      {
        en: "Banana Caramel Tart",
        am: "ሙዝ ታርት",
        price: 70,
        image: bananaTart,
      },
      {
        en: "Chocolate Tart",
        am: "ቾኮሌት ታርት",
        price: 70,
        image: chocolateTart,
      },
    ],
  },

  {
    id: "choux",
    title: "Choux Pastries",
    subtitle: "Light, airy, delicious",
    icon: <Coffee size={18} />,
    items: [
      {
        en: "Strawberry Choux Pastry",
        am: "ስትሮቤሪ ቦክሰኛ",
        price: 70,
        image: chouxBox,
      },
      {
        en: "Coffee Choux Pastry",
        am: "ቡና ቦክሰኛ",
        price: 70,
        image: coffeeBox,
      },
      {
        en: "Chocolate Choux Pastry",
        am: "ቾኮሌት ቦክሰኛ",
        price: 70,
        image: chocolatePastry,
      },
      {
        en: "Vanilla Choux Pastry",
        am: "ቫኔላ ቦክሰኛ",
        price: 70,
        image: vanillaPastry,
      },
      {
        en: "Banana Caramel Choux Pastry",
        am: "ሙዝ ቦክሰኛ",
        price: 70,
        image: bananaBox,
      },
    ],
  },

  {
    id: "cookies",
    title: "Cookies & Snacks",
    subtitle: "Little bites of joy",
    icon: <Cookie size={18} />,
    items: [
      {
        en: "Chocolate Chips Cookies",
        price: 40,
        image: chocolateChips,
      },
      {
        en: "Butter Cookies (1 Box)",
        price: 300,
        image: butterCookies,
      },
    ],
  },

  {
    id: "cakes",
    title: "Cakes & Torta",
    subtitle: "Made for celebrations",
    icon: <CakeSlice size={18} />,
    items: [
      {
        en: "Mini Torta / Erub Kilo",
        price: 400,
        image: torta,
      },
      {
        en: "Half Kilo Torta",
        price: 800,
        image: torta,
      },
      {
        en: "Full 1kg Torta",
        price: 1500,
        tag: "Best Seller",
        image: profileImg,
      },
    ],
  },

  {
    id: "extras",
    title: "Extras",
    subtitle: "Takeaway essentials",
    icon: <Package size={18} />,
    items: [
      {
        en: "Small Takeaway Box",
        price: 10,
        image: coffee,
      },
      {
        en: "Big Takeaway Box",
        price: 15,
        image: coffee,
      },
    ],
  },
];

export default function App() {
  const [active, setActive] = useState("breakfast");
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#3a2618] dark:bg-[#161311] dark:text-[#f4e9dc] transition-colors duration-300">
      {/* Navbar */}

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/30 border-b border-[#e5d8c5]">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
           <img
  src={logo}
  alt="logo"
  className="w-20 h-20 rounded-full mx-auto"
/>

            <div>
              <h1 className="font-semibold text-sm tracking-wide">
                Creamery Cakes & Coffee
              </h1>

              <p className="text-xs opacity-60">Established 2017</p>
            </div>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#2a221d] flex items-center justify-center shadow"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Hero */}

      <section className="relative px-5 pt-20 pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <img
  src={logo}
  alt="logo"
  className="w-20 h-20 rounded-full mx-auto"
/>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#b07a42]">
            Artisan Cakes & Coffee
          </p>

          <h2 className="mt-4 text-5xl font-serif leading-tight">
            Slow Brews &
            <br />
            Sweet Moments
          </h2>

          <p className="mt-5 text-sm opacity-70 max-w-sm mx-auto leading-7">
            Premium pastries, handcrafted cakes and carefully brewed coffee in
            the heart of Addis Ababa.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("menu")}
              className="bg-[#3a2618] text-white px-6 py-3 rounded-full text-sm shadow-xl"
            >
              View Menu
            </button>

            <a
              href={WHATSAPP}
              target="_blank"
              className="border border-[#3a2618] px-6 py-3 rounded-full text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Search */}

      <section className="px-5 mb-8">
        <div className="max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-14 rounded-2xl px-5 bg-white dark:bg-[#241d18] border border-[#eadbc7] outline-none"
          />
        </div>
      </section>

      {/* Categories */}

      <section className="sticky top-16 z-40 bg-[#f7f1e6]/90 dark:bg-[#161311]/90 backdrop-blur-xl border-b border-[#eadbc7]">
        <div className="flex overflow-x-auto gap-2 px-4 py-3 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActive(cat.id);
                scrollTo(cat.id);
              }}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all ${
                active === cat.id
                  ? "bg-[#3a2618] text-white"
                  : "bg-white dark:bg-[#241d18]"
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Menu */}

      <main id="menu" className="px-5 py-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {categories.map((cat) => {
            const filtered = cat.items.filter((item) =>
              item.en.toLowerCase().includes(search.toLowerCase())
            );

            if (!filtered.length) return null;

            return (
              <section key={cat.id} id={cat.id}>
                <div className="mb-8 text-center">
                  <div className="flex justify-center mb-3">{cat.icon}</div>

                  <p className="uppercase tracking-[0.3em] text-xs text-[#b07a42]">
                    {cat.subtitle}
                  </p>

                  <h3 className="text-4xl font-serif mt-2">{cat.title}</h3>
                </div>

                <div className="grid gap-4">
                  
                  {filtered.map((item) => (
  <div
    key={item.en}
    className="bg-white dark:bg-[#241d18] rounded-3xl p-5 shadow-sm border border-[#f0e4d3] dark:border-[#2f2721]"
  >
    
    <div className="flex gap-4 items-center">

      {/* IMAGE (NEW - SAFE) */}
      {item.image && (
        <img
          src={item.image}
          alt={item.en}
          className="w-20 h-20 rounded-2xl object-cover border border-[#e7d7c2]"
        />
      )}

      {/* TEXT */}
      <div className="flex-1">
        <h4 className="text-xl font-serif">
          {item.en}
        </h4>

        {item.am && (
          <p className="text-sm opacity-70 mt-1">
            {item.am}
          </p>
        )}

        {item.tag && (
          <span className="inline-block mt-3 text-xs bg-[#f4e5d1] text-[#8d5c2f] px-3 py-1 rounded-full">
            {item.tag}
          </span>
        )}
      </div>

      {/* PRICE */}
      <div className="text-right">
        <p className="text-xl font-semibold">
          {item.price}
        </p>

        <span className="text-xs opacity-60">
          birr
        </span>
      </div>

    </div>
  </div>
))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}

      <footer className="pb-32 pt-14 text-center px-5">
        <img
  src={logo}
  alt="logo"
  className="w-20 h-20 rounded-full mx-auto"
/>

        <h3 className="mt-5 text-3xl font-serif">
          Creamery Cakes & Coffee
        </h3>

        <p className="mt-2 opacity-60 text-sm">
          Handmade pastries, artisan cakes and coffee.
        </p>
 <p className="mt-2 opacity-60 text-sm">
      powered by <a href="https://inviteyours.com" className="underline">InviteYours</a>
        </p>
        
      </footer>

      {/* Floating WhatsApp */}

      <a
        href={WHATSAPP}
        target="_blank"
        className="fixed bottom-6 right-5 z-50 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      >
        💬
      </a>
    </div>
  );
}