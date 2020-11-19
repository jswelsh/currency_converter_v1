import { FC } from 'react';
interface ButtonProps {
    primary: string;
    handleSubmit(): void;
}
declare const Button: FC<ButtonProps>;
export { Button };
