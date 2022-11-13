import { DialogClose } from "@radix-ui/react-dialog";
import { SmileySad, X } from "phosphor-react";
import React from "react";
import { ButtonClose } from "../Header/components/ModalContactMe/styles";
import {
  ComingSoonContainer,
  DialogContainer,
  DialogContainerTitle,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "./styles";

interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  // title: React.ReactNode;
}

export function Modal({ children, trigger }: ModalProps) {
  return (
    <>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogContent>
          <DialogContainer>
            <DialogContainerTitle>
              {/* <DialogTitle asChild>{title}</DialogTitle> */}
              <DialogClose asChild>
                <ButtonClose>
                  <X size={24} weight="bold" />
                </ButtonClose>
              </DialogClose>
            </DialogContainerTitle>
            {children}
          </DialogContainer>
        </DialogContent>
      </DialogPortal>
    </>
  );
}

export const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <div>
        <span>Opss!</span>
        <SmileySad />
      </div>
      <span>Em desenvolvimento!!</span>
    </ComingSoonContainer>
  );
};
