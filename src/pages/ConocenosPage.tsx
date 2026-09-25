import React from 'react';
import { NavPage } from '../components/Header.tsx';
import { MetodologiaClinica } from '../components/MetodologiaClinica.tsx';
import { CincoDivisiones } from '../components/CincoDivisiones.tsx';
import {
  Compass,
  Target,
  Heart,
  Scale,
  Users,
  Building,
  CheckCircle,
  FileCheck,
  ShieldCheck,
  Calendar,
  Phone,
  ArrowRight,
} from 'lucide-react';

interface ConocenosPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const ConocenosPage: React.FC<ConocenosPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          HERO & EXPEDIENTE DE IDENTIDAD
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
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c5c] text-[#5ce9fe] text-[12px] font-mono mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#5ce9fe] animate-pulse" />
                <span>EXPEDIENTE DE IDENTIDAD INSTITUCIONAL</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold leading-tight tracking-tight text-white mb-6">
                Acción profesional con compromiso humano:{' '}
                <span className="text-[#5ce9fe]">Fisioterapia para el mundo.</span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-white/85 leading-relaxed mb-8 max-w-2xl">
                Fisioaleph consolida el epicentro de innovación clínica, plataformas SaaS de prescripción terapéutica y centros clínicos de alta especialidad en Zapopan, Jalisco. Transformamos la recuperación funcional mediante ciencia basada en evidencia.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#filosofia"
                  className="h-11 px-5 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[14px] flex items-center gap-2 transition-colors"
                >
                  <span>Conoce Nuestra Filosofía</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#divisiones"
                  className="h-11 px-5 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white font-medium text-[14px] flex items-center gap-2 border border-white/10 transition-colors"
                >
                  <span>Ecosistema de 5 Divisiones</span>
                </a>
              </div>
            </div>

            {/* Diagnostic card simulation */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 text-[#191c1e] shadow-xl border border-white/10">
                <div className="flex items-center justify-between pb-3 mb-4 bg-[#f2f4f6] rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0f4c5c]" />
                    <span className="text-[12px] font-mono font-bold text-[#003441]">
                      NODO CENTRAL ZAPOPAN
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#70787c]">
                    LIVE SYNC
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-[13px] mb-1">
                      <span className="text-[#555555]">Precisión de Rango Articular (ROM)</span>
                      <span className="font-mono font-bold text-[#003441]">
                        142.5° <span className="text-[11px] font-normal text-gray-400">/ 145°</span>
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#f2f4f6] rounded-full overflow-hidden">
                      <div className="h-full bg-[#26c6da] rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#c7eae1]/40 p-3 rounded-lg">
                      <span className="text-[10px] font-mono text-[#006874] uppercase font-bold block">
                        ADHERENCIA EBP
                      </span>
                      <span className="text-[20px] font-mono font-bold text-[#003441]">99.4%</span>
                      <span className="text-[11px] text-[#555555] block">Protocolos clínicos</span>
                    </div>
                    <div className="bg-[#f2f4f6] p-3 rounded-lg">
                      <span className="text-[10px] font-mono text-[#003441] uppercase font-bold block">
                        REHABILITADOS
                      </span>
                      <span className="text-[20px] font-mono font-bold text-[#003441]">18,500+</span>
                      <span className="text-[11px] text-[#555555] block">Pacientes activos</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-[12px] text-[#555555] border-t border-[#eeeeee]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-[#006874]" /> COFEPRIS Vigente
                    </span>
                    <span className="flex items-center gap-1">
                      <FileCheck className="w-4 h-4 text-[#006874]" /> NOM-024-SSA3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HISTORIA Y TRAYECTORIA
          ========================================================= */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              GÉNESIS Y EVOLUCIÓN
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
              De una camilla clínica al ecosistema más completo de Occidente
            </h2>
            <p className="text-[15px] text-[#555555] mt-3 leading-relaxed">
              Fisioaleph nació de la necesidad apremiante de erradicar los enfoques empíricos no medibles en terapia física. Lo que inició como el centro clínico Recuperat evolucionó en una organización enfocada en datos, recuperación funcional y empatía terapéutica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#eeeeee] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#003441] font-mono font-bold text-[18px] mb-4 shadow-xs">
                  01
                </div>
                <span className="text-[11px] font-mono text-[#006874] font-bold uppercase tracking-wider block mb-1">
                  2017 — Origen Clínico
                </span>
                <h3 className="text-[18px] font-bold text-[#262b38] mb-2">Centros Recuperat</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Apertura de la primera sede en Valle Imperial, Zapopan. Establecimiento de protocolos rigurosos de mecanoterapia, terapia manual de precisión y readaptación funcional personalizada.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded p-2 text-center border border-[#eeeeee]">
                <span className="text-[11px] font-mono text-[#003441] font-semibold">
                  Base de Validación Presencial
                </span>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#eeeeee] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#c7eae1] flex items-center justify-center text-[#0f4c5c] font-mono font-bold text-[18px] mb-4 shadow-xs">
                  02
                </div>
                <span className="text-[11px] font-mono text-[#006874] font-bold uppercase tracking-wider block mb-1">
                  2020 — Ruptura Digital
                </span>
                <h3 className="text-[18px] font-bold text-[#262b38] mb-2">Nacimiento de FisioSinapsis</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Ante los retos de continuidad ambulatoria, el equipo desarrolla software propio en la nube para prescripción con retroalimentación funcional y medición de rangos de movimiento en tiempo real.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded p-2 text-center border border-[#eeeeee]">
                <span className="text-[11px] font-mono text-[#003441] font-semibold">
                  Medición de Grados ROM
                </span>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#eeeeee] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f4c5c] flex items-center justify-center text-[#5ce9fe] font-mono font-bold text-[18px] mb-4 shadow-xs">
                  03
                </div>
                <span className="text-[11px] font-mono text-[#006874] font-bold uppercase tracking-wider block mb-1">
                  2023 - Presente
                </span>
                <h3 className="text-[18px] font-bold text-[#262b38] mb-2">Fisioaleph Integral</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Integración multisectorial: Medicina de Precisión, Prevención Ocupacional NOM-035, Academia Virtual AlphaDigitalFisio y la red comunitaria sin fines de lucro FisioSocial.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded p-2 text-center border border-[#eeeeee]">
                <span className="text-[11px] font-mono text-[#003441] font-semibold">
                  Calidad en Gestión Clínica
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILOSOFÍA INSTITUCIONAL
          ========================================================= */}
      <section className="w-full py-16 bg-[#f2f4f6]" id="filosofia">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
                POLÍTICA DE CALIDAD CLÍNICA
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
                Filosofía Institucional &amp; Propósito Científico
              </h2>
            </div>
            <p className="text-[14px] text-[#555555] max-w-md">
              Nuestra gobernanza médica unifica la evidencia clínica sistemática con la dignidad y calidez en el trato a cada paciente en proceso de recuperación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Misión */}
            <div className="bg-white p-8 rounded-2xl border border-[#eeeeee] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#70787c] uppercase font-bold">
                      COMPROMISO PRIMARIO
                    </span>
                    <h3 className="text-[22px] font-bold text-[#003441]">Misión Fisioaleph</h3>
                  </div>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#191c1e] leading-relaxed">
                  Impulsar el acceso a una rehabilitación integral de vanguardia mediante la convergencia de medicina física basada en evidencia y calidez humana, devolviendo a cada individuo su máxima autonomía funcional.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-[#006874] font-medium">
                <CheckCircle className="w-4 h-4 text-[#006874]" />
                <span>Alineado con el Código Ético de la Confederación Mundial de Fisioterapia</span>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-2xl border border-[#eeeeee] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5ce9fe]/30 flex items-center justify-center text-[#003441]">
                    <Compass className="w-6 h-6 text-[#006874]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#70787c] uppercase font-bold">
                      HORIZONTE ESTRATÉGICO
                    </span>
                    <h3 className="text-[22px] font-bold text-[#003441]">Visión Continental</h3>
                  </div>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#191c1e] leading-relaxed">
                  Consolidarnos como la institución de mayor prestigio y solvencia científica en rehabilitación física, articulando centros de atención modelo, tecnología SaaS interoperable y formación continua de alta rigurosidad.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-[#006874] font-medium">
                <CheckCircle className="w-4 h-4 text-[#006874]" />
                <span>Interoperabilidad conforme a NOM-024-SSA3 para expedientes clínicos</span>
              </div>
            </div>
          </div>

          {/* Valores Rectores */}
          <div className="bg-white rounded-2xl p-8 border border-[#eeeeee] shadow-sm">
            <h4 className="text-[20px] font-bold text-[#003441] mb-6">Valores Rectores</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                <Scale className="w-5 h-5 text-[#006874] mb-2" />
                <span className="text-[14px] font-bold text-[#003441] block mb-1">
                  Rigor y Evidencia
                </span>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  Protocolos sujetos a validación clínica continua y metaanálisis actualizado.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                <Target className="w-5 h-5 text-[#006874] mb-2" />
                <span className="text-[14px] font-bold text-[#003441] block mb-1">
                  Innovación Clínica
                </span>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  Transformamos mediciones funcionales en planes de recuperación precisos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                <Heart className="w-5 h-5 text-[#006874] mb-2" />
                <span className="text-[14px] font-bold text-[#003441] block mb-1">
                  Humanidad &amp; Escucha
                </span>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  La tecnología complementa la empatía médica, nunca sustituye el toque humano.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                <ShieldCheck className="w-5 h-5 text-[#006874] mb-2" />
                <span className="text-[14px] font-bold text-[#003441] block mb-1">
                  Integridad Normativa
                </span>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  Apego irrestricto a COFEPRIS y confidencialidad médica LFPDPPP.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                <Users className="w-5 h-5 text-[#006874] mb-2" />
                <span className="text-[14px] font-bold text-[#003441] block mb-1">
                  Impacto Compartido
                </span>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  Reinvertimos conocimiento en sectores con vulnerabilidad vía FisioSocial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENIDO OBLIGATORIO:
          CONÓCENOS – Metodología Clínica
          ========================================================= */}
      <MetodologiaClinica />

      {/* =========================================================
          5 DIVISIONES DEL ECOSISTEMA
          ========================================================= */}
      <div id="divisiones">
        <CincoDivisiones onNavigate={onNavigate} />
      </div>

      {/* =========================================================
          ESTÁNDARES Y CUMPLIMIENTO SANITARIO (NO ISO, NO AUDITORÍA)
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              CERTEZA JURÍDICA Y SANITARIA
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#262b38] tracking-tight mt-1">
              Acreditaciones Sanitarias &amp; Estándares Oficiales
            </h2>
            <p className="text-[15px] text-[#555555] mt-2">
              Cada proceso en Fisioaleph está alineado con las regulaciones mexicanas e internacionales en materia de salud y accesibilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aviso COFEPRIS */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#eeeeee]">
              <div className="w-12 h-12 rounded-xl bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#006874] font-bold uppercase">
                REGULACIÓN SANITARIA
              </span>
              <h3 className="text-[18px] font-bold text-[#003441] mt-1 mb-2">Aviso COFEPRIS</h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Establecimientos de atención médica con responsable sanitario debidamente registrado ante la Comisión Federal para la Protección contra Riesgos Sanitarios.
              </p>
            </div>

            {/* NOM-024-SSA3 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#eeeeee]">
              <div className="w-12 h-12 rounded-xl bg-[#5ce9fe]/30 flex items-center justify-center text-[#003441] mb-4">
                <FileCheck className="w-6 h-6 text-[#006874]" />
              </div>
              <span className="text-[11px] font-mono text-[#006874] font-bold uppercase">
                EXPEDIENTE ELECTRÓNICO
              </span>
              <h3 className="text-[18px] font-bold text-[#003441] mt-1 mb-2">NOM-024-SSA3</h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Sistemas de información de registro electrónico para la salud. Interoperabilidad, confidencialidad y preservación fidedigna de notas clínicas.
              </p>
            </div>

            {/* WCAG 2.2 AA */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#eeeeee]">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#003441] mb-4 border border-[#eeeeee]">
                <CheckCircle className="w-6 h-6 text-[#006874]" />
              </div>
              <span className="text-[11px] font-mono text-[#006874] font-bold uppercase">
                ACCESIBILIDAD DIGITAL
              </span>
              <h3 className="text-[18px] font-bold text-[#003441] mt-1 mb-2">WCAG 2.2 AA</h3>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Garantía de interfaces inclusivas para pacientes con afecciones motoras o sensoriales, permitiendo navegar y acceder a su programa de recuperación sin barreras.
              </p>
            </div>
          </div>

          {/* Sede Central Banner - with "Contacto" button (rule: solo "Contacto") */}
          <div className="mt-12 bg-[#003441] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0f4c5c] flex items-center justify-center text-[#5ce9fe] shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-white">Sede Central Zapopan</h3>
                <p className="text-[13px] text-white/80 mt-0.5">
                  Valle Imperial &amp; Paseo Sendas • Zapopan, Jalisco, México.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('contacto')}
                className="h-11 px-5 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[13px] transition-colors cursor-pointer"
              >
                Contacto
              </button>
              <a
                href="tel:+523396886699"
                className="h-11 px-4 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white text-[13px] font-medium flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>33 9688-6699</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
