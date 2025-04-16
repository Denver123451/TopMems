export interface IMeme {
  id: number;
  name: string;
  likes: number;
  image: string;
}

export interface IEditModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  meme: IMeme | null;
}
