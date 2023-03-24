function Char(Nome,Equipe,Hero,Local,Resumo,Poderes,Aparicoes,Img) {
    this.nome = Nome,
    this.Equipe = Equipe,
    this.isHero = Hero
    this.Local = Local
    this.Descricao = Resumo,
    this.Poderes = Poderes,
    this.Aparicoes = Aparicoes,
    this.img = Img
}

const Ciecon = new Char('Ciecon','Congregadores',true,'UNIVERSAL','Depois de ter ganhado seus poderes equipando o Bracelete Divino,Ciecon enfrentou o Demônio.Depois de o vencer,ele percebe que tem um poder enorme em suas mãos,e que deve usá-lo para derrotar o mal que habita pelo universo.',['Conjuração de portais que transportam matéria','Um Subsconsciente racional e Falante'],['Ciecon,seu próprio solo','Congregadores'],'https://live.staticflickr.com/65535/52738545646_7a022dc471.jpg')
const Ormuz = new Char('Ormuz','',false,'UNIVERSAL','Apesar de nunca aparecer, é o homem que criou tudo e todos, e a partir de seu poder divino, impede Hades de dominar o universo.',['Poderes divinos e inestimáveis','Imortalidade','Em sua forma ascendida, manipulação das casualidades','Controle do espaço e realidade'],[],'')
const HadesSelado = new Char('Hades, Selado','',false,'UNIVERSAL','Temido por todo o universo, Hades é a entidade divina que representa o mal. Seu poder é inestimável. Desde então, ele assumiu uma forma humana e vaga pelo universo dominando tudo pela frente, e visa possuir tudo que existe, e então, derrotar Ormuz.',['Poderes Inestimados','Imortalidade','Diversas capacidades sobrenaturais de um Deus'],['Hades, seu próprio solo','Ciecon'],'https://live.staticflickr.com/65535/52739035768_37250eb886_n.jpg')
const Kerry = new Char('Kerry','Guardiões',true,'TERRA','Kerry,Após ter sua vida destruída pela gangue Tineros, ele passa por uma série de perrengues, até ser acolhido por um homem misterioso, que o treina e enigmaticamente o dá o seus poderes,então, ele destroí os Tineros. Posteriormente, ele é um pseudo-participante dos Guardiões, ainda que se recuse a ter uma postura de um herói.',['Força Sobrenatural','Transformar pele em aço'],['Kerry, seu própria Solo','Guardiões','Menino Resiliente'],'https://live.staticflickr.com/65535/52739030508_e60672c0fd_w.jpg')
const Beenie = new Char('Beenie','Guardiões',true,'TERRA','Beenie,também chamado de Telecinese, principal superpoderoso dos guardiões. Ele é um astuto jovem que após ganhar seus poderes teve que ser maduro e racional para lidar com os problemas e as responsabilidades. Apesar disso, ele não perdeu seu lado jovem e interessado nas coisas ao seu redor, principalmente seu poder.',['Telecinese','Super-Força','Conjuração de Raios de energia','Voo','????'],['Guardiões'],'https://live.staticflickr.com/65535/52739030543_751119292d_n.jpg')
const Chars = [Ciecon,HadesSelado,Ormuz,Kerry,Beenie] 

module.exports = Chars