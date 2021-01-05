var app = new Vue({
  el: "#app",
  data() {
    return {
      showTable: false,
      cargandoMateriales: false,
      errorParsing: false,
      indexMateriales: 0,
      materialesMargenCantidad: [],
      showModal: false,
      // Variable para determinar en qué paso de la cotización me encuentro.
      page: 1,
      URLparametros: null,
      total_costo_diario_local: 0,
      variablesIndirectas: {
        horario_nocturno: 0,
        mano_obra: 0,
        distancia: 0,
        num_vueltas: 0,
        precio_gasolina: 15,
        herramientas: 0,
        scanner: 0,
        viaticos: 0,
        proyecto_riesgozo: 0,
        total_indirectos: 0,
        total_indirectos_usd: 0,
        tipo_cambio: 5,
        margen_a_aplicar: 6,
        miscelaneosPorcentaje: 0,
        miscelaneosMonto: 0,
        precioPartner: 0,
        archivoPartner: null,
      },
      DatosCotizador: {
        aprobada_por_SuperU: false,
        Cargo_del_ejecutivo: "Tortas y Boings Department",
        Cliente: "sd",
        Costo_final_partner: "0.00",
        Detalles_de_horas_extra: "Some text 2",
        Duraci_n_del_proyecto: 30,
        Fecha_de_expedici_n: "17-Nov-2020",
        Horas_extra: "0",
        ID: "3405770000000314032",
        ID_DATOS_COTIZADOR: "Cotizacion de testin anixter",
        Justificaci_n_de_horas_extra: "Some text",
        Justificaci_n_trabajo_de_noche: "",
        Nombre_ejecutivo: "ss",
        Propuesta_Word: "",
        Proyectoid: "",
        Trabajo_de_noche: "",
        clientes_in: "",
        lista_de_materiales: "3405770000000249012",
        nombre_de_cotizacion: "Cotizacion de testin anixter",
        proyectos: "Instalación de Cámaras",
        status: "",
        // AÑADIR ESTOS CAMPOS AL FORM DEL COTIZADOR
        horas_trabajo_nocturno: 0,
      },
      datosInternos: {
        // Variables nuevas
        UTILIDAD_PORCENTAJE: 0,
        INDIRECTOS_USD: 0,
        CUANTOS_SUPERVISOR: 2,
        CUANTOS_TECNICO: 0,
        DIARIO_UNI_SUPERVISOR: 10,
        DIARIO_UNI_TECNICO: 0,
        MES_UNI_SUPERVISOR: 16000,
        MES_UNI_TECNICO: 12000,
        TOTAL_COSTO_DIARIO_SUPERVISOR: 0,
        TOTAL_COSTO_DIARIO_TECNICO: 0,
        TOTAL_COSTO_AMBOS: 0,
        MO_FLAT_MXN: 0,
        MO_CON_IMPUESTOS: 0,
        MO: 0,
        MO_CON_MARGEN: 0,
        MO_CON_MARGEN_MXN: 0,
        // Campo para el total_u
        SUMA_COSTOS_TOTALES: 0,
        VARIABLE_INDIRECTA_HORARIO_NOCTURNO: 0,
        VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL: 0,
        VARIABLE_INDIRECTA_DISTANCIA: 0,
        VARIABLE_INDIRECTA_NUM_VUELTA: 0,
        VARIABLE_INDIRECTA_PRECIO_GASOLINA: 0,
        VARIABLE_INDIRECTA_HERRAMIENTAS: 0,
        VARIABLE_INDIRECTA_SCANNER: 0,
        VARIABLE_INDIRECTA_VIATICOS: 0,
        VARIABLE_INDIRECTA_USO_VEHICULO: 0,
        VARIABLE_INDIRECTA_PROYECTO_RIESGOZO: 0,
        VARIABLE_INDIRECTA_TIPO_CAMBIO: 0,
        VARIABLE_INDIRECTA_MARGEN_APLICAR: 0,
        VARIABLE_INDIRECTA_MISCELANEOS_MONTO: 0,
        VARIABLE_INDIRECTA_MISCELANEOS_PORCENTAJE: 0,
        VARIABLE_INDIRECTA_COSTO_PARTNER: 0,
        // Variables nuevas
        DETALLES_NUMERO_PAGINAS: `DETALLES_NUMERO_PAGINAS}`,
        COTIZACION_INTERNA_MANO_OBRA_VS_INDIRECTOS: 0,
        // ID_DATOS_COTIZADOR_REPORT: `ID_DATOS_COTIZADOR_REPORT}`,
        COTIZACION_INTERNA_UTILIDAD: 0,
        DETALLES_TOTAL_COTA_MAYOR: 0,
        DETALLES_TOTAL_COTA_MAYOR_MXN: 0,
        // Cambiar nombre a DETALLES_IMPORTE_TOTAL
        SUMA_IMPORTES_TOTALES: 0,
        ID: "3405770000000292048",
        DETALLES_FECHA: `DETALLES_FECHA}`,
        DETALLES_EMPRESA: `DETALLES_EMPRESA}`,
        COTIZACION_INTERNA_MANO_OBRA: 0,
        DETALLES_PUESTO: `DETALLES_PUESTO}`,
        ID_COTIZACION: "testing daniel anixter",
        DETALLES_TELEFONOS: `DETALLES_TELEFONOS}`,
        DETALLES_NUMERO_PARTIDAS: `DETALLES_NUMERO_PARTIDAS}`,
        DETALLES_PROYECTO: `DETALLES_PROYECTO}`,
        DETALLES_FAX: `DETALLES_FAX}`,
        DETALLES_NOMBRE_COTIZACION: `3405770000000292048`,
        DETALLES_TIPO_MONEDA: "Dólares",
        COTIZACION_INTERNA_INDIRECTOS: 0,
        COTIZACION_INTERNA_MATERIALES: 0,
        COTIZACION_INTERNA_MANO_OBRA_VS_MATERIALES: 0,
        COTIZACION_INTERNA_PV_GLOBAL: 0,
        COTIZACION_INTERNA_COSTO_GLOBAL: `COTIZACION}`,
        COTIZACION_INTERNA_MARGEN_GLOBAL: 37,
        DETALLES_TIEMPO_ENTREGA: `DETALLES_TIEMPO_ENTREGA}`,
        DETALLES_ATENCION: `DETALLES_ATENCION}`,
        DETALLES_LUGAR_ENTREGA: `DETALLES_LUGAR_ENTREGA}`,
      },
      listaDeMateriales: [
        {
          // NUEVAS VARIABLES
          // Esta variable es la de costo por instalacion
          costo_por_pieza_comprada: 0,
          // NUEVAS VARIABLES
          costo_instalacion: 10,
          costo_total: 0,
          costo_u: 190.14,
          costo_unidad: 3,
          descripcion: `STANDARD RACK, 19"W X 7'H, 45 RMU, SOPORTA 1,000 LB (452 KG)`,
          margen_individual: 0,
          precio_lista: 0,
          pv_total: 0,
          pv_unitario: 260.49,
          unidad: "Pzas. ",
          pv_sugerido: 0,
          cantidad_de_piezas: 3,
          importe: 0,
        },
        {
          // NUEVAS VARIABLES
          costo_por_pieza_comprada: 10.5,
          // NUEVAS VARIABLES
          costo_instalacion: 10,
          costo_total: 0,
          costo_u: 49.85,
          costo_unidad: 0,
          descripcion:
            "ORGANIZADOR HORIZONTAL VELOCITY SENCILLO 19 1UR 13930-701",
          margen_individual: 0,
          precio_lista: 0,
          pv_total: 0,
          pv_unitario: 68.29,
          unidad: "Pzas. ",
          pv_sugerido: 10.5,
          cantidad_de_piezas: 22,
          importe: 0,
        },
        {
          // NUEVAS VARIABLES
          costo_por_pieza_comprada: 0,
          // NUEVAS VARIABLES
          costo_instalacion: 0,
          costo_total: 0,
          costo_u: 137.0,
          costo_unidad: 0,
          descripcion: "INSTALACIÓN Y PUESTA EN OPERACIÓN",
          margen_individual: 0,
          precio_lista: 0,
          pv_total: 0,
          pv_unitario: 0,
          unidad: "Srv.",
          pv_sugerido: 0,
          cantidad_de_piezas: 1,
          importe: 0,
        },
        {
          // NUEVAS VARIABLES
          costo_por_pieza_comprada: 0,
          // NUEVAS VARIABLES
          costo_instalacion: 0,
          costo_total: 0,
          costo_u: 0,
          costo_unidad: 0,
          descripcion: "MISCELÁNEOS",
          margen_individual: 0,
          precio_lista: 0,
          pv_total: 0,
          pv_unitario: 0,
          unidad: "Srv.",
          pv_sugerido: 0,
          cantidad_de_piezas: 1,
          importe: 0,
        },
      ],
    };
  },

  methods: {
    descargaExcel() {
      // // debugger;
      // instancia de workbook
      let dataVar = this.$data;
      const workbook = new ExcelJS.Workbook();
      workbook.created = new Date();
      workbook.modified = new Date();
      const worksheet = workbook.addWorksheet("Principal", {});
      worksheet.columns = [
        { font: { bold: true }, width: 30 },
        { width: 30 },
        { width: 30 },
      ];
      // Add a couple of Rows by key-value, after the last current row, using the column keys
      for (const key in dataVar) {
        if (key == "listaDeMateriales") continue;
        if (`${dataVar[key]}` == "[object Object]") {
          let flag = 0;
          for (const innerKey in dataVar[key]) {
            if (flag == 0) {
              flag = 1;
              worksheet.addRow([
                `${key}`,
                `${innerKey}`,
                `${dataVar[key][innerKey]}`,
              ]);
            } else {
              worksheet.addRow([
                "",
                `${innerKey}`,
                `${dataVar[key][innerKey]}`,
              ]);
            }
          }
        } else {
          worksheet.addRow([`${key}`, `${dataVar[key]}`]);
        }
      }
      const matSheet = workbook.addWorksheet("Lista de Materiales", {});
      matSheet.columns = [{ width: 30 }, { width: 30 }, { width: 30 }];
      this.listaDeMateriales.forEach(function (item, index) {
        flag = 0;
        for (const key in item) {
          if (flag == 0) {
            flag = 1;
            matSheet.addRow([`${index}`, `${key}`, `${item[key]}`]);
          } else {
            matSheet.addRow(["", `${key}`, `${item[key]}`]);
          }
        }
      });
      workbook.xlsx.writeBuffer().then(function (data) {
        var blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(blob, "fileName.xlsx");
      });
    },

    // coloca los valores de la mano de otra en la lista de materiales
    setManoObraneMateriales() {
      elementoMO = this.listaDeMateriales[this.listaDeMateriales.length - 1];
      elementoMO.importe = this.datosInternos.MO;
      //       console.log(this.datosInternos.MO);
      //       console.log(elementoMO);
    },

    // flujo
    // actualizaEstado() {
    //   this.getPrecioLista();
    //   // Actualiza el total
    //   this.calculaCostoTotalInterno();
    //   this.getCostoTotal();
    //   this.calculaMateriales();
    //   this.getImporteTotal();
    //   this.calculaCotaMayor();
    //   this.cotaMayorMXN();
    //   this.calcula_pv_total();
    //   this.calculaMOvsMateriales();
    //   this.getUtilidadPorcentaje();
    //   this.calculaMOvsIndirectos();
    // },

    setMargenGlobal() {
      for (let index = 0; index < this.listaDeMateriales.length - 2; index++) {
        const element = this.listaDeMateriales[index];
        element.margen_individual = this.datosInternos.COTIZACION_INTERNA_MARGEN_GLOBAL;
      }
    },

    // Flujo para generar las cotizaciones
    // 1. Obtener la lista de materiales.
    // 2. Generar la tabla con esos materiales
    // 3. Rellenar los datos internos y de mano de obra.
    // 4. Add user interaction with modified values.

    generaCotizacion() {
      this.cargandoMateriales = true;
      this.DatosCotizador = [];
      ZOHO.CREATOR.init().then((data) => {
        // 1. Obtengo los parametros de la pagina. Solo el id del cotizador.
        let queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
        this.URLparametros = queryParams;

        // 2. Obtengo los datos del proyecto de Cotizador
        let proyectoconfig = {
          reportName: "Cotizador2_Report",
          id: this.URLparametros.id_cotizador,
        };

        ZOHO.CREATOR.API.getRecordById(proyectoconfig).then((response) => {
          //callback block
          this.DatosCotizador = response.data;
          //           console.log(response.data);
          // 3. get Datos del proyecto
          this.getDatosCotizacionInterna(
            // this.DatosCotizador.ID_DATOS_COTIZADOR
            this.DatosCotizador.nombre_de_cotizacion
          );
          // 4. get lista de materiales
          this.getMateriales(this.DatosCotizador.id_lista_materiales);
        });
      });
    },

    getDatosCotizacionInterna(ID_datos) {
      ZOHO.CREATOR.init().then((data) => {
        // 2. Obtengo los datos del proyecto de Cotizador
        let proyectoconfig = {
          reportName: "Datos_Cotizador_Report",
          criteria: `(ID_COTIZACION == "${ID_datos.trimEnd()}")`,
          page: 1,
          pageSize: 10,
        };

        ZOHO.CREATOR.API.getAllRecords(proyectoconfig).then((response) => {
          // console.log(response.data[0]);

          try {
            this.materialesMargenCantidad = JSON.parse(
              response.data[0].Datos_json
            );
          } catch (e) {
            this.errorParsing = true;
          }

          //           if( = JSON.parse(
          //             response.data[0].Datos_json
          //           ) ==){

          //           }

          this.datosInternos = response.data[0];

          // this.datosInternos.MES_UNI_SUPERVISOR = 16000;
          // this.datosInternos.MES_UNI_TECNICO = 12000;

          this.DatosCotizador.Duraci_n_del_proyecto = this.datosInternos.Duraci_n_del_proyecto;
          this.variablesIndirectas.viaticos = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_VIATICOS
          );
          this.variablesIndirectas.horario_nocturno = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_HORARIO_NOCTURNO
          );
          this.variablesIndirectas.mano_obra = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL
          );
          this.variablesIndirectas.distancia = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_DISTANCIA
          );
          this.variablesIndirectas.num_vueltas = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_NUM_VUELTA
          );
          this.variablesIndirectas.precio_gasolina = 15;
          this.variablesIndirectas.herramientas = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_HERRAMIENTAS
          );
          this.variablesIndirectas.scanner = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_SCANNER
          );
          this.variablesIndirectas.proyecto_riesgozo = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_PROYECTO_RIESGOZO
          );

          this.variablesIndirectas.tipo_cambio = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_TIPO_CAMBIO
          );
          this.variablesIndirectas.margen_a_aplicar = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_MARGEN_APLICAR
          );
          this.variablesIndirectas.miscelaneosMonto = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_MISCELANEOS_MONTO
          );
          this.variablesIndirectas.miscelaneosPorcentaje = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_MISCELANEOS_PORCENTAJE
          );
          this.variablesIndirectas.precioPartner = parseInt(
            this.datosInternos.VARIABLE_INDIRECTA_COSTO_PARTNER
          );

          this.datosInternos.DETALLES_NOMBRE_COTIZACION = this.DatosCotizador.ID;
          this.datosInternos.DETALLES_ATENCION = this.DatosCotizador.Nombre_ejecutivo;
          this.datosInternos.DETALLES_PUESTO = this.DatosCotizador.Cargo_del_ejecutivo;

          setTimeout(() => {
            if (!this.errorParsing) {
              this.listaDeMateriales.forEach((element) => {
                let match = this.materialesMargenCantidad.filter((obj) => {
                  return obj.descripcion == element.descripcion;
                });
                element.cantidad_de_piezas = parseInt(match[0].piezas);
                element.margen_individual = parseFloat(match[0].margen);
              });
            }

            let objetoMO = {};
            objetoMO.unidad = "Srv.";
            objetoMO.descripcion = "INSTALACIÓN Y PUESTA EN OPERACIÓN";
            objetoMO.precio_lista = 0;
            objetoMO.costo_unidad = 0;
            objetoMO.costo_instalacion = 0;
            objetoMO.pv_sugerido = 0;
            objetoMO.costo_u = 0;
            objetoMO.costo_total = 0;
            objetoMO.margen_individual = 0;
            objetoMO.pv_unitario = 0;
            objetoMO.pv_total = 0;
            objetoMO.cantidad_de_piezas = 1;
            objetoMO.importe = 0;
            this.listaDeMateriales.push(objetoMO);
            //
            let objetoMiscelaneos = {};
            objetoMiscelaneos.unidad = "Srv.";
            objetoMiscelaneos.descripcion = "MISCELÁNEOS";
            objetoMiscelaneos.precio_lista = 0;
            objetoMiscelaneos.costo_unidad = 0;
            objetoMiscelaneos.costo_instalacion = 0;
            objetoMiscelaneos.pv_sugerido = 0;
            // aqui vale pondra el id del material entonces nuevo los indices en 1
            objetoMiscelaneos.costo_u = 0;
            objetoMiscelaneos.costo_total = 0;
            objetoMiscelaneos.margen_individual = 0;
            objetoMiscelaneos.pv_unitario = 0;
            objetoMiscelaneos.pv_total = 0;
            objetoMiscelaneos.cantidad_de_piezas = 1;
            objetoMiscelaneos.importe = 0;
            this.listaDeMateriales.push(objetoMiscelaneos);

            this.flujoGeneral();
            this.cargandoMateriales = false;
            this.showTable = !this.showTable;
          }, 5000);
        });
      });
    },

    getMateriales(ID_materiales) {
      this.listaDeMateriales = [];
      // Config file to get materiales
      var lista_de_materiales_config = {
        reportName: "Lista_de_Materiales_Report",
        criteria: `(ID == ${BigInt(ID_materiales)})`,
        // criteria: `(nombre_clave_lista_materiales == ${ID_materiales})`,
        page: 1,
        pageSize: 10,
      };

      ZOHO.CREATOR.init().then((data) => {
        ZOHO.CREATOR.API.getAllRecords(lista_de_materiales_config).then(
          async (response) => {
            // Declaro variables
            let materialesIDS = [];
            let promesasDeMateriales = [];

            // Funcion para traer un material por id
            let getMaterialIndividual = (id) => {
              let config = {
                reportName: "Materiales_Report",
                criteria: `nombre == "${id}"`,
                page: "1",
                pageSize: "1",
              };
              ZOHO.CREATOR.API.getAllRecords(config).then((response) => {
                // console.log(response.data[0]);
                let tempObjetoMaterial = {};
                tempObjetoMaterial.unidad = response.data[0].unidad;
                tempObjetoMaterial.descripcion = response.data[0].nombre;
                tempObjetoMaterial.precio_lista = parseFloat(
                  response.data[0].precio_lista
                );
                tempObjetoMaterial.costo_unidad = parseFloat(
                  response.data[0].Costo_Unitario
                );
                tempObjetoMaterial.costo_instalacion = parseFloat(
                  response.data[0].COSTO_INSTALACION_UNIDAD
                );
                tempObjetoMaterial.pv_sugerido = parseFloat(
                  response.data[0].precio_venta
                );
                tempObjetoMaterial.costo_u = tempObjetoMaterial.costo_unidad;
                tempObjetoMaterial.costo_total = 1;
                tempObjetoMaterial.pv_unitario = parseFloat(
                  response.data[0].precio_lista
                );
                tempObjetoMaterial.pv_total = 1;
                tempObjetoMaterial.importe = 0;

                tempObjetoMaterial.cantidad_de_piezas = 1;
                tempObjetoMaterial.margen_individual = 0;
                this.listaDeMateriales.push(tempObjetoMaterial);
              });
            };

            // array de promesas
            response.data[0].agregar_material.forEach((element) => {
              materialesIDS.push(element.display_value);
            });

            materialesIDS.map((idm) => {
              promesasDeMateriales.push(getMaterialIndividual(idm));
            });

            await Promise.all(promesasDeMateriales)
              .then(() => {
                console.log(this.listaDeMateriales);
              })
              .catch((e) => {
                console.log(`Error in ${e}`);
                alert("Ocurrió un error del servidor.");
              });

            // // console.log(response.data);
            // response.data[0].SubForm.forEach((element) => {
            //   let splittedMaterial = element.display_value.split("?=");
            //   let objetoMaterial = {};
            //   objetoMaterial.unidad = splittedMaterial[0];
            //   objetoMaterial.descripcion = splittedMaterial[1];
            //   objetoMaterial.precio_lista = parseInt(splittedMaterial[2]);
            //   objetoMaterial.costo_unidad = parseInt(splittedMaterial[3]);
            //   objetoMaterial.costo_instalacion = parseInt(splittedMaterial[4]);
            //   objetoMaterial.pv_sugerido = parseInt(splittedMaterial[5]);
            //   // aqui vale pondra el id del material entonces nuevo los indices en 1
            //   objetoMaterial.costo_u = parseInt(splittedMaterial[7]);
            //   objetoMaterial.costo_total = parseInt(splittedMaterial[8]);
            //   objetoMaterial.margen_individual = parseInt(splittedMaterial[9]);
            //   objetoMaterial.pv_unitario = parseInt(splittedMaterial[10]);
            //   objetoMaterial.pv_total = parseInt(splittedMaterial[11]);
            //   objetoMaterial.cantidad_de_piezas = parseInt(
            //     splittedMaterial[12]
            //   );
            //   objetoMaterial.importe = parseInt(splittedMaterial[13]);
            //   this.listaDeMateriales.push(objetoMaterial);
            // });
          }
        );
      });
    },

    getJsonMateriales() {
      let materialesValores = [];

      for (let index = 0; index < this.listaDeMateriales.length - 2; index++) {
        const element = this.listaDeMateriales[index];
        let materialTemp = {};
        materialTemp.descripcion = element.descripcion;
        materialTemp.piezas = element.cantidad_de_piezas;
        materialTemp.margen = element.margen_individual;
        materialesValores.push(materialTemp);
      }

      return JSON.stringify(materialesValores);
    },

    updateField() {
      // convertir de nuevo las listas de materiales a JSON
      this.datosInternos.Datos_json = this.getJsonMateriales();
      //
      this.datosInternos.VARIABLE_INDIRECTA_TIPO_CAMBIO = this.variablesIndirectas.tipo_cambio;
      this.datosInternos.VARIABLE_INDIRECTA_MARGEN_APLICAR = this.variablesIndirectas.margen_a_aplicar;
      this.datosInternos.VARIABLE_INDIRECTA_MISCELANEOS_MONTO = this.variablesIndirectas.miscelaneosMonto;
      this.datosInternos.VARIABLE_INDIRECTA_MISCELANEOS_PORCENTAJE = this.variablesIndirectas.miscelaneosPorcentaje;
      this.datosInternos.VARIABLE_INDIRECTA_COSTO_PARTNER = this.variablesIndirectas.precioPartner;
      this.datosInternos.VARIABLE_INDIRECTA_HORARIO_NOCTURNO = this.variablesIndirectas.horario_nocturno;
      this.datosInternos.VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL = this.variablesIndirectas.mano_obra;
      this.datosInternos.VARIABLE_INDIRECTA_DISTANCIA = this.variablesIndirectas.distancia;
      this.datosInternos.VARIABLE_INDIRECTA_NUM_VUELTA = this.variablesIndirectas.num_vueltas;
      this.datosInternos.VARIABLE_INDIRECTA_PRECIO_GASOLINA = this.variablesIndirectas.precio_gasolina;
      this.datosInternos.VARIABLE_INDIRECTA_HERRAMIENTAS = this.variablesIndirectas.herramientas;
      this.datosInternos.VARIABLE_INDIRECTA_SCANNER = this.variablesIndirectas.scanner;
      this.datosInternos.VARIABLE_INDIRECTA_VIATICOS = this.variablesIndirectas.viaticos;
      this.datosInternos.VARIABLE_INDIRECTA_PROYECTO_RIESGOZO = this.variablesIndirectas.proyecto_riesgozo;

      formData = {
        // RENOMBRAR COTIZACIO INTERNA TOTAL A SUMA DE COSTOS TOTALES

        // renombrar SUMA_IMPORTES_TOTALES a suma de importes total
        data: {
          ID: `${this.datosInternos.ID}`,
          DETALLES_FECHA: `${this.datosInternos.DETALLES_FECHA}`,
          DETALLES_EMPRESA: `${this.datosInternos.DETALLES_EMPRESA}`,
          DETALLES_PUESTO: `${this.datosInternos.DETALLES_PUESTO}`,
          DETALLES_TELEFONOS: `${this.datosInternos.DETALLES_TELEFONOS}`,
          DETALLES_PROYECTO: `${this.datosInternos.DETALLES_PROYECTO}`,
          DETALLES_FAX: `${this.datosInternos.DETALLES_FAX}`,
          COTIZACION_INTERNA_MARGEN_GLOBAL: `${this.datosInternos.COTIZACION_INTERNA_MARGEN_GLOBAL}`,
          DETALLES_TIEMPO_ENTREGA: `${this.datosInternos.DETALLES_TIEMPO_ENTREGA}`,
          DETALLES_ATENCION: `${this.datosInternos.DETALLES_ATENCION}`,
          DETALLES_LUGAR_ENTREGA: `${this.datosInternos.DETALLES_LUGAR_ENTREGA}`,
          CUANTOS_SUPERVISOR: `${this.datosInternos.CUANTOS_SUPERVISOR}`,
          CUANTOS_TECNICO: `${this.datosInternos.CUANTOS_TECNICO}`,
          VARIABLE_INDIRECTA_HORARIO_NOCTURNO: `${this.datosInternos.VARIABLE_INDIRECTA_HORARIO_NOCTURNO}`,
          VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL: `${this.datosInternos.VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL}`,
          VARIABLE_INDIRECTA_DISTANCIA: `${this.datosInternos.VARIABLE_INDIRECTA_DISTANCIA}`,
          VARIABLE_INDIRECTA_NUM_VUELTA: `${this.datosInternos.VARIABLE_INDIRECTA_NUM_VUELTA}`,
          VARIABLE_INDIRECTA_PRECIO_GASOLINA: `${this.datosInternos.VARIABLE_INDIRECTA_PRECIO_GASOLINA}`,
          VARIABLE_INDIRECTA_HERRAMIENTAS: `${this.datosInternos.VARIABLE_INDIRECTA_HERRAMIENTAS}`,
          VARIABLE_INDIRECTA_SCANNER: `${this.datosInternos.VARIABLE_INDIRECTA_SCANNER}`,
          VARIABLE_INDIRECTA_VIATICOS: `${this.datosInternos.VARIABLE_INDIRECTA_VIATICOS}`,
          VARIABLE_INDIRECTA_PROYECTO_RIESGOZO: `${this.datosInternos.VARIABLE_INDIRECTA_PROYECTO_RIESGOZO}`,
          VARIABLE_INDIRECTA_TIPO_CAMBIO: `${this.datosInternos.VARIABLE_INDIRECTA_TIPO_CAMBIO}`,
          VARIABLE_INDIRECTA_MARGEN_APLICAR: `${this.datosInternos.VARIABLE_INDIRECTA_MARGEN_APLICAR}`,
          VARIABLE_INDIRECTA_MISCELANEOS_MONTO: `${this.datosInternos.VARIABLE_INDIRECTA_MISCELANEOS_MONTO}`,
          VARIABLE_INDIRECTA_MISCELANEOS_PORCENTAJE: `${this.datosInternos.VARIABLE_INDIRECTA_MISCELANEOS_PORCENTAJE}`,
          VARIABLE_INDIRECTA_COSTO_PARTNER: `${this.datosInternos.VARIABLE_INDIRECTA_COSTO_PARTNER}`,
          Datos_json: `${this.datosInternos.Datos_json}`,
        },
      };

      ZOHO.CREATOR.init().then((data) => {
        var config = {
          reportName: "Datos_Cotizador_Report",
          // Aqui el error es el id
          id: `${this.datosInternos.ID}`,
          data: formData,
        };

        //update record API
        ZOHO.CREATOR.API.updateRecord(config).then(function (response) {
          //callback block
          console.log(response);
          if (response.code == 3000) {
            alert("Guardado con exito.");
          } else {
            alert("Error de servidor, intenta de nuevo.");
          }
        });
      });
    },

    // segunda vista   ----------------------------------------------------------------------------

    // tercera vista   ----------------------------------------------------------------------------

    // Flujo de calculo varibles
    // 1. Materiales
    flujoGeneral() {
      // Lista de materiales
      let localCostoTotal = 0;
      this.listaDeMateriales.forEach((element) => {
        if (
          element.descripcion == "INSTALACIÓN Y PUESTA EN OPERACIÓN" ||
          element.descripcion == "MISCELÁNEOS"
        ) {
        } else {
          element.costo_total = element.cantidad_de_piezas * element.costo_u;
          element.precio_lista =
            element.costo_u * (1 + element.margen_individual / 100);
          element.pv_total =
            element.costo_total * (1 + element.margen_individual / 100);
          element.importe = element.pv_total;
        }
      });
      // Miscelaneos
      let localMiscelaneos = this.listaDeMateriales[
        this.listaDeMateriales.length - 1
      ];
      localMiscelaneos.precio_lista =
        this.variablesIndirectas.miscelaneosMonto *
        (1 + this.variablesIndirectas.miscelaneosPorcentaje / 100);
      localMiscelaneos.importe = localMiscelaneos.precio_lista;
      localMiscelaneos.margen_individual = this.variablesIndirectas.miscelaneosPorcentaje;
      localMiscelaneos.costo_u = this.variablesIndirectas.miscelaneosMonto;
      localMiscelaneos.costo_total = this.variablesIndirectas.miscelaneosMonto;

      // Mano de obra
      this.datosInternos.DIARIO_UNI_SUPERVISOR =
        this.datosInternos.MES_UNI_SUPERVISOR / 30;

      this.datosInternos.DIARIO_UNI_TECNICO =
        this.datosInternos.MES_UNI_TECNICO / 30;

      this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR =
        this.datosInternos.DIARIO_UNI_SUPERVISOR *
        this.datosInternos.CUANTOS_SUPERVISOR;

      this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO =
        this.datosInternos.DIARIO_UNI_TECNICO *
        this.datosInternos.CUANTOS_TECNICO;

      // MO_FLAT en pesos mexicanos
      this.datosInternos.MO_FLAT_MXN =
        (this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR +
          this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO) *
        this.DatosCotizador.Duraci_n_del_proyecto;

      this.total_costo_diario_local =
        this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR +
        this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO;

      this.datosInternos.MO_CON_IMPUESTOS =
        this.datosInternos.MO_FLAT_MXN * 1.3;

      // INDIRECTOS
      const KmLitro = 7.5;

      this.variablesIndirectas.total_indirectos =
        (parseInt(this.variablesIndirectas.horario_nocturno) / 100 +
          parseInt(this.variablesIndirectas.mano_obra) / 100 +
          parseInt(this.variablesIndirectas.herramientas) / 100 +
          parseInt(this.variablesIndirectas.proyecto_riesgozo) / 100) *
          parseInt(this.datosInternos.MO_CON_IMPUESTOS) +
        ((parseInt(this.variablesIndirectas.distancia) *
          parseInt(this.variablesIndirectas.precio_gasolina)) /
          KmLitro) *
          2 *
          parseInt(this.variablesIndirectas.num_vueltas) +
        parseInt(this.variablesIndirectas.viaticos);

      // MANOS
      this.datosInternos.MO =
        parseInt(this.variablesIndirectas.total_indirectos) +
        this.datosInternos.MO_CON_IMPUESTOS +
        parseInt(this.variablesIndirectas.precioPartner);

      this.datosInternos.MO_CON_MARGEN =
        this.datosInternos.MO *
          (1 + this.variablesIndirectas.margen_a_aplicar / 100) +
        this.variablesIndirectas.precioPartner;

      this.datosInternos.MO_CON_MARGEN_MXN =
        this.datosInternos.MO *
          (1 + this.variablesIndirectas.margen_a_aplicar / 100) +
        this.variablesIndirectas.precioPartner;

      // Instalacion y puesta de la tabla de inicio
      let localInstalacion = this.listaDeMateriales[
        this.listaDeMateriales.length - 2
      ];

      localInstalacion.margen_individual = this.variablesIndirectas.margen_a_aplicar;
      localInstalacion.costo_u =
        this.datosInternos.MO / this.variablesIndirectas.tipo_cambio;
      localInstalacion.costo_total =
        this.datosInternos.MO / this.variablesIndirectas.tipo_cambio;
      // localInstalacion.importe =
      //   localInstalacion.costo_u *
      //   (1 + this.variablesIndirectas.margen_a_aplicar / 100);
      // localInstalacion.precio_lista = localInstalacion.costo_u;
      localInstalacion.importe =
        this.datosInternos.MO_CON_MARGEN / this.variablesIndirectas.tipo_cambio;
      localInstalacion.precio_lista =
        this.datosInternos.MO_CON_MARGEN / this.variablesIndirectas.tipo_cambio;

      // sumar Total importe y total costos totales
      this.datosInternos.SUMA_COSTOS_TOTALES = 0;
      this.datosInternos.SUMA_IMPORTES_TOTALES = 0;
      this.listaDeMateriales.forEach((element) => {
        this.datosInternos.SUMA_COSTOS_TOTALES =
          this.datosInternos.SUMA_COSTOS_TOTALES +
          parseInt(element.costo_total);
        this.datosInternos.SUMA_IMPORTES_TOTALES =
          this.datosInternos.SUMA_IMPORTES_TOTALES + parseInt(element.importe);
      });

      // Calcula utilidad
      this.datosInternos.COTIZACION_INTERNA_UTILIDAD = 0;
      this.datosInternos.COTIZACION_INTERNA_UTILIDAD =
        this.datosInternos.SUMA_IMPORTES_TOTALES -
        this.datosInternos.SUMA_COSTOS_TOTALES;
      this.datosInternos.UTILIDAD_PORCENTAJE = 0;
      let tempDivision =
        parseInt(this.datosInternos.SUMA_COSTOS_TOTALES) /
        parseInt(this.datosInternos.SUMA_IMPORTES_TOTALES);

      this.datosInternos.UTILIDAD_PORCENTAJE = (1 - tempDivision) * 100;

      //Indirectos
      this.variablesIndirectas.total_indirectos_usd =
        (this.variablesIndirectas.total_indirectos *
          (1 + this.variablesIndirectas.margen_a_aplicar / 100)) /
        this.variablesIndirectas.tipo_cambio;

      // mano obra
      this.datosInternos.COTIZACION_INTERNA_MANO_OBRA =
        localInstalacion.importe -
        this.variablesIndirectas.total_indirectos_usd;

      // materiales
      this.datosInternos.COTIZACION_INTERNA_MATERIALES =
        this.datosInternos.SUMA_IMPORTES_TOTALES - localInstalacion.importe;
      // MO vs materiales
      this.datosInternos.COTIZACION_INTERNA_MANO_OBRA_VS_MATERIALES =
        this.variablesIndirectas.total_indirectos_usd /
        this.datosInternos.COTIZACION_INTERNA_MATERIALES;

      // mo vs indirectos
      this.datosInternos.COTIZACION_INTERNA_MANO_OBRA_VS_INDIRECTOS =
        this.variablesIndirectas.total_indirectos_usd /
        this.datosInternos.COTIZACION_INTERNA_MANO_OBRA;
    },

    cargaJustificacionPartner() {
      // console.log(this.$refs.filePartner.files[0]);

      // let filePartner = e.target.files[0];
      let filePartner = this.$refs.filePartner.files[0];

      var config = {
        // reportName: "Datos_Cotizador_Report",
        reportName: "Cotizador2_Report",
        id: this.DatosCotizador.ID,
        fieldName: "Propuesta_Word",
        file: filePartner,
      };

      ZOHO.CREATOR.API.uploadFile(config).then(function (response) {
        if (response.code == 3000) {
          alert("Archivo cargado exitosamente");
        } else {
          alert("Ocurrió un error en servidor, intenta de nuevo.");
        }
      });
    },

    descargarFile() {
      $.ajax({
        url:
          "https://creator.zoho.com/api/v2/integsa/superappintegsa/report/Datos_Cotizador_Report/3405770000000423002/Propuesta_Word/download",
        type: "GET",
        beforeSend: function (xhr) {
          xhr.setRequestHeader(
            "auth_connection",
            "Zoho-oauthtoken 1000.f6f8f7eb4b7e40de93202334cb593e65.19f24d7a8b54df30c6ed6949e3a12fc4"
          );
        },

        success: function (data) {
          // alert(data);
          // console.log(data);
          //process the JSON data etc
        },
      });
    },

    // aprobarCotizacion() {
    //   // this.DatosCotizador.aprobada_por_SuperU = !this.DatosCotizador
    //   //   .aprobada_por_SuperU;

    //   formData = {
    //     data: {
    //       fecha_aprobada: `${Date.now()}`,
    //       aprobada_por_SuperU: "true",
    //     },
    //   };

    //   ZOHO.CREATOR.init().then((data) => {
    //     var config = {
    //       reportName: "Cotizador2_Report",
    //       // Aqui el error es el id
    //       id: `${this.DatosCotizador.ID}`,
    //       data: formData,
    //     };

    //     //update record API
    //     ZOHO.CREATOR.API.updateRecord(config).then((response) => {
    //       //callback block
    //       console.log(response);
    //       if (response.code == 3000) {
    //         alert("Guardado con exito.");
    //         this.DatosCotizador.aprobada_por_SuperU = true;
    //       } else {
    //         alert("Ocurrió un error en servidor, intenta de nuevo");
    //       }
    //     });
    //   });
    // },
  },
  mounted() {
    // this.calculaTotalCostoeImporte();
    // this.calculaCotaMayor();
    // this.cotaMayorMXN();
    // this.calcula_pv_total();
  },
  created() {
    this.$loading(true);
    ZOHO.CREATOR.init().then((data) => {
      // 1. Obtengo los parametros de la pagina. Solo el id del cotizador.
      let queryParams = ZOHO.CREATOR.UTIL.getQueryParams();

      if (queryParams.id_cotizador) {
        alert(
          "Cotización cargada, por favor da Click en 'Genera Tablas de Cotización' "
        );
      }
    });

    // this.actualizaEstado();
    // this.getPrecioLista();
  },
});
