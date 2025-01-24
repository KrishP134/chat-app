export type Chat = {
  id: string;
  text: string;
  time: number;
  status: 'Sent' | 'Delivered' | 'Read';
};

export type Contact = {
  id: string;
  name: string;
  profileImg?: string;
};
