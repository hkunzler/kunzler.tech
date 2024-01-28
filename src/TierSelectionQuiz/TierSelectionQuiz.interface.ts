import { TierKeyType, TierKey } from "./TierSelectionQuiz.container";

export interface ITierSelectionQuiz {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedTier?: TierKeyType;
  handleClose: () => void;
  currentStep: number;
  handleNext: () => void;
  handleAnswersChange: (value: TierKey[]) => void;
  answers: { [key: string]: string[] };
  resultVisible: boolean;
  handleCloseResult: () => void;
}
