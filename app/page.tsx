'use client';

import { useState, useEffect } from 'react';

// ==========================================
// METODOLOGÍAS DE PENSAMIENTO + COPYWRITING + STORYTELLING
// ==========================================

const methodologies = [
  // ========== PENSAMIENTO ==========
  {
    id: 'first-principles',
    emoji: '🔬',
    name: 'First Principles',
    category: 'Pensamiento',
    genius: 'Elon Musk',
    oneLiner: 'Destruye las suposiciones. Reconstruye desde la verdad.',
    bestFor: 'Artículos que desafían lo establecido',
    steps: [
      {
        title: 'El problema',
        question: '¿Cuál es el problema o tema que quieres explorar?',
        placeholder: 'Ej: La gente no sabe invertir su dinero...',
        hint: 'Sé específico. No "finanzas", sino el problema real.'
      },
      {
        title: 'Las suposiciones',
        question: '¿Qué cree TODO EL MUNDO sobre este tema? (aunque sea falso)',
        placeholder: 'Ej: "Necesitas mucho dinero para invertir", "Es muy complicado"...',
        hint: 'Escribe todo lo que la gente asume sin cuestionar.'
      },
      {
        title: 'Cuestiona',
        question: '¿Cuál de esas suposiciones es FALSA o exagerada?',
        placeholder: 'Ej: "Necesitas mucho dinero" es falso porque puedes empezar con $100...',
        hint: 'Aquí está el oro. Las suposiciones falsas son tu contenido.'
      },
      {
        title: 'La verdad',
        question: '¿Cuál es la VERDAD que la mayoría ignora?',
        placeholder: 'Ej: La verdad es que cualquiera puede invertir desde su celular...',
        hint: 'Esta es tu tesis principal. El corazón de tu artículo.'
      },
      {
        title: 'Reconstruye',
        question: '¿Cómo explicarías esto desde cero?',
        placeholder: 'Ej: Paso 1: Descarga esta app. Paso 2: Conecta tu cuenta...',
        hint: 'La solución basada en la verdad, no en mitos.'
      }
    ]
  },
  {
    id: 'inverse',
    emoji: '🔄',
    name: 'Pensamiento Inverso',
    category: 'Pensamiento',
    genius: 'Charlie Munger',
    oneLiner: 'Quieres éxito? Primero, garantiza el fracaso. Luego evítalo.',
    bestFor: 'Listas de errores, "lo que NO hacer"',
    steps: [
      {
        title: 'Tu objetivo',
        question: '¿Qué quieres lograr o enseñar?',
        placeholder: 'Ej: Quiero enseñar a la gente a ser productiva...',
        hint: 'El resultado positivo que buscas.'
      },
      {
        title: 'Garantiza el fracaso',
        question: 'Si quisieras GARANTIZAR el fracaso, ¿qué harías?',
        placeholder: 'Ej: Revisa tu celular cada 5 min, no duermas, di sí a todo...',
        hint: 'Sé creativo. Todos los errores posibles.'
      },
      {
        title: 'Errores comunes',
        question: '¿Cuáles de estos errores comete la gente CONSTANTEMENTE?',
        placeholder: 'Ej: El 90% revisa el celular cada 5 minutos...',
        hint: 'Estos son los villanos de tu artículo.'
      },
      {
        title: 'La inversión',
        question: 'Invierte cada error. ¿Cuál es el comportamiento OPUESTO?',
        placeholder: 'Ej: En vez de revisar el celular → bloquearlo por 2 horas...',
        hint: 'Cada inversión es un consejo accionable.'
      },
      {
        title: 'Título negativo',
        question: '¿Cuál sería el título más provocador usando el ángulo negativo?',
        placeholder: 'Ej: "Cómo garantizar que nunca logres nada"',
        hint: 'Los títulos negativos generan más clicks.'
      }
    ]
  },
  {
    id: 'premortem',
    emoji: '💀',
    name: 'Pre-Mortem',
    category: 'Pensamiento',
    genius: 'Daniel Kahneman',
    oneLiner: 'El proyecto ya fracasó. Ahora descubre por qué.',
    bestFor: 'Guías de prevención, checklists',
    steps: [
      {
        title: 'El proyecto',
        question: '¿Qué proyecto o decisión quieres analizar?',
        placeholder: 'Ej: Lanzar mi curso online, empezar un negocio...',
        hint: 'Algo que estás por hacer o que otros hacen.'
      },
      {
        title: 'FRACASÓ',
        question: 'Es 1 año después y FRACASÓ. ¿Por qué?',
        placeholder: 'Ej: No validé la idea, me quedé sin dinero, no tenía audiencia...',
        hint: 'Sé brutalmente honesto.'
      },
      {
        title: 'Señales',
        question: '¿Qué señales tempranas indicarían el fracaso?',
        placeholder: 'Ej: Si en el primer mes no tengo 100 seguidores...',
        hint: 'Las métricas que debes vigilar.'
      },
      {
        title: 'Prevención',
        question: '¿Qué harías DIFERENTE para evitar cada punto?',
        placeholder: 'Ej: Validar con 10 personas antes de crear...',
        hint: 'Cada prevención es un consejo de oro.'
      },
      {
        title: 'Checklist',
        question: 'Conviértelo en checklist: "Antes de X, asegúrate de Y"',
        placeholder: 'Ej: Antes de lanzar, asegúrate de tener 10 personas que pagarían...',
        hint: 'Los checklists son contenido de alto valor.'
      }
    ]
  },

  // ========== COPYWRITING ==========
  {
    id: 'pas',
    emoji: '🎯',
    name: 'PAS',
    category: 'Copywriting',
    genius: 'Dan Kennedy',
    oneLiner: 'Problema → Agitación → Solución. El framework más poderoso.',
    bestFor: 'Posts de venta, landing pages, emails',
    steps: [
      {
        title: 'PROBLEMA',
        question: '¿Cuál es el DOLOR más grande de tu audiencia?',
        placeholder: 'Ej: No pueden dormir bien, siempre están cansados...',
        hint: 'El problema que les quita el sueño (literal o figurativo).'
      },
      {
        title: 'AGITACIÓN',
        question: 'Haz el problema MÁS GRANDE. ¿Qué pasa si no lo resuelven?',
        placeholder: 'Ej: Cada día que pasa estás más agotado, tu productividad cae, tus relaciones sufren, tu salud empeora...',
        hint: 'Echa sal en la herida. Hazles SENTIR el dolor.'
      },
      {
        title: 'Más agitación',
        question: '¿Qué han intentado que NO funcionó?',
        placeholder: 'Ej: Probaste pastillas, apps de meditación, té de hierbas... nada funciona...',
        hint: 'Demuestra que entiendes su frustración.'
      },
      {
        title: 'SOLUCIÓN',
        question: '¿Cuál es TU solución y por qué es diferente?',
        placeholder: 'Ej: Este método de 5 minutos antes de dormir resetea tu sistema nervioso...',
        hint: 'Presenta tu solución como el alivio que buscaban.'
      },
      {
        title: 'Prueba',
        question: '¿Qué PRUEBA tienes de que funciona?',
        placeholder: 'Ej: Yo lo usé y ahora duermo 8 horas. 500 personas lo han probado...',
        hint: 'Testimonios, datos, tu propia historia.'
      }
    ]
  },
  {
    id: 'aida',
    emoji: '🧲',
    name: 'AIDA',
    category: 'Copywriting',
    genius: 'Elias St. Elmo Lewis',
    oneLiner: 'Atención → Interés → Deseo → Acción. El clásico que siempre funciona.',
    bestFor: 'Cualquier contenido persuasivo',
    steps: [
      {
        title: 'ATENCIÓN',
        question: '¿Qué frase IMPACTANTE capturaría la atención en 3 segundos?',
        placeholder: 'Ej: "Perdí $50,000 por no saber esto" / "El 90% está haciendo esto mal"',
        hint: 'Números, controversia, curiosidad, shock.'
      },
      {
        title: 'INTERÉS',
        question: '¿Qué información haría que quieran seguir leyendo?',
        placeholder: 'Ej: Descubrí que hay un patrón que usan todos los millonarios...',
        hint: 'Promete valor. Genera curiosidad.'
      },
      {
        title: 'DESEO',
        question: '¿Cómo sería su vida SI lograran lo que ofreces?',
        placeholder: 'Ej: Imagina despertar sin alarma, con energía, listo para conquistar...',
        hint: 'Pinta el futuro ideal. Hazles SENTIR lo que quieren.'
      },
      {
        title: 'ACCIÓN',
        question: '¿Qué quieres que HAGAN específicamente?',
        placeholder: 'Ej: Descarga la guía gratis / Comenta "QUIERO" / Compra ahora...',
        hint: 'Un solo CTA claro. Sin confusión.'
      },
      {
        title: 'Urgencia',
        question: '¿Por qué deben actuar AHORA y no después?',
        placeholder: 'Ej: Solo hoy, los primeros 100, antes de que suba el precio...',
        hint: 'Sin urgencia, no hay acción.'
      }
    ]
  },
  {
    id: 'bab',
    emoji: '🌉',
    name: 'BAB (Before-After-Bridge)',
    category: 'Copywriting',
    genius: 'Brian Clark',
    oneLiner: 'Antes estaba mal → Ahora está bien → Este es el puente.',
    bestFor: 'Casos de estudio, transformaciones',
    steps: [
      {
        title: 'BEFORE (Antes)',
        question: 'Describe el ANTES. ¿Cómo era la situación problemática?',
        placeholder: 'Ej: Hace 2 años pesaba 100kg, no podía subir escaleras, me daba vergüenza...',
        hint: 'Sé específico y emocional. Detalles que conecten.'
      },
      {
        title: 'Emociones del antes',
        question: '¿Cómo se SENTÍA en ese momento?',
        placeholder: 'Ej: Frustrado, avergonzado, sin esperanza, enojado conmigo mismo...',
        hint: 'Las emociones conectan más que los hechos.'
      },
      {
        title: 'AFTER (Después)',
        question: 'Describe el DESPUÉS. ¿Cómo es ahora?',
        placeholder: 'Ej: Hoy peso 70kg, corro 5k cada mañana, me siento invencible...',
        hint: 'El contraste debe ser dramático.'
      },
      {
        title: 'BRIDGE (Puente)',
        question: '¿QUÉ cambió? ¿Cuál fue el puente entre antes y después?',
        placeholder: 'Ej: Descubrí el ayuno intermitente + caminatas de 30 min + este mindset...',
        hint: 'Este es tu contenido principal. El "cómo".'
      },
      {
        title: 'El primer paso',
        question: '¿Cuál es el PRIMER PASO que alguien puede tomar hoy?',
        placeholder: 'Ej: Esta noche, solo haz esto: deja de comer a las 8pm...',
        hint: 'Hazlo tan fácil que no puedan decir que no.'
      }
    ]
  },

  // ========== STORYTELLING ==========
  {
    id: 'hero-journey',
    emoji: '🦸',
    name: "Hero's Journey",
    category: 'Storytelling',
    genius: 'Joseph Campbell',
    oneLiner: 'El viaje del héroe simplificado para blogs.',
    bestFor: 'Historias personales, casos de éxito',
    steps: [
      {
        title: 'El mundo ordinario',
        question: '¿Cómo era la vida ANTES del cambio?',
        placeholder: 'Ej: Era empleado de 9-5, odiaba mi trabajo, vivía en automático...',
        hint: 'El punto de partida relatable.'
      },
      {
        title: 'El llamado',
        question: '¿Qué evento o momento cambió todo?',
        placeholder: 'Ej: Un día mi jefe me humilló frente a todos y algo se rompió en mí...',
        hint: 'El momento "no puedo seguir así".'
      },
      {
        title: 'Los obstáculos',
        question: '¿Qué obstáculos enfrentaste en el camino?',
        placeholder: 'Ej: No tenía dinero, mi familia no creía en mí, fallé 3 veces...',
        hint: 'Los obstáculos hacen la historia interesante.'
      },
      {
        title: 'La transformación',
        question: '¿Qué aprendiste o descubriste que cambió todo?',
        placeholder: 'Ej: Entendí que el miedo era la brújula, no el obstáculo...',
        hint: 'El insight que quieres transmitir.'
      },
      {
        title: 'El regreso',
        question: '¿Cómo es tu vida ahora y qué mensaje traes?',
        placeholder: 'Ej: Ahora trabajo 4 horas al día y gano 3x. El mensaje: el miedo es el camino...',
        hint: 'Tu transformación + la lección para otros.'
      }
    ]
  },
  {
    id: 'pixar',
    emoji: '🎬',
    name: 'Fórmula Pixar',
    category: 'Storytelling',
    genius: 'Pixar Studios',
    oneLiner: 'Había una vez... Todos los días... Hasta que un día...',
    bestFor: 'Contar cualquier historia de forma enganchante',
    steps: [
      {
        title: 'Había una vez...',
        question: 'Presenta al personaje y su mundo normal.',
        placeholder: 'Ej: Había una vez un programador que odiaba su trabajo...',
        hint: 'El setup inicial.'
      },
      {
        title: 'Todos los días...',
        question: '¿Qué hacía todos los días? (la rutina)',
        placeholder: 'Ej: Todos los días llegaba a la oficina a las 9, hacía lo que le pedían, y volvía a casa vacío...',
        hint: 'La monotonía o el problema constante.'
      },
      {
        title: 'Hasta que un día...',
        question: '¿Qué pasó que rompió la rutina?',
        placeholder: 'Ej: Hasta que un día vio un video de alguien trabajando desde la playa...',
        hint: 'El incidente incitador.'
      },
      {
        title: 'Por eso...',
        question: '¿Qué hizo como resultado?',
        placeholder: 'Ej: Por eso empezó a aprender sobre negocios online cada noche...',
        hint: 'La acción que tomó.'
      },
      {
        title: 'Hasta que finalmente...',
        question: '¿Cómo terminó la historia?',
        placeholder: 'Ej: Hasta que finalmente renunció, lanzó su propio negocio, y ahora trabaja desde donde quiere...',
        hint: 'La resolución y transformación.'
      }
    ]
  },
  {
    id: 'open-loop',
    emoji: '🔓',
    name: 'Open Loops',
    category: 'Storytelling',
    genius: 'Hollywood Writers',
    oneLiner: 'Crea curiosidad que OBLIGA a seguir leyendo.',
    bestFor: 'Hooks, hilos de Twitter, intros de blogs',
    steps: [
      {
        title: 'El secreto',
        question: '¿Cuál es el "secreto" o revelación principal de tu contenido?',
        placeholder: 'Ej: Descubrí por qué el 90% de los negocios fracasan (y no es lo que crees)...',
        hint: 'Lo que vas a revelar al final.'
      },
      {
        title: 'El teaser',
        question: 'Escribe una frase que PROMETA el secreto sin revelarlo.',
        placeholder: 'Ej: "Hay UNA cosa que hacen todos los negocios que fracasan. Te la digo al final."',
        hint: 'Crea la picazón de curiosidad.'
      },
      {
        title: 'La historia incompleta',
        question: 'Cuenta el INICIO de una historia pero NO el final.',
        placeholder: 'Ej: "El día que perdí todo, mi mentor me dijo 3 palabras que cambiaron mi vida..."',
        hint: 'Los humanos NECESITAN cerrar historias abiertas.'
      },
      {
        title: 'El patrón interrumpido',
        question: '¿Qué "dato sorprendente" puedes soltar que rompa expectativas?',
        placeholder: 'Ej: "Los millonarios no trabajan más duro. Hacen MENOS. Pero hacen ESTO..."',
        hint: 'Contradice lo que creen para crear tensión.'
      },
      {
        title: 'El cierre',
        question: '¿Cómo "cerrarás" todos los loops al final?',
        placeholder: 'Ej: "Las 3 palabras fueron: SIMPLIFICA Y ELIMINA. El secreto del 90% es...',
        hint: 'Satisface la curiosidad que creaste.'
      }
    ]
  },
  {
    id: 'contrast',
    emoji: '⚡',
    name: 'Contraste Dramático',
    category: 'Storytelling',
    genius: 'Robert McKee',
    oneLiner: 'Crea tensión entre opuestos. El drama vive en el contraste.',
    bestFor: 'Hacer cualquier contenido más dramático',
    steps: [
      {
        title: 'El extremo negativo',
        question: '¿Cuál es el PEOR escenario posible de tu tema?',
        placeholder: 'Ej: El peor caso: estás gordo, enfermo, solo, sin dinero, odiando tu vida...',
        hint: 'Ve al extremo. Hazlo visceral.'
      },
      {
        title: 'El extremo positivo',
        question: '¿Cuál es el MEJOR escenario posible?',
        placeholder: 'Ej: El mejor caso: estás en forma, con energía, rodeado de gente que amas, libre...',
        hint: 'El sueño máximo.'
      },
      {
        title: 'La persona atrapada',
        question: 'Describe a alguien ATRAPADO entre estos dos extremos.',
        placeholder: 'Ej: María tiene 35 años, sabe que debería cambiar, pero cada día se acerca más al extremo negativo...',
        hint: 'Tu lector debe verse en esta persona.'
      },
      {
        title: 'El momento de decisión',
        question: '¿Cuál es el momento donde DEBE elegir?',
        placeholder: 'Ej: Hoy es el día. O empiezas ahora, o mañana estarás un día más cerca del peor caso...',
        hint: 'Crea urgencia a través del contraste.'
      },
      {
        title: 'El camino',
        question: '¿Cuál es el PRIMER PASO hacia el extremo positivo?',
        placeholder: 'Ej: No necesitas cambiar todo. Solo empieza con estos 5 minutos cada mañana...',
        hint: 'Dale esperanza y acción.'
      }
    ]
  },

  // ========== FRAMEWORKS HÍBRIDOS ==========
  {
    id: 'ultimate-hook',
    emoji: '🪝',
    name: 'Hook Definitivo',
    category: 'Híbrido',
    genius: 'Combinación de Maestros',
    oneLiner: '5 técnicas de hook en una. Para intro perfectas.',
    bestFor: 'Escribir intros que NADIE pueda ignorar',
    steps: [
      {
        title: 'Hook de número',
        question: 'Escribe un hook con un NÚMERO específico y sorprendente.',
        placeholder: 'Ej: "En 73 días pasé de $0 a $10,000/mes" / "El 94% no sabe esto"',
        hint: 'Los números específicos generan credibilidad.'
      },
      {
        title: 'Hook de pregunta',
        question: 'Escribe un hook como PREGUNTA que haga pensar.',
        placeholder: 'Ej: "¿Por qué la gente exitosa duerme menos pero tiene más energía?"',
        hint: 'Las preguntas activan el cerebro.'
      },
      {
        title: 'Hook de controversia',
        question: 'Escribe un hook CONTROVERSIAL que desafíe creencias.',
        placeholder: 'Ej: "La disciplina está sobrevalorada. Lo que necesitas es esto..."',
        hint: 'Ir contra la corriente genera atención.'
      },
      {
        title: 'Hook de historia',
        question: 'Escribe un hook que EMPIECE una historia en media res.',
        placeholder: 'Ej: "Estaba llorando en el baño de la oficina cuando recibí el mensaje..."',
        hint: 'Empezar en el momento dramático.'
      },
      {
        title: 'Elige el mejor',
        question: '¿Cuál de los 4 hooks es MÁS poderoso para tu tema?',
        placeholder: 'Copia aquí el mejor hook y explica por qué lo elegiste...',
        hint: 'A veces combinar 2 es aún mejor.'
      }
    ]
  },
  {
    id: 'viral-post',
    emoji: '🚀',
    name: 'Post Viral',
    category: 'Híbrido',
    genius: 'Top Creators',
    oneLiner: 'La estructura exacta de posts que explotan.',
    bestFor: 'Redes sociales, hilos, posts de LinkedIn',
    steps: [
      {
        title: 'La primera línea',
        question: 'Escribe 3 versiones de primera línea (DEBE parar el scroll)',
        placeholder: 'V1: "Esto es lo que nadie te dice sobre X"\nV2: "Perdí X por no saber Y"\nV3: "El 99% hace X mal"',
        hint: 'La primera línea es el 80% del éxito.'
      },
      {
        title: 'La promesa',
        question: '¿Qué vas a dar al lector si sigue leyendo? (línea 2-3)',
        placeholder: 'Ej: "En este hilo te explico las 7 lecciones que aprendí para que no cometas mis errores."',
        hint: 'Diles exactamente qué van a obtener.'
      },
      {
        title: 'El contenido',
        question: 'Lista los puntos principales (1 idea = 1 línea)',
        placeholder: '1. Empieza antes de estar listo\n2. El perfeccionismo es miedo disfrazado\n3. La velocidad mata la duda...',
        hint: 'Cada punto debe poder ser un tweet independiente.'
      },
      {
        title: 'La historia personal',
        question: 'Agrega UN momento personal vulnerable.',
        placeholder: 'Ej: "Cuando empecé, publiqué 100 posts sin que nadie los viera. Quería renunciar cada día..."',
        hint: 'La vulnerabilidad genera conexión.'
      },
      {
        title: 'El CTA + pregunta',
        question: 'Termina con un CTA y una pregunta que genere comentarios.',
        placeholder: 'Ej: "Si esto te ayudó, compártelo con alguien que lo necesite. ¿Cuál es TU mayor aprendizaje de este año?"',
        hint: 'Los comentarios amplifican el alcance.'
      }
    ]
  },
  {
    id: 'feynman',
    emoji: '👶',
    name: 'Técnica Feynman',
    category: 'Pensamiento',
    genius: 'Richard Feynman',
    oneLiner: 'Si no lo puedes explicar simple, no lo entiendes.',
    bestFor: 'Explicar cosas complejas de forma simple',
    steps: [
      {
        title: 'El concepto',
        question: '¿Qué concepto "complicado" quieres explicar?',
        placeholder: 'Ej: Blockchain, inversión en bolsa, SEO...',
        hint: 'Algo que la gente piensa que es difícil.'
      },
      {
        title: 'Explícalo a un niño',
        question: 'Sin jerga, ¿cómo lo explicarías a un niño de 8 años?',
        placeholder: 'Ej: Blockchain es como un cuaderno mágico donde todos pueden escribir pero nadie puede borrar...',
        hint: 'Usa palabras de primaria.'
      },
      {
        title: '¿Dónde te trabas?',
        question: '¿En qué parte de la explicación te confundes?',
        placeholder: 'Ej: No sé cómo explicar la seguridad sin hablar de criptografía...',
        hint: 'Donde te trabas = lo que no entiendes. Investiga eso.'
      },
      {
        title: 'La analogía perfecta',
        question: '¿Con qué cosa cotidiana podrías compararlo?',
        placeholder: 'Ej: Es como WhatsApp pero para dinero...',
        hint: 'Conecta lo nuevo con lo familiar.'
      },
      {
        title: 'En 3 oraciones',
        question: 'Escribe la explicación completa en 3 oraciones simples.',
        placeholder: 'Ej: 1) Bitcoin es dinero digital. 2) Funciona sin bancos. 3) Es seguro porque todos verifican.',
        hint: 'Si puedes decirlo en 3 oraciones, lo entiendes.'
      }
    ]
  }
];

