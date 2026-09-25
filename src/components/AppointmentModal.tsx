import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, MapPin, User, Mail, Phone } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSede?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultSede = 'Valle Imperial',
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sede: defaultSede,
    tipoConsulta: 'Valoración Fisioterapéutica Inicial',
    fechaPreferida: '',
    horarioPreferido: 'Mañana (08:00 - 13:00)',
    mensaje: '',
    aceptaPrivacidad: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.telefono.trim()) {
      setErrorMsg('Por favor completa todos los campos requeridos.');
      return;
    }
    if (!formData.aceptaPrivacidad) {
      setErrorMsg('Debes aceptar el tratamiento de datos personales.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262b38]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#0f4c5c]/15 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#555555] hover:text-[#003441] hover:bg-[#f2f4f6] transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[12px] font-semibold text-[#006874] uppercase tracking-wider">
                Fisioaleph • Agenda tu Cita
              </span>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#003441] mt-1">
                Agenda tu Valoración Inicial en Zapopan
              </h3>
              <p className="text-[14px] text-[#555555] mt-1">
                Selecciona tu sede preferida y un fisioterapeuta te contactará en menos de 2 horas hábiles.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-[13px] border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Dr. / Lic. / Paciente..."
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="usuario@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                    Teléfono / WhatsApp (10 dígitos) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="33 1234 5678"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                    Sede en Zapopan *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.sede}
                      onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20 bg-white"
                    >
                      <option value="Valle Imperial">Sede Valle Imperial (Norte)</option>
                      <option value="Plaza Paseo Sendas">Sede Plaza Paseo Sendas (Poniente)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                    Horario Preferente
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.horarioPreferido}
                      onChange={(e) => setFormData({ ...formData, horarioPreferido: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20 bg-white"
                    >
                      <option value="Mañana (08:00 - 13:00)">Mañana (08:00 - 13:00)</option>
                      <option value="Tarde (14:00 - 20:00)">Tarde (14:00 - 20:00)</option>
                      <option value="Sábado (08:00 - 14:00)">Sábado (08:00 - 14:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#262b38] mb-1">
                  Motivo de Consulta o Padecimiento
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente la lesión, dolor articular, recuperación postquirúrgica o molestia..."
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20 resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modalPrivacidad"
                  checked={formData.aceptaPrivacidad}
                  onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#0f4c5c] rounded border-gray-300 focus:ring-[#26c6da]"
                />
                <label htmlFor="modalPrivacidad" className="text-[12px] text-[#555555] leading-snug">
                  Acepto el tratamiento de mis datos de acuerdo con el Aviso de Privacidad Integral de Fisioaleph (conforme a LFPDPPP).
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white font-semibold text-[14px] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirmar Solicitud de Cita</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#c7eae1] flex items-center justify-center text-[#0f4c5c] mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-[22px] font-bold text-[#003441] mb-2">
              ¡Solicitud Recibida con Éxito!
            </h3>
            <p className="text-[14px] text-[#555555] max-w-sm mb-6">
              Gracias, <strong>{formData.nombre}</strong>. Tu cita ha sido registrada para la <strong>Sede {formData.sede}</strong>. Un fisioterapeuta de Fisioaleph se comunicará al <strong>{formData.telefono}</strong> para confirmar tu horario.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#0f4c5c] text-white text-[14px] font-medium hover:bg-[#003441] transition-colors"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
