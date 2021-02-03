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
        Cargo_del_ejecutivo: "Tortas & Boings de mango Department",
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
        DETALLES_TOTAL_COTA_MAYOR_USD: 0,
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
    tester() {
      console.log(this.datosInternos);
    },

    descargaExcel() {
      // instancia de workbook
      let dataVar = this.$data;
      const workbook = new ExcelJS.Workbook();
      workbook.created = new Date();
      workbook.modified = new Date();
      this.addMaterialList(workbook);
      this.addManoObra(workbook);
      this.addIntegsaSheet(workbook);
      this.addClientSheet(workbook);
      workbook.xlsx.writeBuffer().then(function (data) {
        var blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(blob, "Cotizacion.xlsx");
      });
    },

    addMaterialList(workbook) {
      const matSheet = workbook.addWorksheet("Solicitud Materiales", {});
      matSheet.columns = [
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 60, style: { font: { name: "Calibri", size: 9 } } },
      ];
      let finalRowIndex = 0;
      matSheet.insertRow(1, ["PARTIDA", "CANTIDAD", "UNIDADES", "DESCRIPCIÓN"]);
      this.listaDeMateriales.forEach(function (item, index) {
        finalRowIndex = index;
        matSheet.insertRow(index + 2, [
          index + 1,
          item["cantidad_de_piezas"],
          item["unidad"],
          item["descripcion"],
        ]);
      });

      matSheet.spliceRows(finalRowIndex + 1, 2, [], []);
      matSheet.spliceRows(1, 0, [], [], []);
      matSheet.spliceColumns(1, 0, []);

      row = matSheet.getRow(4);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });
    },

    addIntegsaSheet(workbook) {
      const integsaSheet = workbook.addWorksheet("INTEGSA", {});
      integsaSheet.columns = [
        { width: 15, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 40, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
        { width: 10, style: { font: { name: "Calibri", size: 9 } } },
      ];
      integsaSheet.insertRow(7, [
        "Partida",
        "Cantidad",
        "Unidad",
        "Descripción",
        "COSTO U",
        "COSTO TOTAL",
        "MARGEN",
        "PV UNI",
        "PV TOTAL",
        "PV SUGERIDO",
      ]);

      let finalRowIndex = 0;
      let pvGlobal = 0;

      this.listaDeMateriales.forEach(function (item, index) {
        integsaSheet.insertRow(8 + index, [
          index + 1,
          item["cantidad_de_piezas"],
          item["unidad"],
          item["descripcion"],
          item["costo_u"],
          item["costo_total"],
          item["margen_individual"],
          item["pv_unitario"],
          item["pv_total"],
          item["pv_sugerido"],
        ]);
        finalRowIndex = index;
        pvGlobal += item["pv_total"];
      });
      finalRowIndex += 8;
      let cotTot = this.$data.datosInternos.COTIZACION_INTERNA_TOTAL;
      integsaSheet.getCell(
        "F" + (finalRowIndex + 1)
      ).value = this.datosInternos.SUMA_IMPORTES_TOTALES;
      integsaSheet.getCell("F" + (finalRowIndex + 2)).value = "Costo Global";
      integsaSheet.getCell(
        "I" + (finalRowIndex + 1)
      ).value = this.datosInternos.SUMA_COSTOS_TOTALES;
      integsaSheet.getCell("I" + (finalRowIndex + 2)).value = "PV Global";
      integsaSheet.getCell(
        "I" + (finalRowIndex + 5)
      ).value = this.datosInternos.COTIZACION_INTERNA_UTILIDAD;
      integsaSheet.getCell("I" + (finalRowIndex + 6)).value = "Utilidad";
      integsaSheet.getCell(
        "I" + (finalRowIndex + 8)
      ).value = this.datosInternos.UTILIDAD_PORCENTAJE;
      integsaSheet.getCell("I" + (finalRowIndex + 9)).value =
        "PORCENTAJE UTILIDAD";

      integsaSheet.insertRow(1, [
        "Indirectos",
        this.$data.datosInternos.INDIRECTOS_USD,
        {
          formula: "B1/B3",
          value:
            this.$data.datosInternos.INDIRECTOS_USD /
            this.$data.datosInternos.MO_CON_MARGEN,
        },
        "MO vs Ind",
      ]);
      integsaSheet.insertRow(2, [
        "Materiales",
        {
          formula: "=SUM(I8:I" + (finalRowIndex - 2) + ")",
          value: this.$data.datosInternos.COTIZACION_INTERNA_MATERIALES,
        },
      ]);
      integsaSheet.insertRow(3, [
        "Mano de Obra",
        {
          formula: "I" + (finalRowIndex - 1),
          value: this.$data.datosInternos.MO_CON_MARGEN,
        },
      ]);
      integsaSheet.insertRow(4, [
        "",
        {
          formula: "B3/B2",
          value: this.$data.datosInternos
            .COTIZACION_INTERNA_MANO_OBRA_VS_MATERIALES,
        },
        "MO vs Mat",
      ]);
      integsaSheet.insertRow(5, [
        "MARGEN GLOBAL",
        this.$data.datosInternos.COTIZACION_INTERNA_MARGEN_GLOBAL,
      ]);

      integsaSheet.spliceRows(6, 5);

      row = integsaSheet.getRow(7);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });
    },
    addClientSheet(workbook) {
      const clientSheet = workbook.addWorksheet("Cliente", {});
      clientSheet.columns = [
        { width: 10, style: { font: { name: "Calibri", size: 6 } } },
        { width: 10, style: { font: { name: "Calibri", size: 6 } } },
        { width: 10, style: { font: { name: "Calibri", size: 6 } } },
        { width: 50, style: { font: { name: "Calibri", size: 6 } } },
        { width: 10, style: { font: { name: "Calibri", size: 6 } } },
        { width: 10, style: { font: { name: "Calibri", size: 6 } } },
        { width: 10, style: { font: { name: "Calibri", size: 6 } } },
      ];

      clientSheet.insertRow(1, [
        "",
        "",
        "",
        "",
        "FECHA:",
        this.$data.DatosCotizador.Fecha_de_expedici_n,
      ]);
      clientSheet.insertRow(3, [
        "",
        "",
        "",
        "",
        "Proy:",
        this.$data.DatosCotizador.proyectos,
      ]);
      clientSheet.insertRow(4, ["", "", "", "", "Cotización:", "###"]);

      clientSheet.mergeCells("A6:G6");
      clientSheet.getCell("A6").value =
        "CERRO DEL MERCADO # 4404 COLONIA MIRADOR, MONTERREY N.L. C.P. 64910 TEL +52(81)1100-1150, TEL +52(81)1100-2020";
      clientSheet.getCell("A6").alignment = { horizontal: "center" };

      clientSheet.insertRow(9, [
        "EMPRESA",
        this.$data.DatosCotizador.Cliente,
        "",
        "",
        "TIPO DE MONEDA:",
        this.$data.datosInternos.DETALLES_TIPO_MONEDA,
      ]);
      clientSheet.mergeCells("B9:D9");

      clientSheet.insertRow(10, [
        "ATENCION:",
        this.$data.DatosCotizador.Nombre_ejecutivo,
        "",
        "",
        "TIEMPO DE ENT.:",
        "Ver Cond. Com.",
      ]);
      clientSheet.mergeCells("B10:D10");

      clientSheet.insertRow(11, [
        "PUESTO:",
        this.$data.DatosCotizador.Cargo_del_ejecutivo,
        "",
        "",
        "LUGAR DE ENTREGA:",
        this.$data.datosInternos.DETALLES_LUGAR_ENTREGA,
      ]);
      clientSheet.mergeCells("B11:D11");

      clientSheet.insertRow(12, [
        "TELEFONOS:",
        this.$data.datosInternos.DETALLES_TELEFONOS,
        "",
        this.$data.DatosCotizador.nombre_de_cotizacion,
        "NUM. DE PARTIDAS:",
        this.$data.datosInternos.DETALLES_NUMERO_PARTIDAS,
      ]);
      clientSheet.mergeCells("B12:C12");

      clientSheet.insertRow(13, [
        "FAX:",
        this.$data.datosInternos.DETALLES_FAX,
        "",
        "",
        "NUM. DE PAGINAS:",
        this.$data.datosInternos.DETALLES_NUMERO_PAGINAS,
      ]);
      clientSheet.mergeCells("B13:C13");

      clientSheet.insertRow(14, [
        "Partida",
        "Cantidad",
        "Unidad",
        "Descripción",
        "Precio Lista",
        "Importe",
      ]);
      clientSheet.mergeCells("B14:C14");

      clientSheet.insertRow(15, []);
      clientSheet.insertRow(16, []);
      clientSheet.insertRow(17, []);
      clientSheet.insertRow(18, []);

      let finalRowIndex = 0;
      let pvGlobal = 0;
      this.listaDeMateriales.forEach(function (item, index) {
        clientSheet.insertRow(19 + index, [
          index + 1,
          item["cantidad_de_piezas"],
          item["unidad"],
          item["descripcion"],
          item["pv_unitario"],
          item["pv_total"],
        ]);
        finalRowIndex = index;
        pvGlobal += item["pv_total"];
      });

      clientSheet.insertRow(18 + finalRowIndex, []);
      clientSheet.insertRow(22 + finalRowIndex, [
        "",
        "",
        "",
        "",
        "TOTAL",
        {
          formula: "=SUM(F19:F" + (finalRowIndex + 20) + ")",
          result: pvGlobal,
        },
      ]);

      row = clientSheet.getRow(14);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });
    },
    addManoObra(workbook) {
      const manoSheet = workbook.addWorksheet("MANO DE OBRA", {});
      manoSheet.columns = [
        { width: 5, style: { font: { name: "Calibri", size: 10 } } },
        { width: 20, style: { font: { name: "Calibri", size: 10 } } },
        { width: 10, style: { font: { name: "Calibri", size: 10 } } },
        { width: 10, style: { font: { name: "Calibri", size: 10 } } },
        { width: 20, style: { font: { name: "Calibri", size: 10 } } },
        { width: 15, style: { font: { name: "Calibri", size: 10 } } },
        { width: 2, style: { font: { name: "Calibri", size: 10 } } },
        { width: 15, style: { font: { name: "Calibri", size: 10 } } },
        { width: 15, style: { font: { name: "Calibri", size: 10 } } },
      ];

      manoSheet.insertRow(2, ["", "FACTORES"]);
      manoSheet.insertRow(3, [
        "",
        "Días de trabajo",
        this.$data.DatosCotizador.Duraci_n_del_proyecto,
      ]);

      manoSheet.insertRow(6, [
        "",
        "PERSONAL",
        "CUANTOS",
        "MES UNI",
        "DIARIO UNI",
        "TOT COSTO DIARIO",
        "",
        "MO Flat MX",
        "MO con impuestos",
      ]);
      manoSheet.insertRow(7, [
        "",
        "Supervisor",
        this.$data.datosInternos.CUANTOS_SUPERVISOR,
        this.$data.datosInternos.MES_UNI_SUPERVISOR,
        {
          formula: "D7/30",
          result: this.$data.datosInternos.DIARIO_UNI_SUPERVISOR,
        },
        {
          formula: "=C7*E7",
          result: this.$data.datosInternos.TOTAL_COSTO_DIARIO_SUPERVISOR,
        },
        "",
        { formula: "=(C3*F9)", result: this.$data.datosInternos.MO_FLAT_MXN },
        {
          formula: "=H7*1.3",
          result: this.$data.datosInternos.MO_CON_IMPUESTOS,
        },
      ]);
      manoSheet.insertRow(8, [
        "",
        "Técnico",
        this.$data.datosInternos.CUANTOS_TECNICO,
        this.$data.datosInternos.MES_UNI_TECNICO,
        {
          formula: "D8/30",
          result: this.$data.datosInternos.DIARIO_UNI_TECNICO,
        },
        {
          formula: "=C8*E8",
          result: this.$data.datosInternos.TOTAL_COSTO_DIARIO_TECNICO,
        },
      ]);
      manoSheet.insertRow(9, [
        "",
        "",
        "",
        "",
        "",
        { formula: "=SUM(F7:F8)", result: this.$data.total_costo_diario_local },
      ]);

      manoSheet.insertRow(11, ["", "VARIABLES/INDIRECTOS"]);
      manoSheet.mergeCells("H7:H9");
      manoSheet.mergeCells("I7:I9");

      let vi = this.$data.variablesIndirectas;
      let horario_nocturno_total =
        this.$data.datosInternos.MO_CON_IMPUESTOS * vi.horario_nocturno;
      let precio_gasolina_total =
        (vi.precio_gasolina * vi.num_vueltas * vi.distancia * 2) / 7.5;
      let herramientas_total =
        this.$data.datosInternos.MO_CON_IMPUESTOS * vi.herramientas;
      let scanner_total =
        this.$data.datosInternos.MO_CON_IMPUESTOS * vi.scanner;
      let proyecto_riesgozo_total =
        this.$data.datosInternos.MO_CON_IMPUESTOS * vi.scanner;
      let tot_ind =
        horario_nocturno_total +
        precio_gasolina_total +
        herramientas_total +
        scanner_total +
        proyecto_riesgozo_total +
        vi.viaticos;

      manoSheet.insertRow(12, [
        "",
        "Horario nocturno",
        vi.horario_nocturno,
        { formula: "=$I$7*C12", result: horario_nocturno_total },
      ]);
      manoSheet.insertRow(13, ["", "Distancia", vi.distancia]);
      manoSheet.insertRow(14, ["", "Número de Vueltas", vi.num_vueltas]);
      manoSheet.insertRow(15, [
        "",
        "Precio Gasolina",
        vi.precio_gasolina,
        { formula: "=C15*C14*2*C13/7.5", result: precio_gasolina_total },
      ]);
      manoSheet.insertRow(16, [
        "",
        "Herramientas",
        vi.herramientas,
        { formula: "=$I$7*C16", result: herramientas_total },
      ]);
      manoSheet.insertRow(17, [
        "",
        "Scanner",
        vi.scanner,
        { formula: "=$I$7*C17", result: scanner_total },
      ]);
      manoSheet.insertRow(18, ["", "Viáticos", "", vi.viaticos]);
      manoSheet.insertRow(19, [
        "",
        "Riesgo",
        vi.proyecto_riesgozo,
        { formula: "=$I$7*C19", result: proyecto_riesgozo_total },
      ]);
      manoSheet.insertRow(20, [
        "",
        "",
        "",
        { formula: "SUM(D12:D19)", result: tot_ind },
      ]);

      manoSheet.insertRow(24, ["", "TIPO DE CAMBIO", vi.tipo_cambio]);
      manoSheet.insertRow(25, ["", "MARGEN A APLICAR", vi.margen_a_aplicar]);
      manoSheet.insertRow(26, [
        "",
        "Cotización Partner (USD)",
        vi.precioPartner,
      ]);

      manoSheet.insertRow(30, [
        "",
        "MO ( MO sin margen en MXN )",
        "",
        "MO (MO sin margen en USD)",
      ]);

      let MO_sin_margen =
        this.$data.datosInternos.MO_CON_IMPUESTOS +
        tot_ind +
        vi.precioPartner / vi.tipo_cambio;
      manoSheet.insertRow(31, [
        "",
        { formula: "I7+D20+C26/C24", result: MO_sin_margen },
        "",
        { formula: "B31/C24", result: MO_sin_margen / vi.tipo_cambio },
      ]);

      manoSheet.insertRow(32, [
        "",
        "MO (MO con margen en MXN)",
        "",
        "MO con margen (MO con margen en USD)",
        "",
        "",
        "",
        "MO COTA SUPERIOR",
      ]);
      manoSheet.insertRow(33, [
        "",
        {
          formula: "B31*(1+C25)",
          result: MO_sin_margen * (1 + vi.margen_a_aplicar),
        },
        "",
        {
          formula: "B33/C24",
          result: (MO_sin_margen * (1 + vi.margen_a_aplicar)) / vi.tipo_cambio,
        },
        "",
        "",
        "",
        this.$data.datosInternos.DETALLES_TOTAL_COTA_MAYOR_USD,
      ]);

      row = manoSheet.getRow(2);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });

      row = manoSheet.getRow(6);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });

      row = manoSheet.getRow(11);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });

      row = manoSheet.getRow(30);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });

      row = manoSheet.getRow(32);
      row.eachCell(function (cell, colNumber) {
        if (cell.value) {
          row.getCell(colNumber).font = {
            bold: true,
            size: 10,
            name: "Arial",
          };
          row.getCell(colNumber).alignment = { horizontal: "center" };
        }
      });

      manoSheet.getCell("B24").font = {
        bold: true,
        size: 10,
        name: "Arial",
      };
      manoSheet.getCell("B25").font = {
        bold: true,
        size: 10,
        name: "Arial",
      };
      manoSheet.getCell("B26").font = {
        bold: true,
        size: 10,
        name: "Arial",
      };
    },

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

    // FIXME Primero, separar con el nuevo separador
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

          // Default si tipo de cambio no existe o es 0
          if (
            this.datosInternos.VARIABLE_INDIRECTA_TIPO_CAMBIO == undefined ||
            this.datosInternos.VARIABLE_INDIRECTA_TIPO_CAMBIO <= 0
          ) {
            this.variablesIndirectas.tipo_cambio = 20;
          } else {
            this.variablesIndirectas.tipo_cambio = parseInt(
              this.datosInternos.VARIABLE_INDIRECTA_TIPO_CAMBIO
            );
          }
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
            let objetoMO = {};
            objetoMO.unidad = "Srv.";
            objetoMO.um = "Srv.";
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
            objetoMiscelaneos.um = "Srv.";
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

            this.calculaCotaMayor();
            this.flujoGeneral();
            this.cargandoMateriales = false;
            // this.showTable = !this.showTable;
            this.showTable = true;
          }, 7000);
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
            let getMaterialIndividual = (material) => {
              let config = {
                reportName: "Materiales_Report",
                id: material.id,
              };
              ZOHO.CREATOR.API.getRecordById(config).then((response) => {
                // console.log(response.data[0]);
                let tempObjetoMaterial = {};
                tempObjetoMaterial.unidad = response.data.unidad;
                tempObjetoMaterial.um = response.data.um;
                tempObjetoMaterial.descripcion = response.data.nombre;
                tempObjetoMaterial.precio_lista = parseFloat(
                  response.data.precio_lista
                );
                tempObjetoMaterial.costo_unidad = parseFloat(
                  response.data.Costo_Unitario
                );
                tempObjetoMaterial.costo_instalacion = parseFloat(
                  response.data.COSTO_INSTALACION_UNIDAD
                );
                tempObjetoMaterial.pv_sugerido = parseFloat(
                  response.data.precio_venta
                );
                tempObjetoMaterial.costo_u = tempObjetoMaterial.costo_unidad;
                tempObjetoMaterial.costo_total = 1;
                tempObjetoMaterial.pv_unitario = parseFloat(
                  response.data.precio_lista
                );
                tempObjetoMaterial.pv_total = 1;
                tempObjetoMaterial.importe = 0;

                tempObjetoMaterial.cantidad_de_piezas = parseInt(
                  material.cantidad
                );
                tempObjetoMaterial.margen_individual = parseFloat(
                  material.margen_individual
                );
                this.listaDeMateriales.push(tempObjetoMaterial);
              });
            };

            // array de promesas
            response.data[0].agregar_material.forEach((element) => {
              // NOTE el valor esta separado por __ y es, nombre, cantidad, margen i, id del material
              let materialSeparado = element.display_value.split("__");
              let materialTemporal = {};
              materialTemporal.cantidad = materialSeparado[1];
              materialTemporal.margen_individual = materialSeparado[2];
              materialTemporal.id = materialSeparado[3];
              materialesIDS.push(materialTemporal);
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

      if (
        this.datosInternos.CUANTOS_SUPERVISOR < 0 ||
        this.datosInternos.CUANTOS_TECNICO < 0
      ) {
        this.datosInternos.CUANTOS_SUPERVISOR < 0
          ? (this.datosInternos.CUANTOS_SUPERVISOR = 0)
          : (this.datosInternos.CUANTOS_TECNICO = 0);
      }
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

    calculaCotaMayor() {
      let count = 0;
      this.listaDeMateriales.forEach((element) => {
        if (element.costo_instalacion >= 0) {
          count = count + parseFloat(element.costo_instalacion);
        }
      });
      this.datosInternos.DETALLES_TOTAL_COTA_MAYOR_USD = count;
      this.datosInternos.DETALLES_TOTAL_COTA_MAYOR_MXN =
        this.datosInternos.DETALLES_TOTAL_COTA_MAYOR_USD *
        this.variablesIndirectas.tipo_cambio;
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
    this.calculaCotaMayor();
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
