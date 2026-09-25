import React from 'react';
import { NavPage } from '../components/Header.tsx';
import { CincoDivisiones } from '../components/CincoDivisiones.tsx';
import { EquipoClinico } from '../components/EquipoClinico.tsx';
import {
  Calendar,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Phone,
  MessageSquare,
  FileText,
  MapPin,
  Clock,
  Layers,
  Activity,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="relative w-full bg-[#003441] text-white overflow-hidden py-16 lg:py-24">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#26C6DA 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c5c] text-[#5ce9fe] text-[12px] font-mono mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#5ce9fe] animate-pulse" />
                <span>FISIOTERAPIA BASADA EN EVIDENCIA</span>
              </div>

              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold leading-tight tracking-tight text-white mb-6">
                Acción profesional con compromiso humano:{' '}
                <span className="text-[#5ce9fe]">Fisioterapia para el mundo</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-white/85 leading-relaxed mb-8 max-w-2xl">
                Ecosistema integral que conecta la tecnología médica avanzada FisioSinapsis con la excelencia clínica de Recuperat. Rehabilitación física de precisión, digitalización clínica de extremo a extremo y seguimiento terapéutico continuo certificado.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={onOpenAppointmentModal}
                  className="h-12 px-6 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[15px] flex items-center gap-2 shadow-sm cursor-pointer transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Cita en Clínica</span>
                </button>

                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="h-12 px-6 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white font-medium text-[15px] flex items-center gap-2 border border-white/10 cursor-pointer transition-colors"
                >
                  <Cloud className="w-4 h-4 text-[#5ce9fe]" />
                  <span>Explorar Planes SaaS / FisioSinapsis</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <button
                  onClick={() => onNavigate('biblioteca')}
                  className="text-[14px] text-[#98f0ff] hover:text-white flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <span>Biblioteca Digital</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10 max-w-sm">
                <div>
                  <div className="text-[26px] font-mono font-bold text-[#5ce9fe]">2 Sedes</div>
                  <div className="text-[12px] text-white/70 uppercase tracking-wider font-mono">
                    Zapopan, Jalisco
                  </div>
                </div>
                <div>
                  <div className="text-[26px] font-mono font-bold text-white">100%</div>
                  <div className="text-[12px] text-white/70 uppercase tracking-wider font-mono">
                    Validación Clínica
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Telemetry & Hero Visual */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-2xl text-[#191c1e] border border-[#0f4c5c]/20">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#eeeeee]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#006874]" />
                    <span className="text-[12px] font-mono font-bold text-[#003441]">
                      Monitoreo Fisioterapéutico Continuo
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f2f4f6] text-[#006874] font-semibold">
                    Centro Recuperat • Zapopan
                  </span>
                </div>

                {/* Hero image asset */}
                <div className="rounded-xl overflow-hidden mb-5 border border-[#eeeeee] relative aspect-[16/9] bg-[#f2f4f6]">
                  <img
                    src="/src/assets/images/hero_physiotherapy_clinic_1790299034660.jpg"
                    alt="Centro de rehabilitación física Fisioaleph en Zapopan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#003441]/90 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    Sede Valle Imperial
                  </div>
                </div>

                {/* Live Functional Progress Bar */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-[13px] mb-1">
                      <span className="font-semibold text-[#262b38]">
                        Rango de Movilidad Articular (ROM)
                      </span>
                      <span className="font-mono font-bold text-[#006874]">
                        138° <span className="text-gray-400 text-[11px]">/ 140° meta</span>
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#f2f4f6] rounded-full overflow-hidden">
                      <div className="h-full bg-[#26c6da] rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#c7eae1]/40 p-3 rounded-lg border border-[#c7eae1]">
                      <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block">
                        Evolución Clínica
                      </span>
                      <span className="text-[18px] font-mono font-bold text-[#003441]">
                        Sesión 8
                      </span>
                      <span className="text-[11px] text-[#555555] block">Fase de readaptación</span>
                    </div>
                    <div className="bg-[#f7f9fb] p-3 rounded-lg border border-[#eeeeee]">
                      <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block">
                        Prescripción Domicilio
                      </span>
                      <span className="text-[18px] font-mono font-bold text-[#003441]">
                        Activa
                      </span>
                      <span className="text-[11px] text-[#555555] block">App FisioSinapsis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CÓMO LA TERAPIA FÍSICA Y LA TECNOLOGÍA TRANSFORMAN VIDAS
          ========================================================= */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              INTEGRACIÓN CLÍNICA &amp; SALUD EN MOVIMIENTO
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-bold text-[#262b38] tracking-tight mt-1">
              Cómo la Terapia Física y la Tecnología Transforman Vidas
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#555555] mt-3 leading-relaxed">
              Fisioaleph opera como un modelo de precisión donde la evaluación diagnóstica, la automatización del tratamiento domiciliario y la intervención terapéutica convergen en un solo ciclo terapéutico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 */}
            <div className="bg-[#f7f9fb] p-8 rounded-2xl border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
              <div>
                <span className="text-[32px] font-mono font-bold text-[#006874] block mb-3">
                  01
                </span>
                <h3 className="text-[20px] font-bold text-[#003441] mb-3">
                  Optimización Tisular
                </h3>
                <p className="text-[14px] text-[#555555] leading-relaxed">
                  Aceleración y modulación del proceso de cicatrización fisiológica mediante protocolos combinados de electroterapia, ultrasonido focalizado y mecanotransducción celular.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-[#f7f9fb] p-8 rounded-2xl border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
              <div>
                <span className="text-[32px] font-mono font-bold text-[#006874] block mb-3">
                  02
                </span>
                <h3 className="text-[20px] font-bold text-[#003441] mb-3">
                  Recuperación ROM &amp; Fuerza
                </h3>
                <p className="text-[14px] text-[#555555] leading-relaxed">
                  Restauración de rangos de movimiento funcionales, readaptación de sinergias neuromusculares y fortalecimiento muscular medido en tiempo real.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-[#f7f9fb] p-8 rounded-2xl border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
              <div>
                <span className="text-[32px] font-mono font-bold text-[#006874] block mb-3">
                  03
                </span>
                <h3 className="text-[20px] font-bold text-[#003441] mb-3">
                  Prevención y Patología Crónica
                </h3>
                <p className="text-[14px] text-[#555555] leading-relaxed">
                  Abordaje interdisciplinario en afecciones degenerativas articulares, columna vertebral y síndromes osteomusculares derivados de la sobrecarga postural o deportiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LAS 5 DIVISIONES DEL ECOSISTEMA
          ========================================================= */}
      <CincoDivisiones onNavigate={onNavigate} />

      {/* =========================================================
          PLANES SAAS RESUMEN
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb] border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              FISIOSINAPSIS: PLATAFORMA CLÍNICA INTELIGENTE
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
              Planes SaaS para Pacientes, Profesionales y Clínicas
            </h2>
            <p className="text-[15px] text-[#555555] mt-2">
              Software clínico en la nube que centraliza historias clínicas, bitácoras de rehabilitación, recetas y protocolos bajo los más altos estándares de privacidad y seguridad médica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plan Paciente */}
            <div className="bg-white rounded-xl p-6 border border-[#eeeeee] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  Para Usuarios Clínicos
                </span>
                <h3 className="text-[20px] font-bold text-[#003441]">Plan Paciente</h3>
                <p className="text-[12px] text-[#555555] mt-1 mb-4">
                  Para personas bajo tratamiento adscrito a una historia clínica.
                </p>
                <div className="text-[24px] font-bold text-[#003441] mb-4">Sin Costo</div>
                <ul className="space-y-2 text-[12px] text-[#555555]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Consulta de ejercicios en casa durante y después del tratamiento</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso a programas terapéuticos domiciliarios interactivos</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Descarga de recetas médicas digitales y recomendaciones</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2f4f6]">
                <span className="block text-center py-2 px-3 rounded-lg bg-[#f2f4f6] text-[#70787c] text-[12px] font-mono font-medium">
                  En Construcción
                </span>
              </div>
            </div>

            {/* Profesional Individual */}
            <div className="bg-white rounded-xl p-6 border border-[#eeeeee] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  Terapeutas Autónomos
                </span>
                <h3 className="text-[20px] font-bold text-[#003441]">Profesional Individual</h3>
                <p className="text-[12px] text-[#555555] mt-1 mb-3">
                  Gestión clínica de precisión con capacidad para hasta 25 pacientes activos.
                </p>
                <div className="text-[26px] font-bold text-[#003441] mb-4">
                  $299 <span className="text-[12px] font-normal text-[#555555]">MXN / mes</span>
                </div>
                <ul className="space-y-2 text-[12px] text-[#555555]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso a los protocolos de tus pacientes</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Evaluación de tus pacientes</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Emisión de recetas y órdenes</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso a protocolos de fisioterapia</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso a biblioteca digital</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2f4f6]">
                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="w-full py-2.5 rounded-lg bg-[#0f4c5c] text-white hover:bg-[#003441] text-[13px] font-medium transition-colors cursor-pointer"
                >
                  Elegir Profesional
                </button>
              </div>
            </div>

            {/* Plan Equipo */}
            <div className="bg-white rounded-xl p-6 border border-[#eeeeee] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  Grupos de Especialistas
                </span>
                <h3 className="text-[20px] font-bold text-[#003441]">Plan Equipo</h3>
                <p className="text-[12px] text-[#555555] mt-1 mb-3">
                  Para consultorios compartidos y equipos médicos en expansión.
                </p>
                <div className="text-[26px] font-bold text-[#003441] mb-4">
                  $599 <span className="text-[12px] font-normal text-[#555555]">MXN / mes</span>
                </div>
                <ul className="space-y-2 text-[12px] text-[#555555]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Hasta 75 historias clínicas</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Protocolos colaborativos multi-terapeuta</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Integración de sesiones de tratamiento</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso a biblioteca digital</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2f4f6]">
                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="w-full py-2.5 rounded-lg bg-[#0f4c5c] text-white hover:bg-[#003441] text-[13px] font-medium transition-colors cursor-pointer"
                >
                  Elegir Equipo
                </button>
              </div>
            </div>

            {/* Centros y Clínicas */}
            <div className="bg-[#003441] rounded-xl p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-[#26c6da] text-[#003441] text-[10px] font-bold font-mono px-2 py-0.5 rounded">
                MÁS POPULAR
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold block mb-1">
                  Centros y Clínicas
                </span>
                <h3 className="text-[20px] font-bold text-white">Clínica &amp; Centros</h3>
                <p className="text-[12px] text-white/80 mt-1 mb-3">
                  Gestión total para clínicas con múltiples gabinetes y auditabilidad.
                </p>
                <div className="text-[26px] font-bold text-[#5ce9fe] mb-4">
                  $749 <span className="text-[12px] font-normal text-white/70">MXN / mes</span>
                </div>
                <ul className="space-y-2 text-[12px] text-white/85">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Hasta 100 historias clínicas integradas</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Panel multi-usuario con roles diferenciados</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Cumplimiento estricto NOM-024-SSA3</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Acceso completo a biblioteca digital</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="w-full py-2.5 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] text-[13px] font-bold transition-colors cursor-pointer"
                >
                  Comenzar con Clínica
                </button>
              </div>
            </div>
          </div>

          {/* Banner complementario */}
          <div className="mt-8 bg-white p-6 sm:p-8 rounded-xl border border-[#eeeeee] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c] shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold">
                  MÓDULO WEB PROPIO PARA TU CLÍNICA
                </span>
                <h4 className="text-[18px] font-bold text-[#003441] mt-0.5">
                  Digitaliza la Presencia de tu Consultorio
                </h4>
                <p className="text-[13px] text-[#555555] mt-1 max-w-xl">
                  Integra tu propio portal web corporativo conectado a Fisioaleph: catálogo de servicios médicos, agenda digital de citas sincronizada en tiempo real y registro de interesados.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('contacto')}
              className="h-11 px-6 rounded-lg bg-[#003441] hover:bg-[#0f4c5c] text-white font-medium text-[13px] whitespace-nowrap cursor-pointer transition-colors"
            >
              Preguntar por Presupuesto
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          BIBLIOTECA DIGITAL PREVIEW
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
                EVIDENCIA CIENTÍFICA &amp; EBP
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1 mb-4">
                Biblioteca Digital Especializada en Fisioterapia
              </h2>
              <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                Fisioaleph proporciona a profesionales y centros de rehabilitación acceso a una base viva de conocimiento: protocolos clínicos estandarizados, escalas de evaluación funcional internacionalmente validadas, monografías de rehabilitación física y guías terapéuticas basadas en evidencia rigurosa.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#eeeeee]">
                  <FileText className="w-5 h-5 text-[#006874] mb-2" />
                  <div className="text-[14px] font-bold text-[#003441]">Protocolos Validados</div>
                  <div className="text-[12px] text-[#555555] mt-1">
                    Guías paso a paso para postoperatorios de hombro, rodilla y raquis.
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#eeeeee]">
                  <Activity className="w-5 h-5 text-[#006874] mb-2" />
                  <div className="text-[14px] font-bold text-[#003441]">Pruebas Funcionales</div>
                  <div className="text-[12px] text-[#555555] mt-1">
                    Baterías de goniometría digital y valoración de movilidad.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate('biblioteca')}
                  className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white text-[14px] font-medium transition-colors cursor-pointer"
                >
                  Explorar Repositorio Clínico
                </button>
                <button
                  onClick={() => onNavigate('biblioteca')}
                  className="text-[14px] text-[#006874] font-medium hover:text-[#003441] transition-colors cursor-pointer"
                >
                  Cursos Moodle →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#eeeeee] shadow-lg bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/physiotherapy_saas_platform_1790299063659.jpg"
                  alt="Plataforma de biblioteca digital Fisioaleph"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#eeeeee] flex items-center justify-between text-[12px] font-mono text-[#555555]">
                  <span className="flex items-center gap-1.5 text-[#0f4c5c] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                    Actualización Continua 2025
                  </span>
                  <span>+400 Artículos y Guías Clínicas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSTALACIONES DE PRECISIÓN (CENTROS RECUPERAT)
          Con descripciones requeridas:
          - Mesa de Canabé de alta precisión
          - Consultorios privados completamente equipados
          - Equipo de ultrasonido y electroterapia de última generación
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb] border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
                INSTALACIONES / CONTACTO
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
                Centros Recuperat: Excelencia Clínica en Zapopan
              </h2>
              <p className="text-[15px] text-[#555555] mt-2">
                Espacios diseñados para maximizar la comodidad del paciente y la efectividad terapéutica y funcional.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-[12px] font-mono text-[#006874] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certificación Sanitaria COFEPRIS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Mesa de Canabé de alta precisión */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790299045300.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Mesa de Canabé de alta precisión
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Área de reeducación neuromuscular y readaptación funcional con equipamiento ergonómico de grado clínico para una valoración y tratamiento postural exacto.
                </p>
              </div>
            </div>

            {/* Card 2: Consultorios privados completamente equipados */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/clinic_paseo_sendas_1790299054051.jpg"
                  alt="Consultorios privados completamente equipados"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Consultorios privados completamente equipados
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Valoración traumatológica y médica de rehabilitación con instrumental diagnóstico de alta precisión, garantizando privacidad y confort integral en cada consulta.
                </p>
              </div>
            </div>

            {/* Card 3: Equipo de ultrasonido y electroterapia de última generación */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/hero_physiotherapy_clinic_1790299034660.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Equipo de ultrasonido y electroterapia de última generación
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Aparatos certificados para electroanalgesia, modulación del dolor tisular, termoterapia profunda y bioestimulación celular acelerada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUERPO CLÍNICO
          ========================================================= */}
      <EquipoClinico />

      {/* =========================================================
          SEDES Y CONTACTO INMEDIATO
          ========================================================= */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[12px] font-mono tracking-widest text-[#5ce9fe] uppercase font-bold">
                ATENCIÓN PERSONALIZADA EN ZAPOPAN
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-bold text-white tracking-tight mt-1 mb-4">
                Nuestras Sedes Clínicas en Zapopan
              </h2>
              <p className="text-[15px] text-white/85 leading-relaxed mb-8 max-w-xl">
                Acude a nuestras clínicas de fisioterapia o contáctanos directamente para asesoría médica y funcional sobre tu proceso de recuperación.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Sede Valle Imperial */}
                <div className="bg-[#0f4c5c]/70 p-5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[14px] font-bold text-[#98f0ff]">Clínica Valle Imperial</span>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/90">
                      Zapopan Norte
                    </span>
                  </div>
                  <p className="text-[12px] text-white/80 leading-relaxed mb-3">
                    Boulevard Valle Imperial # 260 - 18, Colonia Nuevo México / Valle Imperial, C.P. 45134, Zapopan, Jal.
                  </p>
                  <div className="text-[12px] text-white/90 space-y-1">
                    <div>Tel: (33) 9688-6699</div>
                    <div>WhatsApp: (33) 2351-7843</div>
                  </div>
                </div>

                {/* Sede Paseo Sendas */}
                <div className="bg-[#0f4c5c]/70 p-5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[14px] font-bold text-[#98f0ff]">Sede Plaza Paseo Sendas</span>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/90">
                      Zapopan Poniente
                    </span>
                  </div>
                  <p className="text-[12px] text-white/80 leading-relaxed mb-3">
                    Av. Guadalajara 3523, Local 8 y 14-B, Fraccionamiento Sendas Residencial, C.P. 45140, Zapopan, Jal.
                  </p>
                  <div className="text-[12px] text-white/90 space-y-1">
                    <div>Tel: (33) 2407-4211</div>
                    <div>Tel: (33) 3803-4475</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-[#191c1e] shadow-2xl">
                <h3 className="text-[20px] font-bold text-[#003441] mb-2">
                  ¿Tienes alguna consulta o requieres valoración?
                </h3>
                <p className="text-[13px] text-[#555555] mb-6">
                  Comunícate con nuestro equipo clínico para agendar tu consulta o conocer el tratamiento indicado.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={onOpenAppointmentModal}
                    className="w-full h-12 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Cita en Zapopan</span>
                  </button>
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="w-full h-12 rounded-lg bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#003441] font-medium text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#006874]" />
                    <span>Ir a Formulario de Contacto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
