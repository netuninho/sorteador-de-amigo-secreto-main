import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../state/hook/useListaParticipantes';
import * as S from './styled';

const Botao = () => {

    const participantes = useListaParticipantes()

    const navegarPara = useNavigate()

    const iniciar = () => {
        navegarPara('/sorteio')
    }

    return (
        <S.Button disabled={participantes.length < 3} onClick={iniciar}>
            <S.Imagem src="/img/play.png" alt="Símbolo de play" />
            Iniciar brincadeira!
        </S.Button>
    )
};

export default Botao