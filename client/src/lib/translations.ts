export type Language = 'en' | 'sr';

export type TranslationKey = 
  | 'nav.home'
  | 'nav.about'
  | 'nav.gallery'
  | 'nav.testimonials'
  | 'nav.contact'
  | 'hero.slide1.title'
  | 'hero.slide1.subtitle'
  | 'hero.slide2.title'
  | 'hero.slide2.subtitle'
  | 'hero.slide3.title'
  | 'hero.slide3.subtitle'
  | 'hero.cta'
  | 'about.title'
  | 'about.subtitle'
  | 'about.description'
  | 'about.timeline.title'
  | 'about.timeline.item1.year'
  | 'about.timeline.item1.title'
  | 'about.timeline.item1.description'
  | 'about.timeline.item2.year'
  | 'about.timeline.item2.title'
  | 'about.timeline.item2.description'
  | 'about.timeline.item3.year'
  | 'about.timeline.item3.title'
  | 'about.timeline.item3.description'
  | 'about.timeline.item4.year'
  | 'about.timeline.item4.title'
  | 'about.timeline.item4.description'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'gallery.filters.all'
  | 'gallery.filters.bathrooms'
  | 'gallery.filters.kitchens'
  | 'gallery.filters.outdoor'
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'testimonials.items.0.name'
  | 'testimonials.items.0.text'
  | 'testimonials.items.1.name'
  | 'testimonials.items.1.text'
  | 'testimonials.items.2.name'
  | 'testimonials.items.2.text'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.phone'
  | 'contact.form.message'
  | 'contact.form.submit'
  | 'contact.info.call'
  | 'contact.info.email'
  | 'contact.info.address'
  | 'footer.companyInfo'
  | 'footer.quickLinks'
  | 'footer.services'
  | 'footer.newsletter'
  | 'footer.newsletterDesc'
  | 'footer.emailPlaceholder'
  | 'footer.copyright';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      slide1: {
        title: 'Fast. Clean. Perfect.',
        subtitle: 'Your Dream Space Awaits.'
      },
      slide2: {
        title: 'Crafting Perfection',
        subtitle: 'For Generations'
      },
      slide3: {
        title: 'Premium Tiling',
        subtitle: 'Exceptional Results'
      },
      cta: 'Get a Quote'
    },
    about: {
      title: 'About Us',
      subtitle: 'A Legacy of Excellence',
      description: 'With two expert teams and a legacy spanning generations, we bring unmatched skill to every project. As a second-generation family business with decades of expertise, we pride ourselves on attention to detail, timely delivery, and outstanding craftsmanship.',
      timeline: {
        title: 'Our Journey',
        item1: {
          year: '1970s',
          title: 'Founded by Master Craftsman',
          description: 'Our company was established with a simple mission: deliver exceptional tiling work with integrity.'
        },
        item2: {
          year: '1990s',
          title: 'Second Generation Joins',
          description: 'The founder\'s children brought new techniques and modern approaches while maintaining traditional quality.'
        },
        item3: {
          year: '2010s',
          title: 'Expansion to New Markets',
          description: 'We grew our team and expanded services to meet increasing demand for premium tiling.'
        },
        item4: {
          year: 'Today',
          title: 'Two Expert Teams',
          description: 'Now with two full-service crews, we offer immediate availability and uncompromising quality.'
        }
      }
    },
    gallery: {
      title: 'Our Work',
      subtitle: 'Craftsmanship in Every Detail',
      filters: {
        all: 'All Projects',
        bathrooms: 'Bathrooms',
        kitchens: 'Kitchens',
        outdoor: 'Outdoor'
      }
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What Our Clients Say',
      items: [
        {
          name: 'Sarah Johnson',
          text: 'They transformed my bathroom in record time! The attention to detail was incredible.'
        },
        {
          name: 'Michael Brown',
          text: 'Professional, clean, and precise. My kitchen renovation exceeded all expectations.'
        },
        {
          name: 'Emma Davis',
          text: 'The outdoor tiling they did has survived three harsh winters without a single issue. Exceptional quality!'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s Discuss Your Project',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message'
      },
      info: {
        call: 'Call us at',
        email: 'Email us at',
        address: 'Find us at'
      }
    },
    footer: {
      companyInfo: 'A second-generation family business with decades of experience in premium tiling services.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to receive updates on our latest projects and special offers.',
      emailPlaceholder: 'Your email',
      copyright: '© 2023 Kucharik-Keramika. All rights reserved.'
    }
  },
  sr: {
    nav: {
      home: 'Početna',
      about: 'O Nama',
      gallery: 'Galerija',
      testimonials: 'Utisci',
      contact: 'Kontakt'
    },
    hero: {
      slide1: {
        title: 'Brzo. Čisto. Savršeno.',
        subtitle: 'Vaš Prostor iz Snova'
      },
      slide2: {
        title: 'Savršenstvo',
        subtitle: 'Kroz Generacije'
      },
      slide3: {
        title: 'Premium Keramika',
        subtitle: 'Izuzetni Rezultati'
      },
      cta: 'Zatražite Ponudu'
    },
    about: {
      title: 'O Nama',
      subtitle: 'Nasleđe Izvrsnosti',
      description: 'Sa dva stručna tima i nasleđem koje se proteže generacijama, donosimo nenadmašnu veštinu u svaki projekat. Kao porodični posao druge generacije sa decenijama stručnosti, ponosni smo na pažnju prema detaljima, pravovremenoj isporuci i izvanrednom zanatstvu.',
      timeline: {
        title: 'Naš Put',
        item1: {
          year: '1970-te',
          title: 'Osnovan od strane Majstora Zanata',
          description: 'Naša kompanija je osnovana s jednostavnom misijom: pružiti izuzetan rad s keramikom uz integritet.'
        },
        item2: {
          year: '1990-te',
          title: 'Druga Generacija se Pridružuje',
          description: 'Deca osnivača donela su nove tehnike i moderne pristupe uz održavanje tradicionalnog kvaliteta.'
        },
        item3: {
          year: '2010-te',
          title: 'Širenje na Nova Tržišta',
          description: 'Proširili smo naš tim i proširili usluge kako bismo zadovoljili rastuću potražnju za premium keramikom.'
        },
        item4: {
          year: 'Danas',
          title: 'Dva Stručna Tima',
          description: 'Sada sa dve pune uslužne ekipe, nudimo trenutnu dostupnost i beskompromisni kvalitet.'
        }
      }
    },
    gallery: {
      title: 'Naši Radovi',
      subtitle: 'Zanatstvo u Svakom Detalju',
      filters: {
        all: 'Svi Projekti',
        bathrooms: 'Kupatila',
        kitchens: 'Kuhinje',
        outdoor: 'Spoljašnost'
      }
    },
    testimonials: {
      title: 'Utisci',
      subtitle: 'Šta Naši Klijenti Kažu',
      items: [
        {
          name: 'Sara Jovanović',
          text: 'Transformisali su moje kupatilo u rekordnom vremenu! Pažnja prema detaljima je bila neverovatna.'
        },
        {
          name: 'Mihailo Branković',
          text: 'Profesionalno, čisto i precizno. Renoviranje moje kuhinje je prevazišlo sva očekivanja.'
        },
        {
          name: 'Ema Davidović',
          text: 'Vanjsko popločavanje koje su uradili preživelo je tri oštre zime bez ijednog problema. Izuzetan kvalitet!'
        }
      ]
    },
    contact: {
      title: 'Kontaktirajte Nas',
      subtitle: 'Razgovarajmo o Vašem Projektu',
      form: {
        name: 'Ime i Prezime',
        email: 'Email Adresa',
        phone: 'Broj Telefona',
        message: 'Vaša Poruka',
        submit: 'Pošalji Poruku'
      },
      info: {
        call: 'Pozovite nas',
        email: 'Pišite nam',
        address: 'Posetite nas'
      }
    },
    footer: {
      companyInfo: 'Porodični posao druge generacije sa decenijama iskustva u premium keramičarskim uslugama.',
      quickLinks: 'Brzi Linkovi',
      services: 'Naše Usluge',
      newsletter: 'Novosti',
      newsletterDesc: 'Pretplatite se da dobijate informacije o našim najnovijim projektima i specijalnim ponudama.',
      emailPlaceholder: 'Vaš email',
      copyright: '© 2023 Kucharik-Keramika - Sva prava zadržana.'
    }
  }
};
