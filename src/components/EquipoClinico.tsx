import React from 'react';
import { UserCheck, Award, Stethoscope } from 'lucide-react';

export const EquipoClinico: React.FC = () => {
  const team = [
    {
      name: 'Dra. Cintia Lorena Cárdenas Correa',
      role: 'Dirección Médica General',
      specialty: 'Medicina de Rehabilitación Física',
      cedula: 'Céd. Prof. 8493821 / COFEPRIS',
      desc: 'Especialista en diagnóstico funcional, prescripción neuromuscular y seguimiento postoperatorio.',
      sede: 'Sede Valle Imperial',
    },
    {
      name: 'Dr. Juan Manuel Flores Lira',
      role: 'Traumatología & Ortopedia',
      specialty: 'Ortopedia y Traumatología',
      cedula: 'Céd. Prof. 6710492 / CMOT',
      desc: 'Enfoque en lesiones articulares complejas de hombro, rodilla, cadera y cirugía artroscópica.',
      sede: 'Interconsulta Ambas Sedes',
    },
    {
      name: 'Lic. María Rocío Mendoza Gómez',
      role: 'Coordinación de Terapia Manual',
      specialty: 'Terapia Física & Readaptación',
      cedula: 'Céd. Prof. 11094382 / AMEFI',
      desc: 'Terapia manual ortopédica, manejo integral de lumbalgias y reeducación propioceptiva.',
      sede: 'Sede Plaza Paseo Sendas',
    },
    {
      name: 'Lic. Adolfo Corona Cázares',
      role: 'Jefe de Readaptación Funcional',
      specialty: 'Terapia Física & Rehabilitación Funcional',
      cedula: 'Céd. Prof. 9845231 / ISB',
      desc: 'Fisioterapia deportiva, prevención lesional en atletas y retorno seguro al gesto competitivo.',
      sede: 'Sede Valle Imperial',
    },
  ];

  return (
    <section className="w-full py-16 bg-white border-t border-[#eeeeee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-mono tracking-widest text-[#006874] uppercase font-bold">
            CUERPO CLÍNICO
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#262b38] tracking-tight mt-1">
            Especialistas al Frente de tu Recuperación
          </h2>
          <p className="text-[15px] text-[#555555] mt-2">
            Especialistas colegiados con cédula profesional federal, subespecialidades clínicas y formación médica continua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#f7f9fb] rounded-xl p-6 border border-[#eeeeee] flex flex-col justify-between hover:border-[#26c6da]/50 transition-all hover:shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#c7eae1]/50 text-[#0f4c5c] flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-[#006874]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#262b38] leading-snug">
                  {member.name}
                </h3>
                <span className="text-[12px] font-semibold text-[#006874] block mt-1">
                  {member.specialty}
                </span>
                <span className="text-[11px] font-mono text-[#70787c] block mt-0.5">
                  {member.cedula}
                </span>
                <p className="text-[13px] text-[#555555] mt-3 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#e0e3e5] flex items-center justify-between text-[11px] font-mono text-[#003441] font-semibold">
                <span>{member.sede}</span>
                <UserCheck className="w-3.5 h-3.5 text-[#006874]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
