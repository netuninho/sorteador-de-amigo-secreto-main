import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {

    // Renderizar o elemento
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    )

    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // Encontrar o botão
    const botao = screen.getByRole('button')

    // Garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    // Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
});

test('adicioar participante caso exista nome preenchido', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    )
    
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    // Inserir valor no input
    fireEvent.change(input, {
        target: {
            value: 'Manuela'
        }
    })

    // Submit
    fireEvent.click(botao)

    // Garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()

    // Garanti que o input ñ tenha um valor
    expect(input).toHaveValue("")
});

test('nomes duplicados não podem ser adicionados', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    )
    
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
        target: {
            value: 'Manuela'
        }
    })

    fireEvent.click(botao)

    fireEvent.change(input, {
        target: {
            value: 'Manuela'
        }
    })
    
    fireEvent.click(botao)

    const mensagemErro = screen.getByRole('alert')

    expect(mensagemErro.textContent).toBe('Você já inseriu esse nome antes')
})