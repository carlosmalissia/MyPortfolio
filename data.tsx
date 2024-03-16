import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
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
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
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
        title: "Portfolio animado",
        subtitle: "Freelance",
        description: "Realización de un portfolio usando técnicas de animación modernas y responsive ",
        tech: "Next js, React, Node, Typescript, Tailwind, framer-motion, react-type-animation, react-count, swiper, particles, CSS, HTML, deploy en Nestify",
        date: "Mar 2024",
    },
    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "Henry Bootcamp",
        description: "Elaboración de un e-commerce completo, tienda de venta de ropa, carrito de compra, pasarela de pago, envio de email, admin dashboard, registro de clientes, JWT, favoritos, rewiews, puntuación, best sellers, perfil de usuario, historial de compra, etc. Trabajo en equipo, metodología Scrum, Lidere equipo de frontend, manejo de técnicas Git Flow, organización con Tello",
        tech: "Next Js, React Hooks, Node js, Javascript, Redux-Toolkit, Mongo DB, Express, Tailwind, CSS, HTML, deploy en Vercel y railway",
        date: "Dic 2023 ",
    },
    {
        id: 3,
        title: "Teaching Assistant",
        subtitle: "Henry Bootcamp",
        description: "Coordinar a un grupo de estudiantes para lograr la integración al equipo de estudio. Asistir a la resolución de ejercicios y promover la colaboración grupal (Pair Programming). Asesorar a los estudiantes para sus futuros desafíos basado en mi propia experiencia en las tecnologías y metodos de trabajo. Proponer ideas para la mejora de los procesos del bootcamp",
        tech: "React Hooks, Node js, Javascript, React-Redux, PostgreSQL, Express, CSS, HTML",
        date: "Oct 2023",
    },
    {
        id: 4,
        title: "Desarrollo CRM",
        subtitle: "Udemy",
        description: "Admin dashboard de un e-commerce con administración de productos, usuarios/clientes, Vendedores, pedidos, etc",
        tech: "Next js, React, Node, Typescript, Tailwind, Apolo Server, GraphQL, Mongo DB, JWT, CSS, HTML, deploy en Nestify",
        date: "Dic 2022",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
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
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
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
        title: "E-commerce web",
        image: "/henrucci.png",
        urlGithub: "https://github.com/geniototal/pf-henry-15a-ecommerce-frontend",
        urlDemo: "https://pf-henry-15a-ecommerce-frontend.vercel.app/",
    },
    {
        id: 2,
        title: "Dashboard con Next 14",
        image: "/hero-desktop.png",
        urlGithub: "https://github.com/geniototal/Dashboard-Next14",
        urlDemo: "http://dashboard-next14-coral.vercel.app/",
    },
    {
        id: 3,
        title: "Portfolio Animado",
        image: "/portada-portfolio.jpg",
        urlGithub: "https://github.com/geniototal/MyPortfolio",
        urlDemo: "https://transcendent-panda-cdf84f.netlify.app/",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
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