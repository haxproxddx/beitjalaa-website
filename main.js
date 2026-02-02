// =========================================================
// beit jala Barber Lounge
// Minimal JavaScript for UX polish
// - Dynamic year in footer
// - Scroll-triggered reveal animations
// - Language toggle (English/Spanish)
// =========================================================

// -------- Translations Object --------
var translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      barberLounge: "Barber Lounge"
    },
    hero: {
      eyebrow: "Luxury Grooming Experience",
      subtitle: "Precision cuts, refined grooming, and a calm, luxurious atmosphere tailored for the modern gentleman.",
      viewServices: "View Services",
      discover: "Discover beit jala"
    },
    about: {
      title: "About beit jala",
      subtitle: "Where craftsmanship meets comfort.",
      text1: "At beit jala, every detail is curated for those who expect more from their grooming ritual. From precision haircuts to meticulous beard shaping and rejuvenating treatments, we deliver a complete luxury experience.",
      text2: "Our space is designed as a quiet escape from the rush of everyday life – a place where you can relax, reset, and walk out renewed with confidence.",
      imageAlt: "Interior of beit jala luxury barber shop"
    },
    team: {
      title: "Meet the Team",
      subtitle: "A team of dedicated professionals bringing precision and artistry to every detail.",
      saliba: {
        role: "Owner & Main Barber",
        bio: "Known for his meticulous attention to detail and refined sense of style, Luis leads beit jala with a passion for timeless grooming and modern precision."
      },
      elena: {
        role: "Master Barber & Stylist",
        bio: "Angela blends artistic flair with technical mastery, crafting sharp, contemporary looks while maintaining an exceptionally personal and relaxed client experience."
      }
    },
    services: {
      title: "Services & Experiences",
      subtitle: "Tailored grooming rituals designed to refine your look and restore your energy.",
      haircut: {
        title: "Haircut",
        desc: "Classic or contemporary cuts, finished with precision detailing and luxury styling products."
      },
      haircutScissors: {
        title: "Haircut only using scissors",
        desc: "Precision haircut using only scissors for a classic, refined look."
      },
      hairBeard: {
        title: "Hair & Beard",
        desc: "A complete grooming session that balances your haircut with a perfectly sculpted beard."
      },
      facial: {
        title: "Facial Cleaning",
        desc: "Deep cleansing ritual designed to refresh the skin, unclog pores, and restore a healthy glow."
      },
      beardShaping: {
        title: "Beard Shaping & Extra Hair Removal",
        desc: "Targeted shaping and clean-up of stray hairs for a sharp, defined, and polished look."
      },
      massage30: {
        title: "Massage – 30 Minutes",
        desc: "Focused relaxation to release tension in the neck, shoulders, and upper back."
      },
      massage60: {
        title: "Massage – 60 Minutes",
        desc: "Full-body relaxation with carefully curated techniques to leave you fully renewed."
      },
      vip: {
        title: "VIP Haircut",
        label: "Luxury Experience",
        desc: "An elevated haircut experience with extended consultation, hot towel treatment, and premium finishing products. Reserved for guests who appreciate every detail.",
        note: "Pricing available in-lounge. Ask our team for the VIP experience."
      }
    },
    offers: {
      title: "Signature Offer",
      subtitle: "Curated combinations designed for complete renewal.",
      badge: "Exclusive",
      offerTitle: "Facial Cleaning + Haircut + 30-minute Massage",
      offerDesc: "A complete luxury ritual that refreshes your skin, refines your style, and releases deep tension – crafted for days when you need a full reset.",
      note: "Limited daily availability",
      badge2: "Special Offer",
      offer2Title: "2 in 1",
      offer2Desc: "Bring a companion and both of you will receive the same service at the price of one person. This exclusive offer is available exclusively on Saturday, February 7, 2026, from 10:00 AM to 7:00 PM.",
      offer2Note: "Saturday, February 7, 2026 | 10:00 AM - 7:00 PM"
    },
    location: {
      title: "Barbershop Location",
      subtitle: "Visit us at our location in Sunset Plaza (plaza centro), next to Labu.",
      infoTitle: "Find Us",
      address: "Sunset Plaza (plaza centro)<br>Next to Labu<br>beit jala, Comayagua<br>+504 89155939"
    },
    popup: {
      contactText: "To contact us use this number <span class=\"text-gold\">+ 504 89155939</span>"
    },
    footer: {
      tagline: "Luxury barber lounge for the modern gentleman.",
      taglineServices: "Curated grooming rituals & exclusive offers.",
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      barberLounge: "Barbería de Lujo"
    },
    hero: {
      eyebrow: "Experiencia de Aseo de Lujo",
      subtitle: "Cortes precisos, aseo refinado y una atmósfera tranquila y lujosa diseñada para el caballero moderno.",
      viewServices: "Ver Servicios",
      discover: "Descubre beit jala"
    },
    about: {
      title: "Acerca de beit jala",
      subtitle: "Donde la artesanía se encuentra con la comodidad.",
      text1: "En beit jala, cada detalle está curado para aquellos que esperan más de su ritual de aseo. Desde cortes de pelo precisos hasta el modelado meticuloso de la barba y tratamientos rejuvenecedores, ofrecemos una experiencia de lujo completa.",
      text2: "Nuestro espacio está diseñado como un escape tranquilo del ajetreo de la vida cotidiana: un lugar donde puedes relajarte, reiniciar y salir renovado con confianza.",
      imageAlt: "Interior de la barbería de lujo beit jala"
    },
    team: {
      title: "Conoce al Equipo",
      subtitle: "Un equipo de profesionales dedicados que aportan precisión y arte a cada detalle.",
      saliba: {
        role: "Propietario y Barbero Principal",
        bio: "Conocido por su meticulosa atención al detalle y su sentido refinado del estilo, Luis lidera beit jala con pasión por el aseo atemporal y la precisión moderna."
      },
      elena: {
        role: "Barbero Maestro y Estilista",
        bio: "Angela combina el talento artístico con la maestría técnica, creando looks nítidos y contemporáneos mientras mantiene una experiencia de cliente excepcionalmente personal y relajada."
      }
    },
    services: {
      title: "Servicios y Experiencias",
      subtitle: "Rituales de aseo personalizados diseñados para refinar tu apariencia y restaurar tu energía.",
      haircut: {
        title: "Corte de Pelo",
        desc: "Cortes clásicos o contemporáneos, terminados con detalles precisos y productos de peinado de lujo."
      },
      haircutScissors: {
        title: "Corte de pelo solo con tijeras",
        desc: "Corte de pelo de precisión usando solo tijeras para un look clásico y refinado."
      },
      hairBeard: {
        title: "Pelo y Barba",
        desc: "Una sesión de aseo completa que equilibra tu corte de pelo con una barba perfectamente esculpida."
      },
      facial: {
        title: "Limpieza Facial",
        desc: "Ritual de limpieza profunda diseñado para refrescar la piel, desobstruir los poros y restaurar un brillo saludable."
      },
      beardShaping: {
        title: "Perfilado de Barba y Eliminación de Vello Extra",
        desc: "Perfilado dirigido y limpieza de pelos sueltos para un aspecto nítido, definido y pulido."
      },
      massage30: {
        title: "Masaje – 30 Minutos",
        desc: "Relajación enfocada para liberar la tensión en el cuello, hombros y espalda superior."
      },
      massage60: {
        title: "Masaje – 60 Minutos",
        desc: "Relajación de cuerpo completo con técnicas cuidadosamente seleccionadas para dejarte completamente renovado."
      },
      vip: {
        title: "Corte de Pelo VIP",
        label: "Experiencia de Lujo",
        desc: "Una experiencia de corte de pelo elevada con consulta extendida, tratamiento con toalla caliente y productos de acabado premium. Reservado para huéspedes que aprecian cada detalle.",
        note: "Precios disponibles en la barbería. Pregunta a nuestro equipo por la experiencia VIP."
      }
    },
    offers: {
      title: "Oferta Especial",
      subtitle: "Combinaciones curadas diseñadas para una renovación completa.",
      badge: "Exclusivo",
      offerTitle: "Limpieza Facial + Corte de Pelo + Masaje de 30 Minutos",
      offerDesc: "Un ritual de lujo completo que refresca tu piel, refina tu estilo y libera la tensión profunda: diseñado para días en los que necesitas un reinicio completo.",
      note: "Disponibilidad diaria limitada",
      badge2: "Oferta Especial",
      offer2Title: "2 en 1",
      offer2Desc: "Trae un acompañante y ambos recibirán el mismo servicio al precio de una persona. Esta oferta exclusiva está disponible únicamente el sábado 7 de febrero de 2026, de 10:00 AM a 7:00 PM.",
      offer2Note: "Sábado, 7 de febrero de 2026 | 10:00 AM - 7:00 PM"
    },
    location: {
      title: "Ubicación de la Barbería",
      subtitle: "Visítanos en nuestra ubicación en Sunset Plaza (plaza centro), junto a Labu.",
      infoTitle: "Encuéntranos",
      address: "Sunset Plaza (plaza centro)<br>Junto a Labu<br>beit jala, Comayagua<br>+504 89155939"
    },
    popup: {
      contactText: "Para contactarnos usa este número <span class=\"text-gold\">+ 504 89155939</span>"
    },
    footer: {
      tagline: "Barbería de lujo para el caballero moderno.",
      taglineServices: "Rituales de aseo curados y ofertas exclusivas.",
      rights: "Todos los derechos reservados."
    }
  }
};

