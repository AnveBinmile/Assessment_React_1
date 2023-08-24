export interface ButtonProps {
  color: string;
  text: string;
  width: number;
  setText: Function | React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
