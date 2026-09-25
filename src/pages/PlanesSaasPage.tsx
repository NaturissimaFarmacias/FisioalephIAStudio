import React, { useState } from 'react';
import { NavPage } from '../components/Header.tsx';
import {
  Check,
  Cloud,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Layers,
  ArrowRight,
  FileCheck,
  Calendar,
  Lock,
} from 'lucide-react';

interface PlanesSaasPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const PlanesSaasPage: React.FC<PlanesSaasPageProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [demoRequested, setDemoRequested] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

  const faqs = [
    {
      q: '¿Cómo funciona la migración de expedientes si ya utilizo otra plataforma o papel?',
      a: 'Nuestro equipo técnico ofrece asistencia guiada de importación de expedientes para transferir antecedentes, notas de evolución y datos generales de manera segura y confidencial.',
    },
    {
      q: '¿Existe algún periodo de prueba gratuito para los planes profesionales y clínicos?',
      a: 'Sí, puedes solicitar una demostración guiada de 14 días sin costo para comprobar el flujo clínico de FisioSinapsis antes de activar tu suscripción.',
    },
    {
      q: '¿Qué sucede si excedo el número de historias clínicas activas de mi plan?',
      a: 'La plataforma te notificará preventivamente y podrás escalar a un plan superior en cualquier momento conservando todo tu historial intacto.',
    },
    {
      q: '¿La plataforma cumple con las inspecciones sanitarias de COFEPRIS?',
      a: 'Totalmente. FisioSinapsis está desarrollada estrictamente bajo los lineamientos de la NOM-024-SSA3 para sistemas de información de registro electrónico para la salud.',
    },
    {
      q: '¿Cómo se adquiere el módulo complementario de Página Web para mi clínica?',
      a: 'Puedes solicitarlo como módulo adicional. Diseñamos e implementamos tu sitio web corporativo integrado a tu agenda de citas de FisioSinapsis.',
    },
  ];

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (demoEmail.trim()) {
      setDemoRequested(true);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          HERO & TOGGLE DE FACTURACIÓN
          ========================================================= */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
            FISIOSINAPSIS • SOFTWARE CLÍNICO EN LA NUBE
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#262b38] tracking-tight mt-2 mb-4 max-w-3xl mx-auto">
            Gestión clínica de precisión diseñada para terapeutas y centros de alta demanda.
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed">
            Plataforma cloud especializada en rehabilitación física, control de rangos de movimiento (ROM), bitácoras clínicas y expedientes electrónicos conformes a la NOM-024-SSA3.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-[#f2f4f6] border border-[#eeeeee]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#003441] shadow-xs'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#003441] shadow-xs'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              <span>Facturación Anual</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#c7eae1] text-[#0f4c5c]">
                2 Meses Gratis
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING CARDS GRID
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plan Paciente */}
            <div className="bg-white rounded-2xl p-6 border border-[#eeeeee] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  MÓDULO USUARIO
                </span>
                <h3 className="text-[20px] font-bold text-[#003441]">Plan Paciente</h3>
                <p className="text-[12px] text-[#555555] mt-1 mb-4 leading-relaxed">
                  Para personas vinculadas a una historia clínica autorizada.
                </p>
                <div className="text-[26px] font-bold text-[#003441] mb-1">Sin Costo</div>
                <div className="text-[11px] font-mono text-[#70787c] mb-6">
                  Acceso mientras dure el tratamiento
                </div>

                <div className="space-y-3 text-[13px] text-[#555555]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Ejercicios guiados para realizar en casa durante y pos-sesión.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Descarga de pautas ergonómicas y cuidados posturales en PDF.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Recordatorios de citas y apego a la rutina en el hogar.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f2f4f6]">
                <div className="w-full py-2.5 rounded-lg bg-[#f2f4f6] text-[#70787c] text-center text-[12px] font-mono font-semibold">
                  En Construcción
                </div>
              </div>
            </div>

            {/* Plan Profesional Individual */}
            <div className="bg-white rounded-2xl p-6 border border-[#eeeeee] flex flex-col justify-between shadow-xs hover:border-[#26c6da]/50 transition-all">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  ESPECIALISTA AUTÓNOMO
                </span>
                <h3 className="text-[20px] font-bold text-[#003441]">Profesional</h3>
                <p className="text-[12px] text-[#555555] mt-1 mb-4 leading-relaxed">
                  Para terapeutas independientes y consultorios privados.
                </p>
                <div className="text-[28px] font-bold text-[#003441] mb-1">
                  {billingCycle === 'monthly' ? '$299' : '$249'}
                  <span className="text-[13px] font-normal text-[#555555]"> MXN / mes</span>
                </div>
                <div className="text-[11px] font-mono text-[#006874] font-semibold mb-6">
                  Hasta 25 historias clínicas activas
                </div>

                <div className="space-y-3 text-[13px] text-[#555555]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Evaluación de tus pacientes y registro de ROM.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Emisión de recetas oficiales con firma electrónica.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Órdenes de laboratorio e imagenología.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso total a la Biblioteca Digital Fisioaleph.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f2f4f6]">
                <button
                  onClick={() => onNavigate('contacto')}
                  className="w-full py-2.5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  Elegir Profesional
                </button>
              </div>
            </div>

            {/* Plan Equipo */}
            <div className="bg-white rounded-2xl p-6 border border-[#eeeeee] flex flex-col justify-between shadow-xs hover:border-[#26c6da]/50 transition-all">
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                  MULTI-TERAPEUTA
                </span>
                <h3 className="text-[20px] font-bold text-[#003441]">Plan Equipo</h3>
                <p className="text-[12px] text-[#555555] mt-1 mb-4 leading-relaxed">
                  Para consultorios compartidos y gabinetes en expansión.
                </p>
                <div className="text-[28px] font-bold text-[#003441] mb-1">
                  {billingCycle === 'monthly' ? '$599' : '$499'}
                  <span className="text-[13px] font-normal text-[#555555]"> MXN / mes</span>
                </div>
                <div className="text-[11px] font-mono text-[#006874] font-semibold mb-6">
                  Hasta 75 historias clínicas integradas
                </div>

                <div className="space-y-3 text-[13px] text-[#555555]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Todo lo incluido en Profesional.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Protocolos colaborativos multi-terapeuta.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Gestión sincronizada de salas de rehabilitación.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Asignación cruzada entre fisioterapeutas del centro.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f2f4f6]">
                <button
                  onClick={() => onNavigate('contacto')}
                  className="w-full py-2.5 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  Elegir Equipo
                </button>
              </div>
            </div>

            {/* Clínica & Centros */}
            <div className="bg-[#003441] rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#26c6da] text-[#003441] text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full">
                MÁS POPULAR
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#5ce9fe] uppercase font-bold block mb-1">
                  CENTRO INTEGRAL
                </span>
                <h3 className="text-[20px] font-bold text-white">Clínica &amp; Centros</h3>
                <p className="text-[12px] text-white/80 mt-1 mb-4 leading-relaxed">
                  Gestión total para clínicas con múltiples gabinetes y requerimientos hospitalarios.
                </p>
                <div className="text-[28px] font-bold text-[#5ce9fe] mb-1">
                  {billingCycle === 'monthly' ? '$749' : '$629'}
                  <span className="text-[13px] font-normal text-white/70"> MXN / mes</span>
                </div>
                <div className="text-[11px] font-mono text-[#5ce9fe] font-semibold mb-6">
                  Hasta 100 historias clínicas integradas
                </div>

                <div className="space-y-3 text-[13px] text-white/90">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Panel multi-usuario: Director, Terapeuta, Asistente, Caja.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Cumplimiento estricto NOM-024-SSA3 para COFEPRIS.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Biblioteca Digital Fisioaleph con acceso prioritario.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5ce9fe] shrink-0 mt-0.5" />
                    <span>Exportación masiva de expedientes y analítica de sesiones.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => onNavigate('contacto')}
                  className="w-full py-2.5 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] text-[13px] font-bold transition-colors cursor-pointer"
                >
                  Comenzar con Clínica
                </button>
              </div>
            </div>
          </div>

          {/* Cumplimiento Normativo Banner */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#eeeeee] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c7eae1]/60 text-[#0f4c5c] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#006874] uppercase font-bold">
                  ARQUITECTURA CLÍNICA SEGURA
                </span>
                <h4 className="text-[18px] font-bold text-[#003441] mt-0.5">
                  Diseñado conforme a NOM-024-SSA3 y LFPDPPP
                </h4>
                <p className="text-[13px] text-[#555555] mt-1 max-w-xl">
                  Tu expediente no es una simple hoja de cálculo. FisioSinapsis implementa criptografía y bitácora clínica en cada evolución y prescripción, garantizando blindaje legal en México.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f7f9fb] p-4 rounded-xl border border-[#eeeeee] shrink-0">
              <div className="text-[28px] font-mono font-bold text-[#006874]">99.4%</div>
              <div className="text-[12px] text-[#555555]">
                <div className="font-semibold text-[#003441]">Disponibilidad SLA</div>
                <div>Servidores en alta concurrencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MÓDULO COMPLEMENTARIO PÁGINA WEB
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono text-[#006874] uppercase font-bold block mb-1">
                MÓDULO COMPLEMENTARIO DE ALTO IMPACTO
              </span>
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#003441] mb-4">
                Integra una Página Web Propia para tu Consultorio o Clínica
              </h3>
              <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
                Convierte a los pacientes que buscan rehabilitación en Zapopan y tu localidad en citas confirmadas dentro de tu panel SaaS. Desarrollamos tu sitio oficial con identidad visual médica e integración bilateral instantánea.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                  <div className="font-bold text-[#003441] text-[14px]">Publica Servicios Médicos</div>
                  <div className="text-[12px] text-[#555555] mt-1">Detalla terapias de columna, readaptación y traumatología.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                  <div className="font-bold text-[#003441] text-[14px]">Agenda Citas en Tiempo Real</div>
                  <div className="text-[12px] text-[#555555] mt-1">Sincronización bilateral con el calendario de tu agenda FisioSinapsis.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                  <div className="font-bold text-[#003441] text-[14px]">Registro de Pacientes</div>
                  <div className="text-[12px] text-[#555555] mt-1">Crea automáticamente la pre-ficha de ingreso antes de su primera sesión.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#eeeeee]">
                  <div className="font-bold text-[#003441] text-[14px]">Dominio y Hosting Seguro</div>
                  <div className="text-[12px] text-[#555555] mt-1">Infraestructura de alta velocidad con certificado SSL incluido.</div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contacto')}
                className="h-11 px-6 rounded-lg bg-[#003441] hover:bg-[#0f4c5c] text-white font-medium text-[14px] cursor-pointer transition-colors"
              >
                Preguntar por Presupuesto Web
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#eeeeee] shadow-lg bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/physiotherapy_saas_platform_1790299063659.jpg"
                  alt="Módulo Web para Consultorios"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#eeeeee] text-[12px] text-[#555555] text-center font-mono">
                  Diseño adaptado para móviles, tabletas clínicas y computadoras
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TABLA COMPARATIVA DETALLADA
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb] border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              MATRIZ DETALLADA
            </span>
            <h3 className="text-[26px] sm:text-[32px] font-bold text-[#262b38] tracking-tight mt-1">
              Comparativa Técnica y Normativa
            </h3>
            <p className="text-[14px] text-[#555555] mt-2">
              Todas las funciones analizadas bajo los requerimientos clínicos y regulatorios mexicanos.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#eeeeee] shadow-xs">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr className="bg-[#f2f4f6] text-[#003441] font-mono text-[11px] uppercase tracking-wider border-b border-[#eeeeee]">
                  <th className="py-4 px-6 font-bold">Capacidad Clínica</th>
                  <th className="py-4 px-6 font-semibold">Paciente</th>
                  <th className="py-4 px-6 font-semibold">Profesional</th>
                  <th className="py-4 px-6 font-semibold">Equipo</th>
                  <th className="py-4 px-6 font-bold text-[#006874]">Clínica &amp; Centros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeee] text-[#555555]">
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Historias Clínicas Activas</td>
                  <td className="py-3.5 px-6">1 vinculada</td>
                  <td className="py-3.5 px-6 font-mono font-bold text-[#003441]">Hasta 25</td>
                  <td className="py-3.5 px-6 font-mono font-bold text-[#003441]">Hasta 75</td>
                  <td className="py-3.5 px-6 font-mono font-bold text-[#006874]">Hasta 100 integradas</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Emisión de Recetas y Órdenes Digitales</td>
                  <td className="py-3.5 px-6">Solo lectura</td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Módulo de Pruebas de Rango de Movimiento (ROM)</td>
                  <td className="py-3.5 px-6">—</td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Biblioteca Digital Fisioaleph</td>
                  <td className="py-3.5 px-6">Ejercicios prescritos</td>
                  <td className="py-3.5 px-6">Acceso Estándar</td>
                  <td className="py-3.5 px-6">Acceso Ilimitado</td>
                  <td className="py-3.5 px-6 font-semibold text-[#006874]">Prioritario + Casos Avanzados</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Roles de Usuario Diferenciados</td>
                  <td className="py-3.5 px-6">—</td>
                  <td className="py-3.5 px-6">1 usuario</td>
                  <td className="py-3.5 px-6">Hasta 3 terapeutas</td>
                  <td className="py-3.5 px-6 font-semibold text-[#006874]">Ilimitados con jerarquía</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Conformidad NOM-024-SSA3 (Expediente Electrónico)</td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6 font-semibold text-[#006874]">Alineado para COFEPRIS</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#191c1e]">Protección de Datos Personales (LFPDPPP)</td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                  <td className="py-3.5 px-6"><Check className="w-4 h-4 text-[#006874]" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREGUNTAS FRECUENTES
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              RESOLUCIÓN DE DUDAS
            </span>
            <h3 className="text-[26px] sm:text-[32px] font-bold text-[#262b38] tracking-tight mt-1">
              Preguntas Frecuentes
            </h3>
            <p className="text-[14px] text-[#555555] mt-2">
              Claridad total sobre la migración clínica, cobro de licencias y normativas.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#eeeeee] overflow-hidden transition-all bg-[#f7f9fb]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#003441] text-[15px] cursor-pointer hover:bg-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#006874] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[14px] text-[#555555] leading-relaxed bg-white border-t border-[#eeeeee]">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA FINAL DEMO
          ========================================================= */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[12px] font-mono tracking-widest text-[#5ce9fe] uppercase font-bold">
            EMPIEZA HOY TU TRANSFORMACIÓN DIGITAL
          </span>
          <h3 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight mt-2 mb-4">
            ¿Listo para operar con el estándar clínico Fisioaleph?
          </h3>
          <p className="text-[15px] text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Estandariza tu clínica, reduce el tiempo invertido en notas médicas y entrega una experiencia moderna e interactiva a cada paciente.
          </p>

          {!demoRequested ? (
            <form onSubmit={handleDemoSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Ingresa tu correo institucional..."
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg bg-white text-[#191c1e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#26c6da]"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-bold text-[14px] shrink-0 cursor-pointer transition-colors"
              >
                Agendar Demostración
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-[#0f4c5c] border border-[#5ce9fe]/30 text-white max-w-md mx-auto">
              <span className="font-bold text-[#5ce9fe] block mb-1">¡Solicitud Enviada!</span>
              <span className="text-[13px] text-white/90">
                Nos pondremos en contacto contigo en <strong>{demoEmail}</strong> para coordinar tu demo de FisioSinapsis.
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
