export type TTabContent = {
  _id: string;
  english_tab_title: string;
  bangla_tab_title: string;
  english_tab_description: string;
  bangla_tab_description: string;
};

export type THistory = {
  _id: string;
  date: string;
  bangla_title: string;
  english_title: string;
  english_subtitle: string;
  bangla_subtitle: string;
  goal_english_title: string;
  goal_bangla_title: string;
  goal_bangla_description: string;
  goal_english_description: string;
  bangla_description: string;
  english_description: string;
  images: string[];
  category: string;
  admin_name: string;
  tab_content: TTabContent[]; 
};

export type TSection = {
  _id:string,
  overview_title_bangla: string;
  overview_title_english: string;
  overview_description_bangla: string;
  overview_description_english: string;
  missing_title_bangla: string;
  missing_title_english: string;
  missing_count_bangla: string;
  missing_count_english: string;
  murder_count_bangla: string;
  murder_count_english: string;
  murder_title_english: string;
  murder_title_bangla: string;
  case_count_bangla: string;
  case_count_english: string;
  case_title_english: string;
  case_title_bangla: string;
  criminal_count_english: string;
  criminal_count_bangla: string;
  criminal_title_bangla: string;
  criminal_title_english: string;
  buttontext_bangla: string;
  buttontext_english: string;
  overview_images: [string];
  overview_message_bangla: string;
  overview_message_english: string;
  subscribe_title_bangla: string;
  subscribe_title_english: string;
  followus_title_english: string;
  followus_title_bangla: string;
  oppressed_title_bangla: string;
  oppressed_title_english: string;
  oppressed_description_bangla: string;
  oppressed_description_english: string;
  programm_title_bangla: string;
  programm_title_english: string;
  programm_description_bangla: string;
  programm_description_english: string;
  history_title_bangla: string;
  history_title_english: string;
  history_description_bangla: string;
  history_description_english: string;
  footer_title_bangla: string;
  footer_title_english: string;
  footer_phone_bangla: string;
  footer_phone_english: string;
  footer_address_english: string;
  footer_address_bangla: string;
  footer_copywright_title_bangla: string;
  footer_copywright_title_english: string;
  information_title_bangla: string;
  information_title_english: string;
  information_description_bangla: string;
  information_description_english: string;
  internation_report_title_bangla:string,
  internation_report_title_english:string,
  media_report_title_bangla:string,
  media_report_title_english:string,
};

