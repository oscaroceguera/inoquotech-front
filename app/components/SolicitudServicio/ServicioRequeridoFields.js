export const DIAG_PRE_IMP_FIELDS = [
  { floating: 'Esquema requerido', hinText: '', width: '', sectionItem: 'servicio', fieldItem: 'esquema', requiredType: 'text' },
  { floating: '¿Tienen certificado en inocuidad, cuales?', hinText: '', width: 'large', sectionItem: 'servicio', fieldItem: 'hasCertificado', requiredType: 'text' }
]

export const CAPACITACION_FIELDS = [
  { floating: '¿Tema de capacitación?', hinText: '', width: '', sectionItem: 'servicio', fieldItem: 'capacitacionTema', requiredType: 'text' },
  { floating: 'Cantidad de personas a capacitar', hinText: '', width: '', sectionItem: 'servicio', fieldItem: 'cantidadPersonas', requiredType: 'text' },
  { floating: '¿Tema de capacitación?', hinText: 'General, Mando medios, ...', width: '', sectionItem: 'servicio', fieldItem: 'nivelJerarquico', requiredType: 'text' }
]

export const MUESTREO_FIELDS = [
  { floating: '¿Objetivos de muestras?', hinText: 'Microbiólogico, Toxicológico, Alérgenos, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'objetivoMuestras', requiredType: 'text' },
  { floating: '¿Para que require el muestreo?', hinText: 'Rutinario, Retiro de producto, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'porqueMuestreo', requiredType: 'text' },
  { floating: 'Tipo de muestreo que requiere', hinText: 'Muestreo dirigido, Muestreo aleatorio, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'tipoMuestreo', requiredType: 'text' },
  { floating: '¿Cuenta con programa de vigilancia y monitoreo?', hinText: 'Si/No, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'hasProgramaVigilanciaMonitoreo', requiredType: 'text' },
  { floating: '¿Tiene fecha del último muestreo realizado?', hinText: 'Si/No, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'muestreoFecha', requiredType: 'text' },
  { floating: '¿Tiene resultados del último análisis?', hinText: 'Si/No, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'analisisFecha', requiredType: 'text' },
  { floating: '¿El análisis se realizó en un laboratorio acreditado?', hinText: 'Si/No, ...', width: 'large', sectionItem: 'servicio', fieldItem: 'laboratorioAcreditado', requiredType: 'text' }
]
