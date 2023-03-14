import { Button, Icon } from "@chakra-ui/react";
import { FaFolder } from "react-icons/fa";

const handleDownload = () => {
  const link = document.createElement("a");
  link.download = "document.docx";
  link.href = "/assets/resume.docx";
  link.click();
};

const ResumeButton = () => {
  return (
    <Button colorScheme={'purple'} onClick={handleDownload}>
        <FaFolder/>
    </Button>
  );
};

export default ResumeButton;
