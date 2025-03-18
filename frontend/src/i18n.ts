import { createI18n } from "vue-i18n"

// Definimos los textos en distintos idiomas
const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About Us",
      work: "Our Work",
      materials: "Materials",
      whyus: "Why Us",
      printers: "Printers",
      partners: "Partners",
      contact: "Contact",
      language: "Language"
    },
    home: {
      title: "Printing services for custom components",
      description: "Let us see your design and get your pieces with the best quality and in record time with us!"
    },
    work: {
      title: "3D printed solutions",
      description: "At 3DIndustry, we believe the best way to demonstrate our capabilities is through our work. This section showcases the diverse range of projects we've completed, utilizing a wide range of materials and 3D printing techniques. From functional prototypes to high-precision finished parts, each project reflects our commitment to excellence and innovation. Explore our gallery and discover how we can transform your ideas into reality.",
      pcbAbsTitle: "PC-ABS",
      pcbAbsDescription: "This is a customized housing example, ideal for electronic components.",
      plaTitle: "PLA",
      plaDescription: "Unique design lamp, perfect for modern spaces.",
      plaEspecialTitle: "PLA-SPECIALS",
      plaEspecialDescription: "Customized pots for interior and exterior decoration.",
      absTitle: "ABS",
      absDescription: "Supports for a variety of devices, from cameras to antennas.",
      tpuTitle: "TPU",
      tpuDescription: "Unique decorative elements created with high-quality materials.",
      nylonTitle: "Nylon",
      nylonDescription: "Functional prototypes designed for testing and demonstrations.",
      petCfTitle: "PET-CF",
      petCfDescription: "Modular modules that adapt to different types of projects.",
      asaTitle: "ASA",
      asaDescription: "Custom toolbox for professional or home use.",
      petgTitle: "PETG",
      petgDescription: "Custom case to protect sensitive electronic components."
    },
    materials: {
      title: "Printing materials",
      description: "Discover the variety of materials we work with and how we can adapt them to your needs, whether for the manufacture of industrial prototypes or high-precision parts ready for production.",
      plaTitle: "PLA (Polylactic Acid)",
      plaDescription: "PLA stands out for its ease of printing and biodegradability, making it ideal for rapid prototyping and conceptual models, as well as low-cost assembly tools. Its versatility makes it popular for creating visual and functional parts where high strength is not critical.",
      petgTitle: "PETG (Polyethylene Terephthalate Glycol)",
      petgDescription: "PETG offers a balance between strength and flexibility, with good chemical resistance, making it suitable for functional parts, housings, and components that require some flexibility and moisture resistance, including packaging and elements that need a certain degree of transparency.",
      absTitle: "ABS (Acrylonitrile Butadiene Styrene)",
      absDescription: "ABS excels in impact and heat resistance, being durable and resistant to chemicals, making it an ideal material for equipment housings, automotive components, and parts that withstand high temperatures or mechanical stress.",
      paTitle: "PA (Polyamide or Nylon)",
      paDescription: "Polyamide (nylon) is characterized by high mechanical strength, flexibility, and abrasion resistance, making it perfect for gears, bearings, and parts requiring high durability and wear resistance in demanding industrial environments.",
      pcTitle: "PC (Polycarbonate)",
      pcDescription: "Polycarbonate offers a combination of high impact and heat resistance along with excellent transparency, making it valuable for structural parts, optical components, and high-strength housings in applications where durability and clarity are essential.",
      pcAbsTitle: "PC-ABS (Polycarbonate-Acrylonitrile Butadiene Styrene)",
      pcAbsDescription: "It stands out for its high impact resistance, surpassing ABS and approaching PC, making it ideal for parts that must withstand shocks and vibrations. Additionally, its heat resistance is superior to ABS, allowing its use in high-temperature environments. The good dimensional stability of PC-ABS ensures that parts maintain their shape and size under varying temperature and humidity conditions. Its easier processing compared to pure PC facilitates the manufacturing of complex parts.",
      tpuTitle: "TPU (Thermoplastic Polyurethane)",
      tpuDescription: "TPU is a flexible and elastomeric material with high wear resistance, ideal for seals, gaskets, damping parts, and components that require flexibility and impact absorption, offering durable solutions for applications that demand elasticity.",
      asaTitle: "ASA (Acrylonitrile Styrene Acrylate)",
      asaDescription: "ASA stands out for its high UV and weather resistance, similar to ABS in impact and heat resistance, making it perfect for outdoor electronic device housings and exterior automotive components, ensuring durability in demanding environments.",
      plaCfTitle: "PLA-CF (PLA with Carbon Fiber)",
      plaCfDescription: "PLA-CF enhances the stiffness and dimensional stability of standard PLA, making it useful for tools, jigs, and assembly fixtures that require greater rigidity and strength, allowing for the creation of more robust parts for precision applications.",
      paCfTitle: "PA-CF (Polyamide with Carbon Fiber)",
      paCfDescription: "PA-CF offers high mechanical and thermal resistance, along with rigidity and abrasion resistance, making it suitable for structural parts, machinery components, and high-demand tools, providing durable solutions for demanding industrial applications.",
      petCfTitle: "PET-CF (PETG with Carbon Fiber)",
      petCfDescription: "PET-CF combines the strength and flexibility of PETG with the rigidity of carbon fiber, improving impact resistance and making it ideal for functional parts, housings, and components that require a balance between strength and flexibility, expanding application possibilities in various sectors."
    },
    printers: {
      title: "With the Best Equipment",
      description: "The Creality K1C stands out as a robust and efficient 3D printing solution, specifically designed to meet the demand for industrial parts. Its foundation lies in its ability to provide agile and reliable production. The high printing speed, reaching up to 600 mm/s, enables the rapid creation of prototypes and final parts, accelerating development and production cycles. The versatility in material selection, from PLA and PETG to carbon fiber composites and Nylon, allows for the fabrication of parts with mechanical, thermal, and chemical properties tailored to each application. The reliability of the K1C, with its automatic leveling, anti-clog extruder, and quick-change nozzle, optimizes production processes by minimizing downtime. Additionally, the AI-powered camera enhances quality control, ensuring the precision and consistency of parts. The capability to manufacture parts on demand reduces the need for inventories, contributing to cost optimization. Overall, the Creality K1C presents itself as an efficient and versatile solution for industrial part manufacturing, combining speed, durability, and precision."
    },
    whyus: {
      title: "Why Choose Us?",
      titleOne: "Guaranteed Quality",
      descriptionOne: "With the wide availability of materials and the advanced printing technology we use, our team of engineers offers the best collaboration to optimize the manufacturing of parts that best fit your specific application needs, achieving high-precision results.",
      titleTwo: "Speed and Efficiency",
      descriptionTwo: "Our optimized process and the capabilities of our equipment allow us to deliver parts in record time without compromising quality.",
      titleThree: "Experience and Professionalism",
      descriptionThree: "We have a team of expert engineers in 3D printing and industrial design to provide you with the best guidance."
    },
    about: {
      title: "Our Team",
      description: "We are a team of electronics engineers with industry experience, passionate about 3D printing and committed to excellence. We have the expertise and determination to address any need, ensuring innovative and high-quality solutions for every project.",
      aboutNameOne: "Federico Delgado",
      aboutDescriptionOne: "Specialist in 3D modeling and printing. An innovator and perfectionist in every project.",
      aboutNameTwo: "Pedro Rosito",
      aboutDescriptionTwo: "In charge of logistics and quality. Ensures that everything arrives in perfect condition.",
      aboutNameThree: "Christian Canaan",
      aboutDescriptionThree: "Customer service and technical support. Always ready to answer your questions."
    },
    partners: {
      title: "Partner Companies",
      description: "Behind every manufactured part, there is a story of collaboration and trust. We have had the privilege of working with leading companies in various sectors, who have placed their trust in our ability to bring their ideas to life. Every project is a testament to our dedication to precision, quality, and innovation. We take pride in presenting our partners, companies that have relied on us to overcome challenges and achieve their goals. Their success is our success, and it motivates us to continue raising the standards of industrial 3D printing. Join the list of companies that have found in us a reliable ally for the manufacturing of high-quality parts."
    },
    contact: {
      title: "Contact",
      description: "Ready to take your industrial projects to the next level? At 3DIndustry, we are eager to hear your ideas and challenges. Fill out the form below, and a member of our team will get in touch shortly. Whether you need rapid prototypes, custom final parts, or specialized 3D printing advice, we are here to help bring your projects to life with precision and efficiency. Contact us today and discover how we can transform your concepts into tangible solutions!",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      sendButton: "Send",
      sendLoadingButton: "Sending...",
      emailDescription: "Enter a valid email",
      messageDescription: "Briefly tell us about your needs",
      fileDescription: "Optional: Show us your model if you wish so we can assist you better!"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms and Conditions",
      contact: "Contact",
      reserved: "3DIndustry. All rights reserved"
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre Nosotros",
      materials: "Materiales",
      work: "Trabajos",
      printers: "Impresoras",
      whyus: "Porqué nosotros",
      partners: "Colaboradores",
      contact: "Contacto",
      language: "Idioma"
    },
    home: {
      title: "Servicios de impresión para componentes personalizados",
      description: "Vemos su diseño y obtenga sus piezas con la mejor calidad y en tiempo récord con nosotros!"
    },
    work: {
      title: "Soluciones de impresión 3D",
      description: "En 3DIndustry, creemos que la mejor manera de demostrar nuestra capacidad es a través de nuestros trabajos. Esta sección es una muestra de la diversidad de proyectos que hemos realizado, utilizando una amplia gama de materiales y técnicas de impresión 3D. Desde prototipos funcionales hasta piezas finales de alta precisión, cada proyecto refleja nuestro compromiso con la excelencia y la innovación. Explora nuestra galería y descubre cómo podemos transformar tus ideas en realidad.",
      pcbAbsTitle: "PC-ABS",
      pcbAbsDescription: "Este es un ejemplo de housing personalizado, ideal para componentes electrónicos.",
      plaTitle: "PLA",
      plaDescription: "Lámpara de diseño único, perfecta para ambientes modernos.",
      plaEspecialTitle: "PLA-ESPECIALES",
      plaEspecialDescription: "Macetas personalizadas para decoración de interiores y exteriores.",
      absTitle: "ABS",
      absDescription: "Soportes para una variedad de dispositivos, desde cámaras hasta antenas.",
      tpuTitle: "TPU",
      tpuDescription: "Elementos decorativos únicos creados con materiales de alta calidad.",
      nylonTitle: "Nylon",
      nylonDescription: "Prototipos funcionales diseñados para pruebas y demostraciones.",
      petCfTitle: "PET-CF",
      petCfDescription: "Módulos modulares que se adaptan a diferentes tipos de proyectos.",
      asaTitle: "ASA",
      asaDescription: "Caja de herramientas personalizada para uso profesional o doméstico.",
      petgTitle: "PETG",
      petgDescription: "Estuche a medida para proteger componentes electrónicos sensibles."
    },
    materials: {
      title: "Materiales de impresión",
      description: "Descubre la variedad de materiales con las que trabajamos y que podemos adaptar a tus necesidades ya sea para la fabricación de prototipos industriales o piezas de alta precisión lista para la puesta en producción.",
      plaTitle: "PLA (Ácido Poliláctico)",
      plaDescription: "El PLA destaca por su facilidad de impresión y biodegradabilidad, siendo ideal para prototipado rápido y modelos conceptuales, además de herramientas de montaje de bajo costo. Su versatilidad lo hace popular en la creación de piezas visuales y funcionales donde la alta resistencia no es crítica.",
      petgTitle: "PETG (Tereftalato de Polietileno Glicolizado)",
      petgDescription: "El PETG ofrece un equilibrio entre resistencia y flexibilidad, con buena resistencia química, lo que lo hace adecuado para piezas funcionales, carcasas y componentes que requieren cierta flexibilidad y resistencia a la humedad, incluyendo envases y elementos que necesitan cierto grado de transparencia.",
      absTitle: "ABS (Acrilonitrilo Butadieno Estireno)",
      absDescription: "El ABS sobresale por su alta resistencia al impacto y al calor, siendo duradero y resistente a productos químicos, lo que lo convierte en un material ideal para carcasas de equipos, componentes automotrices y piezas que soportan altas temperaturas o esfuerzos mecánicos.",
      paTitle: "PA (Poliamida o Nylon)",
      paDescription: "La poliamida (nylon) se caracteriza por su alta resistencia mecánica, flexibilidad y resistencia a la abrasión, siendo perfecta para engranajes, rodamientos y piezas que requieren alta durabilidad y resistencia al desgaste en entornos industriales exigentes.",
      pcTitle: "PC (Policarbonato)",
      pcDescription: "El policarbonato ofrece una combinación de alta resistencia al impacto y al calor, junto con excelente transparencia, lo que lo hace valioso para piezas estructurales, componentes ópticos y carcasas de alta resistencia en aplicaciones donde la durabilidad y la claridad son esenciales.",
      pcAbsTitle: "PC-ABS (Policarbonato-Acrilonitrilo Butadieno Estireno)",
      pcAbsDescription: "Destaca por su alta resistencia al impacto, superando al ABS y acercándose al PC, lo que lo hace ideal para piezas que deben soportar golpes y vibraciones. Además, su resistencia al calor es superior a la del ABS, permitiendo su uso en entornos con temperaturas elevadas. La buena estabilidad dimensional del PC-ABS asegura que las piezas mantengan su forma y tamaño en condiciones variables de temperatura y humedad. Su facilidad de procesamiento, en comparación con el PC puro, facilita la fabricación de piezas complejas.",
      tpuTitle: "TPU (Poliuretano Termoplástico)",
      tpuDescription: "El TPU es un material flexible y elastómero, con alta resistencia al desgaste, ideal para juntas, sellos, piezas de amortiguación y componentes que requieren flexibilidad y absorción de impactos, ofreciendo soluciones duraderas para aplicaciones que demandan elasticidad.",
      asaTitle: "ASA (Acrilonitrilo Estireno Acrilato)",
      asaDescription: "El ASA destaca por su alta resistencia a los rayos UV y a la intemperie, similar al ABS en resistencia al impacto y al calor, siendo perfecto para carcasas de dispositivos electrónicos para exteriores y componentes automotrices exteriores, garantizando durabilidad en ambientes exigentes.",
      plaCfTitle: "PLA-CF (PLA con Fibra de Carbono)",
      plaCfDescription: "El PLA-CF mejora la rigidez y la estabilidad dimensional del PLA estándar, siendo útil para herramientas, plantillas y accesorios de montaje que requieren mayor rigidez y resistencia, permitiendo la creación de piezas más robustas para aplicaciones de precisión.",
      paCfTitle: "PA-CF (Poliamida con Fibra de Carbono)",
      paCfDescription: "El PA-CF ofrece alta resistencia mecánica y térmica, junto con rigidez y resistencia a la abrasión, siendo adecuado para piezas estructurales, componentes de maquinaria y herramientas de alta exigencia, proporcionando soluciones duraderas para aplicaciones industriales demandantes.",
      petCfTitle: "PET-CF (PETG con Fibra de Carbono)",
      petCfDescription: "El PET-CF combina la resistencia y flexibilidad del PETG con la rigidez de la fibra de carbono, mejorando la resistencia al impacto, y siendo ideal para piezas funcionales, carcasas y componentes que requieren un equilibrio entre resistencia y flexibilidad, ampliando las posibilidades de aplicación en diversos sectores."
    },
    printers: {
      title: "Con el mejor equipamiento",
      description: "La Creality K1C se presenta como una solución de impresión 3D robusta y eficiente, especialmente diseñada para satisfacer la demanda de piezas industriales se fundamenta en su capacidad para ofrecer una producción ágil y robusta. La alta velocidad de impresión, alcanzando los 600 mm/s, permite la creación de prototipos y piezas finales en tiempos reducidos, acelerando los ciclos de desarrollo y producción. La versatilidad en la selección de materiales, desde PLA y PETG hasta compuestos de fibra de carbono y Nylon, posibilita la fabricación de piezas con propiedades mecánicas, térmicas y químicas adaptadas a cada aplicación. La fiabilidad de la K1C, con su nivelación automática, extrusor antiatascos y boquilla de cambio rápido, optimiza los procesos de producción al minimizar los tiempos de inactividad. Además, la cámara con inteligencia artificial mejora el control de calidad, garantizando la precisión y consistencia de las piezas. La capacidad de fabricar piezas bajo demanda reduce la necesidad de inventarios, contribuyendo a la optimización de costos. En conjunto, las Creality K1C se presentan como una solución eficiente y versátil para la manufactura de piezas industriales, al combinar velocidad, resistencia y precisión."
    },
    whyus: {
      title: "¿Por qué elegirnos?",
      titleOne: "Calidad Garantizada",
      descriptionOne: "Dada la gran diponibilidad de materiales y la tecnología de impresión avanzada que empleamos, nuestro equipo de ingenieros ofrece la mejor colaboracion para optimizar la fabricación de piezas que mejor se ajuste a las necesidades especificas de su aplicación permitiendo lograr resultados de alta precisión.",
      titleTwo: "Rapidez y Eficiencia",
      descriptionTwo: "Nuestro proceso optimizado y las capacidades de nuestros equipos nos permite entregar piezas en tiempo récord sin comprometer la calidad.",
      titleThree: "Experiencia y Profesionalismo",
      descriptionThree: "Contamos con un equipo de ingenieros expertos en impresión 3D y diseño industrial para brindarte la mejor asesoría."
    },
    about: {
      title: "Nuestro Equipo",
      description: "Somos un equipo de ingenieros electrónicos con experiencia en la industria, apasionados por la impresión 3D y comprometidos con la excelencia. Contamos con un amplio criterio y determinación para abordar cualquier necesidad, garantizando soluciones innovadoras y de alta calidad para cada proyecto.",
      aboutNameOne: "Federico Delgado",
      aboutDescriptionOne: "Especialista en modelado e impresión 3D. Innovador y perfeccionista en cada proyecto.",
      aboutNameTwo: "Pedro Rosito",
      aboutDescriptionTwo: "Encargado de logística y calidad. Se asegura de que todo llegue en perfectas condiciones.",
      aboutNameThree: "Christian Canaan",
      aboutDescriptionThree: "Atención al cliente y soporte técnico. Siempre listo para resolver tus dudas."
    },
    partners: {
      title: "Empresas Colaboradoras",
      description: "Detrás de cada pieza fabricada, hay una historia de colaboración y confianza. Hemos tenido el privilegio de trabajar con empresas líderes en diversos sectores, quienes depositaron su confianza en nuestra capacidad para transformar sus ideas en realidad. Cada proyecto es un testimonio de nuestra dedicación a la precisión, la calidad y la innovación. Nos enorgullece presentar a nuestros partners, empresas que han confiado en nosotros para superar desafíos y alcanzar sus objetivos. Su éxito es nuestro éxito, y nos motiva a seguir elevando los estándares de la impresión 3D industrial. Únete a la lista de empresas que han encontrado en nosotros un aliado confiable para la manufactura de piezas de alta calidad."
    },
    contact: {
      title: "Contacto",
      description: "¿Listo para llevar tus proyectos industriales al siguiente nivel? En 3DIndustry, estamos ansiosos por escuchar tus ideas y desafíos. Completa el formulario a continuación y un miembro de nuestro equipo se pondrá en contacto a la brevedad. Ya sea porque necesites prototipos rápidos, piezas finales personalizadas o asesoramiento especial en impresión 3D, estamos aquí para ayudarte a hacer realidad tus proyectos con precisión y eficiencia. ¡Contáctanos hoy y descubre cómo podemos transformar tus conceptos en soluciones tangibles!",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu consulta",
      sendButton: "Enviar",
      sendLoadingButton: "Enviando...",
      emailDescription: "Ingresa un email válido",
      messageDescription: "Cuentanos en pocas palabras tus necesidades",
      fileDescription: "Opcional: Muestranos tu modelo si lo deseas para ayudarte mejor!"
    },
    footer: {
      privacy: "Política de Privacidad",
      terms: "Términos y condiciones",
      contact: "Contacto",
      reserved: "3DIndustry. Todos los derechos reservados"
    }
  }
}

// Creamos la instancia
const i18n = createI18n({
  locale: "es", // Idioma por default
  fallbackLocale: "en", // Si falta una traducción en español, usa inglés
  messages
})

export default i18n
