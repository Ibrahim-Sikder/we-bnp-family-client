
import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type userRole = keyof typeof USER_ROLE;

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export const adminRole = ["Admin"];


type Option = {
  label: string;
  subCategories?: Option[];
};


export type TActivity = {
  _id:string,
  img_tagline_bangla: string;
  img_tagline_english: string;
  admin_name: string;
  date: string; 
  bangla_title: string;
  english_title: string;
  category: string[]; 
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
export type TProgramm = {
  _id:string,
  img_tagline_bangla: string;
  img_tagline_english: string;
  admin_name: string;
  date: string; 
  bangla_title: string;
  english_title: string;
  category: string[]; 
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

export type TBanner = {
  _id:string,
  bng_name: string;
  eng_name: string;
  images: string[],
  bng_designation: string;
  bng_description: string;
  eng_description: string;
  eng_designation: string;
  createdAt:string,
};

export type TCommitte = {
  _id:string,
  name: string;
  designation: string;
  images: string[];
  category: string; 
  createdAt:string,
};
export type LanguageProps = {
  language:string
}