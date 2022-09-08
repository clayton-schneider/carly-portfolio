import React from "react";
import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { SkillGallery } from "./sections/skillGallery";
import { Contact } from "./sections/Contact";

export const PageBuilder = ({ sections }) => {
  const componentMap = {
    hero: Hero,
    portfolio: Portfolio,
    skillGallery: SkillGallery,
    contact: Contact,
  };

  return (
    <div>
      {sections.map((section, index) => {
        const VariableComponent = componentMap[section._type];
        return <VariableComponent key={`section-${index}`} {...section} />;
      })}
    </div>
  );
};