// -------- Language Management --------
var currentLang = localStorage.getItem("lang") || "es";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
  
  // Update all elements with data-i18n attribute
  var elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var keys = key.split(".");
    var translation = translations[lang];
    
    for (var i = 0; i < keys.length; i++) {
      if (translation && translation[keys[i]]) {
        translation = translation[keys[i]];
      } else {
        translation = null;
        break;
      }
    }
    
    if (translation) {
      // Use innerHTML for elements that need HTML content (like address with <br> or popup with <span>)
      if (key === "location.address" || key === "popup.contactText") {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  
  // Update image alt attributes
  var imageElements = document.querySelectorAll("[data-i18n-alt]");
  imageElements.forEach(function (el) {
    var key = el.getAttribute("data-i18n-alt");
    var keys = key.split(".");
    var translation = translations[lang];
    
    for (var i = 0; i < keys.length; i++) {
      if (translation && translation[keys[i]]) {
        translation = translation[keys[i]];
      } else {
        translation = null;
        break;
      }
    }
    
    if (translation) {
      el.setAttribute("alt", translation);
    }
  });
}

function toggleLanguage() {
  var newLang = currentLang === "en" ? "es" : "en";
  setLanguage(newLang);
}

// -------- Dynamic Year in Footer --------
document.addEventListener("DOMContentLoaded", function () {
  var yearSpans = document.querySelectorAll("#year");
  var currentYear = new Date().getFullYear();

  yearSpans.forEach(function (el) {
    el.textContent = String(currentYear);
  });

  // -------- Language Toggle Button --------
  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }
  
  // Set initial language
  setLanguage(currentLang);

  // -------- Scroll-triggered Animations --------
  var animatedItems = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.18,
      }
    );

    animatedItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    // Fallback for older browsers: reveal all items
    animatedItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  // -------- Contact Popup (Services Page Only) --------
  if (window.location.pathname.includes("services.html") || window.location.pathname.endsWith("services.html")) {
    var contactPopup = document.getElementById("contactPopup");
    var popupClose = document.getElementById("popupClose");
    
    if (contactPopup && popupClose) {
      // Show popup after 5 seconds
      setTimeout(function() {
        contactPopup.classList.add("is-visible");
      }, 5000);
      
      // Close popup when X button is clicked
      popupClose.addEventListener("click", function() {
        contactPopup.classList.remove("is-visible");
      });
      
      // Close popup when clicking outside (optional)
      contactPopup.addEventListener("click", function(e) {
        if (e.target === contactPopup) {
          contactPopup.classList.remove("is-visible");
        }
      });
    }
  }
});




