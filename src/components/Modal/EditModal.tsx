import { Button } from '@heroui/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/modal';
import { IEditModalProps } from ' @/types/types';
import { Input } from '@heroui/input';
import { NumberInput } from '@heroui/number-input';

export const EditModal = ({ isOpen, onOpenChange, meme }: IEditModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              Edit meme
            </ModalHeader>
            <ModalBody>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Input
                  isRequired
                  className="max-w-xs"
                  defaultValue={meme?.name}
                  label="Name"
                  type="text"
                  labelPlacement="outside-left"
                  classNames={{
                    label: 'text-black/50 dark:text-white/90',
                  }}
                  minLength={3}
                  maxLength={100}
                />
                <NumberInput
                  isReadOnly
                  aria-label="Amount"
                  className="max-w-xs"
                  defaultValue={meme?.likes}
                  placeholder="Enter the amount"
                  variant="flat"
                  label="likes"
                  labelPlacement="outside-left"
                  classNames={{
                    label: 'text-black/50 dark:text-white/90',
                  }}
                />
              </div>

              <Input
                isRequired
                className="max-w-xs"
                defaultValue={meme?.image}
                label="Image"
                type="text"
                labelPlacement="outside-left"
                classNames={{
                  label: 'text-black/50 dark:text-white/90',
                }}
                validate={(value) => {
                  try {
                    new URL(value);
                  } catch {
                    return 'Введіть коректний URL';
                  }
                  if (!/\.(jpe?g)$/i.test(value)) {
                    return 'URL повинен вести на зображення JPG';
                  }
                  return null;
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
