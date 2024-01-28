export const cta = "Help Me Choose";
export const next = "Next";
export const finish = "Finish";
export const cancel = "Cancel";
export const recommendation = "Your Recommended Tier";
export const questions = [
  {
    text: "What's the main purpose of your website?",
    options: ["Business", "Personal", "E-commerce", "Educational", "Other"],
    key: "purpose",
  },
  {
    text: "Do you need features like user accounts, online payments, or blogs?",
    options: ["User Accounts", "Online Payments", "Blog", "None of these"],
    key: "features",
  },
  {
    text: "How often do you plan to update your website?",
    options: ["Rarely", "Occasionally", "Frequently", "Regularly"],
    key: "updateFrequency",
  },
  {
    text: "How quickly do you need your website up and running?",
    options: ["ASAP", "Within a month", "No rush, I have time"],
    key: "timeframe",
  },
  {
    text: "What level of technical support do you expect?",
    options: [
      "Basic - occasional help",
      "Regular - monthly maintenance",
      "Comprehensive - ongoing, dedicated support",
    ],
    key: "supportLevel",
  },
  {
    text: "Do you require a blog or content management system?",
    options: ["Yes", "No"],
    key: "cms",
  },
  {
    text: "Will your site need to integrate with other systems (e.g., CRM, E-commerce platforms, etc.)?",
    options: ["Yes", "No"],
    key: "integration",
  },
];

export const tierDescriptions: Record<
  TierKey,
  { title: string; details: string; keyBenefits: string[] }
> = {
  "Starter Package": {
    title: "Starter Package",
    details:
      "Ideal for personal or small business websites with basic needs. Get a professional online presence quickly and affordably.",
    keyBenefits: [
      "Basic functionalities",
      "Single-page layout",
      "Cost-effective solution",
    ],
  },
  "Business Growth Package": {
    title: "Business Growth Package",
    details:
      "Perfect for growing businesses that require more dynamic content and features. Scale your website as your business grows.",
    keyBenefits: ["Multi-page setup", "CMS Integration", "Advanced SEO"],
  },
  "Premium Custom Package": {
    title: "Premium Custom Package",
    details:
      "A fully tailored solution for complex needs including integrations, custom features, and dedicated support.",
    keyBenefits: ["Custom CMS", "E-commerce integration", "Dedicated support"],
  },
};

export enum TierKey {
  StarterPackage = "Starter Package",
  BusinessGrowthPackage = "Business Growth Package",
  PremiumCustomPackage = "Premium Custom Package",
}

export type TierKeyType =
  | TierKey.StarterPackage
  | TierKey.BusinessGrowthPackage
  | TierKey.PremiumCustomPackage;

  export function getQuestionProgress(currentStep: number, questionsLength: number): string {
    return `Question ${currentStep + 1} of ${questionsLength}`;
  }