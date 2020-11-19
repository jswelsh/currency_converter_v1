import { FC } from 'react';
interface IButtonProps {
    handleSubmit(): void;
    primary: string;
}
declare const Button: FC<IButtonProps>;
export { Button };
