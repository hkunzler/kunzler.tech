import { Modal, Button, Checkbox, List } from "antd";
import styled from "styled-components";
import { t } from "i18next";
import { ITierSelectionQuiz } from "./TierSelectionQuiz.interface";
import { TierKey, questions, tierDescriptions } from "./TierSelectionQuiz.container";

const StyledModalContent = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CheckboxGroup = Checkbox.Group;

export const TierSelectionQuiz = ({
  setVisible,
  visible,
  selectedTier,
  handleClose,
  currentStep,
  handleNext,
  handleAnswersChange,
  answers,
  resultVisible,
  handleCloseResult,
}: ITierSelectionQuiz) => {
  return (
    <>
      <Button type="primary" ghost onClick={() => setVisible(true)}>
        {t("help_me_choose")}
      </Button>
      <Modal
        title={t("question_progress")
          .replace("$1", String(currentStep + 1))
          .replace("$2", String(questions.length))}
        open={visible}
        onOk={handleNext}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            {t("cancel")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleNext}>
            {currentStep < questions.length - 1 ? t("next") : t("finish")}
          </Button>,
        ]}
      >
        <StyledModalContent>
          <h3>{questions[currentStep].text}</h3>
          <CheckboxGroup
            options={questions[currentStep].options}
            onChange={handleAnswersChange}
            value={answers[questions[currentStep].key] as TierKey[]}
          />
        </StyledModalContent>
      </Modal>
      {selectedTier && (
        <Modal
          title={t("your_recommended_tier")}
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
