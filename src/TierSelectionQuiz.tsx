import { useState } from 'react';
import { Modal, Button, Checkbox, List } from 'antd';
import styled from 'styled-components';

const StyledModalContent = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CheckboxGroup = Checkbox.Group;
  
  type AnswerType = {
    [key: string]: string[];
  };
  
  export const TierSelectionQuiz = () => {
    const [visible, setVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<AnswerType>({});
    type TierKey = 'Starter Package' | 'Business Growth Package' | 'Premium Custom Package';

    const tierDescriptions: Record<TierKey, { title: string; details: string; keyBenefits: string[] }> = {        'Starter Package': {
          title: 'Starter Package',
          details: 'Ideal for personal or small business websites with basic needs. Get a professional online presence quickly and affordably.',
          keyBenefits: ['Basic functionalities', 'Single-page layout', 'Cost-effective solution'],
        },
        'Business Growth Package': {
          title: 'Business Growth Package',
          details: 'Perfect for growing businesses that require more dynamic content and features. Scale your website as your business grows.',
          keyBenefits: ['Multi-page setup', 'CMS Integration', 'Advanced SEO'],
        },
        'Premium Custom Package': {
          title: 'Premium Custom Package',
          details: 'A fully tailored solution for complex needs including integrations, custom features, and dedicated support.',
          keyBenefits: ['Custom CMS', 'E-commerce integration', 'Dedicated support'],
        }
      };
      
  const questions = [
    {
      text: "What's the main purpose of your website?",
      options: ['Business', 'Personal', 'E-commerce', 'Educational', 'Other'],
      key: 'purpose'
    },
    {
      text: 'Do you need features like user accounts, online payments, or blogs?',
      options: ['User Accounts', 'Online Payments', 'Blog', 'None of these'],
      key: 'features'
    },
    {
      text: 'How often do you plan to update your website?',
      options: ['Rarely', 'Occasionally', 'Frequently', 'Regularly'],
      key: 'updateFrequency'
    },
    {
      text: 'How quickly do you need your website up and running?',
      options: ['ASAP', 'Within a month', 'No rush, I have time'],
      key: 'timeframe'
    },
    {
      text: 'What level of technical support do you expect?',
      options: ['Basic - occasional help', 'Regular - monthly maintenance', 'Comprehensive - ongoing, dedicated support'],
      key: 'supportLevel'
    },
    {
      text: 'Do you require a blog or content management system?',
      options: ['Yes', 'No'],
      key: 'cms'
    },
    {
      text: 'Will your site need to integrate with other systems (e.g., CRM, E-commerce platforms, etc.)?',
      options: ['Yes', 'No'],
      key: 'integration'
    }
  ];

  const handleAnswersChange = (checkedValues: string[]) => {
    const key = questions[currentStep].key;
    setAnswers({...answers, [key]: checkedValues});
  };

  const determineRecommendation = () => {
    const advancedFeatures = ['Online Payments', 'User Accounts'];
    const needsAdvancedFeatures = answers.features?.some(feature => advancedFeatures.includes(feature));
  
    const needsFrequentUpdates = answers.updateFrequency?.includes('Frequently') || answers.updateFrequency?.includes('Regularly');
    const needsIntegration = answers.integration?.includes('Yes');
  
    if (needsIntegration || (needsAdvancedFeatures && needsFrequentUpdates)) {
      return 'Premium Custom Package';
    }
  
    if (needsAdvancedFeatures || needsFrequentUpdates) {
      return 'Business Growth Package';
    }
  
    return 'Starter Package';
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

  const [resultVisible, setResultVisible] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TierKey | null>(null);

  const showModalResult = (tier: TierKey) => {
    setSelectedTier(tier);
    setResultVisible(true);
  };
  const handleCloseResult = () => {
    setResultVisible(false);
  };

  const showModal = () => setVisible(true);

  const handleClose = () => {
    setVisible(false);
    setCurrentStep(0);
    setAnswers({});
  };

  return (
    <>
      <Button type='primary' ghost onClick={showModal}>Help Me Choose</Button>
      
      <Modal
  title={`Question ${currentStep + 1} of ${questions.length}`}
  open={visible}
  onOk={handleNext}
  onCancel={handleClose}
  footer={[
    <Button key="back" onClick={handleClose}>Cancel</Button>,
    <Button key="submit" type="primary" onClick={handleNext}>
      {currentStep < questions.length - 1 ? 'Next' : 'Finish'}
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
          title="Your Recommended Tier"
          open={resultVisible}
          onCancel={handleCloseResult}
        >
          <h3>{tierDescriptions[selectedTier].title}</h3>
          <p>{tierDescriptions[selectedTier].details}</p>
          <List
            dataSource={tierDescriptions[selectedTier].keyBenefits}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Modal>
      )}
    </>
  );
};
