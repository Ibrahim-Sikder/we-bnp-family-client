export type TPrison = {
    _id:string,
    img_tagline_bangla: string;
    img_tagline_english: string;
    admin_name: string;
    date: string; 
    bangla_title: string;
    english_title: string;
    category: string; 
    bangla_short_description: string;
    english_short_description: string;
    bangla_description: string;
    english_description: string;
    name_published_newspaper: string;
    news_release_date: string; 
    Link_published_newspaper: string;
    meta_title: string;
    meta_keywords: string[];
    meta_description: string;
    thumnail_images:string[],
    eng_iamges:string[],
    bng_Images:string[],
    slug:string,
  };
  export type TImgGallery = {
    _id:string,
    bng_title:string,
    eng_title:string,
    slug:string,
    images:string[],
    createdAt:string,
    date:string,
}
