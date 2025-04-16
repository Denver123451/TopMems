'use client';

import { Button } from '@heroui/button';
import { FormEvent } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/modal';
import { IEditModalProps, IMeme } from ' @/types/types';
import { Input } from '@heroui/input';
import { NumberInput } from '@heroui/number-input';
import { Form } from '@heroui/form';

export const EditModal = ({
  isOpen,
  onOpenChange,
  meme,
  onSave,
}: IEditModalProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {} as IMeme;
    formData.forEach((value, key) => {
      if (key === 'image') {
        data.image = value.toString();
      }
      if (key === 'likes') {
        data.likes = Number(value);
      }
      if (key === 'name') {
        data.name = value.toString();
      }
    });
    data.id = meme?.id ?? 0;
    onSave(data);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              Edit meme
            </ModalHeader>
            <Form className="w-full " onSubmit={onSubmit}>
              <ModalBody>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <Input
                    name="name"
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
                    aria-label="Amount"
                    name="likes"
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
                  name="image"
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
                    if (!/\.(jpe?g|webp)$/i.test(value)) {
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
                <Button color="primary" type="submit">
                  Save
                </Button>
              </ModalFooter>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
