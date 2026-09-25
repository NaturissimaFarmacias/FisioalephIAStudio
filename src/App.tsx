import React, { useState, useEffect } from 'react';
import { Header, NavPage } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ConocenosPage } from './pages/ConocenosPage.tsx';
import { ServiciosPage } from './pages/ServiciosPage.tsx';
import { PlanesSaasPage } from './pages/PlanesSaasPage.tsx';
import { BibliotecaPage } from './pages/BibliotecaPage.tsx';
import { ClinicasPage } from './pages/ClinicasPage.tsx';
import { ContactoPage } from './pages/ContactoPage.tsx';
import { IniciarSesionPage } from './pages/IniciarSesionPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('inicio');
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [modalDefaultSede, setModalDefaultSede] = useState('Valle Imperial');

  // Handle URL hash sync for seamless navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      const validPages: NavPage[] = [
        'inicio',
        'conocenos',
        'servicios',
        'planes-saas',
        'biblioteca',
        'clinicas',
        'contacto',
        'iniciar-sesion',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointmentModal = (sede: string = 'Valle Imperial') => {
    setModalDefaultSede(sede);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] antialiased">
      {/* Persistent Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}

        {currentPage === 'conocenos' && (
          <ConocenosPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}

        {currentPage === 'servicios' && (
          <ServiciosPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}

        {currentPage === 'planes-saas' && (
          <PlanesSaasPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}

        {currentPage === 'biblioteca' && (
          <BibliotecaPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}

        {currentPage === 'clinicas' && (
          <ClinicasPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={(sede) => handleOpenAppointmentModal(sede || 'Valle Imperial')}
          />
        )}

        {currentPage === 'contacto' && (
          <ContactoPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}

        {currentPage === 'iniciar-sesion' && (
          <IniciarSesionPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={() => handleOpenAppointmentModal('Valle Imperial')}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Appointment Scheduler Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        defaultSede={modalDefaultSede}
      />
    </div>
  );
}
