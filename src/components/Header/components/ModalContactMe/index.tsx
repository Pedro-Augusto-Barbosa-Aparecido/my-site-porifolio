import * as Dialog from "@radix-ui/react-dialog";
import { Input, TextArea } from "../../../Input";

import { TextLink } from "../../../TextLink";
import {
  ButtonClose,
  DialogContent,
  Modal,
  ModalForm,
  ModalTitle,
  Overlay,
} from "./styles";

import { Envelope, X } from "phosphor-react";
import { Button } from "../../../Button";

export function ModalContactMe() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <TextLink>Entre em contato</TextLink>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <DialogContent>
            <Modal>
              <div>
                <Dialog.Title>
                  <ModalTitle>Envie uma mensagem</ModalTitle>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <ButtonClose>
                    <X size={32} weight="bold" />
                  </ButtonClose>
                </Dialog.Close>
              </div>
              <ModalForm onSubmit={(ev) => ev.preventDefault()}>
                <Input
                  labelText="E-mail"
                  name="email"
                  placeholder="Insira seu email aqui..."
                  icon={<Envelope size={36} />}
                />
                <TextArea
                  labelText="Mensagem"
                  name="message"
                  placeholder="Insira sua mensagem para mim..."
                />
                <Button />
              </ModalForm>
            </Modal>
          </DialogContent>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
