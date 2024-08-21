import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import Configuracao from "./Configuracao";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe('pagina de configuracao', () => {
    test('deve ser redenrizada corretamente', () => {
       const { container } = render(
            <RecoilRoot>
                <Configuracao/>
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})