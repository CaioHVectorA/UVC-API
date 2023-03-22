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
const Chars = [Ciecon,HadesSelado,Ormuz] 

module.exports = Chars