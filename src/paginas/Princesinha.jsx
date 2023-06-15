import React from "react";
import Sinopse from "../componentes/Sinopse";
import { PageBooks } from "./style";
import aPrincesinhaImage from "../assets/aprincesinha_gd.jpg";


const Princesinha = () => {

    return (
        <PageBooks>
            <div className="sinopse">
                <Sinopse
                    image={aPrincesinhaImage}
                    titulo='Livro: Princesinha'
                    autor='Frances Hogdson Burnet'
                    ano='1995'
                    paginas='300'
                    sinopse='Em A princesinha, obra mais famosa de Frances Hodgson Burnett, acompanhamos a história de como a sorte de Sara mudou radicalmente. Doce e inteligente, ela entende que deve superar as adversidades da vida com amor, compaixão e boas histórias.'
                    sobreautor='Frances Hodgson Burnett nasceu em 1849, em Manchester, Inglaterra, mas mudou-se para os Estados Unidos ainda na adolescência após perder o pai e enfrentar uma séria crise financeira. Nesse período, começou a escrever para ajudar a sustentar sua família e tornou-se uma das escritoras mais bem pagas de seu tempo, com um legado de 52 livros e 13 peças de teatro. O Pequeno Lorde, A Princesinha e O Jardim Secreto são suas obras mais famosas.'

                />
            </div>
        </PageBooks>
    )
}
export default Princesinha
