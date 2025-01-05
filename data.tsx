import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, MessageCircleHeart, Facebook } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UClN-uKyTXA8sy8jXVINEH2A",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/carlos-malissia-30ab76272/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <MessageCircleHeart size={30} strokeWidth={1} />,
        src: "https://wa.me/5493548507863?text=Hola,%20en%20que%20te%20puedo%20ayudar?%0AHi,%20how%20can%20I%20help%20you?",
    },
    {
        id: 5,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Data Analytic",
        subtitle: "Guayerd e IBM (Potenciar Trabajo)",
        description: "Elaboración de un reporte de ingresos y egresos de la ONG Potenciar Trabajo, trabajo individual y en equipo, utilización de varias tecnicas y herramientas de estructuración, análisis y visualización de datos",
        tech: "Excel, Google sheets, Micrsoft Power BI, power query, Looker Studio, SQL y bases de datos varias ",
        date: "ago 2024 ",
    },
    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "No Country (ArteSano)",
        description: "Simulación Laboral, practicas en equipo. Elaboración de un e-commerce completo, tienda de venta artesanías, conexión de artesanos con posibles clientes, perfil de usuario, historial de compra, etc. Trabajo en equipo, metodología Scrum, Lidere equipo de frontend, manejo de técnicas Git Flow, organización con Jira",
        tech: "Next Js, React Hooks, Node js, Javascript, Redux-Toolkit, Mongo DB, Express, Tailwind, CSS, HTML, deploy en Vercel y railway",
        date: "Jul 2024 ",
    },
    {
        id: 3,
        title: "Portfolio animado",
        subtitle: "Freelance",
        description: "Realización de un portfolio usando técnicas de animación modernas y responsive ",
        tech: "Next js, React, Node, Typescript, Tailwind, framer-motion, react-type-animation, react-count, swiper, particles, CSS, HTML, deploy en Nestify",
        date: "Mar 2024",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "Henry Bootcamp (Henrucci)",
        description: "Experiencia Académica, proyectos individuales varios y como proyecto final grupal, elaboración de un e-commerce completo, tienda de venta de ropa, carrito de compra, pasarela de pago, envio de email, admin dashboard, registro de clientes, JWT, favoritos, rewiews, puntuación, best sellers, perfil de usuario, historial de compra, etc. Trabajo en equipo, metodología Scrum, Lidere equipo de frontend, manejo de técnicas Git Flow, organización con Trello",
        tech: "Next Js, React Hooks, Node js, Javascript, Redux-Toolkit, Mongo DB, Express, Tailwind, CSS, HTML, deploy en Vercel y railway",
        date: "Dic 2023 ",
    },
    {
        id: 5,
        title: "Teaching Assistant",
        subtitle: "Henry Bootcamp",
        description: "Coordinar a un grupo de estudiantes para lograr la integración al equipo de estudio. Asistir a la resolución de ejercicios y promover la colaboración grupal (Pair Programming). Asesorar a los estudiantes para sus futuros desafíos basado en mi propia experiencia en las tecnologías y metodos de trabajo. Proponer ideas para la mejora de los procesos del bootcamp",
        tech: "React Hooks, Node js, Javascript, React-Redux, PostgreSQL, Express, CSS, HTML",
        date: "Oct 2023",
    },
    {
        id: 6,
        title: "Desarrollo CRM",
        subtitle: "Udemy",
        description: "Admin dashboard de un e-commerce con administración de productos, usuarios/clientes, Vendedores, pedidos, etc",
        tech: "Next js, React, Node, Typescript, Tailwind, Apolo Server, GraphQL, Mongo DB, JWT, CSS, HTML, deploy en Nestify",
        date: "may 2022",
    },
    {
        id: 7,
        title: "Mantenimiento sitio web",
        subtitle: "Aromas del Uritorco",
        description: " Copywriting, mantenimiento y creación de contenido de sitio web de una fábrica de sahumerios en Capilla del Monte, Branding y SEO",
        tech: "Javascript, PHP, CSS, HTML, sistema de envio y recibo de emails",
        date: "Ene 2022",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 15,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 5,
        text: "Proyectos individuales",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Crop />,
        title: "Backend",
        description: "Desarrollo de Apis, backend, bases de datos, CMS y CRM, paneles administrador personalizados",
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "E-commerce web   Henrucci",
        image: "/henrucci.png",
        urlGithub: "https://github.com/carlosmalissia/pf-henry-15a-ecommerce-frontend",
        urlDemo: "https://pf-henry-15a-ecommerce-frontend.vercel.app/",
    },
    {
        id: 2,
        title: "Dashboard con Next 14",
        image: "/hero-desktop.png",
        urlGithub: "https://github.com/carlosmalissia/Dashboard-Next14",
        urlDemo: "http://dashboard-next14-coral.vercel.app/",
    },
    {
        id: 3,
        title: "Portfolio Animado Carlos Malissia",
        image: "/portada-portfolio.jpg",
        urlGithub: "https://github.com/carlosmalissia/MyPortfolio",
        urlDemo: "https://transcendent-panda-cdf84f.netlify.app/",
    },
    {
        id: 4,
        title: "Ideas Creativas: Inmobiliaria Punilla",
        image: "/inmobiliaria.png",
        urlGithub: "https://github.com/carlosmalissia/Inmobiliaria-Punilla",
        urlDemo: "https://inmobiliariapunilla.netlify.app/",
    },
    {
        id: 5,
        title: "Backend Henrucci",
        image: "/foto api henrucci.jpg",
        urlGithub: "https://github.com/carlosmalissia/Api-Henrucci",
        urlDemo: "https://github.com/carlosmalissia/Api-Henrucci",
    },
    {
        id: 6,
        title: "ArteSano",
        image: "/artesano-foto.jpg",
        urlGithub: "https://github.com/carlosmalissia/artesano-frontend",
        urlDemo: "https://artesano-frontend.vercel.app/",
    },
    {
        id: 7,
        title: "Aromas del Uritorco ",
        image: "/aromasDelUritorco.jpg",
        urlGithub: "https://www.aromasdeluritorco.com.ar/",
        urlDemo: "https://www.aromasdeluritorco.com.ar/",
    },
    {
        id: 8,
        title: "Informe de datos ONG Potenciar Solidario",
        image: "/reporteONG.jpg",
        urlGithub: "https://lookerstudio.google.com/u/0/reporting/7731b9ec-f8c2-4f47-9c95-c78374db448a/page/p_pvyl35kold",
        urlDemo: "https://lookerstudio.google.com/u/0/reporting/7731b9ec-f8c2-4f47-9c95-c78374db448a/page/p_pvyl35kold",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];
