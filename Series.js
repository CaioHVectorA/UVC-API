let Series = []

function CSe(Nome,Ref,Desc,Local,Lancamento,Status,Escrito,Tags,Imgref,Associados,Capitulos) {
this.Nome = Nome,
this.Tipo = "SERIES",
this.Ref = `SE_${Ref}`,
this.Desc = Desc,
this.Local = Local,
this.Lancamento = Lancamento,
this.Status = Status,
this.Escrito = Escrito,
this.Tags = Tags,
this.Imgref = Imgref,
this.Associados = Associados
this.Capitulos = Capitulos
}

const MR1 = new CSe('Menino Resilient I','MR1','Acompanhe a história do guardião substituto,que ganhou seus poderes em meio a desastres que mudaram toda sua vida.','TERRA','11/03/2023','Completo','Caio Henrique',['Drama','Terra','Ação','Teen'],'https://live.staticflickr.com/65535/52739881142_cc750f9fba_m.jpg',['SE_GUA','S_KER'],[{
    Nome: "Uma Nova Luz",
    Disponivel: true,
    NumEps: 3,
    DescCap: "Lorem Ipsum blablabla",
    Episodios: {
        Ep1: {
            Nome: 'Desejos',
            Ref: '01.txt',
            Numero: 1
        },
        Ep2: {
            Nome: 'O Experimento',
            Ref: '02.txt',
            Numero: 2
        },
        Ep3: {
            Nome: 'Sonhos',
            Ref: '03.txt',
            Numero: 3
        }
    }
},
{
    Nome: "Resiliência e Persistência",
    Disponivel: true,
    NumEps: 3,
    DescCap: "Lorem Ipsum blablabla",
    Episodios: {
        Ep4: {
            Nome: 'Contra todos, contra tudo',
            Ref: '04.txt',
            Numero: 4
        },
        Ep5: {
            Nome: 'Superações',
            Ref: '05.txt',
            Numero: 5
        },
        Ep6: {
            Nome: 'Novos Desafios',
            Ref: '06.txt',
            Numero: 6
        }
    }
},
{
    Nome: "Persistência e Ascensão",
    Disponivel: true,
    NumEps: 3,
    DescCap: "blablabla",
    Episodios: {
        Ep7: {
            Nome: 'A sombra da noite',
            Ref: '07.txt',
            Numero: 7
        },
        Ep8: {
            Nome: 'Predador e a presa',
            Ref: '08.txt',
            Numero: 8
        },
        Ep9: {
            Nome: 'Repetições sem fim',
            Ref: '09.txt',
            Numero: 9
        }
    }
},
{
    Nome: "Ascensão e Vitória!",
    Disponivel: true,
    NumEps: 3,
    DescCap: "blablabla",
    Episodios: {
        Ep10: {
            Nome: 'Sem descanso',
            Ref: '10.txt',
            Numero: 10
        },
        Ep11: {
            Nome: 'Dois por um',
            Ref: '11.txt',
            Numero: 11
        },
        Ep12: {
            Nome: 'Vitória ou Auto-Ilusão?',
            Ref: '12.txt',
            Numero: 12
        }
    }
}
])

const CONG = new CSe('Congregadores','CONG','Ciecon,um divertido e simples garoto,de repente se apossa de um poder enorme.Dedicado e astuto,ele decide que vai acabar com a injustiça e os males do universo.','UNIVERSAL','11/03/2023','Em andamento','Caio Henrique',['Sci-Fi','Ação','Drama','Universal'],'https://live.staticflickr.com/65535/52738545646_7a022dc471.jpg',['SE_RRH','SE_GUA'], [{
    Nome: 'Selvagem',
    Disponivel: true,
    NumEps: 3,
    DescCap: 'blablabla',
    Episodios: {
        Ep1: {
            Nome: 'A Extinção',
            Ref: '01.txt',
            Numero: 1
        },
        Ep2: {
            Nome: 'Uma Nova Amizade',
            Ref: '02.txt',
            Numero: 2
        },
        Ep3: {
            Nome: 'O Futuro Incerto',
            Ref: '03.txt',
            Numero: 3
        }
    }
},
{
    Nome: 'Tirania e Sobenaria',
    Disponivel: true,
    NumEps: 3,
    DescCap: 'blablabla',
    Episodios: {
        Ep4: {
            Nome: 'Escravidão',
            Ref: '04.txt',
            Numero: 4
        },
        Ep5: {
            Nome: 'A Barbárie',
            Ref: '05.txt',
            Numero: 5
        },
        Ep6: {
            Nome: 'Áurea',
            Ref: '06.txt',
            Numero: 6
        }
    }
}
])

const GUA = new CSe('Guardiões','GUA','Beenie se muda da cidade com seus pais em busca de uma vida melhor e um futuro promissor. Porém nessa cidade,há coisas que eles nunca imaginariam que teriam que enfrentar.','TERRA','11/03/2023','Em Andamento','Caio Henrique',['Drama','Ação','Equipe','Terra'],'https://live.staticflickr.com/65535/52739030543_751119292d_n.jpg',['S_KER','SE_MR1'],[{
    Nome: "Metamorfoses",
    Disponivel: true,
    NumEps: 3,
    DescCap: "blablabla",
    Episodios: {
        Ep1: {
            Nome: "Mudanças",
            Ref: "01.txt",
            Numero: 1,
        },
        Ep2: {
            Nome: "Dificuldades",
            Ref: "02.txt",
            Numero: 2,
        },
        Ep3: {
            Nome: "Poderes",
            Ref: "03.txt",
            Numero: 3,
        },
    },
},
{
    Nome: "Apocalipse",
    Disponivel: true,
    NumEps: 3,
    DescCap: "blablabla",
    Episodios: {
        Ep4: {
            Nome: "Más Sensações",
            Ref: "04.txt",
            Numero: 4,
        },
        Ep5: {
            Nome: "Lutas Mentais",
            Ref: "05.txt",
            Numero: 5,
        },
        Ep6: {
            Nome: "O Apocalipse",
            Ref: "06.txt",
            Numero: 6,
        },
    },
},
])
Series.push(MR1,CONG,GUA)
module.exports = Series