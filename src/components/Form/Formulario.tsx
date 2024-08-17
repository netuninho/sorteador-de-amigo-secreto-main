import * as S from './styled';

const Formulario = () => {
    return (
        <S.Form>
            <S.Input type="text" placeholder="Insira os nomes dos participantes"/>
            <S.Button disabled={true}>Adicionar</S.Button>
        </S.Form>
    )
};

export default Formulario