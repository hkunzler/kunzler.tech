import { useState } from "react";
import { Modal, Button, Checkbox, List } from "antd";
import styled from "styled-components";
import {
  TierKey,
  TierKeyType,
  cancel,
  cta,
  finish,
  getQuestionProgress,
  next,
  questions,
  recommendation,
  tierDescriptions,
} from "./constants/tierSelectionQuiz";

const StyledModalContent = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CheckboxGroup = Checkbox.Group;

export const TierSelectionQuiz = () => {
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
    const advancedFeatures = ["Online Payments", "User Accounts"];
    const needsAdvancedFeatures = answers.features?.some((feature) =>
      advancedFeatures.includes(feature)
    );

    const needsFrequentUpdates =
      answers.updateFrequency?.includes("Frequently") ||
      answers.updateFrequency?.includes("Regularly");
    const needsIntegration = answers.integration?.includes("Yes");

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
    <>
      <Button type="primary" ghost onClick={() => setVisible(true)}>
        {cta}
      </Button>
      <Modal
        title={getQuestionProgress(currentStep, questions.length)}
        open={visible}
        onOk={handleNext}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            {cancel}
          </Button>,
          <Button key="submit" type="primary" onClick={handleNext}>
            {currentStep < questions.length - 1 ? next : finish}
          </Button>,
        ]}
      >
        <StyledModalContent>
          <h3>{questions[currentStep].text}</h3>
          <CheckboxGroup
            options={questions[currentStep].options}
            onChange={handleAnswersChange}
            value={answers[questions[currentStep].key]}
          />
        </StyledModalContent>
      </Modal>
      {selectedTier && (
        <Modal
          title={recommendation}
          open={resultVisible}
          onCancel={handleCloseResult}
        >
          <h3>{tierDescriptions[selectedTier].title}</h3>
          <p>{tierDescriptions[selectedTier].details}</p>
          <List
            dataSource={tierDescriptions[selectedTier].keyBenefits}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Modal>
      )}
    </>
  );
};
