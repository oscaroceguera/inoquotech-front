export const AGRICOLA_FIELDS = [
 { floating: '¿Cuantas hectáreas de producción tiene la empresa?', hinText: '', width: 'large', sectionItem: 'agricola', fieldItem: 'hectarea', requiredType: 'text' },
 { floating: '¿Qué productos producen?', hinText: '', width: '', sectionItem: 'agricola', fieldItem: 'productos', requiredType: 'text' },
 { floating: '¿Llevan a cabo proceso de empacado?', hinText: '', width: 'large', sectionItem: 'agricola', fieldItem: 'empacado', requiredType: 'text' },
 { floating: '¿Cuántos albergues tiene la empresa?', hinText: '', width: 'large', sectionItem: 'agricola', fieldItem: 'albergues', requiredType: 'text' }
]

export const ACUICOLA_FIELDS = [
 { floating: '¿Que tipo de sistema de producción tiene?', hinText: '', width: 'large', sectionItem: 'acuicola', fieldItem: 'tipoSistemaProduccion', requiredType: 'text' },
 { floating: '¿Tiene juntas todas sus unidades de producción, en caso de si donde?', hinText: '', width: 'xLarge', sectionItem: 'acuicola', fieldItem: 'ubicacionProduccion', requiredType: 'text' },
 { floating: '¿Qué productos o especies producen?', hinText: '', width: 'large', sectionItem: 'acuicola', fieldItem: 'tipoProduccion', requiredType: 'text' },
 { floating: '¿Llevan a cabo proceso de empacado?', hinText: '', width: 'large', sectionItem: 'acuicola', fieldItem: 'empacado', requiredType: 'text' },
 { floating: '¿Cuántos albergues tiene la empresa?', hinText: '', width: 'large', sectionItem: 'acuicola', fieldItem: 'albergues', requiredType: 'text' }
]

export const DISTRIBUIDORA_FIELDS = [
  { floating: '¿Cuántos almacenes tiene?', hinText: '', width: '', sectionItem: 'distribuidora', fieldItem: 'almacenes', requiredType: 'text' },
  { floating: '¿Qué productos comercializa?', hinText: '', width: '', sectionItem: 'distribuidora', fieldItem: 'productos', requiredType: 'text' },
  { floating: '¿Cuál es su mercado de destino?', hinText: '', width: 'large', sectionItem: 'distribuidora', fieldItem: 'mercado', requiredType: 'text' },
  { floating: '¿Es importador a USA?', hinText: '', width: 'large', sectionItem: 'distribuidora', fieldItem: 'importa', requiredType: 'text' }
]

export const LABORATORIO_FIELDS = [
  { floating: 'Giro del laboratorio', hinText: '', width: 'xLarge', sectionItem: 'laboratorio', fieldItem: 'giro', requiredType: 'text' },
  { floating: 'Normatividad en la que requiere acreditarse', hinText: '', width: 'large', sectionItem: 'laboratorio', fieldItem: 'normativa', requiredType: 'text' },
  { floating: '¿Qué ensayos requiere acreditar?', hinText: '', width: '', sectionItem: 'laboratorio', fieldItem: 'ensayos', requiredType: 'text' }
]

export const PROCESADORA_FIELDS = [
  { floating: '¿Qué productos fabrican?', hinText: '', width: '', sectionItem: 'procesadora', fieldItem: 'productos', requiredType: 'text' },
  { floating: 'Turnos de producción', hinText: '', width: '', sectionItem: 'procesadora', fieldItem: 'turnos', requiredType: 'text' },
  { floating: 'Nº de plantas', hinText: '', width: 'small', sectionItem: 'procesadora', fieldItem: 'plantas', requiredType: 'text' }
]

export const RESTAURANTE_FIELDS = [
  { floating: '¿Qué productos venden?', hinText: '', width: '', sectionItem: 'restaurante', fieldItem: 'productos', requiredType: 'text' },
  { floating: 'Horarios de servicio de la empresa', hinText: '', width: 'medium', sectionItem: 'restaurante', fieldItem: 'horario', requiredType: 'text' },
  { floating: 'Nº de sucursales', hinText: '', width: 'small', sectionItem: 'restaurante', fieldItem: 'sucursales', requiredType: 'text' },
  { floating: '¿Las instalaciones son propias o rentadas?', hinText: '', width: 'large', sectionItem: 'restaurante', fieldItem: 'tipoInstalacion', requiredType: 'text' },
  { floating: '¿Cuenta con sistemas de congelación para sus materias primas?', hinText: '', width: 'xLarge', sectionItem: 'restaurante', fieldItem: 'congelacion', requiredType: 'text' },
  { floating: '¿Cuenta con servicio de verificacion de la NOM-251?', hinText: '', width: 'xLarge', sectionItem: 'restaurante', fieldItem: 'verificacion', requiredType: 'text' },
  { floating: '¿Cuenta con sanitarios exclusivos para sus empleados?', hinText: '', width: 'large', sectionItem: 'restaurante', fieldItem: 'sanitarios', requiredType: 'text' },
  { floating: '¿El personal cuenta con capacitacón de manejo de alimentos?', hinText: '', width: 'xLarge', sectionItem: 'restaurante', fieldItem: 'capacitacion', requiredType: 'text' }
]

export const TRANSPORTE_FIELDS = [
  { floating: '¿Qué productos transportan?', hinText: '', width: '', sectionItem: 'transporte', fieldItem: 'productos', requiredType: 'text' },
  { floating: '¿Cuentan con algún tipo de certificación?', hinText: '', width: 'large', sectionItem: 'transporte', fieldItem: 'cetificado', requiredType: 'text' },
  { floating: '¿Llevan a cabo un programa de seguridad e higiene?', hinText: '', width: 'large', sectionItem: 'transporte', fieldItem: 'saludHigiene', requiredType: 'text' },
  { floating: '¿Cuentan con permisos para el transporte de la mercancía?', hinText: 'Nacional e Internacional SCT', width: 'xLarge', sectionItem: 'transporte', fieldItem: 'permisos', requiredType: 'text' },
  { floating: 'Nº flotillas/vehículos', hinText: '', width: '', sectionItem: 'transporte', fieldItem: 'noVehiculos', requiredType: 'text' },
  { floating: '¿Cuentan con talleres mecánicos propios?', hinText: '', width: 'large', sectionItem: 'transporte', fieldItem: 'talleres', requiredType: 'text' },
  { floating: '¿Cuentan con registros de actividades?', hinText: 'Documentación necesaria para registro de actividades (Trazabilidad)', width: 'xLarge', sectionItem: 'transporte', fieldItem: 'registros', requiredType: 'text' },
  { floating: '¿Realiza frecuentemente exámenes toxicológicos a los choferes?', hinText: '', width: 'xLarge', sectionItem: 'transporte', fieldItem: 'toxicologicos', requiredType: 'text' }
]

export const RFC_FIELDS = [
 { floating: 'RFC de cliente', hinText: '', width: 'small', sectionItem: 'client', fieldItem: 'isClientRFC', requiredType: 'rfc' }
]
