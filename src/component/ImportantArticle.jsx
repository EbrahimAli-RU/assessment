import React from "react";
import ImportantArticleCard from "./shared/ImportantArticleCard";
import SectionSubHeader from "./shared/SectionSubHeader";
import DemoSwitchButton from "./shared/DemoSwitchButton";

const ImportantArticle = () => {
  return (
    <div className="important_article_container">
      <div className="important_article_logo_container">
        <p>Logo</p>
        <p>Logo</p>
        <p>Logo</p>
        <p>Logo</p>
        <p>Logo</p>
        <p>Logo</p>
      </div>
      <div className="important_article_content">
        <div>
          <SectionSubHeader title="Important Articles" />
          <h1 className="colorBlack marginTop-small">Something Know Our</h1>
          <h1 className="negative-margin-5 colorBlack">Latest News & Blog</h1>
        </div>
        <div>
          <DemoSwitchButton
            title="View All News"
            colorFlag="#ff4917"
            slideColor="#14212a"
            fontColor="white"
          />
        </div>
      </div>
      <div className="important_article_card_div">
        <ImportantArticleCard />
        <ImportantArticleCard />
        <ImportantArticleCard />
      </div>
    </div>
  );
};

export default ImportantArticle;
