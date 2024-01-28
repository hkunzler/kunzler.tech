import { t } from "i18next";
import { TierDisplay } from "./TierDisplay.view";

export const TierDisplayContainer = () => {
  const tiers = [
    {
      title: t("starter_package"),
      features: [
        t("single-page_layout"),
        t("responsive_design"),
        t("basic_seo"),
      ],
      totalPrice: t("starting_at_499"),
      subscription: t("maintenance_and_support"),
    },
    {
      title: t("business_growth_package"),
      features: [
        t("multi-page_setup"),
        t("cms_integration"),
        t("advanced_seo"),
      ],
      totalPrice: t("starting_at_999"),
      subscription: t("maintenance_and_support_200"),
    },
    {
      title: t("premium_custom_package_title"),
      features: [
        t("integration_with_a_headless_cms"),
        t("on-site_editing_capabilities"),
        t("customizable_layouts_and_content_structures"),
        t("advanced_seo_management_and_strategy"),
        t("dedicated_technical_support"),
      ],
      totalPrice: t("contact_for_quote"),
      subscription: t("maintenance_and_support_300"),
    },
  ];

  return <TierDisplay tiers={tiers} />;
};
