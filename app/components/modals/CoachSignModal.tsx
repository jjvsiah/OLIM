'use client';

import useCoachSignModal from "@/app/hooks/useCoachSignModal";
import Modal from "./Modal";

const CoachSignModal = () => {
  const coachSignModal = useCoachSignModal();
  return (
    <Modal
      isOpen={coachSignModal.isOpen}
      onClose={coachSignModal.onClose}
      onSubmit={coachSignModal.onClose}
      actionLabel="Submit"
      title="Sigh up and Coach"
    />
  );
};

export default CoachSignModal;
