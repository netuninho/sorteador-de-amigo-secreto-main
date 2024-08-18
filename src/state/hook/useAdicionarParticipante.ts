import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipanteState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipanteState)
    const lista = useRecoilValue(listaParticipanteState)
    const setErro = useSetRecoilState(erroState)

    return(nomeParticipante: string) => {
        if(lista.includes(nomeParticipante)) {
            setErro("Você já inseriu esse nome antes")
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        } 

        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
}