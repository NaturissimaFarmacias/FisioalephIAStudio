import React, { useState } from 'react';
import { NavPage } from '../components/Header.tsx';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Building,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface ContactoPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoConsulta: 'Agendar Cita en Clínica Recuperat',
    sede: 'Valle Imperial',
    mensaje: '',
    aceptaPrivacidad: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.telefono && formData.aceptaPrivacidad) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: '¿Aceptan Seguros de Gastos Médicos Mayores (SGMM)?',
      a: 'Sí, emitimos facturas desglosadas y formatos para reembolso de aseguradoras como GNP, MetLife, AXA, Seguros Monterrey y Mapfre.',
    },
    {
      q: '¿Cuáles son las formas de pago aceptadas en clínicas y servicios SaaS?',
      a: 'Aceptamos transferencias electrónicas SPEI, todas las tarjetas de crédito y débito (Visa, Mastercard, American Express) y pago en efectivo en clínica.',
    },
    {
      q: '¿Cuál es la política de cancelación y reprogramación de citas?',
      a: 'Puedes reprogramar tu cita con al menos 2 horas de anticipación sin ningún cargo comunicándote a nuestros conmutadores de Zapopan.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* =========================================================
          HERO & ENCABEZADO CONTACTO
          ========================================================= */}
      <section className="w-full bg-[#003441] text-white py-14 lg:py-16 border-b border-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 text-[12px] font-mono">
            <span className="text-[#5ce9fe] font-bold">
              DIRECTORIO OFICIAL &amp; CANALES SANITARIOS
            </span>
            <div className="flex items-center gap-4 text-white/80">
              <span>Tiempo promedio respuesta: &lt; 15 min</span>
              <span>•</span>
              <span>Triaje Activo Zapopan</span>
            </div>
          </div>

          <h1 className="text-[32px] sm:text-[42px] font-bold text-white tracking-tight leading-tight max-w-3xl">
            Conéctate con Fisioaleph: Estamos para ayudarte a recuperar el movimiento.
          </h1>
          <p className="text-[15px] sm:text-[16px] text-white/85 mt-3 max-w-2xl leading-relaxed">
            Comunícate con nuestros centros de atención física en Zapopan o solicita asesoría sobre la plataforma SaaS FisioSinapsis.
          </p>
        </div>
      </section>

      {/* =========================================================
          FORMULARIO & DATOS DE SEDES
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Formulario */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#eeeeee] shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f2f4f6]">
                  <div>
                    <h2 className="text-[22px] font-bold text-[#003441]">
                      Solicitud de Cita / Demo SaaS
                    </h2>
                    <p className="text-[13px] text-[#555555] mt-0.5">
                      Completa el formulario oficial para canalización clínica instantánea.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#c7eae1]/60 flex items-center justify-center text-[#0f4c5c]">
                    <MessageSquare className="w-5 h-5 text-[#006874]" />
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. / Lic. / Paciente..."
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="usuario@organizacion.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                          Teléfono / WhatsApp (10 dígitos) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="3312345678"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                          Tipo de Consulta *
                        </label>
                        <select
                          value={formData.tipoConsulta}
                          onChange={(e) => setFormData({ ...formData, tipoConsulta: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20 bg-white"
                        >
                          <option value="Agendar Cita en Clínica Recuperat">
                            Agendar Cita en Clínica Recuperat
                          </option>
                          <option value="Solicitar Demo FisioSinapsis SaaS">
                            Solicitar Demo FisioSinapsis SaaS
                          </option>
                          <option value="Fisioterapia Laboral In-Company">
                            Fisioterapia Laboral In-Company
                          </option>
                          <option value="Informes Generales">
                            Informes Generales
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#262b38] mb-2">
                        Sede de Preferencia *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <label
                          className={`p-3 rounded-xl border text-[13px] flex items-center gap-2 cursor-pointer transition-colors ${
                            formData.sede === 'Valle Imperial'
                              ? 'border-[#006874] bg-[#c7eae1]/20 font-semibold text-[#003441]'
                              : 'border-[#e0e3e5] text-[#555555] hover:bg-[#f7f9fb]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="sedePref"
                            checked={formData.sede === 'Valle Imperial'}
                            onChange={() => setFormData({ ...formData, sede: 'Valle Imperial' })}
                            className="text-[#006874]"
                          />
                          <span>Valle Imperial</span>
                        </label>

                        <label
                          className={`p-3 rounded-xl border text-[13px] flex items-center gap-2 cursor-pointer transition-colors ${
                            formData.sede === 'Plaza Paseo Sendas'
                              ? 'border-[#006874] bg-[#c7eae1]/20 font-semibold text-[#003441]'
                              : 'border-[#e0e3e5] text-[#555555] hover:bg-[#f7f9fb]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="sedePref"
                            checked={formData.sede === 'Plaza Paseo Sendas'}
                            onChange={() => setFormData({ ...formData, sede: 'Plaza Paseo Sendas' })}
                            className="text-[#006874]"
                          />
                          <span>Plaza Paseo Sendas</span>
                        </label>

                        <label
                          className={`p-3 rounded-xl border text-[13px] flex items-center gap-2 cursor-pointer transition-colors ${
                            formData.sede === 'Plataforma Virtual'
                              ? 'border-[#006874] bg-[#c7eae1]/20 font-semibold text-[#003441]'
                              : 'border-[#e0e3e5] text-[#555555] hover:bg-[#f7f9fb]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="sedePref"
                            checked={formData.sede === 'Plataforma Virtual'}
                            onChange={() => setFormData({ ...formData, sede: 'Plataforma Virtual' })}
                            className="text-[#006874]"
                          />
                          <span>Plataforma Virtual</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                        Mensaje o Motivo de la Consulta
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe el padecimiento, requerimientos de integración o consulta médica..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="chkPrivacidad"
                        checked={formData.aceptaPrivacidad}
                        onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
                        className="mt-1 w-4 h-4 text-[#006874] rounded border-gray-300"
                      />
                      <label htmlFor="chkPrivacidad" className="text-[12px] text-[#555555] leading-relaxed">
                        Manifiesto que he leído y acepto el <strong>Aviso de Privacidad Integral</strong> de Fisioaleph conforme a la LFPDPPP y autorizo el tratamiento clínico y confidencial de mis datos.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white font-semibold text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje / Solicitar Contacto</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#c7eae1] flex items-center justify-center text-[#0f4c5c] mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-[22px] font-bold text-[#003441] mb-2">
                      ¡Mensaje Enviado con Éxito!
                    </h3>
                    <p className="text-[14px] text-[#555555] max-w-md mb-6 leading-relaxed">
                      Gracias, <strong>{formData.nombre}</strong>. Tu solicitud para <strong>{formData.tipoConsulta}</strong> ha sido canalizada. Te contactaremos al <strong>{formData.telefono}</strong> o <strong>{formData.email}</strong> a la brevedad.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#003441] text-white text-[13px] font-medium"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Datos de Sedes y Canales */}
            <div className="lg:col-span-5 space-y-6">
              {/* Dirección Central */}
              <div className="bg-white rounded-2xl p-6 border border-[#eeeeee] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f2f4f6] flex items-center justify-center text-[#003441]">
                    <Building className="w-5 h-5 text-[#006874]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#006874] font-bold uppercase">
                      SEDE CENTRAL ZAPOPAN
                    </span>
                    <h3 className="text-[18px] font-bold text-[#003441]">Fisioaleph</h3>
                  </div>
                </div>

                <div className="text-[13px] text-[#555555] space-y-2 mb-4">
                  <p className="leading-relaxed">
                    Boulevard Valle Imperial # 260 - 18, Col. Nuevo México, Zapopan, Jalisco, C.P. 45134.
                  </p>
                  <p className="text-[12px] font-mono text-[#006874]">
                    Región Sanitaria Zapopan Norte / Bajío
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f2f4f6] grid grid-cols-2 gap-4 text-[12px]">
                  <div>
                    <span className="font-semibold text-[#003441] block">Horario Clínicas:</span>
                    <div className="text-[#555555]">Lun - Vie: 07:00 - 20:30</div>
                    <div className="text-[#555555]">Sáb: 08:00 - 14:00</div>
                  </div>
                  <div>
                    <span className="font-semibold text-[#003441] block">Mesa SaaS:</span>
                    <div className="text-[#555555]">Monitoreo Activo</div>
                    <div className="text-[#006874] font-mono font-semibold">99.4% Uptime</div>
                  </div>
                </div>
              </div>

              {/* Conmutador Telefónico */}
              <div className="bg-white rounded-2xl p-6 border border-[#eeeeee] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#006874] uppercase font-bold">
                    CONMUTADOR CLÍNICO
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f2f4f6] text-[#003441]">
                    ZAPOPAN
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[13px] mb-4">
                  <a
                    href="tel:+523396886699"
                    className="p-3 rounded-lg bg-[#f7f9fb] hover:bg-[#c7eae1]/30 transition-colors flex items-center justify-between font-mono text-[#003441]"
                  >
                    <span>(33) 9688-6699</span>
                    <Phone className="w-3.5 h-3.5 text-[#006874]" />
                  </a>
                  <a
                    href="tel:+523323517843"
                    className="p-3 rounded-lg bg-[#f7f9fb] hover:bg-[#c7eae1]/30 transition-colors flex items-center justify-between font-mono text-[#003441]"
                  >
                    <span>(33) 2351-7843</span>
                    <Phone className="w-3.5 h-3.5 text-[#006874]" />
                  </a>
                  <a
                    href="tel:+523324074211"
                    className="p-3 rounded-lg bg-[#f7f9fb] hover:bg-[#c7eae1]/30 transition-colors flex items-center justify-between font-mono text-[#003441]"
                  >
                    <span>(33) 2407-4211</span>
                    <Phone className="w-3.5 h-3.5 text-[#006874]" />
                  </a>
                  <a
                    href="tel:+523338034475"
                    className="p-3 rounded-lg bg-[#f7f9fb] hover:bg-[#c7eae1]/30 transition-colors flex items-center justify-between font-mono text-[#003441]"
                  >
                    <span>(33) 3803-4475</span>
                    <Phone className="w-3.5 h-3.5 text-[#006874]" />
                  </a>
                </div>

                <div className="pt-3 border-t border-[#f2f4f6] flex items-center gap-2 text-[13px]">
                  <Mail className="w-4 h-4 text-[#006874]" />
                  <span className="text-[#555555]">Correo Oficial Central:</span>
                  <a href="mailto:fisioalep@gmail.com" className="font-semibold text-[#003441] hover:underline">
                    fisioalep@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Inmediato */}
              <div className="bg-[#003441] text-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[16px] font-bold text-white">
                    Atención Vía WhatsApp Inmediata
                  </h4>
                  <span className="text-[10px] font-mono bg-[#26c6da] text-[#003441] font-bold px-2 py-0.5 rounded">
                    ONLINE
                  </span>
                </div>
                <div className="space-y-2 pt-2">
                  <a
                    href="https://wa.me/523323517843?text=Hola,%20solicito%20informes%20en%20Sede%20Valle%20Imperial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white text-[13px] flex items-center justify-between transition-colors"
                  >
                    <span>Sede Valle Imperial</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://wa.me/523324074211?text=Hola,%20solicito%20informes%20en%20Sede%20Plaza%20Paseo%20Sendas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#0f4c5c] hover:bg-[#0f4c5c]/80 text-white text-[13px] flex items-center justify-between transition-colors"
                  >
                    <span>Plaza Paseo Sendas</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSTALACIONES DE PRECISIÓN RECUPERAT
          Con descripciones requeridas:
          - Mesa de Canabé de alta precisión
          - Consultorios privados completamente equipados
          - Equipo de ultrasonido y electroterapia de última generación
          ========================================================= */}
      <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              INFRAESTRUCTURA FÍSICA SANITARIA
            </span>
            <h3 className="text-[28px] sm:text-[34px] font-bold text-[#262b38] tracking-tight mt-1">
              Instalaciones de Precisión Recuperat
            </h3>
            <p className="text-[14px] text-[#555555] mt-1">
              Unidades equipadas con instrumental clínico de alta gama y certificación sanitaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#eeeeee]">
              <div className="h-44 bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790299045300.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-[17px] font-bold text-[#003441] mb-1">
                  Mesa de Canabé de alta precisión
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Superficie clínica de valoración y tratamiento ergonómico para maniobras osteoarticulares exactas y readaptación funcional.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#eeeeee]">
              <div className="h-44 bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/clinic_paseo_sendas_1790299054051.jpg"
                  alt="Consultorios privados completamente equipados"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-[17px] font-bold text-[#003441] mb-1">
                  Consultorios privados completamente equipados
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Espacios de consulta médica individual con instrumental diagnóstico, confidencialidad y notas conformes a la NOM-024-SSA3.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#eeeeee]">
              <div className="h-44 bg-[#f2f4f6]">
                <img
                  src="/src/assets/images/hero_physiotherapy_clinic_1790299034660.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-[17px] font-bold text-[#003441] mb-1">
                  Equipo de ultrasonido y electroterapia de última generación
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Dispositivos de alta frecuencia para desinflamación celular, alivio del dolor y aceleración del proceso de recuperación tisular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREGUNTAS FRECUENTES CONTACTO
          ========================================================= */}
      <section className="w-full py-16 bg-[#f7f9fb] border-t border-[#eeeeee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
              GUÍA DE ATENCIÓN INMEDIATA
            </span>
            <h3 className="text-[26px] sm:text-[32px] font-bold text-[#262b38] tracking-tight mt-1">
              Preguntas Frecuentes
            </h3>
            <p className="text-[14px] text-[#555555] mt-1">
              Resolución estandarizada de dudas previas a tu primera consulta.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#eeeeee] overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#003441] text-[15px] cursor-pointer hover:bg-[#f7f9fb] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#006874] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[14px] text-[#555555] leading-relaxed border-t border-[#eeeeee]">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
