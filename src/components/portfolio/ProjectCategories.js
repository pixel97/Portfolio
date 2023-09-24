import React from "react";
import CategoryButton from "./CategoryButton";
import { useState } from "react";

const ProjectCategories = (props) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeActiveCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    props.onFilterProjects(activeCat);
  };

  const categories = props.categories;
  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeActiveCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "light"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectCategories;
