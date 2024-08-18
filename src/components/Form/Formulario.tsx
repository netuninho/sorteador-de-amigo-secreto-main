import * as S from './styled';
import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hook/useAdicionarParticipante';
import { useMensagemErro } from '../../state/hook/useMensagemErro';

const Formulario = () => {
    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemErro = useMensagemErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }
    
    return (
        <S.Form onSubmit={adicionarParticipante}>
            <S.Input 
                ref={inputRef}
                value={nome}
                onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setNome(evento.target.value)}
                type="text" 
                placeholder="Insira os nomes dos participantes"
            />
            <S.Button disabled={!nome}>Adicionar</S.Button>
            {mensagemErro && <p role="alert">{mensagemErro}</p>}
        </S.Form>
    )
};

export default Formulario