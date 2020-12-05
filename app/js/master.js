var app = new Vue({
  el: "#app",
  data() {
    return {
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
        misceleaneosPorcentaje: 0,
        misceleaneosMonto: 0,
        precioPartner: 0,
        archivoPartner: null,
      },
      DatosCotizador: {
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
        IMPORTE_MO: 0,
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
        COTIZACION_INTERNA_TOTAL: 0,
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
        // Variables nuevas
        DETALLES_NUMERO_PAGINAS: `DETALLES_NUMERO_PAGINAS}`,
        COTIZACION_INTERNA_MANO_OBRA_VS_INDIRECTOS: 0,
        ID_DATOS_COTIZADOR_REPORT: `ID_DATOS_COTIZADOR_REPORT}`,
        COTIZACION_INTERNA_UTILIDAD: 0,
        DETALLES_TOTAL_COTA_MAYOR: 0,
        DETALLES_TOTAL_COTA_MAYOR_MXN: 0,
        // Cambiar nombre a DETALLES_IMPORTE_TOTAL
        DETALLES_TOTAL_COTIZACION: 0,
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
      showTable: false,
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
          precio_lista: 137.0,
          pv_total: 0,
          pv_unitario: 137.0,
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
    updateTesty() {
      ZOHO.CREATOR.init().then((data) => {
        formData = {
          Testy_Report: [
            {
              textito: "inicial",
              ID: "3405770000000410003",
              fechita: "04-Dec-2020",
            },
          ],
        };

        var config = {
          reportname: "Testy_Report",
          id: "3405770000000410003",
          data: formData,
        };

        ZOHO.CREATOR.API.updateRecord(config).then(function (response) {
          if (response.code == 3000) {
            console.log("Record updated successfully");
          }
        });
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
    actualizaEstado() {
      this.getPrecioLista();
      // Actualiza el total
      this.calculaCostoTotalInterno();
      this.getCostoTotal();
      this.calculaMateriales();
      this.getImporteTotal();
      this.calculaCotaMayor();
      this.cotaMayorMXN();
      this.calcula_pv_total();
      this.calculaMOvsMateriales();
      this.getUtilidadPorcentaje();
      this.calculaMOvsIndirectos();
    },

    setMargenGlobal() {
      // this.listaDeMateriales.forEach((element) => {
      //   element.margen_individual = this.datosInternos.COTIZACION_INTERNA_MARGEN_GLOBAL;
      // });
      for (let index = 0; index < this.listaDeMateriales.length - 2; index++) {
        const element = this.listaDeMateriales[index];
        element.margen_individual = this.datosInternos.COTIZACION_INTERNA_MARGEN_GLOBAL;
      }
      this.actualizaEstado();
    },

    // Flujo para generar las cotizaciones
    // 1. Obtener la lista de materiales.
    // 2. Generar la tabla con esos materiales
    // 3. Rellenar los datos internos y de mano de obra.
    // 4. Add user interaction with modified values.

    generaCotizacion() {
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
          // 3. get lista de materiales
          this.getMateriales(this.DatosCotizador.lista_de_materiales);
          // $. get Datos del proyecto
          this.getDatosCotizacionInterna(
            this.DatosCotizador.ID_DATOS_COTIZADOR
          );
          // Coloco el ID del reporte Cotizador como el # de cotizacion
          this.DatosCotizador = this.DatosCotizador.ID;
        });
      });
    },

    getDatosCotizacionInterna(ID_datos) {
      ZOHO.CREATOR.init().then((data) => {
        // 2. Obtengo los datos del proyecto de Cotizador
        let proyectoconfig = {
          reportName: "Datos_Cotizador_Report",
          criteria: `(ID_COTIZACION == "${ID_datos}")`,
          page: 1,
          pageSize: 10,
        };

        ZOHO.CREATOR.API.getAllRecords(proyectoconfig).then((response) => {
          //           console.log(response.data);
          this.datosInternos = response.data[0];
          this.datosInternos.MES_UNI_SUPERVISOR = 16000;
          this.datosInternos.MES_UNI_TECNICO = 12000;
          this.showTable = !this.showTable;
        });
      });
    },

    getMateriales(ID_materiales) {
      this.listaDeMateriales = [];
      // Config file to get materiales
      var lista_de_materiales_config = {
        reportName: "Lista_de_Materiales_Report",
        criteria: `(ID == ${BigInt(ID_materiales)})`,
        page: 1,
        pageSize: 10,
      };

      ZOHO.CREATOR.init().then((data) => {
        ZOHO.CREATOR.API.getAllRecords(lista_de_materiales_config).then(
          (response) => {
            // console.log(response.data);
            response.data[0].SubForm.forEach((element) => {
              let splittedMaterial = element.display_value.split("?=");
              let objetoMaterial = {};
              objetoMaterial.unidad = splittedMaterial[0];
              objetoMaterial.descripcion = splittedMaterial[1];
              objetoMaterial.precio_lista = parseInt(splittedMaterial[2]);
              objetoMaterial.costo_unidad = parseInt(splittedMaterial[3]);
              objetoMaterial.costo_instalacion = parseInt(splittedMaterial[4]);
              objetoMaterial.pv_sugerido = parseInt(splittedMaterial[5]);
              // aqui vale pondra el id del material entonces nuevo los indices en 1
              objetoMaterial.costo_u = parseInt(splittedMaterial[7]);
              objetoMaterial.costo_total = parseInt(splittedMaterial[8]);
              objetoMaterial.margen_individual = parseInt(splittedMaterial[9]);
              objetoMaterial.pv_unitario = parseInt(splittedMaterial[10]);
              objetoMaterial.pv_total = parseInt(splittedMaterial[11]);
              objetoMaterial.cantidad_de_piezas = parseInt(
                splittedMaterial[12]
              );
              objetoMaterial.importe = parseInt(splittedMaterial[13]);
              this.listaDeMateriales.push(objetoMaterial);
            });
            let objetoMO = {};
            objetoMO.unidad = "Srv.";
            objetoMO.descripcion = "INSTALACIÓN Y PUESTA EN OPERACIÓN";
            objetoMO.precio_lista = 0;
            objetoMO.costo_unidad = 0;
            objetoMO.costo_instalacion = 0;
            objetoMO.pv_sugerido = 0;
            // aqui vale pondra el id del material entonces nuevo los indices en 1
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
            console.log(this.listaDeMateriales);
            this.actualizaEstado();
          }
        );
      });
    },

    updateField() {
      formData = {
        data: {
          DETALLES_NUMERO_PAGINAS: `${this.datosInternos.DETALLES_NUMERO_PAGINAS}`,
          COTIZACION_INTERNA_MANO_OBRA_VS_INDIRECTOS: `${this.datosInternos.COTIZACION_INTERNA_MANO_OBRA_VS_INDIRECTOS}`,
          ID_DATOS_COTIZADOR_REPORT: `${this.datosInternos.ID_DATOS_COTIZADOR_REPORT}`,
          COTIZACION_INTERNA_UTILIDAD: `${this.datosInternos.COTIZACION_INTERNA_UTILIDAD}`,
          DETALLES_TOTAL_COTA_MAYOR: `${this.datosInternos.DETALLES_TOTAL_COTA_MAYOR}`,
          DETALLES_TOTAL_COTIZACION: `${this.datosInternos.DETALLES_TOTAL_COTIZACION}`,
          ID: "3405770000000314030",
          DETALLES_FECHA: `${this.datosInternos.DETALLES_FECHA}`,
          DETALLES_EMPRESA: `${this.datosInternos.DETALLES_EMPRESA}`,
          COTIZACION_INTERNA_MANO_OBRA: `${this.datosInternos.COTIZACION_INTERNA_MANO_OBRA}`,
          DETALLES_PUESTO: `${this.datosInternos.DETALLES_PUESTO}`,
          ID_COTIZACION: "testing daniel anixter",
          DETALLES_TELEFONOS: `${this.datosInternos.DETALLES_TELEFONOS}`,
          DETALLES_NUMERO_PARTIDAS: `${this.datosInternos.DETALLES_NUMERO_PARTIDAS}`,
          DETALLES_PROYECTO: `${this.datosInternos.DETALLES_PROYECTO}`,
          DETALLES_FAX: `${this.datosInternos.DETALLES_FAX}`,
          DETALLES_NOMBRE_COTIZACION: `${this.datosInternos.DETALLES_NOMBRE_COTIZACION}`,
          DETALLES_TIPO_MONEDA: "Dólares",
          COTIZACION_INTERNA_INDIRECTOS: `${this.datosInternos.COTIZACION_INTERNA_INDIRECTOS}`,
          COTIZACION_INTERNA_MATERIALES: `${this.datosInternos.COTIZACION_INTERNA_MATERIALES}`,
          COTIZACION_INTERNA_MANO_OBRA_VS_MATERIALES: `${this.datosInternos.COTIZACION_INTERNA_MANO_OBRA_VS_MATERIALES}`,
          COTIZACION_INTERNA_PV_GLOBAL: `${this.datosInternos.COTIZACION_INTERNA_PV_GLOBAL}`,
          COTIZACION_INTERNA_COSTO_GLOBAL: `${this.datosInternos.COTIZACION}`,
          COTIZACION_INTERNA_MARGEN_GLOBAL: `${this.datosInternos.COTIZACION_INTERNA_MARGEN_GLOBAL}`,
          DETALLES_TIEMPO_ENTREGA: `${this.datosInternos.DETALLES_TIEMPO_ENTREGA}`,
          DETALLES_ATENCION: `${this.datosInternos.DETALLES_ATENCION}`,
          DETALLES_LUGAR_ENTREGA: `${this.datosInternos.DETALLES_LUGAR_ENTREGA}`,
          COTIZACION_INTERNA_TOTAL: `${this.datosInternos.COTIZACION_INTERNA_TOTAL}`,
          UTILIDAD_PORCENTAJE: `${this.datosInternos.UTILIDAD_PORCENTAJE}`,
          IMPORTE_MO: `${this.datosInternos.IMPORTE_MO}`,
          INDIRECTOS_USD: `${this.datosInternos.INDIRECTOS_USD}`,
          CUANTOS_SUPERVISOR: `${this.datosInternos.CUANTOS_SUPERVISOR}`,
          CUANTOS_TECNICO: `${this.datosInternos.CUANTOS_TECNICO}`,
          DIARIO_UNI_SUPERVISOR: `${this.datosInternos.DIARIO_UNI_SUPERVISOR}`,
          DIARIO_UNI_TECNICO: `${this.datosInternos.DIARIO_UNI_TECNICO}`,
          MES_UNI_SUPERVISOR: `${this.datosInternos.MES_UNI_SUPERVISOR}`,
          MES_UNI_TECNICO: `${this.datosInternos.MES_UNI_TECNICO}`,
          TOTAL_COSTO_DIARIO_SUPERVISOR: `${this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR}`,
          TOTAL_COSTO_DIARIO_TECNICO: `${this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO}`,
          TOTAL_COSTO_AMBOS: `${this.datosInternos.TOTAL_COSTO_AMBOS}`,
          MO_FLAT_MXN: `${this.datosInternos.MO_FLAT_MXN}`,
          MO_CON_IMPUESTOS: `${this.datosInternos.MO_CON_IMPUESTOS}`,
          MO: `${this.datosInternos.MO}`,
          MO_CON_MARGEN: `${this.datosInternos.MO_CON_MARGEN}`,
          MO_CON_MARGEN_MXN: `${this.datosInternos.MO_CON_MARGEN_MXN}`,
          VARIABLE_INDIRECTA_HORARIO_NOCTURNO: `${this.datosInternos.VARIABLE_INDIRECTA_HORARIO_NOCTURNO}`,
          VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL: `${this.datosInternos.VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL}`,
          VARIABLE_INDIRECTA_DISTANCIA: `${this.datosInternos.VARIABLE_INDIRECTA_DISTANCIA}`,
          VARIABLE_INDIRECTA_NUM_VUELTA: `${this.datosInternos.VARIABLE_INDIRECTA_NUM_VUELTA}`,
          VARIABLE_INDIRECTA_PRECIO_GASOLINA: `${this.datosInternos.VARIABLE_INDIRECTA_PRECIO_GASOLINA}`,
          VARIABLE_INDIRECTA_HERRAMIENTAS: `${this.datosInternos.VARIABLE_INDIRECTA_HERRAMIENTAS}`,
          VARIABLE_INDIRECTA_SCANNER: `${this.datosInternos.VARIABLE_INDIRECTA_SCANNER}`,
          VARIABLE_INDIRECTA_VIATICOS: `${this.datosInternos.VARIABLE_INDIRECTA_VIATICOS}`,
          VARIABLE_INDIRECTA_USO_VEHICULO: `${this.datosInternos.VARIABLE_INDIRECTA_USO_VEHICULO}`,
          VARIABLE_INDIRECTA_PROYECTO_RIESGOZO: `${this.datosInternos.VARIABLE_INDIRECTA_PROYECTO_RIESGOZO}`,
        },
      };

      ZOHO.CREATOR.init().then((data) => {
        var config = {
          reportName: "Datos_Cotizador_Report",
          // Aqui el error es el id
          id: this.DatosCotizador.ID,
          data: formData,
        };

        //update record API
        ZOHO.CREATOR.API.updateRecord(config).then(function (response) {
          //callback block
          console.log(response);
        });
      });
    },

    // Métodos para calculos de lista de materiales.
    // 1. Calcula Total
    calculaCostoTotalInterno() {
      this.datosInternos.COTIZACION_INTERNA_TOTAL = 0;
      let costo_total = 0;
      this.listaDeMateriales.forEach((element) => {
        costo_total = costo_total + parseInt(element.costo_total);
      });
      this.datosInternos.COTIZACION_INTERNA_TOTAL = costo_total;
    },

    /// Formato revision ----------------------------------------------------------------------------

    calcula_pv_total() {
      let total_local = 0;
      //       console.log(this.listaDeMateriales);
      //       this.datosInternos.COTIZACION_INTERNA_PV_GLOBAL = parseInt(this.datosInternos.COTIZACION_INTERNA_PV_GLOBAL);
      this.listaDeMateriales.forEach((element) => {
        total_local = total_local + element.pv_sugerido;
      });

      this.datosInternos.COTIZACION_INTERNA_PV_GLOBAL = total_local;
      // console.log(this.datosInternos.COTIZACION_INTERNA_PV_GLOBAL);
    },

    // ImporteMO = MO_con_Margen_a_USD();

    // precioLista = costo_u * (1 + margen)
    getPrecioLista() {
      this.listaDeMateriales.forEach((element) => {
        // element.precio_lista =
        //   element.costo_u * (1 + element.margen_individual);
        element.precio_lista = element.pv_unitario;
        element.importe = element.cantidad_de_piezas * element.precio_lista;
        element.costo_total = element.cantidad_de_piezas * element.costo_u;
      });
    },

    // calculoImporte  = (cantidad * precio de lista , suma de todos) + importeMO + IndirectosConvertidosUSD
    getImporteTotal() {
      let importe_total = 0;

      this.listaDeMateriales.forEach((element) => {
        importe_total = parseInt(importe_total) + parseInt(element.importe);
      });

      // Temporal var to store ParseInt
      let tempIndirectos = parseInt(this.datosInternos.INDIRECTOS_USD);
      let tempImporte = 0;
      if (!this.datosInternos.IMPORTE_MO == "") {
        tempImporte = parseInt(this.datosInternos.IMPORTE_MO);
      } else {
        tempImporte = 0;
      }

      this.datosInternos.DETALLES_TOTAL_COTIZACION =
        importe_total + tempIndirectos + tempImporte;
    },

    // CostoTotal  = costo_u * cantidad, suma de todos
    getCostoTotal() {
      let costo_total = 0;
      this.listaDeMateriales.forEach((element) => {
        costo_total = costo_total + element.costo_total;
      });
      this.datosInternos.COTIZACION_INTERNA_TOTAL = costo_total.toFixed(2);
      this.getUtilidad();
    },

    // calculoUtilidad = calculoImporte -  CostoTotal;
    getUtilidad() {
      // tempo var for ParsingInt
      let tempTotalC = parseInt(this.datosInternos.DETALLES_TOTAL_COTIZACION);
      let tempInternaT = parseInt(this.datosInternos.COTIZACION_INTERNA_TOTAL);

      this.datosInternos.DETALLES_TOTAL_COTIZACION = tempTotalC - tempInternaT;
      this.datosInternos.COTIZACION_INTERNA_UTILIDAD =
        tempTotalC - tempInternaT;
    },

    // getUtilidadEnPorcentaje = 1 - (CostoTotal / calculoImporte)    // Si es menos de 25%, se debe pedir autorización.
    getUtilidadPorcentaje() {
      // local para parseint
      let tempInternaT = parseInt(this.datosInternos.COTIZACION_INTERNA_TOTAL);
      let tempDetallesCotizacion = parseInt(
        this.datosInternos.DETALLES_TOTAL_COTIZACION
      );

      if (tempDetallesCotizacion != 0) {
        this.datosInternos.UTILIDAD_PORCENTAJE =
          1 - tempInternaT / tempDetallesCotizacion;
      }

      if (this.datosInternos.UTILIDAD_PORCENTAJE) {
        alert("El porcentaje de la utilidad no puede ser menor al 25%");
      }
    },

    // calculaMateriales = calculoImporte - importeMO - IndirectosConvertidosUSD
    calculaMateriales() {
      this.datosInternos.COTIZACION_INTERNA_MATERIALES = (
        parseInt(this.datosInternos.DETALLES_TOTAL_COTIZACION) -
        parseInt(this.datosInternos.IMPORTE_MO) -
        parseInt(this.datosInternos.INDIRECTOS_USD)
      ).toFixed(2);
      // this.datosInternos.COTIZACION_INTERNA_MATERIALES.toFixed(2);
    },

    //  calculaMOvsMateriales = importeMO /  calculaMateriales  /// / si calculaMateriales == 0, entonces "mensaje de error - no hay materiales"
    calculaMOvsMateriales() {
      if (this.datosInternos.DETALLES_TOTAL_COTIZACION == 0) {
        alert("No hay materiales");
      } else {
        this.datosInternos.COTIZACION_INTERNA_MANO_OBRA_VS_MATERIALES =
          parseInt(this.datosInternos.IMPORTE_MO) /
          parseInt(this.datosInternos.DETALLES_TOTAL_COTIZACION);
      }
    },

    // TODO calcular mo vs indirectos  = total_indirectos_usd / importeMO_USD
    calculaMOvsIndirectos() {
      if (this.datosInternos.MO_CON_MARGEN_MXN != 0) {
        //         console.log("CalculaMOvsIndirectos");
        this.datosInternos.COTIZACION_INTERNA_MANO_OBRA_VS_INDIRECTOS = (
          parseInt(this.variablesIndirectas.total_indirectos_usd) /
          parseInt(this.datosInternos.MO_CON_MARGEN_MXN)
        ).toFixed(2);
      }
    },

    // segunda vista   ----------------------------------------------------------------------------
    // cotaMayor = cantidad * costoInstalacionUnidad
    calculaCotaMayor() {
      let costo_instalacion_total = 0;
      this.listaDeMateriales.forEach((element) => {
        costo_instalacion_total =
          costo_instalacion_total +
          element.cantidad_de_piezas * element.costo_instalacion;
      });
      this.datosInternos.DETALLES_TOTAL_COTA_MAYOR = costo_instalacion_total;
    },

    // tercera vista   ----------------------------------------------------------------------------

    terceraVistaFlujo() {
      this.setVariablesPersonal();
      this.calculaMOflat();
      this.calculaMOconImpuestos();
      this.calculaCotaMayor();
      this.cotaMayorMXN();
      this.setManoObraneMateriales();

      // this.calculaManosObras();
    },

    // numeros de dias - editable LISTO
    //mes uni editable LISTO
    setVariablesPersonal() {
      //diario uni = mes uni / 30  CHECAR ESTO PARA HACER LA DIVISION
      this.datosInternos.DIARIO_UNI_SUPERVISOR = (
        this.datosInternos.MES_UNI_SUPERVISOR / 30
      ).toFixed(2);

      this.datosInternos.DIARIO_UNI_TECNICO = (
        this.datosInternos.MES_UNI_TECNICO / 30
      ).toFixed(2);

      //tot costo diario = diario uni * cuantos
      this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR = (
        this.datosInternos.DIARIO_UNI_SUPERVISOR *
        this.datosInternos.CUANTOS_SUPERVISOR
      ).toFixed(2);

      this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO = (
        this.datosInternos.DIARIO_UNI_TECNICO *
        this.datosInternos.CUANTOS_TECNICO
      ).toFixed(2);

      this.total_costo_diario_local = (
        parseInt(this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR) +
        parseInt(this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO)
      ).toFixed(2);
    },

    // mo flat = (suma de costos totales diarios * numero de dias )
    calculaMOflat() {
      this.datosInternos.MO_FLAT_MXN = (
        (parseInt(this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR) +
          parseInt(this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO)) *
        this.DatosCotizador.Duraci_n_del_proyecto
      ).toFixed(2);
    },
    // mo con impuestos = (suma de costos totales diarios * numero de dias ) * 1.3
    calculaMOconImpuestos() {
      this.datosInternos.MO_CON_IMPUESTOS = (
        (parseInt(this.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR) +
          parseInt(this.datosInternos.TOTAL_COSTO_DIARIO_TECNICO)) *
        this.DatosCotizador.Duraci_n_del_proyecto *
        1.3
      ).toFixed(2);
    },

    // VARIABLES / INDIRECTOS
    setVariablesIndirectas() {
      // horarioNocturno = mo con impuestos * porcentajeHorarioNocturno
      this.datosInternos.VARIABLE_INDIRECTA_HORARIO_NOCTURNO =
        this.datosInternos.MO_CON_IMPUESTOS *
        this.DatosCotizador.horas_trabajo_nocturno;

      // manoObraEspecializada = mo con impuestos * manoObraEspecializadaCampo
      this.datosInternos.VARIABLE_INDIRECTA_MANO_OBRA_ESPECIAL =
        this.datosInternos.MO_CON_IMPUESTOS *
        this.variablesIndirectas.mano_obra;

      // usoDeVehiculo =
      // CONST = 7.5km x 1 litro
      // ((distanciaCampo * precioGasolinaCampo / CONST) * 2)  * numeroVueltasCampo
      const kmLitro = 7.5;
      this.datosInternos.VARIABLE_INDIRECTA_USO_VEHICULO =
        ((this.variablesIndirectas.distancia *
          this.variablesIndirectas.precio_gasolina) /
          kmLitro) *
        2 *
        this.variablesIndirectas.num_vueltas;

      // herramientas = mo con impuestos * herramientasCampo
      // El resto de campos es el mismo calculo.
      this.datosInternos.VARIABLE_INDIRECTA_HERRAMIENTAS =
        this.datosInternos.MO_CON_IMPUESTOS *
        this.variablesIndirectas.herramientas;

      this.datosInternos.VARIABLE_INDIRECTA_SCANNER =
        this.datosInternos.MO_CON_IMPUESTOS * this.variablesIndirectas.scanner;

      this.datosInternos.VARIABLE_INDIRECTA_VIATICOS =
        this.datosInternos.MO_CON_IMPUESTOS * this.variablesIndirectas.viaticos;

      this.datosInternos.VARIABLE_INDIRECTA_PROYECTO_RIESGOZO =
        this.datosInternos.MO_CON_IMPUESTOS *
        this.variablesIndirectas.proyecto_riesgozo;

      // Sumo todos los indirectos
      // SumaIndirectos = costoIndirectos
      this.variablesIndirectas.total_indirectos =
        this.datosInternos.VARIABLE_INDIRECTA_USO_VEHICULO +
        this.datosInternos.VARIABLE_INDIRECTA_HERRAMIENTAS +
        this.datosInternos.VARIABLE_INDIRECTA_SCANNER +
        this.datosInternos.VARIABLE_INDIRECTA_VIATICOS +
        this.datosInternos.VARIABLE_INDIRECTA_USO_VEHICULO +
        this.datosInternos.VARIABLE_INDIRECTA_PROYECTO_RIESGOZO;

      // IndirectosConvertidosUSD = (1 + margenCampo) *  costoIndirectos / tipo_de_cambio_campo
      if (this.variablesIndirectas.tipo_cambio != 0) {
        this.variablesIndirectas.total_indirectos_usd = (
          ((1 + this.variablesIndirectas.margen_a_aplicar) *
            this.variablesIndirectas.total_indirectos) /
          this.variablesIndirectas.tipo_cambio
        ).toFixed(2);
      }
    },

    calculaManosObras() {
      // set variables local temporales para parsear a int
      let varIndirectasTotal = parseInt(
        this.variablesIndirectas.total_indirectos
      );
      let tempMOimpuestos = parseInt(this.datosInternos.MO_CON_IMPUESTOS);
      // Actualizo las variables indirectas
      this.setVariablesIndirectas();
      // MO =  costoIndirectos + mo con impuestos
      this.datosInternos.MO = varIndirectasTotal + tempMOimpuestos;
      // MO_con_Margen =  MO ( 1 + MARGEN A APLICARCampo)
      this.datosInternos.MO_CON_MARGEN =
        this.datosInternos.MO * (1 + this.variablesIndirectas.margen_a_aplicar);
      // MO_con_Margen_a_USD = MO_con_Margen / tipo_de_cambio_campo
      this.datosInternos.MO_CON_MARGEN_MXN =
        this.datosInternos.MO_CON_MARGEN * this.variablesIndirectas.tipo_cambio;
      // this.datosInternos.MO_CON_MARGEN_MXN.toFixed(2);
    },

    // ConvertirCotaMayorMXN = cotaMayor * tipo_de_cambio_campo
    cotaMayorMXN() {
      this.datosInternos.DETALLES_TOTAL_COTA_MAYOR_MXN =
        this.datosInternos.DETALLES_TOTAL_COTA_MAYOR *
        this.variablesIndirectas.tipo_cambio;
    },

    // calcularMiscelaneos = COTIZACION_INTERNA_MATERIALES * un_campo_de_porcentaje
    calculaMiscelaneos() {
      if (this.variablesIndirectas.misceleaneosPorcentaje != 0) {
        this.datosInternos.COTIZACION_INTERNA_MATERIALES *
          this.variablesIndirectas.misceleaneosPorcentaje;
      } else {
        this.datosInternos.COTIZACION_INTERNA_MATERIALES *
          this.variablesIndirectas.misceleaneosMonto;
      }
    },

    cargaJustificacionPartner(e) {
      // File object
      //       console.log(this.variablesIndirectas.precioPartner);
      // console.log(this.variablesIndirectas.archivoPartner);
      // console.log(e);
      let filePartner = e.target.files[0];

      // config
      // console.log(config);

      var config = {
        reportName: "Cotizador2_Report",
        id: this.DatosCotizador.ID,
        fieldName: "Propuesta_Word",
        file: filePartner,
      };

      ZOHO.CREATOR.API.uploadFile(config).then(function (response) {
        console.log("File uploaded successfully");
      });
    },
  },
  mounted() {
    // this.calculaTotalCostoeImporte();
    this.calculaCotaMayor();
    this.cotaMayorMXN();
    this.calcula_pv_total();
  },
  created() {
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