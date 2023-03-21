let Solos = []
function CS(Nome,Ref,Desc,Local,Lancamento,Status,Escrito,Tags,Imgref,Associados,Alt) {
this.Nome = Nome,
this.Tipo = "SOLO",
this.Ref = `S_${Ref}`,
this.Desc = Desc,
this.Local = Local,
this.Lancamento = Lancamento,
this.Status = Status,
this.Escrito = Escrito,
this.Tags = Tags,
this.Imgref = Imgref,
this.Associados = Associados
this.isAlternative = Alt
}
const Hades = new CS('Hades','HAD','Conheça profundamente a origem e os objetivos do Monstruoso e Soberano Demônio, que pretende dominar todo o universo com seu poder divino e maligno.','UNIVERSAL','10/03/2003','Completo','Caio Henrique',['Drama','Universal','Ação','Violência'],'https://live.staticflickr.com/65535/52739035768_37250eb886_n.jpg',["SE_CIEC","SE_CONG","SE_GUA"],false)
const Ciecon = new CS('Ciecon','CIEC','Leia a história origem difícil do justiceiro espacial, Ciecon. Que posteriormente avançou a jornada e se tornou o líder dos Congregadores.','UNIVERSAL','10/03/2003','Completo','Caio Henrique',['Drama','Universal','Sci-Fi'],'https://live.staticflickr.com/65535/52738589846_0158b4f28c_w.jpg',['SE_CONG','S_HAD','SE_GUA'],false)
const Kerry = new CS('Kerry','KER','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','TERRA','11/03/2023','Completo','Caio Henrique',['Violência','Ação','Drama'],'https://live.staticflickr.com/65535/52739030508_e60672c0fd_w.jpg',['SE_GUA','SE_MR2'],false)
const OGFDM = new CS('O Glacial Fim do mundo','GFM','Cole Froz chega no planeta terra,e em poucas horas já causa problemas severos o suficiente para causar um apocalipse em todo o globo.','TERRA','14/03','COMPLETO','Caio Henrique',['Ação','Sci-Fi','Alternativo'],'https://live.staticflickr.com/65535/52748630855_758ce69294_n.jpg',['SE_GUA'],true)
Solos.push(Hades,Ciecon,Kerry,OGFDM)
module.exports = Solos