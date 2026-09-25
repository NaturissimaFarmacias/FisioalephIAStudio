import React from 'react';
import { Activity, ShieldCheck, Home, FileText, CheckCircle2 } from 'lucide-react';

export const MetodologiaClinica: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#f7f9fb] border-y border-[#eeeeee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              02. RUTA ASISTENCIAL
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
              Metodología Clínica de Fisioterapia y Rehabilitación
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#555555] mt-3 leading-relaxed">
              Cada paciente transita por un itinerario clínico estructurado, con valoración objetiva de la lesión, control de rangos de movilidad (ROM) y trazabilidad completa del progreso.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c7eae1] text-[#0f4c5c] text-[12px] font-mono font-bold tracking-wider">
              <Activity className="w-4 h-4 text-[#006874]" />
              <span>CICLO TERAPÉUTICO PROMEDIO: 6 A 12 SESIONES</span>
            </div>
          </div>
        </div>

        {/* 3 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Fase 01 */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-mono font-bold text-[#006874]">01</span>
                <div className="w-10 h-10 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#003441]">
                  <Activity className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#262b38] mb-3">
                Evaluación Integral &amp; Diagnóstico Cinético
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed">
                Valoración exhaustiva del daño tisular, escala de dolor y medición precisa de rangos de movimiento (ROM), diferenciando condiciones agudas y crónicas, con establecimiento de línea base y descarte de banderas rojas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f2f4f6] flex items-start gap-2 text-[12px] text-[#006874] font-medium">
              <FileText className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Entregable: Ficha de Evaluación Funcional y Registro ROM</span>
            </div>
          </div>

          {/* Fase 02 */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-mono font-bold text-[#006874]">02</span>
                <div className="w-10 h-10 rounded-lg bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c]">
                  <ShieldCheck className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#262b38] mb-3">
                Intervención Terapéutica Estándar
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed">
                Ejecución de protocolos de tratamiento basados en evidencia y estándares clínicos rigurosos, orientados a la modulación del dolor, recuperación neuromuscular y restauración de la funcionalidad tisular.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f2f4f6] flex items-start gap-2 text-[12px] text-[#006874] font-medium">
              <FileText className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Entregable: Protocolo de Tratamiento Estándar</span>
            </div>
          </div>

          {/* Fase 03 */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#eeeeee] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-mono font-bold text-[#006874]">03</span>
                <div className="w-10 h-10 rounded-lg bg-[#5ce9fe]/25 flex items-center justify-center text-[#003441]">
                  <Home className="w-5 h-5 text-[#006874]" />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#262b38] mb-3">
                Evaluación Continua &amp; Alta con Protocolo Domiciliario
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed">
                Seguimiento de la evolución clínica sesión a sesión mediante revaloración de rangos de movimiento y control de cargas, culminando con el alta médica acompañada de un programa estructurado de ejercicios y prevención en casa.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f2f4f6] flex items-start gap-2 text-[12px] text-[#006874] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Entregable: Reporte de Alta &amp; Guía de Readaptación en Casa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
