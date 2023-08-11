/* eslint-disable @next/next/no-img-element */
// Item.tsx
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../css/style.module.css";
import ExpandableText from "./ExpandableText";
interface ItemProps {
  imageUrl: string;
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
  lastIndex: number;
  currentIndex: number;
  goNext: () => void;
  goPrev: () => void;
}

const Item: React.FC<ItemProps> = ({
  imageUrl,
  title,
  content,
  isActive,
  onClick,
  lastIndex,
  currentIndex,
  goNext,
  goPrev,
}) => {
  return (
    <>
      <div
        className={`${style.item}`}
        style={{ width: isActive ? "100%" : "5%" }}
        onClick={onClick}
      >
        <img className={`${style["item-image"]}`} src={imageUrl} alt={title} />
        <div
          className={`${style["item-content"]}`}
          style={{ display: isActive ? "block" : "none" }}
        >
          <h1 className="font-primary text-rose-gold">{title}</h1>
          <br />
          <div className="text-chocolate-brown p-5 font-mono backdrop-opacity-20 rounded-lg backdrop-invert bg-white/30">
            <ExpandableText maxLength={100} textContent={content} />
          </div>
        </div>
      </div>
      {isActive && (
        <div className="w-[80%] flex justify-between items-center absolute top-[80%] z-[800]  ">
          {currentIndex !== 0 && (
            <button onClick={goPrev} className="btn btn-circle btn-outline">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          {currentIndex !== lastIndex && (
            <button onClick={goNext} className="btn btn-circle btn-outline">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Item;
