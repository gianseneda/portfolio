import { FiDownload } from "react-icons/fi";

import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NavbarItem,
  useDisclosure,
} from "@heroui/react";

export const DownloadCV = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavbarItem
        className="p-2 rounded-lg border border-stone-500 items-center cursor-pointer"
        onClick={onOpen}
      >
        <div className="flex gap-2 items-center">
          <FiDownload size={24} className="text-stone-300" />
          <span className="text-stone-200 font-bold text-sm">Download CV</span>
        </div>
      </NavbarItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        className="bg-stone-800 text-stone-300"
      >
        <ModalContent>
          <ModalHeader className="text-lg font-semibold">
            Download CV
          </ModalHeader>

          <ModalBody className="flex gap-4">
            <Button
              as="a"
              href="./cv/cv-gianseneda-pt.pdf"
              download
              color="secondary"
              radius="full"
              onPress={() =>
                addToast({
                  title: "Your download was successful",
                  color: "success",
                })
              }
            >
              Português 🇧🇷
            </Button>

            <Button
              as="a"
              href="./cv/cv-gianseneda-en.pdf"
              download
              variant="bordered"
              radius="full"
              onPress={() =>
                addToast({
                  title: "Your download was successful",
                  color: "success",
                })
              }
            >
              English 🇺🇸
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
