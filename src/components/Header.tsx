import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, Calendar, User, Phone } from 'lucide-react';

export type NavPage =
  | 'inicio'
  | 'conocenos'
  | 'servicios'
  | 'planes-saas'
  | 'biblioteca'
  | 'clinicas'
  | 'contacto'
  | 'iniciar-sesion';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conocenos', label: 'Conócenos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'planes-saas', label: 'Planes SaaS' },
    { id: 'biblioteca', label: 'Biblioteca Digital' },
    { id: 'clinicas', label: 'Clínicas Recuperat' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f4c5c]/95 backdrop-blur-md border-b border-[#003441]/40 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div
          onClick={() => handleNavClick('inicio')}
          className="cursor-pointer shrink-0 select-none"
        >
          <Logo variant="light" size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 text-[14px] font-medium transition-colors whitespace-nowrap cursor-pointer relative ${
                  isActive
                    ? 'text-[#98f0ff] font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#98f0ff] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('iniciar-sesion')}
            className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors cursor-pointer ${
              currentPage === 'iniciar-sesion'
                ? 'text-[#98f0ff] bg-white/10'
                : 'text-white/90 hover:text-white hover:bg-white/5'
            }`}
          >
            <User className="w-4 h-4 text-[#5ce9fe]" />
            <span>Iniciar Sesión</span>
          </button>

          <button
            onClick={onOpenAppointmentModal}
            className="flex items-center gap-2 h-10 px-4 sm:px-5 rounded-lg bg-[#26c6da] hover:bg-[#1fb4c6] text-[#003441] font-semibold text-[14px] transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agenda Cita</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#003441] text-white hover:bg-[#003441]/80 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#003441] text-white border-t border-[#0f4c5c] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2.5 px-3 rounded-lg text-[15px] font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#0f4c5c] text-[#5ce9fe] font-semibold'
                    : 'text-white/85 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('iniciar-sesion')}
                className="flex items-center gap-2 text-left py-2.5 px-3 rounded-lg text-[15px] font-medium text-white/85 hover:bg-white/5"
              >
                <User className="w-4 h-4 text-[#5ce9fe]" />
                <span>Iniciar Sesión</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full h-11 rounded-lg bg-[#26c6da] text-[#003441] font-semibold text-[14px] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita en Clínica</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
