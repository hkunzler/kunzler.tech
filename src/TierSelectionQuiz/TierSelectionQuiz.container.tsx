import { useState } from "react";
import { t } from "i18next";
import { TierSelectionQuiz } from "./TierSelectionQuiz.view";

export type TierKeyType =
  | TierKey.StarterPackage
  | TierKey.BusinessGrowthPackage
  | TierKey.PremiumCustomPackage;

export enum TierKey {
  StarterPackage = "Starter Package",
  BusinessGrowthPackage = "Business Growth Package",
  PremiumCustomPackage = "Premium Custom Package",
}

export const questions = [
  {
    text: t("tier_selection_quiz__questions_purpose"),
    options: [
      t("business"),
      t("personal"),
      t("e-commerce"),
      t("educational"),
      t("other"),
    ],
    key: "purpose",
  },
  {
    text: t("tier_selection_quiz__questions_features"),
    options: [
      t("user_accounts"),
      t("online_payments"),
      t("blog"),
      t("none_of_these"),
    ],
    key: "features",
  },
  {
    text: t("tier_selection_quiz__questions_update_frequency"),
    options: [t("rarely"), t("occasionally"), t("frequently"), t("regularly")],
    key: "updateFrequency",
  },
  {
    text: t("tier_selection_quiz__questions_speed"),
    options: [t("asap"), t("within_a_month"), t("no_rush")],
    key: "timeframe",
  },
  {
    text: t("tier_selection_quiz__questions_technical_support"),
    options: [t("basic"), t("regular"), t("comprehensive")],
    key: "supportLevel",
  },
  {
    text: t("tier_selection_quiz__questions_cms"),
    options: [t("tier_selection_quiz__yes"), t("tier_selection_quiz__no")],
    key: "cms",
  },
  {
    text: t("tier_selection_quiz__questions_integrate"),
    options: [t("tier_selection_quiz__yes"), t("tier_selection_quiz__no")],
    key: "integration",
  },
];

export const tierDescriptions: Record<
  TierKey,
  { title: string; details: string; keyBenefits: string[] }
> = {
  [TierKey.StarterPackage]: {
    title: t("starter_package_title"),
    details: t("starter_package_details"),
    keyBenefits: [
      t("starter_package_benefit_1"),
      t("starter_package_benefit_2"),
      t("starter_package_benefit_3"),
    ],
  },
  [TierKey.BusinessGrowthPackage]: {
    title: t("business_growth_package_title"),
    details: t("business_growth_package_details"),
    keyBenefits: [
      t("business_growth_package_benefit_1"),
      t("business_growth_package_benefit_2"),
      t("business_growth_package_benefit_3"),
    ],
  },
  [TierKey.PremiumCustomPackage]: {
    title: t("premium_custom_package_title"),
    details: t("premium_custom_package_details"),
    keyBenefits: [
      t("premium_custom_package_benefit_1"),
      t("premium_custom_package_benefit_2"),
      t("premium_custom_package_benefit_3"),
    ],
  },
};

export const TierSelectionQuizContainer = () => {
  const [visible, setVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string[] }>({});
  const [resultVisible, setResultVisible] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TierKeyType>();

  const handleAnswersChange = (checkedValues: string[]) => {
    const key = questions[currentStep].key;
    setAnswers({ ...answers, [key]: checkedValues });
  };

  const determineRecommendation = () => {
    const advancedFeatures = [t("online_payments"), t("user_accounts")];
    const needsAdvancedFeatures = answers.features?.some((feature) =>
      advancedFeatures.includes(feature)
    );

    const needsFrequentUpdates =
      answers.updateFrequency?.includes(t("tier_selection_quiz__frequently")) ||
      answers.updateFrequency?.includes(t("tier_selection_quiz__regularly"));
    const needsIntegration = answers.integration?.includes(
      t("tier_selection_quiz__yes")
    );

    if (needsIntegration || (needsAdvancedFeatures && needsFrequentUpdates))
      return TierKey.PremiumCustomPackage;

    if (needsAdvancedFeatures || needsFrequentUpdates)
      return TierKey.BusinessGrowthPackage;

    return TierKey.StarterPackage;
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const recommendation = determineRecommendation();
      showModalResult(recommendation);
      handleCloseQuiz();
    }
  };

  const handleCloseQuiz = () => {
    setVisible(false);
    setCurrentStep(0);
    setAnswers({});
  };

  const showModalResult = (tier: TierKeyType) => {
    setSelectedTier(tier);
    setResultVisible(true);
  };
  const handleCloseResult = () => {
    setResultVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
    setCurrentStep(0);
    setAnswers({});
  };

  return (
    <TierSelectionQuiz
      setVisible={setVisible}
      visible={visible}
      selectedTier={selectedTier}
      handleClose={handleClose}
      currentStep={currentStep}
      handleNext={handleNext}
      handleAnswersChange={handleAnswersChange}
      answers={answers}
      resultVisible={resultVisible}
      handleCloseResult={handleCloseResult}
    />
  );
};
