const descripcion = {
    demand: true,
      alias: "d",
      desc: "Descripción de la tarea por hacer"
};
const completado = {
    default: true,
      alias: "c",
      desc: "Marca como completado/pendiente la tarea"
}

const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", {
    descripcion
  })
  .command("listar", "Imprime en consola las tareas por hacer")
  .command("actualizar", "Actualiza el estado completo de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Se borro una tarea", {
    descripcion
  })

  .help()
  .argv;

module.exports = {
  argv
}
