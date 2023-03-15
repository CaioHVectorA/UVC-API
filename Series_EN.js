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


    const GUA = new CSe('Guardians','GUA','Beenie moves from the city with her parents in search of a better life and a promising future. However, in this city, there are things they never imagined they would have to face.','EARTH','03/11/2023','Ongoing','Caio Henrique',['Drama','Action','Team','Earth'],'https://live.staticflickr.com/65535/52739030543_751119292d_n.jpg',['S_KER','SE_MR1'],[{
        Nome: "Metamorphoses",
        Disponivel: true,
        NumEps: 3,
        DescCap: "blablabla",
        Episodios: {
            Ep1: {
                Nome: "Changes",
                Ref: "01.txt",
                Numero: 1,
            },
            Ep2: {
                Nome: "Difficulties",
                Ref: "02.txt",
                Numero: 2,
            },
            Ep3: {
                Nome: "Powers",
                Ref: "03.txt",
                Numero: 3,
            },
        },
    },
    {
        Nome: "Apocalypse",
        Disponivel: true,
        NumEps: 3,
        DescCap: "blablabla",
        Episodios: {
            Ep4: {
                Nome: "Bad Sensations",
                Ref: "04.txt",
                Numero: 4,
            },
            Ep5: {
                Nome: "Mental Fights",
                Ref: "05.txt",
                Numero: 5,
            },
            Ep6: {
                Nome: "The Apocalypse",
                Ref: "06.txt",
                Numero: 6,
            },
        },
    },
    ])