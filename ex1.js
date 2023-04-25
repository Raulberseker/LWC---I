import { LightningElement } from "lwc";

export default class App extends LightningElement {
  div1 = {
    empresa : 'SoulCoderosa',
    cnpj : '45.997.418/0001-53',
    endereco : 'rua 13 de maio, 2662'
  };
  div2 = {
    produto : 'Mouse',
    descricao : 'mouse para guei, isso mesmo gueimers',
    preco : '50 moedas de réis'
  };
  div3 = {
        promocao: true,
        oferta1: '10% off familiaaa',
        oferta2: 'Frete grátis mi amigos'
  };

  isDiv2And3Visible = true;
  
  handleButtonClick() {
    this.isDiv2And3Visible = !this.isDiv2And3Visible;
  }

  }
