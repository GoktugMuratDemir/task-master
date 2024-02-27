import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Category {
  name: string;
  to: string;
}

export const SideBarList: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      name: "None",
      to: "/categorie/none",
    },
    {
      name: "Home",
      to: "/categorie/home",
    },
    {
      name: "Shopping List",
      to: "/categorie/shopping-list",
    },
    // Diğer kategorileri buraya ekleyebilirsiniz
  ];

  const handleSubCategoryClick = (to: string) => {
    navigate(to);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="cursor-pointer" onClick={() => handleSubCategoryClick('/')}>All Types</div>
      <div
        className="cursor-pointer"
        onClick={() => setOpenCategory(!openCategory)}
      >
        Categories
        {openCategory && (
          <ul className="ml-4">
            {categories.map((category) => (
              <div
                className="cursor-pointer"
                onClick={() => handleSubCategoryClick(category.to)}
              >
                {category.name}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
