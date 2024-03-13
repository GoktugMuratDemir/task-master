import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryEnums } from "../../../Enums/CategoryEnums";

interface Category {
  name: string;
  to: string;
  imgUrl?: string;
  sublist?: Category[];
}

const categories: Category[] = [
  {
    name: "All Types",
    to: "/",
    sublist: undefined,
    imgUrl: "/Assets/task.png",
  },
  {
    name: "Categories",
    to: "/category/home",
    imgUrl: "/Assets/folder.svg",
    sublist: [
      {
        name: "Home",
        to: "/category/home",
        sublist: undefined,
      },
      {
        name: "Work",
        to: "/category/work",
        sublist: undefined,
      },
      {
        name: "Personal",
        to: "/category/personal",
        sublist: undefined,
      },
    ],
  },
];

const SideBarList: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSubCategoryClick = (to: string) => {
    navigate(to);
  };

  

  const toggleOpenCategory = (to: string) => {
    setOpenCategories((prevOpenCategories) => {
      if (prevOpenCategories.includes(to)) {
        return prevOpenCategories.filter((category) => category !== to);
      } else {
        return [...prevOpenCategories, to];
      }
    });
  };

  const renderSubcategories = (sublist?: Category[], parentTo?: string) => {
    if (!sublist || !openCategories.includes(parentTo || "")) {
      return null;
    }

    return sublist.map((subCategory) => {
      const categoryTitle = (
        subCategory.to.toLowerCase().split("/")[2] || ""
      ).toLowerCase();

      const matchedCategory = CategoryEnums.find(
        (item) => item.title.toLowerCase() === categoryTitle
      );

      const isActive = location.pathname === subCategory.to;

      return (
        <div
          key={subCategory.to}
          className="cursor-pointer flex items-center gap-6"
          onClick={() => handleSubCategoryClick(subCategory.to)}
        >
          <div
            style={{ background: matchedCategory?.color }}
            className="w-3 h-3 rounded-full"
          ></div>
          <div className={`${isActive ? "text-fuchsia-950" : ""}`}>
            {subCategory.name}
          </div>
          {isActive && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-2 w-2 transform rotate-90`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      );
    });
  };

  const renderCategory = (category: Category) => (
    <div key={category.to} className="flex flex-col">
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => {
          category.sublist && toggleOpenCategory(category.to);
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src={category.imgUrl}
            className="w-5 h-5 object-contain"
            alt=""
          />
          <div
            className="text-lg font-bold"
            onClick={() => {
              !category.sublist && handleSubCategoryClick(category.to);
            }}
          >
            {category.name}
          </div>
        </div>
        {category.sublist && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              openCategories.includes(category.to) ? "transform rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      {renderSubcategories(category.sublist, category.to)}
    </div>
  );

  return (
    <div className="flex flex-col p-4 gap-4">
      {categories.map((category) => renderCategory(category))}
    </div>
  );
};

export default SideBarList;
