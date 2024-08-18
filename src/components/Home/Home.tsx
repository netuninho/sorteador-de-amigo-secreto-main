import Formulario from "../Form/Formulario";
import * as S from './styled';

const Home = () => {
    return (
        <>
            <S.Background>
                <S.Container>
                    <S.Titulo>Vamos começar!</S.Titulo>
                    <Formulario/>
                </S.Container>
            </S.Background>
        </>
    )
};

export default Home