import React from "react";
import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { SkillGallery } from "./sections/SkillGallery";
import { Contact } from "./sections/Contact";

export const PageBuilder = ({ sections }: any) => {
  const componentMap = {
    hero: Hero,
    portfolio: Portfolio,
    skillGallery: SkillGallery,
    contact: Contact,
  };

  return (
    <div>
      {sections.map((section: any, index: number) => {
        // @ts-ignore
        const VariableComponent = componentMap[section._type];
        return <VariableComponent key={`section-${index}`} {...section} />;
      })}
    </div>
  );
};
