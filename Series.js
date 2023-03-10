let Series = []

function CSe(Nome,Ref,Desc,Local,Lancamento,Status,Escrito,Tags,Imgref,Associados,Capitulos) {
this.Nome = Nome,
this.Tipo = "SOLO",
this.Ref = Ref,
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
module.exports = Series