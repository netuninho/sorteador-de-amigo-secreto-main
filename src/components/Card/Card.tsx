import * as S from './styled';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return (
        <>
            <S.Card className="card">
                {children}
            </S.Card>
        </>
    );
};

export default Card;
