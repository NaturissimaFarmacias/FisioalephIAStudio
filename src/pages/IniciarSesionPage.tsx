import React, { useState } from 'react';
import { NavPage } from '../components/Header.tsx';
import { Logo } from '../components/Logo.tsx';
import {
  Lock,
  Mail,
  User,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  Building2,
  GraduationCap,
  Heart,
  ArrowRight,
} from 'lucide-react';

interface IniciarSesionPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const IniciarSesionPage: React.FC<IniciarSesionPageProps> = ({
  onNavigate,
}) => {
  const [role, setRole] = useState<'pro' | 'paciente' | 'campus'>('pro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSession, setKeepSession] = useState(false);
  const [loginState, setLoginState] = useState<'idle' | 'success'>('idle');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoginState('success');
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-4 bg-[#f7f9fb]">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Information Column */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c7eae1] text-[#0f4c5c] text-[11px] font-mono mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#006874] animate-pulse" />
            <span>SERVIDOR ACTIVO NOM-024-SSA3</span>
          </div>

          <span className="text-[11px] font-mono text-[#006874] uppercase font-bold tracking-wider">
            PORTAL UNIFICADO FISIOALEPH
          </span>
          <h1 className="text-[30px] sm:text-[36px] font-bold text-[#262b38] tracking-tight leading-tight mt-1 mb-4">
            Ingreso Clínico de Alta Precisión.
          </h1>
          <p className="text-[14px] text-[#555555] leading-relaxed mb-8">
            Acceso autenticado y seguro para terapeutas, personal administrativo y pacientes de Fisioaleph en Zapopan.
          </p>

          <div className="space-y-4 text-[13px]">
            <div className="p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#006874] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#003441] block">FisioSinapsis Rehab</span>
                <span className="text-[#555555]">Expediente electrónico, prescripción e historia clínica.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#006874] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#003441] block">Bitácora Recuperat</span>
                <span className="text-[#555555]">Bitácora y seguimiento de ejercicios en el hogar.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#eeeeee] flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#006874] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#003441] block">AlphaDigitalFisio Academy</span>
                <span className="text-[#555555]">Campus LMS con diplomados y certificaciones.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#e0e3e5] flex items-center justify-between text-[11px] font-mono text-[#70787c]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#006874]" />
              Cifrado TLS 1.3 / AES-256
            </span>
            <span>LFPDPPP Cumplido</span>
          </div>
        </div>

        {/* Right Authentication Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#eeeeee] shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#eeeeee]">
              <Logo size="sm" />
              <div className="flex items-center gap-1.5 text-[11px] font-mono bg-[#f2f4f6] px-2.5 py-1 rounded text-[#006874] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>NOM-024-SSA3</span>
              </div>
            </div>

            {loginState === 'idle' ? (
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Role Tabs */}
                <div>
                  <label className="block text-[12px] font-mono font-bold text-[#70787c] uppercase tracking-wider mb-2">
                    Selecciona tu Rol de Acceso
                  </label>
                  <div className="grid grid-cols-3 gap-2 p-1 bg-[#f2f4f6] rounded-xl">
                    <button
                      type="button"
                      onClick={() => setRole('pro')}
                      className={`py-2 text-[13px] font-semibold rounded-lg transition-all cursor-pointer ${
                        role === 'pro'
                          ? 'bg-white text-[#003441] shadow-xs'
                          : 'text-[#555555] hover:text-[#003441]'
                      }`}
                    >
                      Clínica &amp; Pro
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('paciente')}
                      className={`py-2 text-[13px] font-semibold rounded-lg transition-all cursor-pointer ${
                        role === 'paciente'
                          ? 'bg-white text-[#003441] shadow-xs'
                          : 'text-[#555555] hover:text-[#003441]'
                      }`}
                    >
                      Paciente
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('campus')}
                      className={`py-2 text-[13px] font-semibold rounded-lg transition-all cursor-pointer ${
                        role === 'campus'
                          ? 'bg-white text-[#003441] shadow-xs'
                          : 'text-[#555555] hover:text-[#003441]'
                      }`}
                    >
                      Campus
                    </button>
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[13px] font-semibold text-[#262b38]">
                      Correo Institucional o Usuario Clínico
                    </label>
                    <span className="text-[11px] font-mono text-[#70787c]">
                      {role === 'pro'
                        ? 'usuario@fisioaleph.com'
                        : role === 'paciente'
                        ? 'folio / email'
                        : 'alumno / email'}
                    </span>
                  </div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder={
                        role === 'pro'
                          ? 'ejemplo.terapeuta@recuperat.mx'
                          : 'usuario@ejemplo.com'
                      }
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[13px] font-semibold text-[#262b38]">
                      Contraseña de Seguridad
                    </label>
                    <button
                      type="button"
                      onClick={() => alert('Para restablecer tu contraseña médica, comunícate con el administrador de la sede en Zapopan.')}
                      className="text-[11px] font-semibold text-[#006874] hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#cbd5e1] text-[14px] text-[#191c1e] focus:outline-none focus:border-[#26c6da] focus:ring-2 focus:ring-[#26c6da]/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px] pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-[#555555]">
                    <input
                      type="checkbox"
                      checked={keepSession}
                      onChange={(e) => setKeepSession(e.target.checked)}
                      className="w-4 h-4 rounded text-[#006874] border-gray-300"
                    />
                    <span>Mantener sesión en esta estación autorizada</span>
                  </label>
                  <span className="font-mono text-[#70787c]">30m timeout</span>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-[#0f4c5c] hover:bg-[#003441] text-white font-semibold text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Ingresar al Portal Clínico</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#c7eae1] text-[#0f4c5c] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-[20px] font-bold text-[#003441] mb-2">
                  Sesión Iniciada Correctamente
                </h3>
                <p className="text-[13px] text-[#555555] max-w-sm mb-6">
                  Autenticación exitosa en FisioSinapsis para <strong>{email}</strong>. Redireccionando a tu estación de trabajo...
                </p>
                <button
                  onClick={() => setLoginState('idle')}
                  className="px-5 py-2 rounded-lg bg-[#0f4c5c] text-white text-[13px] font-medium"
                >
                  Cerrar sesión de prueba
                </button>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-[#eeeeee] text-center text-[12px] text-[#555555] space-y-2">
              <div>
                ¿Aún no tienes credencial médica de acceso?{' '}
                <button
                  onClick={() => onNavigate('planes-saas')}
                  className="font-semibold text-[#006874] hover:underline cursor-pointer"
                >
                  Activar Plan FisioSinapsis
                </button>
                {' '}•{' '}
                <button
                  onClick={() => onNavigate('contacto')}
                  className="font-semibold text-[#006874] hover:underline cursor-pointer"
                >
                  Solicitar en Clínica Valle Imperial
                </button>
              </div>
              <p className="text-[11px] text-[#70787c]">
                Aviso de Privacidad Clínico conforme a Ley Federal de Protección de Datos Personales (LFPDPPP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