// ==========================================
// COMPONENTES Y LÓGICA
// ==========================================

interface WorkshopAnswers {
  [stepIndex: number]: string;
}

interface SavedIdea {
  id: string;
  methodology: string;
  methodologyEmoji: string;
  category: string;
  answers: WorkshopAnswers;
  outline: GeneratedOutline | null;
  createdAt: number;
}

interface GeneratedOutline {
  hook: string;
  title: string;
  subtitle: string;
  thesis: string;
  sections: {title: string; points: string[]}[];
  story: string;
  conclusion: string;
  cta: string;
  tweetThread: string[];
}

const categories = ['Todos', 'Pensamiento', 'Copywriting', 'Storytelling', 'Híbrido'];

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState<typeof methodologies[0] | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<WorkshopAnswers>({});
  const [generatedOutline, setGeneratedOutline] = useState<GeneratedOutline | null>(null);
  const [savedIdeas, setSavedIdeas] = useState<SavedIdea[]>([]);
  const [view, setView] = useState<'home' | 'workshop' | 'ideas'>('home');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('blog-genius-ideas-v3');
    if (saved) setSavedIdeas(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('blog-genius-ideas-v3', JSON.stringify(savedIdeas));
  }, [savedIdeas]);

  const filteredMethods = selectedCategory === 'Todos' 
    ? methodologies 
    : methodologies.filter(m => m.category === selectedCategory);

  const startWorkshop = (method: typeof methodologies[0]) => {
    setSelectedMethod(method);
    setCurrentStep(0);
    setAnswers({});
    setGeneratedOutline(null);
    setView('workshop');
  };

  const generateOutline = () => {
    if (!selectedMethod) return;
    setIsGenerating(true);
    setTimeout(() => {
      const outline = createOutlineFromAnswers(selectedMethod, answers);
      setGeneratedOutline(outline);
      setIsGenerating(false);
    }, 1500);
  };

  const createOutlineFromAnswers = (method: typeof methodologies[0], ans: WorkshopAnswers): GeneratedOutline => {
    const a0 = ans[0] || 'tu tema';
    const a1 = ans[1] || '';
    const a2 = ans[2] || '';
    const a3 = ans[3] || '';
    const a4 = ans[4] || '';

    // Generar hook basado en el tipo
    let hook = '';
    let title = '';
    let subtitle = '';
    let thesis = '';
    let sections: {title: string; points: string[]}[] = [];
    let story = '';
    let conclusion = '';
    let cta = '';
    let tweetThread: string[] = [];

    switch (method.category) {
      case 'Copywriting':
        if (method.id === 'pas') {
          hook = `${a0}. Lo intentaste todo. Nada funcionó. Hasta ahora.`;
          title = `Cómo resolver ${a0} de una vez por todas`;
          subtitle = 'La solución que funciona cuando nada más funciona';
          thesis = a3;
          sections = [
            { title: '😰 El Problema (que conoces muy bien)', points: [a0, ...(a1.split('.').slice(0, 2))] },
            { title: '😱 Por qué es PEOR de lo que crees', points: a1.split('.').filter(Boolean).slice(0, 3) },
            { title: '❌ Lo que ya intentaste (y por qué no funcionó)', points: a2.split('.').filter(Boolean).slice(0, 3) },
            { title: '✅ La Solución', points: a3.split('.').filter(Boolean).slice(0, 3) },
            { title: '📊 La Prueba', points: a4.split('.').filter(Boolean).slice(0, 2) }
          ];
          story = `Yo también pasé por esto. ${a0} me estaba destruyendo. Probé ${a2.split('.')[0]}. No funcionó. Hasta que descubrí ${a3.split('.')[0]}.`;
          conclusion = 'No tienes que seguir sufriendo esto. La solución existe.';
          cta = '¿Listo para cambiar? Empieza hoy.';
        } else if (method.id === 'aida') {
          hook = a0;
          title = `${a1.split('.')[0] || 'El secreto que cambiará todo'}`;
          subtitle = 'Y cómo puedes aprovecharlo hoy';
          thesis = a1;
          sections = [
            { title: '🚨 Atención', points: [a0] },
            { title: '🤔 Por qué esto importa', points: a1.split('.').filter(Boolean).slice(0, 2) },
            { title: '✨ Imagina esto...', points: a2.split('.').filter(Boolean).slice(0, 2) },
            { title: '🎯 Tu próximo paso', points: [a3] }
          ];
          story = `La mayoría nunca actúa. Leen, asienten, y siguen igual. Pero tú no eres la mayoría.`;
          conclusion = a4 || 'El momento es ahora.';
          cta = a3;
        } else if (method.id === 'bab') {
          hook = `Hace un tiempo, ${a0}. Hoy, todo es diferente.`;
          title = `De ${a0.split('.')[0]} a ${a2.split('.')[0]}`;
          subtitle = 'Una transformación real (y cómo puedes replicarla)';
          thesis = `El puente entre donde estás y donde quieres estar es más simple de lo que crees.`;
          sections = [
            { title: '😔 ANTES: Así estaba todo', points: [a0, a1] },
            { title: '😊 DESPUÉS: Así está ahora', points: a2.split('.').filter(Boolean).slice(0, 2) },
            { title: '🌉 EL PUENTE: Qué cambió todo', points: a3.split('.').filter(Boolean).slice(0, 3) },
            { title: '👣 Tu primer paso', points: [a4] }
          ];
          story = `Antes: ${a0}. Me sentía ${a1}. Un día, decidí cambiar. Encontré ${a3.split('.')[0]}. Ahora: ${a2.split('.')[0]}.`;
          conclusion = 'Si yo pude, tú puedes.';
          cta = a4;
        } else {
          // Fallback Copywriting
          hook = `${a0}. Este es tu momento.`;
          title = `Cómo lograr ${a0}`;
          subtitle = 'Una guía paso a paso';
          thesis = a1 || 'El cambio empieza aquí.';
          sections = [
            { title: '🎯 El problema', points: [a0] },
            { title: '💡 La solución', points: a1.split('.').filter(Boolean).slice(0, 2) },
            { title: '✨ El resultado', points: a2.split('.').filter(Boolean).slice(0, 2) },
            { title: '🚀 La acción', points: [a3, a4].filter(Boolean) }
          ];
          story = `Esto es lo que aprendí sobre ${a0}.`;
          conclusion = 'El momento de actuar es ahora.';
          cta = a3 || '¿Listo para empezar?';
        }
        break;

      case 'Storytelling':
        if (method.id === 'hero-journey') {
          hook = `${a0}. Hasta que un día, todo cambió.`;
          title = `Cómo ${a4.split('.')[0] || 'transformé mi vida'}`;
          subtitle = 'El viaje que no sabía que necesitaba';
          thesis = a3;
          sections = [
            { title: '🏠 El mundo ordinario', points: [a0] },
            { title: '📞 El llamado', points: [a1] },
            { title: '🏔️ Los obstáculos', points: a2.split('.').filter(Boolean).slice(0, 3) },
            { title: '💡 La transformación', points: [a3] },
            { title: '🏆 El regreso', points: [a4] }
          ];
          story = `${a0}. Todos los días era igual. ${a1}. Enfrenté ${a2.split('.')[0]}. Aprendí que ${a3}. Hoy, ${a4}.`;
          conclusion = 'Cada héroe tiene su viaje. Este es el tuyo.';
          cta = '¿Cuál es tu llamado que estás ignorando?';
        } else if (method.id === 'pixar') {
          hook = `Había una vez ${a0.split('.')[0]}...`;
          title = `La historia que necesitas escuchar hoy`;
          subtitle = 'Una lección disfrazada de cuento';
          thesis = 'Las mejores lecciones vienen envueltas en historias.';
          sections = [
            { title: '📖 Había una vez...', points: [a0] },
            { title: '🔄 Todos los días...', points: [a1] },
            { title: '💥 Hasta que un día...', points: [a2] },
            { title: '➡️ Por eso...', points: [a3] },
            { title: '🎬 Hasta que finalmente...', points: [a4] }
          ];
          story = `Había una vez ${a0}. Todos los días ${a1}. Hasta que un día ${a2}. Por eso ${a3}. Hasta que finalmente ${a4}.`;
          conclusion = '¿Qué "hasta que un día" necesitas crear en tu vida?';
          cta = 'Comparte tu historia en los comentarios.';
        } else if (method.id === 'open-loop') {
          hook = a1;
          title = `${a0} (La verdad que nadie te dice)`;
          subtitle = 'Lo que estás por descubrir cambiará tu perspectiva';
          thesis = 'La curiosidad te trajo aquí. La respuesta te mantendrá.';
          sections = [
            { title: '🔓 El secreto que voy a revelar', points: [a0] },
            { title: '🎣 Pero antes...', points: [a2] },
            { title: '🤯 Lo que nadie espera', points: [a3] },
            { title: '🔐 El cierre', points: [a4] }
          ];
          story = a2;
          conclusion = a4;
          cta = '¿Qué otro secreto quieres que revele? Comenta abajo.';
        } else if (method.id === 'contrast') {
          hook = `Hay dos versiones de tu futuro. Una te destruye. La otra te libera.`;
          title = `Los dos caminos: ¿Cuál vas a elegir?`;
          subtitle = 'La decisión que estás evitando te está definiendo';
          thesis = 'Entre el mejor y el peor escenario, tú decides con tus acciones de hoy.';
          sections = [
            { title: '💀 El camino oscuro', points: [a0] },
            { title: '✨ El camino de luz', points: [a1] },
            { title: '😰 Atrapado en el medio', points: [a2] },
            { title: '⏰ El momento de decidir', points: [a3] },
            { title: '👣 El primer paso', points: [a4] }
          ];
          story = a2;
          conclusion = 'Cada día que no eliges el camino de luz, eliges el oscuro por defecto.';
          cta = '¿Qué primer paso vas a dar HOY?';
        } else {
          // Fallback Storytelling
          hook = `Déjame contarte una historia sobre ${a0}...`;
          title = `La historia de ${a0}`;
          subtitle = 'Una lección que no olvidarás';
          thesis = 'Las mejores lecciones vienen envueltas en historias.';
          sections = [
            { title: '📖 El inicio', points: [a0] },
            { title: '🔥 El conflicto', points: [a1, a2].filter(Boolean) },
            { title: '💡 El momento clave', points: [a3] },
            { title: '🎬 El desenlace', points: [a4] }
          ];
          story = `${a0}. ${a1}. ${a2}. ${a3}. ${a4}.`;
          conclusion = 'Y esa es la lección.';
          cta = '¿Cuál es TU historia?';
        }
        break;

      case 'Híbrido':
        if (method.id === 'ultimate-hook') {
          hook = a4 || a0;
          title = `El arte de capturar atención (y nunca soltarla)`;
          subtitle = '5 tipos de hooks que funcionan siempre';
          thesis = 'La primera línea decide si leen o ignoran.';
          sections = [
            { title: '🔢 Hook de número', points: [a0] },
            { title: '❓ Hook de pregunta', points: [a1] },
            { title: '🔥 Hook de controversia', points: [a2] },
            { title: '📖 Hook de historia', points: [a3] },
            { title: '🏆 El ganador', points: [a4] }
          ];
          story = a3;
          conclusion = 'Practica escribir 10 hooks antes de elegir uno. El mejor siempre está en los últimos 3.';
          cta = '¿Cuál hook te funcionó mejor? Comparte en comentarios.';
        } else if (method.id === 'viral-post') {
          hook = a0.split('\n')[0] || a0;
          title = a0.split('\n')[0] || 'Tu post viral';
          subtitle = 'Estructura probada para explotar';
          thesis = a1;
          sections = [
            { title: '🛑 Primera línea (para el scroll)', points: a0.split('\n').filter(Boolean) },
            { title: '🎁 La promesa', points: [a1] },
            { title: '📝 El contenido', points: a2.split('\n').filter(Boolean) },
            { title: '💔 La vulnerabilidad', points: [a3] },
            { title: '📣 El CTA', points: [a4] }
          ];
          story = a3;
          conclusion = 'Los posts virales no son accidente. Son estructura + emoción + timing.';
          cta = a4;
        } else {
          // Fallback Híbrido
          hook = a0 || 'Esto va a cambiar tu perspectiva...';
          title = `${method.name}: Aplicado a ${a0}`;
          subtitle = 'Combinando lo mejor de varias técnicas';
          thesis = a1 || 'Una combinación poderosa.';
          sections = [
            { title: '🎯 Paso 1', points: [a0] },
            { title: '🔥 Paso 2', points: [a1] },
            { title: '💡 Paso 3', points: [a2] },
            { title: '🚀 Paso 4', points: [a3] },
            { title: '✅ Paso 5', points: [a4] }
          ];
          story = 'Cada paso construye sobre el anterior.';
          conclusion = a4 || 'Aplica esto y ve los resultados.';
          cta = '¿Funcionó? Cuéntame en los comentarios.';
        }
        break;

      default: // Pensamiento
        if (method.id === 'first-principles') {
          hook = `Todo lo que te dijeron sobre ${a0} es mentira. Bueno, casi todo.`;
          title = `${a0}: Destruyendo mitos, reconstruyendo verdad`;
          subtitle = 'Lo que nadie cuestiona (pero debería)';
          thesis = a3;
          sections = [
            { title: '🤔 Las mentiras que todos creen', points: a1.split(',').map(s => s.trim()).filter(Boolean).slice(0, 3) },
            { title: '❌ Por qué son falsas', points: a2.split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
            { title: '✅ La verdad fundamental', points: [a3] },
            { title: '🔨 Reconstruyendo desde cero', points: a4.split('.').map(s => s.trim()).filter(Boolean).slice(0, 4) }
          ];
          story = `Yo también creía ${a1.split(',')[0]}. Hasta que me di cuenta de que ${a2.split('.')[0]}.`;
          conclusion = `La próxima vez que escuches un "así se hace" sobre ${a0}, cuestiona todo.`;
          cta = '¿Qué otro mito deberíamos destruir? Déjalo en los comentarios.';
        } else if (method.id === 'inverse') {
          hook = `¿Quieres fracasar en ${a0}? Tengo la guía perfecta.`;
          title = a4 || `Cómo garantizar tu fracaso en ${a0}`;
          subtitle = '(Y qué hacer en su lugar)';
          thesis = 'La mejor forma de ganar es saber exactamente cómo perder.';
          sections = [
            { title: '💀 La receta del desastre', points: a1.split(',').map(s => s.trim()).filter(Boolean).slice(0, 4) },
            { title: '😱 Por qué la gente sigue cayendo', points: a2.split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
            { title: '🔄 La inversión: qué hacer', points: a3.split('.').map(s => s.trim()).filter(Boolean).slice(0, 4) }
          ];
          story = `Cometí todos estos errores. Cada uno. Por eso ahora los conozco tan bien.`;
          conclusion = 'El éxito no es hacer las cosas bien. Es dejar de hacer las cosas mal.';
          cta = '¿Cuál de estos errores has cometido? Confiesa sin juicio.';
        } else if (method.id === 'premortem') {
          hook = `Tu proyecto de ${a0} va a fracasar. Lo siento. A menos que...`;
          title = `Por qué ${a0} fracasará (y el checklist para evitarlo)`;
          subtitle = 'Pre-mortem: Anticipa el desastre antes de que pase';
          thesis = 'Los ganadores no tienen más suerte. Tienen mejor prevención.';
          sections = [
            { title: '💀 Las formas de morir', points: a1.split(',').map(s => s.trim()).filter(Boolean).slice(0, 4) },
            { title: '🚨 Señales de advertencia', points: a2.split(',').map(s => s.trim()).filter(Boolean).slice(0, 3) },
            { title: '🛡️ Plan de prevención', points: a3.split('.').map(s => s.trim()).filter(Boolean).slice(0, 4) },
            { title: '✅ Checklist anti-fracaso', points: a4.split('.').map(s => s.trim()).filter(Boolean).slice(0, 5) }
          ];
          story = `Vi a 10 proyectos iguales fracasar. Todos por las mismas razones. No tienes que ser el número 11.`;
          conclusion = 'El fracaso no es el enemigo. La sorpresa sí.';
          cta = '¿Qué punto de fracaso falta? Agrégalo para ayudar a otros.';
        } else if (method.id === 'feynman') {
          hook = `${a0} suena complicado. No lo es. Te lo explico como si tuvieras 8 años.`;
          title = `${a0} explicado para un niño`;
          subtitle = '(Y por qué los "expertos" lo complican innecesariamente)';
          thesis = 'Si no puedes explicarlo simple, no lo entiendes.';
          sections = [
            { title: '👶 La versión de 8 años', points: [a1] },
            { title: '🤔 Donde la mayoría se confunde', points: [a2] },
            { title: '💡 La analogía perfecta', points: [a3] },
            { title: '✅ En 3 oraciones', points: a4.split('.').filter(Boolean).slice(0, 3) }
          ];
          story = `Cuando aprendí ${a0}, también pensé que era complicado. Hasta que encontré esta forma de verlo.`;
          conclusion = `Ahora puedes explicar ${a0} en una cena y sonar inteligente.`;
          cta = '¿Qué otro concepto "complicado" quieres que simplifique?';
        } else {
          // Fallback genérico para cualquier metodología
          hook = `Esto es lo que nadie te dice sobre ${a0}...`;
          title = `${a0}: La guía que necesitabas`;
          subtitle = `Usando ${method.name} para entender mejor`;
          thesis = a3 || a2 || 'Una nueva perspectiva que cambiará cómo piensas.';
          sections = [
            { title: '🎯 El punto de partida', points: [a0] },
            { title: '🔍 Lo que descubrí', points: a1.split('.').filter(Boolean).slice(0, 3) },
            { title: '💡 El insight clave', points: a2.split('.').filter(Boolean).slice(0, 3) },
            { title: '🚀 La aplicación', points: a3.split('.').filter(Boolean).slice(0, 3) },
            { title: '✅ Conclusiones', points: a4.split('.').filter(Boolean).slice(0, 3) }
          ];
          story = `Esto cambió mi forma de ver ${a0}. Y creo que puede cambiar la tuya también.`;
          conclusion = a4 || 'Aplica esto hoy y ve qué pasa.';
          cta = '¿Qué piensas? Déjalo en los comentarios.';
        }
    }

    // Si no se generó nada, usar fallback
    if (!hook) {
      hook = `Esto es lo que nadie te dice sobre ${a0}...`;
      title = `${a0}: Una nueva perspectiva`;
      subtitle = `Usando la metodología ${method.name}`;
      thesis = a3 || a2 || 'Una forma diferente de ver las cosas.';
      sections = [
        { title: '📌 Punto 1', points: [a0, a1].filter(Boolean) },
        { title: '📌 Punto 2', points: [a2, a3].filter(Boolean) },
        { title: '📌 Punto 3', points: [a4].filter(Boolean) }
      ];
      story = `Mi experiencia con ${a0} me enseñó esto.`;
      conclusion = 'Espero que esto te ayude.';
      cta = '¿Qué agregarías tú?';
    }

    // Generar hilo de Twitter
    tweetThread = [
      hook,
      thesis || 'Aquí está lo que aprendí:',
      ...sections.flatMap(s => s.points.slice(0, 2)).slice(0, 5),
      conclusion,
      cta || '¿Qué piensas? 👇'
    ].filter(Boolean);

    return { hook, title, subtitle, thesis, sections, story, conclusion, cta, tweetThread };
  };

  const saveIdea = () => {
    if (!selectedMethod || !generatedOutline) return;
    const newIdea: SavedIdea = {
      id: Date.now().toString(),
      methodology: selectedMethod.name,
      methodologyEmoji: selectedMethod.emoji,
      category: selectedMethod.category,
      answers,
      outline: generatedOutline,
      createdAt: Date.now()
    };
    setSavedIdeas([newIdea, ...savedIdeas]);
  };

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const exportFullOutline = (outline: GeneratedOutline) => {
    const text = `# ${outline.title}
## ${outline.subtitle}

### 🪝 HOOK
${outline.hook}

### 📝 TESIS
${outline.thesis}

${outline.sections.map(s => `### ${s.title}
${s.points.map(p => `- ${p}`).join('\n')}`).join('\n\n')}

### 📖 HISTORIA/EJEMPLO
${outline.story}

### 🎬 CONCLUSIÓN
${outline.conclusion}

### 📣 CALL TO ACTION
${outline.cta}

---

### 🐦 HILO DE TWITTER (listo para copiar)
${outline.tweetThread.map((t, i) => `${i + 1}/ ${t}`).join('\n\n')}
`;
    navigator.clipboard.writeText(text);
    setCopiedSection('full');
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const progress = selectedMethod ? ((currentStep + 1) / selectedMethod.steps.length) * 100 : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => { setView('home'); setSelectedMethod(null); }}
            className="text-xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>🧠</span>
            <span className="hidden sm:inline">Blog Idea Genius</span>
            <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded-full ml-2">PRO</span>
          </button>
          
          <div className="flex gap-2">
            <button onClick={() => setView('home')} className={`px-4 py-2 rounded-lg text-sm transition-all ${view === 'home' || view === 'workshop' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              Workshop
            </button>
            <button onClick={() => setView('ideas')} className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-1 ${view === 'ideas' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              Mis Ideas {savedIdeas.length > 0 && <span className="bg-white/20 px-1.5 rounded-full text-xs">{savedIdeas.length}</span>}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* HOME VIEW */}
        {view === 'home' && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pensamiento + Copywriting + Storytelling<br/>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  = Contenido de ORO
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                12 frameworks de genios combinados. Workshops guiados. 
                Genera outlines completos + hilos de Twitter listos.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Method Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => startWorkshop(method)}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-2xl p-5 text-left transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{method.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{method.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          method.category === 'Copywriting' ? 'bg-green-500/20 text-green-300' :
                          method.category === 'Storytelling' ? 'bg-blue-500/20 text-blue-300' :
                          method.category === 'Híbrido' ? 'bg-orange-500/20 text-orange-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {method.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{method.oneLiner}</p>
                      <p className="text-xs text-gray-500">✨ {method.bestFor}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-white mb-4">🎯 ¿Cuál elegir?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-purple-400 font-medium">Pensamiento:</span>
                  <span className="text-gray-400"> Para artículos que desafíen ideas, enseñen conceptos, analicen problemas.</span>
                </div>
                <div>
                  <span className="text-green-400 font-medium">Copywriting:</span>
                  <span className="text-gray-400"> Para vender, persuadir, convertir. Landing pages, emails, posts de venta.</span>
                </div>
                <div>
                  <span className="text-blue-400 font-medium">Storytelling:</span>
                  <span className="text-gray-400"> Para conectar emocionalmente, contar historias, crear engagement.</span>
                </div>
                <div>
                  <span className="text-orange-400 font-medium">Híbrido:</span>
                  <span className="text-gray-400"> Combina varios. Para hooks perfectos, posts virales, contenido completo.</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* WORKSHOP VIEW */}
        {view === 'workshop' && selectedMethod && (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span className="flex items-center gap-2">
                  {selectedMethod.emoji} {selectedMethod.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedMethod.category === 'Copywriting' ? 'bg-green-500/20 text-green-300' :
                    selectedMethod.category === 'Storytelling' ? 'bg-blue-500/20 text-blue-300' :
                    selectedMethod.category === 'Híbrido' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {selectedMethod.category}
                  </span>
                </span>
                <span>Paso {currentStep + 1} de {selectedMethod.steps.length}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {!generatedOutline ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="mb-6">
                  <span className="text-sm text-purple-400 font-medium">{selectedMethod.steps[currentStep].title}</span>
                  <h2 className="text-2xl font-bold text-white mt-2">{selectedMethod.steps[currentStep].question}</h2>
                  <p className="text-gray-500 text-sm mt-2">💡 {selectedMethod.steps[currentStep].hint}</p>
                </div>

                <textarea
                  value={answers[currentStep] || ''}
                  onChange={(e) => setAnswers({...answers, [currentStep]: e.target.value})}
                  placeholder={selectedMethod.steps[currentStep].placeholder}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 min-h-[180px] resize-y text-lg"
                  autoFocus
                />

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => currentStep > 0 ? setCurrentStep(currentStep - 1) : setView('home')}
                    className="px-6 py-3 text-gray-400 hover:text-white transition-all"
                  >
                    ← {currentStep === 0 ? 'Volver' : 'Anterior'}
                  </button>

                  {currentStep < selectedMethod.steps.length - 1 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      disabled={!answers[currentStep]?.trim()}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Siguiente →
                    </button>
                  ) : (
                    <button
                      onClick={generateOutline}
                      disabled={!answers[currentStep]?.trim() || isGenerating}
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                    >
                      {isGenerating ? (
                        <><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Generando...</>
                      ) : '✨ Generar Outline'}
                    </button>
                  )}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {selectedMethod.steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${idx === currentStep ? 'bg-purple-500 scale-125' : answers[idx] ? 'bg-purple-500/50' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Generated Outline */
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">✅ Tu contenido está listo</h2>
                    <div className="flex gap-2">
                      <button onClick={() => exportFullOutline(generatedOutline)} className={`px-4 py-2 ${copiedSection === 'full' ? 'bg-green-500' : 'bg-white/10 hover:bg-white/20'} text-white rounded-lg text-sm transition-all`}>
                        {copiedSection === 'full' ? '✓ Copiado!' : '📋 Copiar todo'}
                      </button>
                      <button onClick={saveIdea} className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm transition-all">💾 Guardar</button>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-purple-400 font-medium">TÍTULO</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{generatedOutline.title}</h3>
                      <p className="text-gray-400 mt-1">{generatedOutline.subtitle}</p>
                    </div>
                    <button onClick={() => copyToClipboard(generatedOutline.title, 'title')} className={`opacity-0 group-hover:opacity-100 p-2 ${copiedSection === 'title' ? 'bg-green-500' : 'bg-white/10'} rounded-lg transition-all`}>
                      {copiedSection === 'title' ? '✓' : '📋'}
                    </button>
                  </div>
                </div>

                {/* Hook */}
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-orange-400 font-medium">🪝 HOOK (primera línea)</span>
                      <p className="text-xl text-white mt-2 italic">"{generatedOutline.hook}"</p>
                    </div>
                    <button onClick={() => copyToClipboard(generatedOutline.hook, 'hook')} className={`opacity-0 group-hover:opacity-100 p-2 ${copiedSection === 'hook' ? 'bg-green-500' : 'bg-white/10'} rounded-lg transition-all`}>
                      {copiedSection === 'hook' ? '✓' : '📋'}
                    </button>
                  </div>
                </div>

                {/* Thesis */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">📝 TESIS PRINCIPAL</span>
                  <p className="text-lg text-white mt-2">{generatedOutline.thesis}</p>
                </div>

                {/* Sections */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">📚 ESTRUCTURA</span>
                  <div className="mt-4 space-y-4">
                    {generatedOutline.sections.filter(s => s.points.some(p => p)).map((section, idx) => (
                      <div key={idx} className="border-l-2 border-purple-500/50 pl-4">
                        <h4 className="font-semibold text-white">{section.title}</h4>
                        <ul className="mt-2 space-y-1">
                          {section.points.filter(Boolean).map((point, pidx) => (
                            <li key={pidx} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-purple-400">→</span>{point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Story */}
                {generatedOutline.story && (
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                    <span className="text-xs text-blue-400 font-medium">📖 HISTORIA/EJEMPLO</span>
                    <p className="text-gray-300 mt-2">{generatedOutline.story}</p>
                  </div>
                )}

                {/* Conclusion & CTA */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <span className="text-xs text-purple-400 font-medium">🎬 CONCLUSIÓN</span>
                    <p className="text-white mt-2">{generatedOutline.conclusion}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
                    <span className="text-xs text-pink-400 font-medium">📣 CALL TO ACTION</span>
                    <p className="text-white mt-2">{generatedOutline.cta}</p>
                  </div>
                </div>

                {/* Twitter Thread */}
                <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-sky-400 font-medium">🐦 HILO DE TWITTER (listo para publicar)</span>
                    <button 
                      onClick={() => copyToClipboard(generatedOutline.tweetThread.map((t, i) => `${i + 1}/ ${t}`).join('\n\n'), 'thread')}
                      className={`px-3 py-1 ${copiedSection === 'thread' ? 'bg-green-500' : 'bg-sky-500/20 hover:bg-sky-500/30'} text-sky-300 rounded-lg text-sm transition-all`}
                    >
                      {copiedSection === 'thread' ? '✓ Copiado!' : '📋 Copiar hilo'}
                    </button>
                  </div>
                  <div className="space-y-3">
                    {generatedOutline.tweetThread.map((tweet, idx) => (
                      <div key={idx} className="bg-black/20 rounded-lg p-3 text-gray-300 text-sm">
                        <span className="text-sky-400 font-mono mr-2">{idx + 1}/</span>
                        {tweet}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button onClick={() => { setGeneratedOutline(null); setCurrentStep(0); setAnswers({}); }} className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all">
                    🔄 Empezar de nuevo
                  </button>
                  <button onClick={() => { setView('home'); setSelectedMethod(null); }} className="flex-1 px-6 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-all">
                    🧠 Otro framework
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* IDEAS VIEW */}
        {view === 'ideas' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Mis Ideas Guardadas</h1>
              <p className="text-gray-400">Tus outlines listos para convertir en contenido de oro.</p>
            </div>

            {savedIdeas.length === 0 ? (
              <div className="text-center py-16">
                <span className="text-6xl mb-4 block">📭</span>
                <h3 className="text-xl font-bold text-white mb-2">No tienes ideas guardadas</h3>
                <p className="text-gray-400 mb-6">Completa un workshop y guarda tu outline.</p>
                <button onClick={() => setView('home')} className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-all">
                  Empezar un workshop
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {savedIdeas.map((idea) => (
                  <div key={idea.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span>{idea.methodologyEmoji}</span>
                          <span className="text-purple-400 text-sm">{idea.methodology}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            idea.category === 'Copywriting' ? 'bg-green-500/20 text-green-300' :
                            idea.category === 'Storytelling' ? 'bg-blue-500/20 text-blue-300' :
                            idea.category === 'Híbrido' ? 'bg-orange-500/20 text-orange-300' :
                            'bg-purple-500/20 text-purple-300'
                          }`}>{idea.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mt-2">{idea.outline?.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{new Date(idea.createdAt).toLocaleDateString()}</p>
                        {idea.outline && (
                          <p className="text-gray-400 text-sm mt-3 italic">"{idea.outline.hook}"</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => idea.outline && exportFullOutline(idea.outline)} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all" title="Copiar">📋</button>
                        <button onClick={() => setSavedIdeas(savedIdeas.filter(i => i.id !== idea.id))} className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-all" title="Eliminar">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>Pensamiento × Copywriting × Storytelling = 🔥</p>
          <p className="mt-1">VibeCoding Bootcamp • Frutero Club 🍓</p>
        </div>
      </footer>
    </main>
  );
}
