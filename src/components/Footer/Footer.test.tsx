import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { fireEvent, render, screen } from "@testing-library/react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useNavigate } from "react-router-dom";

jest.mock('../../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe('quando não existe participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    }) 
    
    test('brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Footer/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('quando há participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Cararina', 'Fernanda'])
    }) 

    test('brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Footer/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('sorteio iniciado', () => {
        render(
            <RecoilRoot>
                <Footer/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavigate).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
    })
})