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
const Hades = new CS('Hades','HAD','Conheça profundamente a origem e os objetivos do Monstruoso e Soberano Demônio, que pretende dominar todo o universo com seu poder divino e maligno.','UNIVERSAL','j','Completo','Caio Henrique',['Drama','Universal','Ação','Violência'],'',["SE_CIEC","SE_CONG","SE_GUA"])
console.log('Hades:',Hades)
Solos.push(Hades)
module.exports = Solos