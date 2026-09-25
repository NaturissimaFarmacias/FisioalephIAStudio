import React, { useState } from 'react';
import { NavPage } from '../components/Header.tsx';
import {
  Search,
  BookOpen,
  FileText,
  Clock,
  Layers,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Download,
  AlertCircle,
  Activity,
  ArrowRight,
} from 'lucide-react';

interface BibliotecaPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const BibliotecaPage: React.FC<BibliotecaPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const filterTags = [
    'Todos (412)',
    'Rodilla & LCA (84)',
    'Columna & Hernia (112)',
    'Manguito Rotador (76)',
    'ROM & Movilidad (65)',
    'Ergonomía Laboral (75)',
  ];

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          HERO & REPOSITORIO HEADER
          ========================================================= */}
      <section className="w-full bg-[#003441] text-white py-14 lg:py-16 border-b border-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-2 text-[12px] font-mono text-[#5ce9fe]">
              <span className="w-2 h-2 rounded-full bg-[#5ce9fe] animate-pulse" />
              <span>REPOSITORIO CLÍNICO INDEXADO • 412 PROTOCOLOS COFEPRIS &amp; WCPT</span>
            </div>
            <div className="text-[12px] font-mono text-white/70">
              DIVISIÓN 05 • ALPHADIGITALFISIO
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-[32px] sm:text-[42px] font-bold text-white tracking-tight leading-tight mb-4">
                Biblioteca Digital Especializada en Fisioterapia
              </h1>
              <p className="text-[15px] sm:text-[16px] text-white/85 leading-relaxed max-w-2xl">
                Base viva de conocimiento clínico para fisioterapeutas y centros asistenciales: guías de tratamiento basadas en evidencia, escalas funcionales validadas y monografías traumatológicas.
              </p>

              {/* Quick stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-[#0f4c5c]/70 p-3.5 rounded-xl border border-white/10">
                  <div className="text-[22px] font-mono font-bold text-[#5ce9fe]">400+</div>
                  <div className="text-[11px] text-white/80 font-mono">Guías y Guiones</div>
                </div>
                <div className="bg-[#0f4c5c]/70 p-3.5 rounded-xl border border-white/10">
                  <div className="text-[22px] font-mono font-bold text-white">Nivel I-II</div>
                  <div className="text-[11px] text-white/80 font-mono">Evidencia Oxford</div>
                </div>
                <div className="bg-[#0f4c5c]/70 p-3.5 rounded-xl border border-white/10">
                  <div className="text-[22px] font-mono font-bold text-[#5ce9fe]">58</div>
                  <div className="text-[11px] text-white/80 font-mono">Escalas ROM</div>
                </div>
                <div className="bg-[#0f4c5c]/70 p-3.5 rounded-xl border border-white/10">
                  <div className="text-[22px] font-mono font-bold text-white">1-Click</div>
                  <div className="text-[11px] text-white/80 font-mono">A FisioSinapsis</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 text-[#191c1e] shadow-xl border border-white/10">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#eeeeee]">
                  <span className="text-[11px] font-mono font-bold text-[#006874] uppercase">
                    REGISTRO CLÍNICO
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f2f4f6] text-[#70787c]">
                    REV. 2025
                  </span>
                </div>

                <div className="flex flex-col items-center py-2">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#f2f4f6]"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#26c6da]"
                        strokeDasharray="94, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-[22px] font-mono font-bold text-[#003441]">138°</span>
                      <span className="text-[9px] font-mono text-[#555555]">FLEXIÓN RODILLA</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#006874] mt-2 font-semibold">
                    Cumplimiento Biológico: 94.2%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BARRA DE BÚSQUEDA Y FILTROS
          ========================================================= */}
      <section className="w-full py-8 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-4">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Buscar por patología, código CIE-11, autor o técnica (ej. LCA, McKenzie, Manguito Rotador)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag.split(' ')[0])}
                className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === tag.split(' ')[0]
                    ? 'bg-[#003441] text-white'
                    : 'bg-[#f7f9fb] text-[#555555] hover:bg-[#e0e3e5]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECCIÓN OBLIGATORIA:
          Título: “Protocolos de Tratamiento”
          Estado visible: “En construcción”
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with exact required title and status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#eeeeee] gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#006874] uppercase font-bold tracking-wider">
                CATÁLOGO CLÍNICO OFICIAL
              </span>
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[#262b38] tracking-tight mt-0.5">
                Protocolos de Tratamiento
              </h2>
            </div>

            {/* Estado visible obligatorio: En construcción */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span className="text-[13px] font-mono font-bold tracking-wide">
                Estado: En construcción
              </span>
            </div>
          </div>

          {/* Cards under construction notice */}
          <div className="mb-6 p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[13px] text-[#555555] leading-relaxed">
              La sección de <strong>Protocolos de Tratamiento</strong> se encuentra actualmente <strong>En construcción</strong> para la actualización documental del ciclo 2025. Los siguientes esquemas representan la arquitectura de contenido que se habilitará para descarga directa:
            </p>
          </div>

          {/* Protocol Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Protocol 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#eeeeee] shadow-xs flex flex-col justify-between opacity-90">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#f2f4f6] text-[#003441] font-bold">
                    FA-PROT-ROD-01
                  </span>
                  <span className="text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                    En construcción
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Reconstrucción de LCA: Plastia Autóloga y Alinjerto
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed mb-4">
                  Secuencia por ventanas de neoligamentización: control de efusión, extensión terminal a 0°, reeducación del cuádriceps en cadena cinética cerrada.
                </p>
                <div className="p-3 rounded-lg bg-[#f7f9fb] text-[12px] font-mono text-[#555555] space-y-1">
                  <div>Criterio Alta Fase I: Ext. 0° / Flex. 110°</div>
                  <div>Índice Simetría (LSI): &gt; 90%</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2f4f6]">
                <button
                  disabled
                  className="w-full py-2.5 rounded-lg bg-[#f2f4f6] text-[#70787c] text-[13px] font-mono font-medium cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>En construcción • Próximamente</span>
                </button>
              </div>
            </div>

            {/* Protocol 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#eeeeee] shadow-xs flex flex-col justify-between opacity-90">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#f2f4f6] text-[#003441] font-bold">
                    FA-PROT-COL-04
                  </span>
                  <span className="text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                    En construcción
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Lumbalgia Mecánica &amp; Hernia Discal con Principio McKenzie
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed mb-4">
                  Fenómeno de centralización discal (MDT), ejercicios en descarga por extensión pasiva sostenida, control motor lumbo-pélvico y desensibilización neural.
                </p>
                <div className="p-3 rounded-lg bg-[#f7f9fb] text-[12px] font-mono text-[#555555] space-y-1">
                  <div>Score Oswestry Base: Objetivo &lt; 14%</div>
                  <div>Test Extensión: Centralización +</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2f4f6]">
                <button
                  disabled
                  className="w-full py-2.5 rounded-lg bg-[#f2f4f6] text-[#70787c] text-[13px] font-mono font-medium cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>En construcción • Próximamente</span>
                </button>
              </div>
            </div>

            {/* Protocol 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#eeeeee] shadow-xs flex flex-col justify-between opacity-90">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#f2f4f6] text-[#003441] font-bold">
                    FA-PROT-HOM-02
                  </span>
                  <span className="text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                    En construcción
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#003441] mb-2">
                  Tendinopatía de Manguito Rotador y Reparación Artroscópica
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed mb-4">
                  Sobrecarga excéntrica guiada, estabilización escapulotorácica precoz, protección del tendón supraespinoso en plano de elevación escapular y retorno gradual.
                </p>
                <div className="p-3 rounded-lg bg-[#f7f9fb] text-[12px] font-mono text-[#555555] space-y-1">
                  <div>Índice DASH Esperado: &lt; 15 pts a sem 16</div>
                  <div>Fuerza Excéntrica: Recuperación simétrica</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f2f4f6]">
                <button
                  disabled
                  className="w-full py-2.5 rounded-lg bg-[#f2f4f6] text-[#70787c] text-[13px] font-mono font-medium cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>En construcción • Próximamente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEDICIÓN CLÍNICA Y GONIOMETRÍA
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[11px] font-mono text-[#006874] uppercase font-bold tracking-wider">
              MEDICIÓN CLÍNICA OBJETIVA
            </span>
            <h3 className="text-[26px] sm:text-[32px] font-bold text-[#262b38] tracking-tight mt-1">
              Hojas Metodológicas y Valores de Referencia
            </h3>
            <p className="text-[14px] text-[#555555] mt-1">
              Valores normativos por edad y género para la calibración del movimiento articular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goniometría */}
            <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[18px] font-bold text-[#003441] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#006874]" />
                  <span>Protocolo Goniométrico Digital (ROM)</span>
                </h4>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-[#70787c]">
                  Estándar Clínico
                </span>
              </div>
              <p className="text-[13px] text-[#555555] leading-relaxed mb-6">
                Instrucciones estandarizadas para alineación de goniómetro y control en ejes articulares. Criterios de tope final capsular, muscular o cartilaginoso.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#eeeeee] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#70787c]">Simulador de Arco de Movimiento</div>
                  <div className="text-[20px] font-mono font-bold text-[#003441]">Flexión Activa: 125°</div>
                  <div className="text-[11px] text-[#555555]">Rango normal adulto: 130° - 145°</div>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#c7eae1] flex items-center justify-center font-mono font-bold text-[#0f4c5c] text-[16px]">
                  125°
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 text-[11px] font-mono text-[#555555]">
                <div>• Eje: Epicóndilo lateral</div>
                <div>• Brazo fijo: Trocánter mayor</div>
                <div>• Brazo móvil: Maléolo lateral</div>
                <div>• Tolerancia instrumental: ±1.5°</div>
              </div>
            </div>

            {/* Escalas Funcionales */}
            <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#eeeeee]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[18px] font-bold text-[#003441] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#006874]" />
                  <span>Escalas Funcionales Digitalizadas</span>
                </h4>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-[#70787c]">
                  Cuestionarios Validados
                </span>
              </div>
              <p className="text-[13px] text-[#555555] leading-relaxed mb-6">
                Batería de cuestionarios validados internacionalmente para cuantificación del dolor y limitación funcional: WOMAC, Roland-Morris, Oswestry y QuickDASH.
              </p>

              <div className="space-y-2.5 text-[13px]">
                <div className="p-3 bg-white rounded-lg border border-[#eeeeee] flex items-center justify-between">
                  <span className="font-semibold text-[#003441]">Índice Oswestry (Lumbalgia)</span>
                  <span className="text-[11px] font-mono text-[#006874]">10 Secciones</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#eeeeee] flex items-center justify-between">
                  <span className="font-semibold text-[#003441]">Escala WOMAC (Artrosis Rodilla/Cadera)</span>
                  <span className="text-[11px] font-mono text-[#006874]">24 Ítems</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#eeeeee] flex items-center justify-between">
                  <span className="font-semibold text-[#003441]">QuickDASH (Miembro Superior)</span>
                  <span className="text-[11px] font-mono text-[#006874]">11 Preguntas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS MOODLE & FORMACIÓN CONTINUA
          ========================================================= */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold tracking-wider">
              CAMPUS VIRTUAL ALPHADIGITALFISIO
            </span>
            <h3 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight mt-1">
              Formación Continua y Acreditación Profesional
            </h3>
            <p className="text-[14px] text-white/80 mt-2">
              Plataforma educativa Moodle integrada con la práctica clínica de Centros Recuperat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0f4c5c]/60 p-6 sm:p-8 rounded-2xl border border-white/10">
              <span className="text-[11px] font-mono text-[#5ce9fe] block mb-1">
                MÓDULO DE POSTGRADO • 40 HORAS
              </span>
              <h4 className="text-[20px] font-bold text-white mb-3">
                Evaluación y Prescripción de Ejercicio Terapéutico en Columna
              </h4>
              <p className="text-[13px] text-white/80 leading-relaxed mb-6">
                Análisis de patrones de flexo-extensión lumbopélvica, prescripción de ejercicio terapéutico de precisión en hernias discales y control motor.
              </p>
              <div className="text-[12px] font-mono text-white/70 mb-4">
                Docente: Dr. Juan Manuel Flores Lira &amp; Equipo Recuperat
              </div>
              <div className="text-[12px] text-[#5ce9fe] font-mono font-semibold">
                Próximo inicio: 15 de cada mes
              </div>
            </div>

            <div className="bg-[#0f4c5c]/60 p-6 sm:p-8 rounded-2xl border border-white/10">
              <span className="text-[11px] font-mono text-[#5ce9fe] block mb-1">
                CERTIFICACIÓN CLÍNICA • 25 HORAS
              </span>
              <h4 className="text-[20px] font-bold text-white mb-3">
                Uso de Escalas Clínicas Digitalizadas en FisioSinapsis
              </h4>
              <p className="text-[13px] text-white/80 leading-relaxed mb-6">
                Estandarización en el llenado de índices funcionales, trazabilidad estadística bajo norma oficial de expediente clínico electrónico.
              </p>
              <div className="text-[12px] font-mono text-white/70 mb-4">
                Incluye Licencia SaaS Demo • Insignia Digital Verificable
              </div>
              <div className="text-[12px] text-[#5ce9fe] font-mono font-semibold">
                Modalidad: 100% Online Asíncrono
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
