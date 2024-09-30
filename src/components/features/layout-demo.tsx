"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Nuestros primeros mensajes
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Nuestros primeros pasitos, aquí no sabiamos que ibamos a ser el uno para el otro y lo mas felices juntos que nunca
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        El comienzo de todo lo bonito
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white w-full">
        La primera vez que te hiciste pasar por mi mujer
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Nuestra mejor foto
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Tus ojos hermosos
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Molestandote cada vez que puedo y tu con cara de que pesado jaja
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Nuestro Primer aniversario
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Mi Nalita Aesthetic
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Nuestro primer viaje fuera de España
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};
const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        TE AMO MUCHO MI VIDITA PERFECTA
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.ibb.co/6ny721d/Whats-App-Image-2024-09-30-at-10-01-57-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-1 ",
    thumbnail:
      "https://i.ibb.co/WcThCW2/Whats-App-Image-2024-09-30-at-10-01-57-2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/1b/1e/c8/1b1ec821d5549d937cd0fd7ea8e38685.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.pinimg.com/564x/a3/6a/60/a36a60508776d7b7a29e71255479aec5.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/42/b6/78/42b67895392023ff12cfb0e54a07330a.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.postimg.cc/1XbhP4X9/godot.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.pinimg.com/564x/8d/df/e1/8ddfe16929bc62021d5f64bf32320a41.jpg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/2a/88/ce/2a88ce22c8a54b9c04201f904cd1d110.jpg",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/4c/62/7a/4c627a59d4b37d879aaddc49da2b2126.jpg",
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/6f/4c/af/6f4caf4bf9f2c7b5c4e7d950e05f6ae8.jpg",
  },
];
