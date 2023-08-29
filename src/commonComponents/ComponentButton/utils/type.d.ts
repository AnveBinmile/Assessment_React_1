export interface ButtonProps {
    color: string;
    text: string;
    width: number;
    setText: Function | React.Dispatch<React.SetStateAction<string>>;
  }