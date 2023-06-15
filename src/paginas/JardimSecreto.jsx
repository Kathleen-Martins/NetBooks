import React from "react";
import Sinopse from "../componentes/Sinopse";
import { PageBooks } from "./style";
import jardimSecretoImage from "../assets/jardimsecreto.jpeg";

const JardimSecreto = () => {
    return (
        <PageBooks>
            <div className="sinopse">

                <Sinopse
                    image={jardimSecretoImage}
                    titulo="Livro: Jardim Secreto"
                    autor="Frances Hodgson Burnet"
                    ano="1911"
                    paginas="300"
                    sinopse="DE REPENTE, NADA MAIS É COMO ANTES... O PODER DA IMAGINAÇÃO FARÁ COM QUE DUAS JOVENS APRENDAM A LIDAR COM A NOVA REALIDADE. Desde a primeira publicação em 1911, em formato seriado, O Jardim Secreto permaneceu um dos favoritos das crianças em todo o mundo. Com uma história encantadora sobre superação e transformação, o clássico continua conquistando gerações de leitores com as aventuras da senhorita 'Mary Sempre do Contra' no jardim escondido da mansão Misselthwaite."
                    sobreautor="Frances Hodgson Burnett nasceu em 1849, em Manchester, Inglaterra, mas mudou-se para os Estados Unidos ainda na adolescência após perder o pai e enfrentar uma séria crise financeira. Nesse período, começou a escrever para ajudar a sustentar sua família e tornou-se uma das escritoras mais bem pagas de seu tempo, com um legado de 52 livros e 13 peças de teatro. O Pequeno Lorde, A Princesinha e O Jardim Secreto são suas obras mais famosas."
                />
            </div>
        </PageBooks>
    );
};

export default JardimSecreto;