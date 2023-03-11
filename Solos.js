let Solos = []

function CS(Nome,Ref,Desc,Local,Lancamento,Status,Escrito,Tags,Imgref,Associados) {
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
}
const Hades = new CS('Hades','HAD','Conheça profundamente a origem e os objetivos do Monstruoso e Soberano Demônio, que pretende dominar todo o universo com seu poder divino e maligno.','UNIVERSAL','10/03/2003','Completo','Caio Henrique',['Drama','Universal','Ação','Violência'],'https://live.staticflickr.com/65535/52739035768_37250eb886_n.jpg',["SE_CIEC","SE_CONG","SE_GUA"])
const Ciecon = new CS('Ciecon','CIEC','Leia a história origem difícil do justiceiro espacial, Ciecon. Que posteriormente avançou a jornada e se tornou o líder dos Congregadores.','UNIVERSAL','10/03/2003','Completo','Caio Henrique',['Drama','Universal','Sci-Fi'],'https://live.staticflickr.com/65535/52738589846_0158b4f28c_w.jpg',['SE_CONG','S_HAD','SE_GUA'])

Solos.push(Hades,Ciecon)
module.exports = Solos