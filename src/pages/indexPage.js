import React from "react";
import LandingPage from "../components/LandingPage/landingPage";
import IndexNewProduct from "../components/IndexNewProduct/indexNewProduct";
import IndexFragranceBanner from "../components/IndexFragranceBanner/indexFragranceBanner";
import IndexProductIntroL from "../components/IndexProductIntroL/indexProductIntroL";
import IndexProductIntroR from "../components/IndexProductIntroR/indexProductIntroR";
import IndexNewClass from "../components/IndexNewClass/indexNewClass";
import IndexSubscribe from "../components/IndexSubscribe/indexSubscribe";

const IndexPage = () => {
    const productInfo1 = {
        src: "/images/banner/floral.jpg",
        title: "花香調",
        intro: "花香調是浪漫的代表，好比是1990 年代的經典即興慢調。",
        subTitle: "CHANEL GABRIELLE 嘉柏麗香水",
        subContent: `香奈兒嘉柏麗香水由四種花朵組成純粹的花香調：
                帶著異國情調的馥郁茉莉花、綻放明亮果香調的依蘭依蘭，
                加上清新璀璨的橙花，以及充滿女人味的格拉斯晚香玉。`,
    };
    const productInfo2 = {
        src: "/images/banner/woody.png",
        title: "木質香調",
        intro:
            "冷冽的木質香，迷離而不失親切感，可作為中性氣味，成為近年最受歡迎的時髦香氣。",
        subTitle: "BYREDO 北國之春淡香精",
        subContent: `簡潔的木香調配方，延續了BYREDO一貫的摩登風格。
    雪松讓人回想起兒時削鉛筆的氣味，激起求學時期的回憶。 
    雪松與玫瑰花瓣的清甜，添增了溫暖的現代感，
    透過調香師的氣味堆疊，創造出深度的香氣。`,
    };

    const productInfo3 = {
        src: "/images/banner/fresh.png",
        title: "小清新",
        intro:
            "小清新系香水結合了花香、柑橘和果香，彷彿新鮮空氣湧入令人精神為之一振。",
        subTitle: "Le Labo BERGAMOT 22 淡香精",
        subContent: `佛手柑為主的清新香，令人驚艷的個性與多變性格；
    清新、乾淨、充滿活力、彷彿具有輕盈的氣泡感。 `,
    };
    const productInfo4 = {
        src: "/images/banner/spicy.png",
        title: "辛辣溫暖香調",
        intro: "以琥珀、香草和沒藥等名貴成分為主，散發出懷舊醉人的特殊香氣。",
        subTitle: "Jo Malone London 黑琥珀與野薑花",
        subContent: `在日本香道儀式中被視為瑰寶的迦邏木和  
    馥郁細緻的琥珀和黑蘭花， 沐浴於黑小荳蔻、
    薑及荷花性感潔淨香氣，讓身心放鬆舒適。`,
    };
    return (
        <>
            <LandingPage />
            <IndexNewProduct />
            <IndexFragranceBanner />
            <IndexProductIntroL
                title={productInfo1.title}
                intro={productInfo1.intro}
                src={productInfo1.src}
                subTitle={productInfo1.subTitle}
                subContent={productInfo1.subContent}
            />
            <IndexProductIntroR
                title={productInfo2.title}
                intro={productInfo2.intro}
                src={productInfo2.src}
                subTitle={productInfo2.subTitle}
                subContent={productInfo2.subContent}
            />
            <IndexProductIntroL
                title={productInfo3.title}
                intro={productInfo3.intro}
                src={productInfo3.src}
                subTitle={productInfo3.subTitle}
                subContent={productInfo3.subContent}
            />
            <IndexProductIntroR
                title={productInfo4.title}
                intro={productInfo4.intro}
                src={productInfo4.src}
                subTitle={productInfo4.subTitle}
                subContent={productInfo4.subContent}
            />
            <IndexNewClass src="/images/banner/class-main.jpg" />
            <IndexSubscribe />
        </>
    );
};
export default IndexPage;
