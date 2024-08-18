import { atom } from "recoil";

export const listaParticipanteState = atom<string[]>({
    key: 'ListaParticipantesState',
    default: []
});

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})