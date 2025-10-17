"use client";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";
import {  ReactNode } from "react";
import {LuPenTool} from "react-icons/lu";


  //
  export default function UpdateLocation({children}:{children: ReactNode}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  

    return (
      <>
        <Button onPress={onOpen} color="primary"><LuPenTool size="30" /></Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
                <ModalBody>
               
                  {children}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }


  

