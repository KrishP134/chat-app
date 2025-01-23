export type Chat = {
  id: string;
  text: string;
  time: number;
  status: "Sent" | "Delivered" | "Read";
};
