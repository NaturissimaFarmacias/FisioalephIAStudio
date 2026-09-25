import React from 'react';
import { Logo } from './Logo.tsx';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NavPage } from './Header.tsx';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f2f4f6] border-t border-[#eeeeee] text-[#191c1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div>
              <Logo size="md" />
            </div>
            <p className="text-[14px] text-[#555555] leading-relaxed max-w-md">
              Fisioterapia y rehabilitación física basada en evidencia. Centros de alta especialidad en Zapopan, Jalisco y plataforma de gestión clínica para la recuperación funcional.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-[12px] font-semibold text-[#003441] uppercase tracking-wider">
                Líneas Centrales de Atención Clínica
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#262b38] font-medium">
                <a
                  href="tel:+523396886699"
                  className="hover:text-[#006874] transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#006874]" />
                  <span>+52 33 9688-6699</span>
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="tel:+523323517843"
                  className="hover:text-[#006874] transition-colors"
                >
                  33 2351-7843
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="tel:+523324074211"
                  className="hover:text-[#006874] transition-colors"
                >
                  33 2407-4211
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] text-[#555555] mt-1">
                <Mail className="w-3.5 h-3.5 text-[#006874]" />
                <a
                  href="mailto:fisioalep@gmail.com"
                  className="hover:text-[#006874] transition-colors"
                >
                  fisioalep@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Sedes Zapopan */}
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-semibold text-[#003441] uppercase tracking-wider">
              Sedes Zapopan, Jalisco
            </span>
            <div className="flex flex-col gap-1 text-[13px]">
              <span className="font-semibold text-[#191c1e]">Clínica Valle Imperial</span>
              <p className="text-[#555555] leading-relaxed">
                Av. Sendas del Bosque, Valle Imperial, Zapopan, Jal.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-[13px]">
              <span className="font-semibold text-[#191c1e]">Sede Plaza Paseo Sendas</span>
              <p className="text-[#555555] leading-relaxed">
                Plaza Paseo Sendas Local 14-B, Zapopan, Jal.
              </p>
            </div>
          </div>

          {/* 5 Divisiones */}
          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-semibold text-[#003441] uppercase tracking-wider">
              5 Divisiones
            </span>
            <ul className="flex flex-col gap-2 text-[13px] text-[#555555]">
              <li>
                <button
                  onClick={() => handleNav('clinicas')}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  1. Centros Recuperat Fisioterapia
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('planes-saas')}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  2. FisioSinapsis Rehab SaaS
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('servicios')}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  3. Fisioterapia Laboral &amp; Ergonomía
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('conocenos')}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  4. FisioSocial Red Comunitaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('biblioteca')}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  5. AlphaDigitalFisio Academia
                </button>
              </li>
            </ul>
          </div>

          {/* Normatividad y Contacto */}
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-semibold text-[#003441] uppercase tracking-wider">
              Normatividad Sanitaria
            </span>
            <div className="flex flex-col gap-1 text-[13px]">
              <span className="font-medium text-[#191c1e]">Aviso COFEPRIS</span>
              <p className="text-[#555555]">
                Establecimientos registrados ante la autoridad sanitaria.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-[13px]">
              <span className="font-medium text-[#191c1e]">NOM-024-SSA3</span>
              <p className="text-[#555555]">
                Expediente clínico electrónico y confidencialidad.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleNav('contacto')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0f4c5c] text-white hover:bg-[#003441] text-[13px] font-medium transition-colors cursor-pointer"
              >
                <span>Contacto</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e0e3e5] flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#555555]">
          <div>
            <span>© 2025 Fisioaleph</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('contacto')}
              className="hover:text-[#003441] transition-colors cursor-pointer"
            >
              Contacto
            </button>
            <span className="text-gray-300">•</span>
            <span>Aviso de Privacidad LFPDPPP</span>
            <span className="text-gray-300">•</span>
            <span>Términos del Servicio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
