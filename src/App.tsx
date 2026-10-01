import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { 
  Building2, 
  FileText, 
  HardHat, 
  Droplet, 
  ShieldCheck, 
  Wrench, 
  FileCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

// Imports de imágenes desde ./assets/images/ para Vite/React y compatibilidad de producción
import heroImage from './assets/images/obra_construccion_1790805141018.jpg';
import servProyectosIng from './assets/images/serv_proyectos_ing_1790805486571.jpg';
import servSaneamientoLegal from './assets/images/serv_saneamiento_legal_1790805548360.jpg';
import servViviendas from './assets/images/serv_viviendas_1790805475741.jpg';
import servSupervision from './assets/images/serv_supervision_1790805496874.jpg';
import servControlCalidad from './assets/images/serv_control_calidad_1790805507029.jpg';
import servSaneamiento from './assets/images/serv_saneamiento_1790805517725.jpg';
import servImpermeabilizacion from './assets/images/serv_impermeabilizacion_1790805527809.jpg';
import servMantenimiento from './assets/images/serv_mantenimiento_1790805538224.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/51933724921?text=Hola%20IVARCON,%20deseo%20solicitar%20asesoramiento%20t%C3%A9cnico%20para%20un%20proyecto.";

  const services = [
    {
      id: "proyectos-ingenieria",
      title: "1. Proyectos de Ingeniería",
      category: "Diseño & Planificación",
      image: servProyectosIng,
      icon: FileText,
      items: [
        "Elaboración de planos",
        "Memorias de obra",
        "Presupuestos y metrados",
        "Evaluación de proyectos",
        "Asesoramiento técnico"
      ]
    },
    {
      id: "saneamiento-legal",
      title: "2. Saneamiento Físico Legal",
      category: "Regularización & Predios",
      image: servSaneamientoLegal,
      icon: FileCheck,
      items: [
        "Diagnóstico físico y documental del predio",
        "Saneamiento físico legal",
        "Regularización de inmuebles",
        "Elaboración y revisión de documentación técnica",
        "Asesoramiento para la formalización de predios"
      ]
    },
    {
      id: "viviendas",
      title: "3. Viviendas",
      category: "Edificación Residencial",
      image: servViviendas,
      icon: Building2,
      items: [
        "Viviendas unifamiliares y multifamiliares",
        "Ampliaciones y remodelaciones",
        "Ejecución y supervisión de obras",
        "Asesoramiento técnico"
      ]
    },
    {
      id: "supervision",
      title: "4. Mantenimiento y Supervisión",
      category: "Gestión en Obra",
      image: servSupervision,
      icon: HardHat,
      items: [
        "Supervisión y seguimiento de obras",
        "Control de calidad",
        "Control de costos",
        "Supervisión de acabados",
        "Mantenimiento y conservación de edificaciones"
      ]
    },
    {
      id: "control-calidad",
      title: "5. Control de Calidad y Asesoría",
      category: "Aseguramiento & Normativa",
      image: servControlCalidad,
      icon: ShieldCheck,
      items: [
        "Control y aseguramiento de la calidad",
        "Inspección y seguimiento de trabajos",
        "Asesoría técnica en obras",
        "Revisión de procedimientos y especificaciones",
        "Verificación del cumplimiento de la normativa aplicable"
      ]
    },
    {
      id: "saneamiento-alcantarillado",
      title: "6. Saneamiento y Alcantarillado",
      category: "Redes e Instalaciones",
      image: servSaneamiento,
      icon: Droplet,
      items: [
        "Sistemas de agua potable",
        "Redes de alcantarillado",
        "Instalación de tuberías",
        "Asesoramiento técnico",
        "Planos y presupuestos"
      ]
    },
    {
      id: "impermeabilizacion",
      title: "7. Impermeabilización",
      category: "Protección Estructural",
      image: servImpermeabilizacion,
      icon: ShieldCheck,
      items: [
        "Techos y azoteas",
        "Terrazas",
        "Cisternas y tanques",
        "Muros y cimientos",
        "Mantenimiento preventivo"
      ]
    },
    {
      id: "mantenimiento-inmuebles",
      title: "8. Mantenimiento de Inmuebles",
      category: "Conservación & Acabados",
      image: servMantenimiento,
      icon: Wrench,
      items: [
        "Viviendas",
        "Oficinas",
        "Locales comerciales",
        "Pintura y acabados",
        "Reparaciones en general"
      ]
    }
  ];

  const teamMembers = [
    {
      id: "elmer-vargas",
      name: "Elmer Eduardo Vargas Aquino",
      role: "Jefe de Oficina Técnica · Ingeniero Civil",
      colegiatura: "CIP 226584",
      description: "Especialista en obras de puentes y saneamiento, con experiencia en metrados, presupuestos, valorizaciones, control de avance y liquidación de obra. Ha trabajado como Ingeniero Residente, Supervisor y en gestión municipal de obras públicas, con diplomados en Infraestructura Vial y Contrataciones con el Estado."
    },
    {
      id: "milagros-vargas",
      name: "Milagros Vargas A.",
      role: "Jefa de Calidad · Ingeniera Civil",
      colegiatura: "CIP 406099",
      description: "Más de 15 años liderando el control de calidad (QA/QC) en construcción civil, movimiento de tierras, minería e hidroelectricidad. Auditora interna ISO 9001 y especialista en Planes de Calidad, laboratorios de suelos y concreto y gestión de no conformidades."
    },
    {
      id: "alfredo-quintos",
      name: "Alfredo Danny Quintos Calluchi",
      role: "Ingeniero Civil · Supervisor SSOMA",
      colegiatura: undefined,
      description: "Más de 5 años en seguridad y salud en el trabajo en construcción, minería e infraestructura eléctrica. Implementa sistemas bajo ISO 45001 y Ley 29783, con IPERC, PETS, supervisión de trabajos de alto riesgo y respuesta a emergencias. Maestrías en Ingeniería Civil y en Gestión Pública."
    },
    {
      id: "andy-vargas",
      name: "Andy Bryan Vargas Cubas",
      role: "Abogado · Asesor Legal y Minero",
      colegiatura: "ICAL 9984",
      description: "Abogado colegiado con experiencia en el Ministerio Público y en consultoría minera. Brinda asesoría en derecho penal, minero y ambiental, y en contrataciones, con maestría en Derecho Penal y especialización en Derecho Minero."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1F2933] flex flex-col font-sans">
      {/* Navigation Header */}
      <Header activeSection={activeSection} onNavigate={(id) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section: INICIO (Hero con la imagen de portada de IVARCON) */}
        <section id="inicio" className="bg-gradient-to-b from-[#F3F5F7] to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            {/* Corporate Banner Card (Inspirado directamente en la identidad oficial de IVARCON) */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
              
              {/* Left Column: Brand Identity, Slogan and Presentation */}
              <div className="lg:col-span-6 xl:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between z-10 bg-gradient-to-br from-[#DCEEF9]/70 via-white to-white">
                <div>
                  {/* Category badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E5B]/10 text-[#0B2E5B] text-xs font-bold tracking-wider uppercase mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
                    Ingeniería & Construcción
                  </div>

                  {/* Logo Type */}
                  <div className="mb-4">
                    <div className="flex items-center tracking-tight font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B2E5B] leading-none">
                      <span>IVAR</span>
                      <span className="text-[#F5B800]">CON</span>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#0B2E5B] uppercase">
                      Ingeniería y Construcción
                    </div>
                    <div className="w-24 sm:w-32 h-1 bg-[#F5B800] mt-2 mb-6 rounded-full"></div>
                  </div>

                  {/* Slogan */}
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold italic text-[#0B2E5B] tracking-tight leading-snug mb-4">
                    “Del plano a la obra, con respaldo profesional.”
                  </h1>

                  {/* Description */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    Soluciones integrales de ingeniería y construcción para viviendas, negocios y proyectos profesionales. Rigor técnico, seguridad y cumplimiento de la normativa vigente.
                  </p>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#e0a800] active:bg-[#c99600] text-[#0B2E5B] font-bold text-sm sm:text-base px-6 py-3.5 rounded shadow-sm hover:shadow transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>ESCRÍBENOS POR WHATSAPP</span>
                  </a>

                  <a
                    href="#servicios"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B2E5B] font-semibold text-sm px-5 py-3.5 rounded border border-slate-300 transition-colors"
                  >
                    <span>Ver Servicios</span>
                    <ArrowRight className="w-4 h-4 text-[#173F73]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Fotografía de Obra, Planos y Casco de Seguridad */}
              <div className="lg:col-span-6 xl:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900">
                <img
                  src={heroImage}
                  alt="Obra de ingeniería y construcción IVARCON con planos técnicos y casco de seguridad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient blend for seamless transition on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white via-transparent to-transparent opacity-80 lg:opacity-40 pointer-events-none lg:w-32" />

                {/* Floating Institutional Badge in Image Corner */}
                <div className="absolute bottom-4 right-4 bg-[#0B2E5B]/90 backdrop-blur-xs text-white px-4 py-2.5 rounded shadow-lg border border-white/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center border border-white/20">
                    <HardHat className="w-4 h-4 text-[#F5B800]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>IVAR</span><span className="text-[#F5B800]">CON</span>
                    </div>
                    <div className="text-[10px] text-[#DCEEF9] tracking-wider uppercase">
                      Supervisión y Control de Calidad
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics / Guarantees Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded bg-[#DCEEF9] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#173F73]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B2E5B]">Atención Directa</div>
                  <div className="text-[11px] text-slate-500">Con profesionales</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded bg-[#DCEEF9] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#173F73]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B2E5B]">Soluciones Técnicas</div>
                  <div className="text-[11px] text-slate-500">A la medida de la obra</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded bg-[#DCEEF9] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#173F73]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B2E5B]">Presupuestos Claros</div>
                  <div className="text-[11px] text-slate-500">Metrados y costos reales</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded bg-[#DCEEF9] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#173F73]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B2E5B]">Cumplimiento Normativo</div>
                  <div className="text-[11px] text-slate-500">Reglamento Nacional (RNE)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: NOSOTROS */}
        <section id="nosotros" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#173F73]">
                Presentación Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2E5B] mt-2 mb-4">
                Sobre IVARCON
              </h2>
              <div className="w-12 h-1 bg-[#F5B800] mx-auto mb-6"></div>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Brindamos asesoramiento técnico, elaboración y evaluación de proyectos, ejecución y supervisión de obras, mantenimiento, saneamiento, impermeabilización y servicios especializados, con atención directa y enfoque en calidad, seguridad y cumplimiento de la normativa vigente.
              </p>
            </div>

            {/* Value Proposition Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 mb-16 sm:mb-20">
              <div className="bg-[#F3F5F7] p-6 rounded-lg border-t-4 border-[#173F73]">
                <h3 className="font-bold text-lg text-[#0B2E5B] mb-2">Atención Directa</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Comunicación transparente con profesionales de ingeniería a cargo de tu proyecto desde el primer contacto.
                </p>
              </div>

              <div className="bg-[#F3F5F7] p-6 rounded-lg border-t-4 border-[#F5B800]">
                <h3 className="font-bold text-lg text-[#0B2E5B] mb-2">Soluciones Técnicas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Evaluación precisa de cada necesidad para brindar alternativas viables, eficientes y ajustadas al presupuesto.
                </p>
              </div>

              <div className="bg-[#F3F5F7] p-6 rounded-lg border-t-4 border-[#173F73]">
                <h3 className="font-bold text-lg text-[#0B2E5B] mb-2">Marco Normativo</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Estricto cumplimiento de especificaciones técnicas y normas vigentes de edificación en el país.
                </p>
              </div>
            </div>

            {/* Nueva Sección: Nuestro equipo profesional */}
            <div className="pt-6 border-t border-slate-200">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#173F73]">
                  Respaldo Técnico Especializado
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2E5B] mt-2 mb-4">
                  Nuestro equipo profesional
                </h3>
                <div className="w-12 h-1 bg-[#F5B800] mx-auto mb-6 rounded-full"></div>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  Un equipo técnico con experiencia real en obra. En IVARCON respaldamos cada proyecto con profesionales colegiados que combinan gestión de obra, control de calidad, seguridad y asesoría legal, para cumplir plazo, costo y calidad del plano a la obra.
                </p>
              </div>

              {/* Fichas Profesionales (2 columnas por 2 filas en pantallas medianas y grandes) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
                  >
                    {/* Borde superior en azul institucional y amarillo/dorado */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#0B2E5B] via-[#173F73] to-[#F5B800]" />

                    {/* Encabezado superior de la ficha corporativa */}
                    <div className="bg-[#F8FAFC] px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-extrabold text-[#173F73] uppercase tracking-wider block">
                          Perfil Técnico
                        </span>
                        <span className="text-xs font-bold text-[#0B2E5B] block mt-0.5">
                          Especialista Colegiado
                        </span>
                      </div>

                      {/* Insignia de colegiatura cuando corresponda */}
                      {member.colegiatura && (
                        <div className="inline-flex items-center gap-1.5 bg-[#0B2E5B] text-[#F5B800] text-xs font-bold px-3 py-1.5 rounded-md shadow-xs border border-white/10 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]"></span>
                          <span>{member.colegiatura}</span>
                        </div>
                      )}
                    </div>

                    {/* Cuerpo de la tarjeta */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Nombre del profesional */}
                        <h4 className="text-lg sm:text-xl font-bold text-[#0B2E5B] tracking-tight group-hover:text-[#173F73] transition-colors">
                          {member.name}
                        </h4>

                        {/* Cargo debajo del nombre */}
                        <p className="text-xs sm:text-sm font-semibold text-[#173F73] mt-1 mb-4 flex items-center gap-2">
                          <span className="w-2 h-0.5 bg-[#F5B800] inline-block"></span>
                          <span>{member.role}</span>
                        </p>

                        {/* Descripción profesional */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                          “{member.description}”
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Franja institucional pequeña debajo de las cuatro fichas */}
              <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-xl bg-[#0B2E5B] text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm border-t-2 border-[#F5B800]">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B800] text-[#0B2E5B] font-extrabold flex items-center justify-center shrink-0 shadow-sm text-sm">
                    +4
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                      +4 especialistas colegiados
                    </div>
                    <div className="text-xs text-[#DCEEF9]">
                      Equipo multidisciplinario con experiencia directa en obra
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#F5B800] font-bold">·</span>
                    Oficina Técnica y Puentes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#F5B800] font-bold">·</span>
                    Calidad ISO 9001
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#F5B800] font-bold">·</span>
                    Seguridad ISO 45001
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#F5B800] font-bold">·</span>
                    Asesoría Legal y Minera
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: SERVICIOS */}
        <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F3F5F7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#173F73]/10 text-[#173F73] text-xs font-bold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
                Nuestra Oferta Técnica
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2E5B] tracking-tight mb-4">
                Servicios Especializados
              </h2>
              <div className="w-16 h-1 bg-[#F5B800] mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 text-base sm:text-lg">
                Desarrollamos soluciones integrales de ingeniería y construcción respaldadas por supervisión profesional, control de calidad y cumplimiento normativo.
              </p>
            </div>

            {/* Grid de 8 Servicios con Fotografía Técnica Real */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((svc) => {
                const Icon = svc.icon;
                const serviceWhatsappUrl = `https://wa.me/51933724921?text=Hola%20IVARCON,%20deseo%20solicitar%20asesoramiento%20t%C3%A9cnico%20sobre%20${encodeURIComponent(svc.title)}.`;

                return (
                  <div 
                    key={svc.id} 
                    className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Fotografía Técnica del Servicio */}
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Categoría / Etiqueta Técnica */}
                        <div className="absolute top-3 left-3 bg-[#0B2E5B]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs border border-white/20">
                          {svc.category}
                        </div>

                        {/* Floating Icon Badge */}
                        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#F5B800] flex items-center justify-center text-[#0B2E5B] shadow-md">
                          <Icon className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Contenido de la Tarjeta */}
                      <div className="p-5">
                        <h3 className="font-extrabold text-[#0B2E5B] text-lg mb-3 leading-snug group-hover:text-[#173F73] transition-colors">
                          {svc.title}
                        </h3>

                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-4">
                          {svc.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#F5B800] font-bold text-sm leading-none mt-0.5">▪</span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Botón de Consulta Específica por Servicio */}
                    <div className="p-5 pt-0 mt-auto">
                      <a
                        href={serviceWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#F3F5F7] hover:bg-[#DCEEF9] text-[#0B2E5B] hover:text-[#173F73] font-bold text-xs tracking-wide transition-colors border border-slate-200 group-hover:border-[#173F73]/30"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#173F73]" />
                        <span>Consultar este servicio</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: CONTACTO */}
        <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173F73]">
              Atención y Asesoramiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2E5B] mt-2 mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <div className="w-12 h-1 bg-[#F5B800] mx-auto mb-6"></div>
            <p className="text-slate-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Estamos listos para brindarte asesoramiento técnico y ayudarte a encontrar la solución adecuada para tu proyecto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <a
                href="tel:997022655"
                className="flex items-center justify-center gap-3 p-4 bg-[#F3F5F7] hover:bg-[#DCEEF9] rounded text-[#0B2E5B] font-bold text-sm transition-colors border border-slate-200"
              >
                <Phone className="w-5 h-5 text-[#173F73]" />
                <span>Tel: 997 022 655</span>
              </a>

              <a
                href="tel:933724921"
                className="flex items-center justify-center gap-3 p-4 bg-[#F3F5F7] hover:bg-[#DCEEF9] rounded text-[#0B2E5B] font-bold text-sm transition-colors border border-slate-200"
              >
                <MessageCircle className="w-5 h-5 text-[#173F73]" />
                <span>WhatsApp: 933 724 921</span>
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#e0a800] text-[#0B2E5B] font-bold text-base px-8 py-4 rounded shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ESCRÍBENOS POR WHATSAPP</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B2E5B] text-slate-300 py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <div className="font-extrabold text-lg text-white">
              <span>IVAR</span><span className="text-[#F5B800]">CON</span>
            </div>
            <p className="text-slate-400 mt-0.5">Ingeniería y Construcción | Del plano a la obra, con respaldo profesional.</p>
          </div>
          <div className="text-slate-400">
            © {new Date().getFullYear()} IVARCON. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

