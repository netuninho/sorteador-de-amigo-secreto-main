import * as S from './styled';

const Header = () => {
    return (
        <S.Header>
            <S.Logo role="img" aria-label='Logo do Sorteador'/>
            <S.Imagem src="/img/participante.png" alt="Participante com um presente na mão" />
        </S.Header>
    )
};

export default Header