import React from 'react';
import { Building2, Cloud, HardHat, HeartHandshake, GraduationCap, ChevronRight } from 'lucide-react';
import { NavPage } from './Header.tsx';

interface CincoDivisionesProps {
  onNavigate?: (page: NavPage) => void;
}

export const CincoDivisiones: React.FC<CincoDivisionesProps> = ({ onNavigate }) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
            ARQUITECTURA CLÍNICA &amp; ECOSISTEMA
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
            Las 5 Divisiones Estratégicas Fisioaleph
          </h2>
          <p className="text-[15px] text-[#555555] mt-2">
            Un engranaje multidisciplinario que abarca desde la atención clínica directa hasta la tecnología de gestión médica y la formación continua.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Division 1: Recuperat */}
          <div className="lg:col-span-2 bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#006874] uppercase tracking-wider">
                  DIVISIÓN 01 • RED ASISTENCIAL FÍSICA
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c]">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-[22px] font-bold text-[#003441] mb-2">
                Recuperat Fisioterapia &amp; Rehabilitación
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed max-w-xl mb-4">
                "Salud en movimiento". Centros de terapia física avanzada, recuperación postquirúrgica y ortopedia integral con equipamiento de grado hospitalario en Zapopan: Sedes Valle Imperial y Paseo Sendas.
              </p>
              <div className="flex flex-wrap gap-2 text-[12px] font-medium text-[#003441]">
                <span className="px-3 py-1 bg-white rounded-md border border-[#e0e3e5]">
                  Atención Ortopédica
                </span>
                <span className="px-3 py-1 bg-white rounded-md border border-[#e0e3e5]">
                  Rehabilitación Funcional
                </span>
                <span className="px-3 py-1 bg-white rounded-md border border-[#e0e3e5]">
                  Fisioterapia Deportiva
                </span>
              </div>
            </div>
            {onNavigate && (
              <div className="mt-6 pt-4 border-t border-[#e0e3e5]">
                <button
                  onClick={() => onNavigate('clinicas')}
                  className="text-[13px] font-semibold text-[#006874] hover:text-[#003441] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Conocer Sedes Valle Imperial &amp; Paseo Sendas</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Division 2: FisioSinapsis SaaS */}
          <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#006874] uppercase tracking-wider">
                  DIVISIÓN 02 • GESTIÓN CLÍNICA
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#5ce9fe]/30 flex items-center justify-center text-[#003441]">
                  <Cloud className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-[#003441] mb-2">
                FisioSinapsis Rehab SaaS
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-4">
                "Conectando Salud y Conocimiento". Plataforma de gestión clínica inteligente, bitácora en la nube y registro de expedientes conforme a la NOM-024-SSA3.
              </p>
              <div className="flex flex-wrap gap-2 text-[12px] font-medium text-[#003441]">
                <span className="px-3 py-1 bg-white rounded-md border border-[#e0e3e5]">
                  Control de ROM
                </span>
                <span className="px-3 py-1 bg-white rounded-md border border-[#e0e3e5]">
                  Expediente EMR
                </span>
              </div>
            </div>
            {onNavigate && (
              <div className="mt-6 pt-4 border-t border-[#e0e3e5]">
                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="text-[13px] font-semibold text-[#006874] hover:text-[#003441] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Planes para Profesionales &amp; Clínicas</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Division 3: Fisioterapia Laboral */}
          <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#006874] uppercase tracking-wider">
                  DIVISIÓN 03 • SALUD OCUPACIONAL
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#f2f4f6] flex items-center justify-center text-[#003441]">
                  <HardHat className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-[#003441] mb-2">
                Fisioterapia Laboral &amp; Ergonomía
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-4">
                Consultoría empresarial para prevención de desórdenes musculoesqueléticos. Implementación y peritaje normativo de la NOM-035 y NOM-036 en plantas productivas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e0e3e5] text-[12px] font-mono text-[#006874] font-semibold">
              Programas In-Company
            </div>
          </div>

          {/* Division 4: FisioSocial */}
          <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#006874] uppercase tracking-wider">
                  DIVISIÓN 04 • RESPONSABILIDAD SOCIAL
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c]">
                  <HeartHandshake className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-[#003441] mb-2">
                FisioSocial Red Comunitaria
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-4">
                Impacto comunitario directo y acceso equitativo a terapia física especializada para poblaciones vulnerables y atletas juveniles en Jalisco.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e0e3e5] text-[12px] font-mono text-[#006874] font-semibold">
              Brigadas Comunitarias
            </div>
          </div>

          {/* Division 5: AlphaDigitalFisio */}
          <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#006874] uppercase tracking-wider">
                  DIVISIÓN 05 • ACADEMIA
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#5ce9fe]/30 flex items-center justify-center text-[#003441]">
                  <GraduationCap className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-[#003441] mb-2">
                AlphaDigitalFisio Academia
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-4">
                Capacitación continua, diplomados especializados en rehabilitación funcional, validación de competencias y educación continua sobre campus Moodle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e0e3e5] text-[12px] font-mono text-[#006874] font-semibold">
              Cursos y Acreditación Digital
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
