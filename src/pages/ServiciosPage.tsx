import React, { useState } from 'react';
import { NavPage } from '../components/Header.tsx';
import { MetodologiaClinica } from '../components/MetodologiaClinica.tsx';
import {
  Activity,
  Layers,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Cloud,
  HardHat,
  HeartHandshake,
  GraduationCap,
  Zap,
} from 'lucide-react';

interface ServiciosPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const ServiciosPage: React.FC<ServiciosPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [activeTab, setActiveTab] = useState<'recuperat' | 'sinapsis' | 'laboral' | 'social' | 'academia'>('recuperat');

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          HERO & INTRODUCCIÓN SERVICIOS
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c5c] text-[#5ce9fe] text-[12px] font-mono mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#5ce9fe] animate-pulse" />
                <span>ECOSISTEMA MULTI-ESCALAR</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold leading-tight tracking-tight text-white mb-6">
                Servicios Clínicos y Ecosistema Tecnológico{' '}
                <span className="text-[#5ce9fe]">Fisioaleph</span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-white/85 leading-relaxed mb-8 max-w-2xl">
                Convergencia de kinesiología avanzada, infraestructura asistencial ambulatoria y plataformas SaaS orientadas a la recuperación neuromuscular integral.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 text-[#191c1e] shadow-xl border border-white/10">
                <div className="flex justify-between items-center text-[13px] mb-1">
                  <span className="text-[#555555] font-semibold">Tasa de Efectividad Clínica ROM</span>
                  <span className="font-mono font-bold text-[#006874]">96.4%</span>
                </div>
                <div className="w-full h-2 bg-[#f2f4f6] rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-[#26c6da] rounded-full" style={{ width: '96.4%' }} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#f7f9fb] p-3 rounded-lg border border-[#eeeeee]">
                    <span className="text-[10px] font-mono text-[#006874] uppercase font-bold block">
                      EVALUACIONES
                    </span>
                    <span className="text-[20px] font-mono font-bold text-[#003441]">+18,400</span>
                    <span className="text-[11px] text-[#555555] block">Dinámicas registradas</span>
                  </div>
                  <div className="bg-[#f7f9fb] p-3 rounded-lg border border-[#eeeeee]">
                    <span className="text-[10px] font-mono text-[#006874] uppercase font-bold block">
                      SEDES ZAPOPAN
                    </span>
                    <span className="text-[20px] font-mono font-bold text-[#003441]">2 Sedes</span>
                    <span className="text-[11px] text-[#555555] block">Valle Imp. &amp; Sendas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTOR INTERACTIVO DE 5 DIVISIONES
          ========================================================= */}
      <section className="w-full py-12 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              01. ARQUITECTURA DEL GRUPO • 5 DIVISIONES OFICIALES
            </span>
            <p className="text-[14px] text-[#555555] mt-1">
              Selecciona una división para consultar sus especificaciones técnicas y servicios:
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#eeeeee]">
            <button
              onClick={() => setActiveTab('recuperat')}
              className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'recuperat'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'bg-[#f7f9fb] text-[#555555] hover:bg-[#e0e3e5]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Centros Recuperat</span>
            </button>
            <button
              onClick={() => setActiveTab('sinapsis')}
              className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'sinapsis'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'bg-[#f7f9fb] text-[#555555] hover:bg-[#e0e3e5]'
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span>FisioSinapsis SaaS</span>
            </button>
            <button
              onClick={() => setActiveTab('laboral')}
              className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'laboral'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'bg-[#f7f9fb] text-[#555555] hover:bg-[#e0e3e5]'
              }`}
            >
              <HardHat className="w-4 h-4" />
              <span>Fisioterapia Laboral</span>
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'social'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'bg-[#f7f9fb] text-[#555555] hover:bg-[#e0e3e5]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>FisioSocial</span>
            </button>
            <button
              onClick={() => setActiveTab('academia')}
              className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'academia'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'bg-[#f7f9fb] text-[#555555] hover:bg-[#e0e3e5]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>AlphaDigitalFisio</span>
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="pt-8">
            {activeTab === 'recuperat' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                    UNIDAD DE PRÁCTICA ASISTENCIAL • ZAPOPAN: VALLE IMPERIAL &amp; PASEO SENDAS
                  </span>
                  <h3 className="text-[26px] font-bold text-[#003441] mb-3">
                    Centros Recuperat Fisioterapia &amp; Rehabilitación
                  </h3>
                  <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                    Rehabilitación ambulatoria intensiva soportada en tecnología y análisis de movimiento. Atendemos patologías ortopédicas agudas, recuperaciones postoperatorias de columna y readaptación de atletas de alta exigencia.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                      <Zap className="w-5 h-5 text-[#006874] mb-2" />
                      <div className="text-[14px] font-bold text-[#003441]">
                        Electroterapia y Ondas de Choque
                      </div>
                      <div className="text-[12px] text-[#555555] mt-1">
                        Frecuencias focales calibradas para neovascularización y analgesia inmediata.
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                      <Activity className="w-5 h-5 text-[#006874] mb-2" />
                      <div className="text-[14px] font-bold text-[#003441]">
                        Ortopedia Postoperatoria
                      </div>
                      <div className="text-[12px] text-[#555555] mt-1">
                        Protocolos estandarizados en ligamento cruzado, meniscos y manguito rotador.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenAppointmentModal}
                      className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white font-medium text-[14px] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agendar Consulta en Sede</span>
                    </button>
                    <button
                      onClick={() => onNavigate('clinicas')}
                      className="h-11 px-5 rounded-lg border border-[#0f4c5c] text-[#0f4c5c] hover:bg-[#0f4c5c]/5 font-medium text-[14px] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>Ver Tour de Sedes Zapopan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-[#eeeeee] shadow-md bg-[#f2f4f6]">
                    <img
                      src="/src/assets/images/hero_physiotherapy_clinic_1790299034660.jpg"
                      alt="Clínica Recuperat Fisioterapia"
                      referrerPolicy="no-referrer"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-white border-t border-[#eeeeee] flex items-center justify-between text-[12px]">
                      <span className="font-mono text-[#006874] font-semibold">
                        Sedes Valle Imperial &amp; Paseo Sendas
                      </span>
                      <span className="text-[#555555]">Zapopan, Jal.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sinapsis' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                    SOFTWARE DE GESTIÓN CLÍNICA • NOM-024-SSA3
                  </span>
                  <h3 className="text-[26px] font-bold text-[#003441] mb-3">
                    FisioSinapsis Fisioterapia Rehab SaaS
                  </h3>
                  <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                    Plataforma cloud especializada para terapeutas y clínicas. Monitoreo de arcos de movimiento (ROM), bitácora de rehabilitación y expediente clínico electrónico EMR seguro.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1.5 rounded-lg bg-[#f7f9fb] border border-[#eeeeee] text-[13px] text-[#003441] font-medium">
                      Cálculo de Grados ROM
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#f7f9fb] border border-[#eeeeee] text-[13px] text-[#003441] font-medium">
                      Cifrado de Grado Médico
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#f7f9fb] border border-[#eeeeee] text-[13px] text-[#003441] font-medium">
                      App Paciente &amp; Fisioterapeuta
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('planes-saas')}
                    className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white font-medium text-[14px] flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Explorar Planes SaaS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="/src/assets/images/physiotherapy_saas_platform_1790299063659.jpg"
                    alt="FisioSinapsis SaaS"
                    referrerPolicy="no-referrer"
                    className="rounded-2xl border border-[#eeeeee] shadow-md w-full object-cover"
                  />
                </div>
              </div>
            )}

            {activeTab === 'laboral' && (
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  SALUD OCUPACIONAL &amp; PREVENCIÓN INDUSTRIAL
                </span>
                <h3 className="text-[26px] font-bold text-[#003441] mb-3">
                  Fisioterapia Laboral &amp; Ergonomía
                </h3>
                <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                  Consultoría empresarial para prevención de desórdenes musculoesqueléticos en entornos corporativos e industriales. Alineación y peritaje normativo para NOM-035-STPS y NOM-036-1-STPS.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                    <div className="font-bold text-[#003441] text-[14px]">Análisis Ergonómico de Puestos</div>
                    <div className="text-[12px] text-[#555555] mt-1">Evaluación de cargas posturales y diseño de estaciones de trabajo saludables.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                    <div className="font-bold text-[#003441] text-[14px]">Pausas Activas y Talleres</div>
                    <div className="text-[12px] text-[#555555] mt-1">Programas directos en planta para reducción del ausentismo por dolor de espalda.</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="h-11 px-5 rounded-lg bg-[#003441] text-white text-[13px] font-medium"
                >
                  Contactar para Consulta Empresarial
                </button>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  RESPONSABILIDAD SOCIAL CLÍNICA
                </span>
                <h3 className="text-[26px] font-bold text-[#003441] mb-3">
                  FisioSocial Red Comunitaria
                </h3>
                <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                  Brazo social de Fisioaleph enfocado en brindar acceso equitativo a terapia física especializada para familias con vulnerabilidad económica, adultos mayores y atletas juveniles en Jalisco.
                </p>
                <div className="p-4 rounded-xl bg-[#c7eae1]/40 border border-[#c7eae1] mb-6">
                  <div className="font-bold text-[#003441] text-[15px]">+3,400 Familias Beneficiadas</div>
                  <div className="text-[13px] text-[#555555] mt-1">
                    Brigadas geriátricas de movilidad, talleres de prevención de caídas y programas subvencionados.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'academia' && (
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  CAMPUS DE FORMACIÓN CONTINUA
                </span>
                <h3 className="text-[26px] font-bold text-[#003441] mb-3">
                  AlphaDigitalFisio Academia
                </h3>
                <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                  Campus de educación médica continua montado sobre infraestructura LMS Moodle. Cursos y diplomados de rehabilitación funcional, goniometría digital y actualización en patologías de columna y extremidades.
                </p>
                <button
                  onClick={() => onNavigate('biblioteca')}
                  className="h-11 px-5 rounded-lg bg-[#0f4c5c] text-white text-[13px] font-medium flex items-center gap-2"
                >
                  <span>Explorar Cursos en Biblioteca</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENIDO OBLIGATORIO:
          Metodología Clínica en Tres Fases
          ========================================================= */}
      <MetodologiaClinica />

      {/* =========================================================
          EQUIPAMIENTO TECNOLÓGICO DE GRADO MÉDICO
          Con descripciones requeridas:
          - Mesa de Canabé de alta precisión
          - Consultorios privados completamente equipados
          - Equipo de ultrasonido y electroterapia de última generación
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              03. INSTRUMENTAL CLÍNICO HOSPITALARIO
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
              Equipamiento Tecnológico de Grado Médico
            </h2>
            <p className="text-[15px] text-[#555555] mt-2">
              Dispositivos certificados internacionalmente con mantenimiento preventivo riguroso y calibración metrológica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1: Mesa de Canabé de alta precisión */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#eeeeee] flex flex-col justify-between">
              <div className="h-48 overflow-hidden bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790299045300.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  PRECISIÓN POSTURAL
                </span>
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Mesa de Canabé de alta precisión
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Superficie clínica de valoración y tratamiento ergonómico para maniobras osteoarticulares exactas, descarga axial y readaptación neuromuscular.
                </p>
              </div>
            </div>

            {/* Item 2: Consultorios privados completamente equipados */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#eeeeee] flex flex-col justify-between">
              <div className="h-48 overflow-hidden bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/clinic_paseo_sendas_1790299054051.jpg"
                  alt="Consultorios privados completamente equipados"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  PRIVACIDAD Y DIAGNÓSTICO
                </span>
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Consultorios privados completamente equipados
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Espacios asépticos e independientes dotados de instrumental de goniometría, electrodiagnóstico e historia clínica digital conforme a la NOM-024-SSA3.
                </p>
              </div>
            </div>

            {/* Item 3: Equipo de ultrasonido y electroterapia de última generación */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#eeeeee] flex flex-col justify-between">
              <div className="h-48 overflow-hidden bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/hero_physiotherapy_clinic_1790299034660.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  ELECTROMEDICINA
                </span>
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Equipo de ultrasonido y electroterapia de última generación
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Emisión de ondas de microburbujas acústicas (1 MHz y 3 MHz) y corrientes analgésicas para desinflamación, alivio del dolor y aceleración tisular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION DUAL
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pacientes */}
            <div className="bg-[#003441] text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold block mb-2">
                  PARA PACIENTES Y ATLETAS
                </span>
                <h3 className="text-[24px] font-bold text-white mb-3">
                  ¿Vives con dolor o requieres rehabilitación posquirúrgica?
                </h3>
                <p className="text-[14px] text-white/80 leading-relaxed mb-6">
                  Agenda tu valoración inicial en Centros Recuperat Zapopan. Nuestro equipo médico y fisioterapéutico diseñará tu hoja de ruta personalizada.
                </p>
                <ul className="space-y-2 text-[13px] text-white/90 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe]" />
                    <span>Diagnóstico inicial en camilla y goniometría</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe]" />
                    <span>Sedes accesibles en Valle Imperial y Paseo Sendas</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenAppointmentModal}
                className="h-12 px-6 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita en Sede Zapopan</span>
              </button>
            </div>

            {/* Clínicas y terapeutas */}
            <div className="bg-white p-8 rounded-2xl border border-[#eeeeee] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-2">
                  PARA CLÍNICAS, EMPRESAS &amp; TERAPEUTAS
                </span>
                <h3 className="text-[24px] font-bold text-[#003441] mb-3">
                  Digitaliza tu práctica clínica o implementa ergonomía laboral
                </h3>
                <p className="text-[14px] text-[#555555] leading-relaxed mb-6">
                  Implementa la plataforma SaaS FisioSinapsis en tu consultorio o contrata un diagnóstico de puestos de trabajo conforme a la NOM-036-STPS.
                </p>
                <ul className="space-y-2 text-[13px] text-[#555555] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                    <span>Demostración guiada de FisioSinapsis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                    <span>Cotización formal para corporativos</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="h-12 px-5 rounded-lg bg-[#003441] hover:bg-[#0f4c5c] text-white font-medium text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Cloud className="w-4 h-4 text-[#5ce9fe]" />
                  <span>Ver Planes FisioSinapsis</span>
                </button>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="h-12 px-5 rounded-lg border border-[#003441] text-[#003441] hover:bg-[#f2f4f6] font-medium text-[14px] flex items-center justify-center cursor-pointer transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
