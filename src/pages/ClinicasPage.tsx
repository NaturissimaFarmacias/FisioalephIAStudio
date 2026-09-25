import React from 'react';
import { NavPage } from '../components/Header.tsx';
import { EquipoClinico } from '../components/EquipoClinico.tsx';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Navigation,
  Car,
  CreditCard,
  Building2,
  Check,
  ArrowRight,
} from 'lucide-react';

interface ClinicasPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: (sede?: string) => void;
}

export const ClinicasPage: React.FC<ClinicasPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          BLOQUE 1 OBLIGATORIO:
          PRIMERO UN BLOQUE CONJUNTO CON LA INFORMACIÓN COMÚN DE AMBAS CLÍNICAS
          (Regla: NO incluir "capacidad instalada" ni "cubículos acústicos")
          ========================================================= */}
      <section className="relative w-full bg-[#003441] text-white py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#26C6DA 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 text-[12px] font-mono">
            <span className="text-[#5ce9fe] font-bold">
              RED ASISTENCIAL RECUPERAT • ZAPOPAN, JALISCO • 2 SEDES OPERATIVAS HABILITADAS
            </span>
            <span className="text-white/70">REGISTRO COFEPRIS CL-14-120-JAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-[12px] font-mono tracking-widest text-[#5ce9fe] uppercase font-bold block mb-2">
                INFRAESTRUCTURA MÉDICA DE PRECISIÓN EN JALISCO
              </span>
              <h1 className="text-[32px] sm:text-[44px] font-bold text-white tracking-tight leading-tight mb-4">
                Centros Clínicos Recuperat: Red Asistencial en Zapopan
              </h1>
              <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed mb-8 max-w-2xl">
                Espacios quirúrgicamente diseñados para rehabilitación física integral, traumatología avanzada y fisioterapia. Entornos asépticos con calibración electromédica de grado hospitalario y privacidad en la atención.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenAppointmentModal('Valle Imperial')}
                  className="h-11 px-5 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[14px] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Valoración Inicial</span>
                </button>
                <a
                  href="#sedes"
                  className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white font-medium text-[14px] flex items-center gap-2 border border-white/10 transition-colors"
                >
                  <span>Explorar Fichas de Sede</span>
                </a>
              </div>
            </div>

            {/* Bloque Común de Estándares (SIN capacidad instalada, SIN cubículos acústicos) */}
            <div className="lg:col-span-4">
              <div className="bg-[#0f4c5c] rounded-2xl p-6 border border-white/15 shadow-xl text-white">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-[12px] font-mono font-bold text-[#98f0ff]">
                    ESTÁNDARES COMUNES
                  </span>
                  <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white">
                    Zapopan Norte &amp; Poniente
                  </span>
                </div>

                <div className="space-y-3 text-[13px] text-white/90">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>2 Sedes con consultorios privados y climatizados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Estándar de esterilidad y desinfección grado clínico</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Expediente clínico electrónico NOM-024-SSA3</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Estacionamiento vehicular y accesibilidad motriz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información Común de Ambas Sedes: Horarios, Equipamiento y Pagos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold mb-1">
                HORARIOS DE ATENCIÓN
              </div>
              <div className="text-[13px] text-white/90">
                Lun - Vie: 08:00 - 20:00 hrs
              </div>
              <div className="text-[13px] text-white/90">
                Sábados: 08:00 - 14:00 hrs
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold mb-1">
                EQUIPAMIENTO DE EXCELENCIA
              </div>
              <div className="text-[12px] text-white/80 leading-snug">
                Mesa de Canabé de alta precisión, consultorios privados y ultrasonido de última generación.
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold mb-1">
                ACCESIBILIDAD UNIVERSAL
              </div>
              <div className="text-[12px] text-white/80 leading-snug">
                Rampas de acceso, elevador camillero y puertas amplias para sillas de ruedas.
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold mb-1">
                FORMAS DE PAGO &amp; CFDI
              </div>
              <div className="text-[12px] text-white/80 leading-snug">
                Tarjetas de crédito, débito, transferencia y facturación CFDI 4.0 inmediata.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOQUE 2 OBLIGATORIO:
          DESPUÉS, CADA CLÍNICA POR SEPARADO
          Reglas específicas:
          - En Fichas Clínica: NO incluir “gimnasio biomecánico”.
          - Cambiar cualquier “cubículos acústicos” por “cubículos privados”.
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb]" id="sedes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              DIRECTORIO TERRITORIAL DE ZAPOPAN
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
              Fichas Clínicas de Nuestras 2 Sedes Oficiales
            </h2>
            <p className="text-[14px] text-[#555555] mt-1">
              Ubicaciones estratégicas para garantizar accesibilidad rápida desde la zona metropolitana, equipadas con estacionamiento preferencial y accesibilidad universal.
            </p>
          </div>

          <div className="space-y-12">
            {/* FICHA 1: CLÍNICA VALLE IMPERIAL */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Photo */}
                <div className="lg:col-span-5 relative bg-[#f2f4f6] min-h-[300px]">
                  <img
                    src="/src/assets/images/clinic_valle_imperial_1790299045300.jpg"
                    alt="Clínica Valle Imperial Fisioaleph"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#003441] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full">
                    SEDE FLAGSHIP PRINCIPAL
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-[#006874] font-bold uppercase tracking-wider">
                        ZAPOPAN NORPONIENTE • SERVICIO ACTIVO EN TIEMPO REAL
                      </span>
                      <span className="text-[11px] font-mono text-[#70787c]">
                        REC-ZAP-01-VALLE
                      </span>
                    </div>

                    <h3 className="text-[26px] font-bold text-[#003441] mb-2">
                      Clínica Valle Imperial
                    </h3>
                    <p className="text-[13px] font-medium text-[#006874] mb-4">
                      Centro de Investigación y Terapia Física Avanzada
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#eeeeee] mb-6">
                      <span className="text-[11px] font-mono text-[#70787c] uppercase font-bold block mb-1">
                        DIRECCIÓN OFICIAL
                      </span>
                      <p className="text-[13px] text-[#262b38] font-medium leading-relaxed">
                        Boulevard Valle Imperial # 260 - 18, Cruce con Av. Antiguo Camino a Copalita y Calle Las Torres, Planta Alta, Col. Nuevo México / La Periquera, C.P. 45134, Zapopan, Jalisco.
                      </p>
                      <p className="text-[12px] text-[#555555] mt-1">
                        Ref: Frente al corredor de condominios Valle Imperial, acceso directo por elevador camillero.
                      </p>
                    </div>

                    {/* Especificaciones de la sede (NO gimnasio biomecánico, cubículos privados) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-[#f2f4f6]">
                        <div className="text-[12px] font-bold text-[#003441] mb-1">
                          Reeducación Funcional
                        </div>
                        <div className="text-[11px] text-[#555555]">
                          Readaptación funcional con equipamiento ergonómico.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#f2f4f6]">
                        <div className="text-[12px] font-bold text-[#003441] mb-1">
                          Consultorios Privados
                        </div>
                        <div className="text-[11px] text-[#555555]">
                          Completamente equipados para fisiatría y diagnóstico.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#f2f4f6]">
                        <div className="text-[12px] font-bold text-[#003441] mb-1">
                          Cubículos Privados
                        </div>
                        <div className="text-[11px] text-[#555555]">
                          Privacidad total con electroanalgesia y termoterapia guiada.
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-[#555555] mb-6">
                      <div>
                        <span className="font-semibold text-[#003441] block">Horarios:</span>
                        <div>Lunes a Viernes: 08:00 - 20:00 hrs</div>
                        <div>Sábados: 08:00 - 14:00 hrs</div>
                      </div>
                      <div>
                        <span className="font-semibold text-[#003441] block">Canales Directos:</span>
                        <div>Teléfono Fijo: (33) 9688-6699</div>
                        <div>WhatsApp Directo: (33) 2351-7843</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#eeeeee] flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('Valle Imperial')}
                      className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white text-[13px] font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agendar en Valle Imperial</span>
                    </button>
                    <a
                      href="https://maps.google.com/?q=Boulevard+Valle+Imperial+260+Zapopan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-lg border border-[#cbd5e1] hover:bg-[#f2f4f6] text-[#262b38] text-[13px] font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-[#006874]" />
                      <span>Ver Ruta GPS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FICHA 2: CLÍNICA PLAZA PASEO SENDAS */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Photo */}
                <div className="lg:col-span-5 relative bg-[#f2f4f6] min-h-[300px]">
                  <img
                    src="/src/assets/images/clinic_paseo_sendas_1790299054051.jpg"
                    alt="Clínica Plaza Paseo Sendas Fisioaleph"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#006874] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full">
                    SEDE REGIONAL TERAPÉUTICA
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-[#006874] font-bold uppercase tracking-wider">
                        ZAPOPAN SENDAS RESIDENCIAL • DISPONIBILIDAD AMBULATORIA
                      </span>
                      <span className="text-[11px] font-mono text-[#70787c]">
                        REC-ZAP-02-SENDAS
                      </span>
                    </div>

                    <h3 className="text-[26px] font-bold text-[#003441] mb-2">
                      Clínica Plaza Paseo Sendas
                    </h3>
                    <p className="text-[13px] font-medium text-[#006874] mb-4">
                      Centro Especializado en Terapia Manual Ortopédica
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#eeeeee] mb-6">
                      <span className="text-[11px] font-mono text-[#70787c] uppercase font-bold block mb-1">
                        DIRECCIÓN OFICIAL
                      </span>
                      <p className="text-[13px] text-[#262b38] font-medium leading-relaxed">
                        Avenida Guadalajara # 3523, Local 8 y 14-B, Fraccionamiento Sendas Residencial, C.P. 45140, Zapopan, Jalisco.
                      </p>
                      <p className="text-[12px] text-[#555555] mt-1">
                        Ref: Plaza Comercial Paseo Sendas, planta baja con estacionamiento vehicular frente a puerta.
                      </p>
                    </div>

                    {/* Especificaciones de la sede (NO gimnasio biomecánico, cubículos privados) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-[#f2f4f6]">
                        <div className="text-[12px] font-bold text-[#003441] mb-1">
                          Terapia Manual
                        </div>
                        <div className="text-[11px] text-[#555555]">
                          Manipulación articular Maitland y Mulligan con descompresión.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#f2f4f6]">
                        <div className="text-[12px] font-bold text-[#003441] mb-1">
                          Consultorios Privados
                        </div>
                        <div className="text-[11px] text-[#555555]">
                          Completamente equipados para ecografía y notas NOM-024.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#f2f4f6]">
                        <div className="text-[12px] font-bold text-[#003441] mb-1">
                          Cubículos Privados
                        </div>
                        <div className="text-[11px] text-[#555555]">
                          Equipos de ultrasonido multifrecuencia y termoterapia.
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-[#555555] mb-6">
                      <div>
                        <span className="font-semibold text-[#003441] block">Horarios:</span>
                        <div>Lunes a Viernes: 08:00 - 20:00 hrs</div>
                        <div>Sábados: 09:00 - 14:00 hrs</div>
                      </div>
                      <div>
                        <span className="font-semibold text-[#003441] block">Canales Directos:</span>
                        <div>Teléfono / WhatsApp: (33) 2407-4211</div>
                        <div>Conmutador Sede: (33) 3803-4475</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#eeeeee] flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('Plaza Paseo Sendas')}
                      className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white text-[13px] font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agendar en Paseo Sendas</span>
                    </button>
                    <a
                      href="https://maps.google.com/?q=Plaza+Paseo+Sendas+Zapopan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-lg border border-[#cbd5e1] hover:bg-[#f2f4f6] text-[#262b38] text-[13px] font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-[#006874]" />
                      <span>Ver Ruta GPS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RECORRIDO POR INSTALACIONES
          Con descripciones requeridas:
          - Mesa de Canabé de alta precisión
          - Consultorios privados completamente equipados
          - Equipo de ultrasonido y electroterapia de última generación
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              ESTÁNDARES DE EXCELENCIA ESPACIAL
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#262b38] tracking-tight mt-1">
              Recorrido por Instalaciones de Alta Gama
            </h2>
            <p className="text-[14px] text-[#555555] mt-1">
              Equipamiento electromédico calibrado según NOM-016-SSA3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#eeeeee]">
              <div className="text-[11px] font-mono text-[#006874] font-bold uppercase mb-2">
                MÓDULO 01
              </div>
              <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                Mesa de Canabé de alta precisión
              </h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Superficie clínica de valoración y reeducación funcional con soporte ergonómico para maniobras exactas y descarga axial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#eeeeee]">
              <div className="text-[11px] font-mono text-[#006874] font-bold uppercase mb-2">
                MÓDULO 02
              </div>
              <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                Consultorios privados completamente equipados
              </h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Espacios individuales para interconsulta médica, expedientes digitales cifrados y ecografía musculoesquelética.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#eeeeee]">
              <div className="text-[11px] font-mono text-[#006874] font-bold uppercase mb-2">
                MÓDULO 03
              </div>
              <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                Equipo de ultrasonido y electroterapia de última generación
              </h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Dispositivos de electroanalgesia, modulación del dolor tisular, ultrasonido y bioestimulación profunda acelerada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          UBICACIÓN Y COBERTURA METROPOLITANA
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb] border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-mono text-[#006874] uppercase font-bold tracking-wider">
                GEOLOCALIZACIÓN ZAPOPAN NORTE &amp; VALLE IMPERIAL
              </span>
              <h3 className="text-[26px] sm:text-[32px] font-bold text-[#262b38] tracking-tight mt-1 mb-4">
                Ubicación y Cobertura Metropolitana
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-6">
                Ambas sedes cuentan con acceso vial rápido por Periférico Norte, Av. Juan Gil Preciado y Av. Servidor Público.
              </p>

              <div className="space-y-4 text-[13px]">
                <div className="p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#003441] block">Desde Andares / Puerta de Hierro:</span>
                    <span className="text-[#555555]">18 min vía Av. Acueducto y Av. Santa Margarita.</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#003441] block">Desde Periférico Norte:</span>
                    <span className="text-[#555555]">8 min ingresando por Av. Juan Gil Preciado.</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#003441] block">Ruta de Transporte Urbano:</span>
                    <span className="text-[#555555]">Rutas alimentadoras Mi Macro Periférico T08 y C117.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#003441] text-white rounded-2xl p-6 sm:p-8">
                <span className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold block mb-2">
                  RECEPCIÓN AMBULATORIA DIRECTA
                </span>
                <h4 className="text-[22px] font-bold text-white mb-3">
                  ¿Requieres Asistencia Inmediata?
                </h4>
                <p className="text-[13px] text-white/80 leading-relaxed mb-6">
                  Pacientes con dolor agudo o postoperatorios recientes reciben atención prioritaria el mismo día en ambas sedes.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => onOpenAppointmentModal('Valle Imperial')}
                    className="w-full h-11 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[13px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Llamada o Cita Prioritaria Valle Imperial</span>
                  </button>
                  <button
                    onClick={() => onOpenAppointmentModal('Plaza Paseo Sendas')}
                    className="w-full h-11 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white font-medium text-[13px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Cita Prioritaria Paseo Sendas</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EQUIPO MÉDICO TITULAR DE LAS CLÍNICAS
          ========================================================= */}
      <EquipoClinico />
    </div>
  );
};
