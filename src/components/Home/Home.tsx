import Footer from "../Footer/Footer";
import Formulario from "../Form/Formulario";
import Header from "../Header/Header";
import * as S from './styled';

const Home = () => {
    return (
        <>
            <S.Background>
                    <Header/>
                    <S.Container>
                        <S.Titulo>Vamos começar!</S.Titulo>
                        <Formulario/>
                    </S.Container>
                    <Footer/>
            </S.Background>
        </>
    )
};

export default Home